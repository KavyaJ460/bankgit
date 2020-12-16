import React, { useState,useEffect,Component } from 'react';
import './App.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import View from './View';
import AddBen from './AddBen';
import ViewBen from './ViewBen';
import Transaction from './Transaction';
import MyTransact from './MyTransact';
import userEvent from '@testing-library/user-event';
//class CustomerDashboard extends Component {
function CustomerDashboard() {

  const [user, setuser] = useState({ CustomerId: ''});
  useEffect(() => {  
    var a = localStorage.getItem('myData');  
    var b = JSON.parse(a);  
    console.log(b.FirstName);  
    setuser(b)  
    console.log(user.CustomerId)  
    
    document.getElementById('lin').style.display="none";
   document.getElementById('lin1').style.display="none";
   document.getElementById('lin2').style.display="none";
    document.getElementById('lin3').style.display="none";
     document.getElementById('lout').style.display="block";

}, []); 
  // componentDidMount(){
  //   document.getElementById('lin').style.display="none";
  //   document.getElementById('lin1').style.display="none";
  //   document.getElementById('lin2').style.display="none";
  //   //document.getElementById('adm').style.display="block";
  //   document.getElementById('lout').style.display="block";

  // }
    //render() {
        return (
            <Router>    
            {/* <div className="container">     */}
            <nav className="navbar navbar-expand-sm bg-light navbar-light">    
                <div className="collapse navbar-collapse" >  
                <ul class="navbar-nav mr-auto">  
                   
                      
                    <li className="nav-item bg-light">    
                      <Link to={'/View/'+user.CustomerId} className="nav-link">My Profile</Link>    
                    </li>
                    <li className="nav-item bg-light">    
                      <Link to={'/AddBen'} className="nav-link">Send Money</Link>    
                    </li> 
                       
                    <li className="nav-item bg-light">    
                      <Link to={'/Transaction'} className="nav-link">ATM Simulator</Link>    
                    </li>  
                    <li className="nav-item bg-light">    
                      <Link to={'/ViewBen/'+user.CustomerId} className="nav-link">Beneficiaries</Link>    
                    </li> 
                    <li className="nav-item bg-light">    
                      <Link to={'/MyTransact/'+user.CustomerId} className="nav-link">My Transactions</Link>    
                    </li>  
                  </ul>  
                  </div>    
              </nav> <br />   
                {/* </div>    
              </nav> <br />     */}
              <Switch>    
                {/* <Route  path='/AddCustomer' component={AddCustomer} />     */}
                
                <Route path='/View/:id' component={View} /> 
                <Route path='/AddBen' component={AddBen} /> 
                <Route path='/ViewBen/:id' component={ViewBen} />   
                <Route path='/Transaction' component={Transaction} /> 
                <Route path='/MyTransact/:id' component={MyTransact} />     
              </Switch>    
              {/* <Switch>  
              <Route path='/AdminDashboard' component={AdminDashboard} />    
              </Switch>   */}
              
          </Router>   
        );
    //}
}
export default CustomerDashboard;