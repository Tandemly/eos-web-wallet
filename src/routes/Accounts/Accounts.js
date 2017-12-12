import * as React from "react";
import { Helmet } from "react-helmet";
import EOSAccount from "../../components/EOSAccount";
import { AppNotifications as Notifications } from "../../components/Notification";
import ConnectOrCreateEOSAccount from "./ConnectOrCreateEOSAccount";

type Props = {
  eosAccountName: ?string,
  onConnect: () => mixed,
  onCreate: () => mixed
};

const Accounts = ({ eosAccountName, onConnect, onCreate }: Props) => (
  <div>
    <Helmet>
      <title>EOS Account</title>
    </Helmet>
    <div className="content">
      <Notifications />
      <h2 className="title is-2">Connect Accounts</h2>
      {eosAccountName ? (
        <EOSAccount />
      ) : (
        <ConnectOrCreateEOSAccount onConnect={onConnect} onCreate={onCreate} />
      )}
    </div>
  </div>
);

export default Accounts;
