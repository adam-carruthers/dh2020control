import React, { useState } from 'react';

import AccountList from './components/AccountList';
import './App.css';

// checklist of content to display which is editable
let DUMMY_DATA = [
	'account0',
	'account1',
	'account2'
];

const App = () => {
	const [accounts, setAccounts] = useState(DUMMY_DATA);

	const addAccountHandler = () => {
		const newAccount = document.querySelector('#newAccount');
		setAccounts([...accounts, newAccount.value]);
		
		newAccount.value = '';
	}
	
	const removeAccountHandler = (i) => {
		const currentAccounts = [...accounts];

		currentAccounts.splice(i, 1);
		setAccounts(currentAccounts);
	}

	return (
		<div className="App">
			<AccountList 
				accounts={accounts}
				onClick={removeAccountHandler}
			/>

			<input type="text" id="newAccount" />
			<button onClick={addAccountHandler}>Add account</button>
		</div>
	);
}

export default App;
