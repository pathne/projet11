
import '../../index.css'
import React from 'react'

import AccountThumb from '../AccountThumb'

export default function AccountsList() {
  return (
    <React.Fragment>
      <h2 className="sr-only">Accounts</h2>
      <AccountThumb
        name="Argent Bank Checking"
        accountNumber="x8349"
        balance="$2,082.79"
      />
      <AccountThumb
        name="Argent Bank Savings"
        accountNumber="x6712"
        balance="$10,928.42"
      />
      <AccountThumb
        name="Argent Bank Credit Card"
        accountNumber="x8349"
        balance="$184.30"
      />
    </React.Fragment>
  );
}
