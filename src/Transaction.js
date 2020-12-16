import React, { useState } from 'react'  
import axios from 'axios';  
//import './Transact.css';
function Transaction(props) {  
  const [data, setdata] = useState({ Time:'',Remarks:'',Mode:'',Amount:'',CustomerId:''})  
  const apiUrl = "http://localhost:60671/api/Transaction/NewTransaction";  
  const Transact = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = {Remarks:data.Remarks, Mode: data.Mode, Amount: data.Amount,CustomerId:data.CustomerId};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Error')  
          alert('Low Balance');  
        else  
        {
          alert('Transaction Successfull')
          props.history.push('/MyTransact')  
        }
          
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  

  
  return (  
    <div class="container">  
       <div class="nav justify-content-center">
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4"><b>ATM Simulator </b></h1>  
                </div>  
                <form onSubmit={Transact} class="text-center">  
                
                  <div class="form-group row">  
                  
                  
                  <div class="text-center">
                  <div class="col-sm-10" id="grp">  
                  <div class="form-group">
                                    
                                    <select class="form-control" name="Mode" id="Status"  value={Transaction.Mode} onChange={ onChange }> 
                                    <option>Debit</option>
                                      <option>Credit</option>
                                      </select>    
                   </div>
                  <div class="form-group" >  
                  <input type="text" name="Remarks" onChange={onChange} value={data.Remarks} class="form-control" placeholder="Remarks" />  
                  </div>
                  <div class="form-group">  
                    <input type="number" name="Amount" onChange={onChange} value={data.Amount} class="form-control"  placeholder="Amount in Rs" />  
                  </div> 
                  <div class="form-group">  
                    <input type="text" name="CustomerId" onChange={onChange} value={data.CustomerId} class="form-control"  placeholder="Customer ID" />  
                  </div>  
                  </div>  
                  </div>
                  </div>  
                   
                  
                    

                  
                  <hr />  
                  <button type="submit" class="btn btn-primary  btn-block text-center">  
                    Enter 
                </button>  
                
                </form>  
                <hr />  
                </div>
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  export default Transaction