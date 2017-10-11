import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h2>Transfer</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="section">
                <p>Move funds to another EOS account.</p>
                <div className="form-group">
                  <label htmlFor="to">To</label>
                  <input type="text" className="form-control form-control-lg" id="to" aria-describedby="to" />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <input type="text" className="form-control form-control-lg" id="amount" aria-describedby="amount" />
                  <small className="form-text text-muted"><a>Balance: 0.000 EOS</a></small>
                </div>
                <div className="form-group">
                  <label htmlFor="memo">Email address</label>
                  <input type="text" className="form-control form-control-lg" id="memo" aria-describedby="emailHelp" placeholder="0.000" />
                </div>
                <button type="button" className="btn btn-primary btn-lg">Submit</button>
                <button type="button" className="btn btn-secondary btn-lg">Clear</button>
              </div>
              <div className="section">
                <h3>Transaction History</h3>
                <ul>
                  <li>test 1</li>
                  <li>test 2</li>
                  <li>test 3</li>
                  <li>test 4</li>
                  <li>test 5</li>
                  <li>test 6</li>
                </ul>
              </div>
            </div>
            <div className="col-5">
              <h5>What are EOS tokens?</h5>
              <div className="module">
                <p>
                                EOS tokens are ERC-20 compatible tokens distributed on the Ethereum blockchain pursuant to a related ERC-20 smart contract (the “EOS Tokens”).
                </p>
              </div>
              <h5>How can I use EOS tokens?</h5>
              <div className="module">
                <p>
                                block.one is building the EOS.IO Software but it will not configure and/or launch any public blockchain platform adopting the open source EOS.IO Software (the “EOS Platform”). Any launch of an EOS Platform will occur by members of the community unrelated to block.one. Third parties launching the EOS Platform may delete, modify or supplement the EOS.IO Software prior to, during or after launching the EOS Platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
