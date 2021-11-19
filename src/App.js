import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Allcars from './AllCars/Allcars';
import './App.css';
import AddComment from './Components/Comments/AddComment/AddComment';
import Footer from './Components/Comments/Footer/Footer';
import Dashbord from './Components/Dashbord/Dashbord';
import SingleDetails from './Components/Home/Cars/SingleDetails/SingleDetails/SingleDetails';
import Home from './Components/Home/Home/Home';
import Addproduct from './Components/ManageAllOrder/AddProduct/Addproduct';
import ManageAllOrder from './Components/ManageAllOrder/ManageAllOrder';
import MyOrder from './Components/MyOrder/MyOrder';
import NotFound from './Components/NotFound/NotFound';
import Order from './Components/Order/Order/Order';
import Registration from './Components/Registration/Registration';
import Navigation from './Components/Shared/Navigation/Navigation';
import AuthProvider from './Context/AuthProvider';
import Login from './Login/Login';
import PrivateRoute from './PrivateRouter/PrivateRouter';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/singleCart/:id">
              <SingleDetails></SingleDetails>
            </PrivateRoute>
            <PrivateRoute path="/allCars">
              <Allcars></Allcars>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/dashbord">
              <Dashbord></Dashbord>
            </Route>
            <PrivateRoute path="/manageallOrders">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <Route path="/addcomment">
              <AddComment></AddComment>
            </Route>
            <Route path="/addproduct">
              <Addproduct></Addproduct>
            </Route>
            <PrivateRoute path="/order/:id">
              <Order></Order>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
