// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.scss";

const App = () => (
  <main>
    <Helmet titleTemplate="%s | EOS Wallet" defaultTitle="EOS Wallet" />
    <section className="hero header">
      <div className="level is-mobile">
        <div className="level-left">
          <div className="control level-item is-hidden-tablet">
            <button className="button is-primary menu-toggle u-mr1"><span className="icon-menu"></span></button>
          </div>
          <div className="level-item">
            <a href="/">
              <img alt="" className="logo image" src="/images/logo.svg" />
            </a>
          </div>
        </div>
        <div className="user-info">
          <div className="has-text-right is-hidden-mobile">
            <div className="user-meta">
              <h4 className="title is-4 is-spaced">Hi, Display Name</h4>
              <p className="subtitle is-6"><a href="">Customize your profile</a> | <a href=""><span className="icon-logout"></span></a></p>
            </div>
          </div>
          <a className="settings" href=""><span className="icon-settings"></span></a>
          <figure className="image profile-thumbnail">
            <img src="https://avatarfiles.alphacoders.com/696/69632.jpg" alt="Placeholder image" />
          </figure>
        </div>
      </div>
    </section>
    <section className="columns is-variable is-0">
      <div className="column is-narrow is-hidden-mobile">
        <aside className="menu p-lg">
          <div className="-is-logged-in">
            <div className="financials u-p3">
              <p className="title is-1 balance">2.34<span>B</span></p>
              <p className="subtitle is-6 full-balance">1,000,000.0080</p>
              <span className="tag is-primary change"><span className="icon-increase"></span>27,600</span>
            </div>
            <ul className="menu-list">
              <li>
                <a href="/" className="is-active"><span className="icon-transfer"></span> Transfer</a>
              </li>
              <li>
                <a href="/transactions"><span className="icon-history"></span> Transaction History</a>
              </li>
              <li>
                <a href="/permissions"><span className="icon-permissions"></span> Permission</a>
              </li>
              <li>
                <a href="/"><span className="icon-logout"></span> Logout</a>
              </li>
            </ul>
          </div>
          <ul className="menu-list">
            <li>
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="column">
        <div className="menu-closer" role="button" tabIndex="0" />
        <div className="columns is-desktop content is-variable is-6">
          <div className="column is-7-desktop is-12-tablet">
            <section className="u-mb6">
              <h2 className="title is-2">Transfer</h2>
              <p>Move funds to another EOS account.</p>
              <form>
                <div className="field">
                  <label className="label" htmlFor="to">To</label>
                  <div className="control">
                    <input type="text" name="to" className="input" />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor="amount">Amount<p className="help"><a>Use Full Balance</a></p></label>
                  <div className="control">
                    <input type="text" name="amount" className="input" />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor="memo">Memo</label>
                  <div className="control">
                    <input type="text" name="memo" className="input" />
                  </div>
                </div>
                <div className="field is-grouped u-mt4">
                  <div className="control">
                    <button className="button is-large is-primary">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-large is-secondary">Clear</button>
                  </div>
                </div>
              </form>
            </section>
            <section>
              <h3 className="title is-3">Transaction History<p className="help"><a>See All</a></p></h3>
              <ul>
                <li className="level box is-mobile">
                  <div className="level-left">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">May</p>
                        <p className="title">11</p>
                      </div>
                    </div>
                    <div className="level-item">
                      <img className="image" src="/images/male_2.jpg" />
                    </div>
                    <div className="level-item">
                      <p className="subtitle is-6"><a>Brian Dawson</a></p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <p className="subtitle is-6">$10.00</p>
                    </div>
                    <div className="level-item">
                      <span className="icon-transfer_to"></span>
                    </div>
                  </div>
                </li>
                <li className="level box is-mobile">
                  <div className="level-left">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Jul</p>
                        <p className="title">25</p>
                      </div>
                    </div>
                    <div className="level-item">
                      <img className="image" src="/images/male_2.jpg" />
                    </div>
                    <div className="level-item">
                      <p className="subtitle is-6"><a>Brian Dawson</a></p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <p className="subtitle is-6">$10.00</p>
                    </div>
                    <div className="level-item">
                      <span className="icon-transfer_from"></span>
                    </div>
                  </div>
                </li>
                <li className="level box is-mobile">
                  <div className="level-left">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Sep</p>
                        <p className="title">6</p>
                      </div>
                    </div>
                    <div className="level-item">
                      <img className="image" src="/images/male_2.jpg" />
                    </div>
                    <div className="level-item">
                      <p className="subtitle is-6"><a>Brian Dawson</a></p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <p className="subtitle is-6">$10.00</p>
                    </div>
                    <div className="level-item">
                      <span className="icon-transfer_to"></span>
                    </div>
                  </div>
                </li>
                <li className="level box is-mobile">
                  <div className="level-left">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Dec</p>
                        <p className="title">14</p>
                      </div>
                    </div>
                    <div className="level-item">
                      <img className="image" src="/images/male_2.jpg" />
                    </div>
                    <div className="level-item">
                      <p className="subtitle is-6"><a>Brian Dawson</a></p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <p className="subtitle is-6">$10.00</p>
                    </div>
                    <div className="level-item">
                      <span className="icon-transfer_from"></span>
                    </div>
                  </div>
                </li>
                <li className="level box is-mobile">
                  <div className="level-left">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">May</p>
                        <p className="title">19</p>
                      </div>
                    </div>
                    <div className="level-item">
                      <img className="image" src="/images/male_2.jpg" />
                    </div>
                    <div className="level-item">
                      <p className="subtitle is-6"><a>Brian Dawson</a></p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <p className="subtitle is-6">$10.00</p>
                    </div>
                    <div className="level-item">
                      <span className="icon-transfer_to"></span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="control u-mt4">
                <button className="button is-large is-primary">View All</button>
              </div>
            </section>
          </div>
          <div className="column is-5-desktop is-12-tablet">
            <section className="section">
              <h5 className="title is-5">What are EOS tokens?</h5>
              <div className="box">
                EOS tokens are ERC-20 compatible tokens distributed on the
                Ethereum blockchain pursuant to a related ERC-20 smart
                contract (the “EOS Tokens”).
              </div>
            </section>
            <section className="section">
              <h5 className="title is-5">How can I use EOS tokens?</h5>
              <div className="box">
                block.one is building the EOS.IO Software but it will not
                configure and/or launch any public blockchain platform
                adopting the open source EOS.IO Software (the “EOS
                Platform”). Any launch of an EOS Platform will occur by
                members of the community unrelated to block.one. Third
                parties launching the EOS Platform may delete, modify or
                supplement the EOS.IO Software prior to, during or after
                launching the EOS Platform.
              </div>
            </section>  
          </div>
        </div>
        <footer>
          <div className="columns u-pt2 is-variable is-3">
            <div className="column has-text-left-tablet has-text-centered-mobile">
              <p>Copyright 2017 | All Rights Reserved</p>
            </div>
            <div className="column has-text-right-tablet has-text-centered-mobile">
              <a href="/privacy">Privacy Policy</a>
              <span> | </span>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </main>
);

export default App;
