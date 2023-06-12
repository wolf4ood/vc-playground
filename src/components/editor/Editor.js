import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

export const Editor = (props) => {
  return (
    <CodeMirror
      value={props.value}
      className={props.className}
      extensions={[json()]}
      theme={okaidia}
      onChange={props.onChange}
    />
  );
};
