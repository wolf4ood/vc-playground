
import { Success } from "./ok";
import { Error } from "./error";

export const Result = ({result}) => {
  let message;
  if (result.verified != null) {
    if (result.verified === true) {
      message = <Success msg="Verifiable credentials verified" />;
    } else {
      let errors = result.results.map((r) => r.error.message).join(",");
      let msg = `Failed to verify credentials: ${errors}`;
      message = <Error msg={msg} />;
    }
  } else {
    message = <div />;
  }
  return (message);
}
