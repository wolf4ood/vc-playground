import { Ed25519Signature2020 } from "@digitalbazaar/ed25519-signature-2020";
import { JWSignature2020 } from "../suite/JWSignature2020";
const vc = require("@digitalbazaar/vc");
const { defaultDocumentLoader } = vc;
const { extendContextLoader } = require("jsonld-signatures");

export const validate = async (credential, providedContext) => {
  const suite = new Ed25519Signature2020();
  const jws = new JWSignature2020();

  return await vc.verifyCredential({
    credential: credential,
    suite: [suite, jws],
    documentLoader: documentLoader(providedContext),
  });
};

export const validatePresentation = async (presentation, providedContext) => {
  const suite = new Ed25519Signature2020();
  const jws = new JWSignature2020();

  return await vc.verify({
    presentation: presentation,
    challenge: presentation.proof.challenge,
    suite: [suite, jws],
    documentLoader: documentLoader(providedContext),
  });
};

const documentLoader = (providedcontext) => {
  let ctx = Object.assign({}, providedcontext);
  return extendContextLoader(async (url) => {
    if (ctx[url] != null) {
      return {
        contexturl: null,
        documenturl: url,
        document: ctx[url],
      };
    }
    return defaultDocumentLoader(url);
  });
};
