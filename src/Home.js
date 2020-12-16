import React, { useState, useEffect } from 'react'   
import axios from 'axios'; 
import AdminDashboard from './AdminDashboard'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Home(props) {  
    const [customers, setcustomer] = useState({ Username: '', Password: ''});  
    const apiUrl = "http://localhost:60671/api/customer/Login";    
    const Login = (e) => {    
            e.preventDefault();    
            debugger;   
            const data = { Username:customers.Username, Password: customers.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);
                if(data.Username=="admin" && data.Password=="admin"){
                    alert("Admin Panel"); 
                        props.history.push('/AdminDashboard')
                }  
               else if (result.data.status == '200')
                    {
                        alert("valid user"); 
                        props.history.push('/CustomerDashboard/'+user.CustomerId) 
                     }     
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setcustomer({...customers, [e.target.name]: e.target.value});    
              }    
    return (  
        
        <div class="container">  
         <div class="row justify-content-center">  
          <div class="col-xl-10 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                 
                  <div class="col-lg-6 d-none d-lg-block bg-login-image">
                    <img src="data:image/jpeg;base64,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"/>
                    </div>  
                  <div class="col-lg-6">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h1 class="h4 text-gray-900 mb-4">Welcome</h1>  
                      </div>   
                      <form onSubmit={Login} class="user">  
                        <div class="form-group">  
                          <input type="text" class="form-control" value={customers.Username} onChange={ onChange }  name="Username" id="email" aria-describedby="emailHelp" placeholder="Username"/>  
                        </div>  
                        <div class="form-group">  
                          <input type="password" class="form-control" value={customers.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"/>  
                        </div>  
                        {/* <div class="form-group">  
                          <div class="custom-control custom-checkbox small">  
                            <input type="checkbox" class="custom-control-input" id="customCheck"/>  
                            <label class="custom-control-label" for="customCheck">Remember Me</label>  
                          </div>  
                        </div> */}  
                        <button type="submit" className="btn btn-info mb-1" block><span>Login</span></button>    
                        <hr/>  
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
           </div>  
             </div>  
            </div>  
           </div>  
         </div>  
        
    )  
}  
  
export default Home