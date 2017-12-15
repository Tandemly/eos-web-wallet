import * as React from "react";
import Button from "../../components/Button";

type Props = {
  onConnect: () => mixed,
  onCreate: () => mixed
};

const ConnectOrCreateEOSAccount = ({ onConnect, onCreate }: Props) => (
  <article>
    <h3>EOS</h3>
    <p>
      Connect an EOS account by either logging into an existing account or
      creating a new account.
    </p>
    <div className="field is-grouped">
      <div className="control login-button">
        <Button
          className="button is-large is-primary"
          type="button"
          onClick={onConnect}
          text="Connect EOS Account"
        />
      </div>
      <div className="control cancel-button">
        <Button
          className="button is-large is-primary is-outlined"
          onClick={onCreate}
          text="Create an Account"
        />
      </div>
    </div>
  </article>
);

export default ConnectOrCreateEOSAccount;
