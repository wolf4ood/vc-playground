import { contexts, saveContexts } from "../contexts";
import { ContextEditor } from "../components/editor/Context";
import { useState } from "react";

export const Contexts = () => {

  const editorsClass = "h-65vh";

  const [currentContexts, setCurrentContexts] = useState(contexts());

  const onContextChange = (ctx) => {
    saveContexts(ctx);
    setCurrentContexts(ctx);
  };

  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col w-3/4 mx-auto py-5 h-80vh">
        <ContextEditor
          value={currentContexts}
          className={editorsClass}
          onChange={onContextChange}
          visible={true}
        />
      </div>
    </div>
  );
};
