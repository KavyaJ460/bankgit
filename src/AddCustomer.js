import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';
function AddCustomer(props) {  
  const [data, setdata] = useState({ Firstname: '',Lastname:'',Username:'', Password: '',Email:'', Phone: '', DateOfBirth: '',Gender:'',AccountNum:'',Pin:'',OpeningBal:'',AadharNum:''})  
  const apiUrl = "http://localhost:60671/api/customer/RegisterCustomer";  
  const Registration = (e) => {  
    console.log(e)
    // e.preventDefault();  
    debugger;  
    const data1 = { Firstname: data.Firstname,Lastname:data.Lastname,Username:data.Username, Password: data.Password,Email:data.Email, Phone: data.Phone,DateOfBirth:data.DateOfBirth,Gender:data.Gender,AccountNum:data.AccountNum,Pin:data.Pin,OpeningBal:data.OpeningBal,AadharNum: data.AadharNum };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
        {
          alert('Customer Added Successfully!')
          props.history.push('/ViewCustomer')  
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
                  <h1 class="h4 text-gray-900 mb-4"><b>Register </b></h1>  
                </div>  
                <form onSubmit={handleSubmit(Registration)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Firstname" onChange={onChange} value={data.Firstname} class="form-control" id="exampleFirstName" placeholder="Firstname" ref={register({required:true, maxLength:20,minLength:2,pattern: /^[A-Za-z]+$/i})} />
                      {errors.Firstname && errors.Firstname.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Firstname && errors.Firstname.type==="minLength" &&(<p id="err">min length is 2</p>)}
                      {errors.Firstname && errors.Firstname.type==="maxLength" &&(<p id="err">max length is 20</p>)}
                    </div>  
                    <br/>
                    <br/>
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="text" name="Lastname" onChange={onChange} value={data.Lastname} class="form-control" id="exampleInputEmail" placeholder="Lastname" ref={register({required:true, maxLength:2,minLength:1})} />  
                    {errors.Lastname && errors.Lastname.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Lastname && errors.Lastname.type==="minLength" &&(<p id="err">min length is 1</p>)}
                      {errors.Lastname && errors.Lastname.type==="maxLength" &&(<p id="err">max length is 2</p>)}
                  </div> 
                  <br/> 
                  <br/>
                  <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="text" name="Username" onChange={onChange} value={data.Username} class="form-control" id="exampleInputEmail" placeholder="Username"  ref={register({required:true,pattern:{value:/^[A-Z][A-Za-z0-9]{3,9}$/}, maxLength:8,minLength:2})}/>  
                    {errors.Username && errors.Username.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Username && errors.Username.type==="minLength" &&(<p id="err">min length is 2</p>)}
                      {errors.Username && errors.Username.type==="maxLength" &&(<p id="err">max length is 8</p>)}
                  </div> 
                  <br/> 
                  <br/>
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="Password" name="Password" onChange={onChange} value={data.Password} class="form-control" id="exampleLastName" placeholder="Password"  ref={register({required:true, maxLength:8,minLength:2})} />  
                      {errors.Password && errors.Password.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Password && errors.Password.type==="minLength" &&(<p id="err">min length is 2</p>)}
                      {errors.Password && errors.Password.type==="maxLength" &&(<p id="err">max length is 8</p>)}
                    </div>  
                  </div>  
                  
                  
                  <div class="form-group">  
                    <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleInputEmail" placeholder="Email" ref={register({required:true})} />  
                    {errors.Email && errors.Email.type==="required"&& (<p id="err">Required</p>)}  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Phone" onChange={onChange} value={data.Phone} class="form-control" id="exampleInputPhone" placeholder="Phone" ref={register({required:true, maxLength:10,minLength:10})}/>  
                    {errors.Phone && errors.Phone.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Phone && errors.Phone.type==="minLength" &&(<p id="err">Required 10 digit number</p>)}
                      {errors.Phone && errors.Phone.type==="maxLength" &&(<p id="err">max length is 10</p>)}
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="DateOfBirth" onChange={onChange} value={data.DateOfBirth} class="form-control" id="exampleInputDOB" placeholder="dd-mm-yyyy" />  
                  </div>  

                  <div className="radio-button">
                    <label>Gender:</label>&nbsp;&nbsp;
                    <input name="Gender" id="Male" placeholder="Gender" value="Male" onChange={onChange} type="radio"/>Male &nbsp;&nbsp;
                    <input name="Gender" id="Female" placeholder="Gender" value="Female" onChange={onChange} type="radio"/>Female &nbsp;&nbsp;
                  </div>
                   <div class="form-group">  
                    <input type="text" name="AccountNum" onChange={onChange} value={data.AccountNum} class="form-control" id="exampleInputAccountNum" placeholder="Account Number" ref={register({required:true, maxLength:4,minLength:4})} />  
                    {errors.AccountNum && errors.AccountNum.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.AccountNum && errors.AccountNum.type==="minLength" &&(<p id="err">min length is 4</p>)}
                      {errors.AccountNum && errors.AccountNum.type==="maxLength" &&(<p id="err">max length is 4</p>)}
                  </div>  
                  <div class="form-group">  
                    <input type="password" name="Pin" onChange={onChange} value={data.Pin} class="form-control" id="exampleInputEmail" placeholder="Pin" ref={register({required:true, maxLength:4,minLength:4})} />  
                    {errors.Pin && errors.Pin.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.Pin && errors.Pin.type==="minLength" &&(<p id="err">min length is 4</p>)}
                      {errors.pin && errors.pin.type==="maxLength" &&(<p id="err">max length is 4</p>)}
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="OpeningBal" onChange={onChange} value={data.OpeningBal} class="form-control" id="exampleInputEmail" placeholder="Opening Balance in Rs." />  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="AadharNum" onChange={onChange} value={data.AadharNum} class="form-control" id="exampleInputEmail" placeholder="Aadhar Number" ref={register({required:true, maxLength:12,minLength:12})} />  
                    {errors.AadharNum && errors.AadharNum.type==="required"&& (<p id="err">Required</p>)}  
                      {errors.AccountNum && errors.AccountNum.type==="minLength" &&(<p id="err">min length is 12</p>)}
                      {errors.AadharNum && errors.AadharNum.type==="maxLength" &&(<p id="err">max length is 12</p>)}
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
  
export default AddCustomer