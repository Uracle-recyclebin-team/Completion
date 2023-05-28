import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import Header from './Header';*/
import Main from './main/main';
import Building from './building/building';
import Phone from './phone/phone';
import Welcome from './welcome/welcome';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				{/*<Header />*/}
				<Routes>
					<Route path="/" element={<Welcome />}></Route>
					<Route path="/main/*" element={<Main />}></Route>
                    <Route path="/building/*" element={<Building />}></Route>
                    <Route path="/phone/*" element={<Phone />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;