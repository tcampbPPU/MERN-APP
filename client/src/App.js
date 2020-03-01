import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import { About } from './components/about/About';
import { Settings } from './components/settings/Settings';


function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Navbar />
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" exact component={About} />
          <Route path="/settings" exact component={Settings} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
