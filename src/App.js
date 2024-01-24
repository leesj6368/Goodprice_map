import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Main from './components/Main';
import Map from './components/Map';
import Detail from './components/Detail';


const App = () => {
  return (
    <Router>
      {/* 부모 컨테이너 추가 */}
      <div className="navbar-container">
      <div className="website-name">🍽️우리동네 착한가격업소🍽️</div>
        <NavigationBar />
      </div>

      <Route path="/" exact component={Main} />
      <Route path="/map" component={Map} />
      <Route path="/detail" component={Detail} />
    </Router>
  );
};

export default App;
