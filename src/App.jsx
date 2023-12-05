// src/App.jsx

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
