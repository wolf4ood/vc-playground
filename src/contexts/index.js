import CredentialExample from "./w3c-credentials-example-v1.json";
import Credential from "./w3c-credentials-v1.json";
import Did from "./did-v1.json";
import Odrl from "./odrl.json";
import Ed25519 from "./sec-ed25519-2020-v1.json";
import Jws2020 from "./sec-jws-2020-v1.json";

const defaultContexts = {
  "https://www.w3.org/2018/credentials/examples/v1": CredentialExample,
  "https://www.w3.org/2018/credentials/v1": Credential,
  "https://www.w3.org/ns/did/v1": Did,
  "https://w3id.org/security/suites/jws-2020/v1": Jws2020,
  "https://w3id.org/security/suites/ed25519-2020/v1": Ed25519,
  "https://www.w3.org/ns/odrl.jsonld": Odrl,
};

export const contexts = () => {
  let storedContext = localStorage.getItem("playgroundCtx");
  let initialCtx;
  if (storedContext != null) {
    initialCtx = JSON.parse(storedContext);
  } else {
    initialCtx = Object.assign({}, defaultContexts);
  }
  return initialCtx;
};

export const saveContexts = (ctx) => {
    localStorage.setItem("playgroundCtx", JSON.stringify(ctx));
}
