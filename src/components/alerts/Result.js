import { Success } from "./ok";
import { Error } from "./error";

export const Result = ({ result, onClose }) => {
  let message;
  if (result.verified != null) {
    if (result.verified === true) {
      message = <Success onClose={onClose} msg="Verifiable credentials verified" />;
    } else {
      let errors;
      if (result.results) {
        errors = result.results.map((r) => r.error.message).join(",");
      } else if (result.error) {
        errors = result.error.errors.map((r) => r.message).join(",");
      } else {
        errors = "unknown";
      }

      let msg = `Failed to verify credentials: ${errors}`;
      message = <Error onClose={onClose} msg={msg} />;
    }
  } else {
    message = <div />;
  }
  return message;
};
