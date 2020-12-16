import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';

function AddBen(props) {  
  const [data, setdata] = useState({ Firstname: '',Lastname:'',AccountNum:'',Email:'',Amount:'',Phone:'',CustomerId:''})  
  const apiUrl = "http://localhost:60671/api/beneficiary/RegisterBeneficiary";  
  const Registration = (e) => {  
    console.log(e)
    //e.preventDefault();  
    debugger;  
    const data1 = { Firstname: data.Firstname,Lastname:data.Lastname,AccountNum:data.AccountNum,Email:data.Email,  Amount: data.Amount, Phone: data.Phone,CustomerId:data.CustomerId};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
        {
          alert('Beneficiary Added!')
          props.history.push('/ViewBen')  
        }
          
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  const {register,handleSubmit,errors}=useForm();
  return (  
    <div class="container">  
      <div class="row">  
        {/* <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>   */}
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4"><b>Fill in Beneficiary details </b></h1>  
                </div>  
                <form onSubmit={handleSubmit(Registration)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Firstname" onChange={onChange} value={data.Firstname} class="form-control" id="exampleFirstName" placeholder="Firstname" ref={register({required:true, maxLength:20,minLength:2})}/>  
                      {errors.Firstname && errors.Firstname.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Firstname && errors.Firstname.type==="minLength" &&(<p id="err">min length is 2</p>)}
                      {errors.Firstname && errors.Firstname.type==="maxLength" &&(<p id="err">max length is 20</p>)}
                   
                    </div>  
                    <br/>
                    <br/>
                    <div class="col-sm-6">  
                    <input type="text" name="Lastname" onChange={onChange} value={data.Lastname} class="form-control" id="exampleInputEmail" placeholder="Lastname" ref={register({required:true, maxLength:2,minLength:1})} />  
                    {errors.Lastname && errors.Lastname.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Lastname && errors.Lastname.type==="minLength" &&(<p id="err">min length is 1</p>)}
                      {errors.Lastname && errors.Lastname.type==="maxLength" &&(<p id="err">max length is 2</p>)}
                  </div>  
                  <br/>
                  <br/>
                  <div class="col-sm-6">  
                    <input type="text" name="AccountNum" onChange={onChange} value={data.AccountNum} class="form-control" id="exampleInputEmail" placeholder="Account Number" ref={register({required:true, maxLength:4,minLength:4})}/>  
                    {errors.AccountNum && errors.AccountNum.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.AccountNum && errors.AccountNum.type==="minLength" &&(<p id="err">min length is 4</p>)}
                      {errors.AccountNum && errors.AccountNum.type==="maxLength" &&(<p id="err">max length is 4</p>)}
             
                  </div>  
                 
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleInputEmail" placeholder="Email" ref={register({required:true})} />  
                    {errors.Email && errors.Email.type==="required"&& (<p id="err">Required</p>)}
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Amount" onChange={onChange} value={data.Amount} class="form-control" id="exampleInputEmail" placeholder="Amount in Rs" />  
                  </div>
                  <div class="form-group">  
                    <input type="text" name="Phone" onChange={onChange} value={data.Phone} class="form-control" id="exampleInputEmail" placeholder="Phone" ref={register({required:true, maxLength:10,minLength:10})} />  
                 {errors.Phone && errors.Phone.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Phone && errors.Phone.type==="minLength" &&(<p id="err">min length is 10</p>)}
                      {errors.Phone && errors.Phone.type==="maxLength" &&(<p id="err">max length is 10</p>)}
                  </div>  
                    

                  
                  <div class="form-group">  
                    <input type="text" name="CustomerId" onChange={onChange} value={data.CustomerId} class="form-control" id="exampleInputEmail" placeholder="Customer ID" />  
                  </div>  
                  <button type="submit" class="btn btn-primary  btn-block text-center">  
                    Register  
                </button>  
                  <hr />  
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
  
export default AddBen