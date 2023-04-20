import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Productdetail from './BTVN1/ProductDetail';
import Admin from './BTVN1/Admin';
import Home from './BTVN1/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={Productdetail} />
        <Route path="/admin" component={Admin} />
      </Routes>
    </Router>
  );
};

export default App;