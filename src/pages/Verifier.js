import { useState } from "react";
import { Result } from "../components/alerts/Result";
import { Info } from "../components/alerts/Info";
import { contexts } from "../contexts";
import { CredentialEditor } from "../components/editor/Credential";
import { Link } from "react-router-dom";

export const Verifier = () => {
  const [errors, setErrors] = useState({});
  const editorsClass = "h-65vh";

  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-row w-3/4 mx-auto mt-5 justify-center">
        <Info>
          The VC playouground supports cryptosuite &nbsp;
          <a
            href="https://w3c.github.io/cg-reports/credentials/CG-FINAL-di-eddsa-2020-20220724/"
            className="link"
          >
            Ed25519Signature2020
          </a>
          &nbsp; and &nbsp;
          <a
            href="https://w3c.github.io/cg-reports/credentials/CG-FINAL-lds-jws2020-20220721/"
            className="link"
          >
            JsonWebSignature2020
          </a>
          &nbsp; for verification.
          <br />
          The playground does not load remote `@context` or url. Additional
          contexts or cached documents can be added{" "}
          <Link to="/contexts" className="link">
            here.
          </Link>
          <br />
        </Info>
      </div>
      <div className="flex flex-col w-3/4 mx-auto py-5">
        <CredentialEditor
          className={editorsClass}
          contexts={contexts()}
          onError={setErrors}
        />
      </div>
      <div className="flex flex-row w-3/4 mx-auto justify-center">
        <Result onClose={() => setErrors({})} result={errors} />
      </div>
    </div>
  );
};
