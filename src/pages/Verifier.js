import { useState } from "react";
import { Result } from "../components/alerts/Result";
import { contexts } from "../contexts";
import { CredentialEditor } from "../components/editor/Credential";

export const Verifier = () => {
  const [errors, setErrors] = useState({});
  const editorsClass = "h-65vh";

  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col w-3/4 mx-auto py-5 h-80vh">
        <CredentialEditor
          className={editorsClass}
          contexts={contexts()}
          onError={setErrors}
        />
      </div>
      <div className="flex flex-row w-3/4 mx-auto mt-10 justify-center">
        <Result onClose={() => setErrors({})} result={errors} />
      </div>
    </div>
  );
};
