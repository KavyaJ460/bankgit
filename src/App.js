import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import AdminDashboard from './AdminDashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import CustomerDashboard from './CustomerDashboard' ;
import ViewNews from './ViewNews';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Front from './Front';
const box = {
  color: "white",
  fontSize: '23px'
  
}

const shadow = {
  background: "black",
  boxShadow: "1px 1px 1px 1px #cccd"
  
}

function App() {
  return (
    
    <Router>    
       {/* <div style={Object.assign({}, box, shadow)}>
         <h1>PROJECTWORLD BANK</h1>
        
        
      </div> */}
     
          {/* <div className="container">     */}
            <nav className="navbar navbar-expand-sm bg-primary navbar-light">    
              <div className="collapse navbar-collapse" >    
                <ul className="navbar-nav mr-auto">   
                <li className="nav-item">    
                 <b>   <Link to={'/AboutUs'} className="nav-link" >PROJECTWORLD BANK</Link>   </b> 
                  </li>   
                  {/* <li className="nav-item">    
                    <Link to={'/Front'} className="nav-link" style={{display:"block"}} id="lin2" >Home</Link>  

                  </li>  */}
                  <li className="nav-item">    
                    <Link to={'/Home'} className="nav-link" style={{display:"block"}} id="lin2" >Home</Link>    
                  </li>    
                  <li className="nav-item">    
                    <Link to={'/ViewNews'} className="nav-link" style={{display:"block"}} id="lin">News</Link>    
                  </li>  
                  <li className="nav-item">    
                    <Link to={'/AboutUs'} className="nav-link" style={{display:"block"}} id="lin1">About Us</Link>    
                  </li>    
                  <li className="nav-item">    
                    <Link to={'/ContactUs'} className="nav-link" style={{display:"block"}} id="lin3" >Contact Us</Link>    
                  </li>  
                  <li class="nav-item">
        <Link to={'/Home'} class="nav-link" style={{display:"none"}} id="lout"><b>Logout</b></Link>
      </li>  
                </ul>    
              </div>    
            </nav>    
            <Switch>    
            <Route path='/AboutUs' component={AboutUs} />
              <Route exact path='/Home' component={Home} />    
              <Route path='/ViewNews' component={ViewNews} /> 
              <Route path='/AboutUs' component={AboutUs} /> 
              <Route path='/ContactUs' component={ContactUs} />    
              {/* <Route path='/' component={Front} /> */}
            </Switch>    
            <Switch>  
            <Route path='/AdminDashboard' component={AdminDashboard} /> 
            <Route path='/CustomerDashboard' component={CustomerDashboard} />    
            </Switch>  
          {/* </div>   */}

         
        </Router>   
  );
}

export default App;
