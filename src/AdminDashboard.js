import React, { Component } from 'react';
import './App.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import AddCustomer from './AddCustomer';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import ViewCustomer from './ViewCustomer';
import EditCustomer from './EditCustomer';
import AddNews from './AddNews';
import AdminHome from './AdminHome';
class AdminDashboard extends Component {
  
  componentDidMount(){
     document.getElementById('lin').style.display="none";
       document.getElementById('lin1').style.display="none";
       document.getElementById('lin2').style.display="none";
       document.getElementById('lin3').style.display="none";
        document.getElementById('lout').style.display="block";
}
    render() {

        return (
         
            <Router> 
              {/* <h5>Welcome Admin</h5>    */}
            {/* <div className="container">      */}
              <nav className="navbar navbar-expand-sm bg-light navbar-light">    
                <div className="collapse navbar-collapse" >    
                  <ul className="navbar-nav mr-auto">   
                  <li className="nav-item">    
                      <Link to={'/AdminHome'} className="nav-link">Home</Link>    
                    </li>  
                    <li className="nav-item">    
                      <Link to={'/AddCustomer'} className="nav-link">AddCustomer</Link>    
                    </li>    
                    <li className="nav-item">    
                      <Link to={'/ViewCustomer'} className="nav-link">My Customers</Link>    
                    </li> 
                    <li className="nav-item">    
                      <Link to={'/AddNews'} className="nav-link">Post News</Link>    
                    </li>  
                  </ul>    
                </div>    
              </nav> <br />    
              <Switch>    
              <Route  path='/AdminHome' component={AdminHome} /> 
                <Route  path='/AddCustomer' component={AddCustomer} />    
                <Route path='/ViewCustomer' component={ViewCustomer} />
                <Route path='/EditCustomer/:id' component={EditCustomer} />
                <Route path='/AddNews' component={AddNews} />
              
              </Switch>    
              {/* <Switch>  
              <Route path='/AdminDashboard' component={AdminDashboard} />    
              </Switch>   */}
            {/* </div>     */}
          </Router>   
        );
    }
}
export default AdminDashboard;