import jsigs from "jsonld-signatures";
import { Ed25519VerificationKey2020 } from "@digitalbazaar/ed25519-verification-key-2020";
import { JsonWebKey } from "@transmute/json-web-signature";

const {
  suites: { LinkedDataSignature },
} = jsigs;

const SUITE_CONTEXT_URL = "https://w3id.org/security/suites/jws-2020/v1";

export class JWSignature2020 extends LinkedDataSignature {
  constructor(params) {
    super({
      type: "JsonWebSignature2020",
      contextUrl: "https://w3id.org/security/suites/jws-2020/v1",
      LDKeyClass: Ed25519VerificationKey2020,
    });
  }

  async getVerificationMethod({ proof, documentLoader }) {
    if (this.key) {
      // This happens most often during sign() operations. For verify(),
      // the expectation is that the verification method will be fetched
      // by the documentLoader (below), not provided as a `key` parameter.
      return this.key.export({ publicKey: true });
    }

    let { verificationMethod } = proof;

    if (typeof verificationMethod === "object") {
      verificationMethod = verificationMethod.id;
    }

    if (!verificationMethod) {
      throw new Error('No "verificationMethod" found in proof.');
    }

    const { document } = await documentLoader(verificationMethod);

    verificationMethod =
      typeof document === "string" ? JSON.parse(document) : document;

    await this.assertVerificationMethod({ verificationMethod });
    return verificationMethod;
  }

  async verifySignature({ verifyData, verificationMethod, proof }) {
    const key = await JsonWebKey.from(verificationMethod);

    let verifier = key.verifier();

    return await verifier.verify({ data: verifyData, signature: proof.jws });
  }

  async assertVerificationMethod({ verificationMethod }) {
    let contextUrl;
    if (verificationMethod.type === "JsonWebKey2020") {
      contextUrl = SUITE_CONTEXT_URL;
    } else {
      throw new Error(`Unsupported key type "${verificationMethod.type}".`);
    }
    if (
      !_includesContext({
        document: verificationMethod,
        contextUrl,
      })
    ) {
      // For DID Documents, since keys do not have their own contexts,
      // the suite context is usually provided by the documentLoader logic
      throw new TypeError(
        `The verification method (key) must contain "${contextUrl}" context.`
      );
    }

    // ensure verification method has not been revoked
    if (verificationMethod.revoked !== undefined) {
      throw new Error("The verification method has been revoked.");
    }
  }
}

function _includesContext({ document, contextUrl }) {
  const context = document["@context"];
  return (
    context === contextUrl ||
    (Array.isArray(context) && context.includes(contextUrl))
  );
}
