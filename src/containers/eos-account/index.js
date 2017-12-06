import withAccountName from "./with-eos-account-name";
import withAccountKeys from "./with-eos-account-keys";

export const withEOSAccountName = withAccountName;
export const withEOSAccountKeys = withAccountKeys;

export default component => withEOSAccountKeys(withEOSAccountName(component));
