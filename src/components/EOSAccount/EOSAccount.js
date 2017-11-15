//@flow
import React from "react";
import { Helmet } from "react-helmet";
import Button from "components/Button";
import Notification from "components/Notification";
import type { KeyPair } from "../../redux-modules/eos-account/types";

type Props = {
  accountName: string,
  ownerKeys: KeyPair,
  activeKeys: KeyPair,
  onDisconnect: () => mixed,
  fakeIt: () => mixed
};

const EOSAccount = ({
  accountName,
  ownerKeys,
  activeKeys,
  onDisconnect,
  fakeIt
}: Props) => (
  <div>
    <Helmet>
      <title>EOS Account</title>
    </Helmet>
    <div className="content">
      <h2 className="title is-2">Connect Accounts</h2>
      <article>
        <h3>EOS</h3>
        <div className="box">
          <div className="columns is-desktop">
            <div className="column">
              <Notification
                text="Your keys should be copied and stored offline for security"
                status="success"
                unsetNotification={fakeIt}
              />
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <div className="field">
                <label className="label">Username:</label>
                <p>{accountName}</p>
              </div>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="field">
                      <label className="label">Active Key (Public):</label>
                      <p>{activeKeys && activeKeys.publicKey}</p>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <Button className="button is-primary" text="Copy Key" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="field">
                      <label className="label">Active Key (Private):</label>
                      <p>{activeKeys && activeKeys.privateKey}</p>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <Button className="button is-primary" text="Copy Key" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="field">
                      <label className="label">Owner Key (Public):</label>
                      <p>{ownerKeys && ownerKeys.publicKey}</p>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <Button className="button is-primary" text="Copy Key" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="field">
                      <label className="label">Owner Key (Private):</label>
                      <p>{ownerKeys && ownerKeys.privateKey}</p>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <Button className="button is-primary" text="Copy Key" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <div className="field">
                <div className="control">
                  <Button
                    className="button is-large is-primary"
                    onClick={onDisconnect}
                    text="Disconnect"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
);

export default EOSAccount;
