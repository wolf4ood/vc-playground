import { Ed25519Signature2020 } from "@digitalbazaar/ed25519-signature-2020";

const vc = require("@digitalbazaar/vc");
const { defaultDocumentLoader } = vc;
const { extendContextLoader } = require("jsonld-signatures");


export const validate = async (credential, providedContext) => {
  let ctx = Object.assign({}, providedContext);
  const documentLoader = extendContextLoader(async (url) => {
    if (ctx[url] != null) {
      return {
        contextUrl: null,
        documentUrl: url,
        document: ctx[url],
      };
    }
    return defaultDocumentLoader(url);
  });
  const suite = new Ed25519Signature2020();
  return await vc.verifyCredential({
    credential: credential,
    suite,
    documentLoader,
  });
};
