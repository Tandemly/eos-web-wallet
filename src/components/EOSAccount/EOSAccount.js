import React from "react";
import Button from "components/Button";
import Notification from "components/Notification";
import { CopyToClipboard } from "react-copy-to-clipboard";

const EOSAccount = ({
  accountName,
  ownerKeys,
  activeKeys,
  onDisconnect,
  onCopy
}) => (
  <article>
    <h3>EOS</h3>
    <div className="box double">
      <Notification
        text="Your keys should be copied and stored offline for security"
        status="warn"
      />
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <label className="label">Username:</label>
            <p className="tertitle">{accountName}</p>
          </div>
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <label className="label">Active Key (Public):</label>
            <p className="tertitle">{activeKeys && activeKeys.publicKey}</p>
          </div>
        </div>
        <div className="column is-narrow">
          <CopyToClipboard
            text={activeKeys.publicKey}
            onCopy={() => onCopy("Active Key (Public)")}
          >
            <Button className="is-small is-primary" text="Copy Key" />
          </CopyToClipboard>
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <label className="label">Active Key (Private):</label>
            <p className="tertitle">{activeKeys && activeKeys.privateKey}</p>
          </div>
        </div>
        <div className="column is-narrow">
          <CopyToClipboard
            text={activeKeys.privateKey}
            onCopy={() => onCopy("Active Key (Private)")}
          >
            <Button className="is-small is-primary" text="Copy Key" />
          </CopyToClipboard>
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <label className="label">Owner Key (Public):</label>
            <p className="tertitle">{ownerKeys && ownerKeys.publicKey}</p>
          </div>
        </div>
        <div className="column is-narrow">
          <CopyToClipboard
            text={ownerKeys.publicKey}
            onCopy={() => onCopy("Owner Key (Public)")}
          >
            <Button className="is-small is-primary" text="Copy Key" />
          </CopyToClipboard>
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <label className="label">Owner Key (Private):</label>
            <p className="tertitle">{ownerKeys && ownerKeys.privateKey}</p>
          </div>
        </div>
        <div className="column is-narrow">
          <CopyToClipboard
            text={ownerKeys.privateKey}
            onCopy={() => onCopy("Owner Key (Private)")}
          >
            <Button className="is-small is-primary" text="Copy Key" />
          </CopyToClipboard>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field u-mt3">
            <div className="control">
              <Button
                className="is-large is-primary is-outlined"
                onClick={onDisconnect}
                text="Disconnect"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default EOSAccount;
