
import './App.css';
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import Header from './components/header';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import AddBlog from './/Blog/addBlog';


function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Header/>
      <Route path={"/home"} component={Home}/>
      <Route path={"/signup"} component={Signup}/>
      <Route path={"/login"} component={Login}/>
      <Route path={"/addBlog"} component={AddBlog}/>
      <Route path={"/"} >
      <Redirect to="/home"/>
      </Route>

     </BrowserRouter>
    </div>
  );
}

export default App;
