import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function View(props) {  
        const [user, setuser]= useState({ CustomerId:'', Firstname: '',Lastname:'',Username:'', Password: '',Email:'', Phone: '', DateOfBirth: '',Gender:'',AccountNum:'',Pin:'',OpeningBal:'',AadharNum:''});
        console.log(props.match.params.id);  
        const Url = "http://localhost:60671/api/customer/CustomerRequestDetailsID?id=" + props.match.params.id;
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  
        const UpdateAsset = (e) => {  
          //e.preventDefault();  
          debugger;
          const data = {CustomerId:props.match.params.id, Firstname:user.Firstname, Lastname: user.Lastname,Username:user.Username ,Password:user.Password,Email:user.Email,Phone:user.Phone,DateOfBirth:user.DateOfBirth,Gender:user.Gender,AccountNum:user.AccountNum,Pin:user.Pin,OpeningBal:user.OpeningBal,AadharNum:user.AadharNum };  
         console.log(data);
          axios.post('http://localhost:60671/api/customer/UpdateCustomer', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/CustomerDashboard')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  
        const {register, handleSubmit, errors}=useForm();
        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={handleSubmit(UpdateAsset)}>  
                            <h3>View/Edit details</h3>  
                            <InputGroup className="mb-3">          
                       <label>Customer ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text"  name="CustomerId"  value={user.CustomerId} onChange={ onChange } disabled/>  
                      </InputGroup>  
                      <label>FirstName</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-3">          
                        <Input type="text"  name="Firstname"  value={user.Firstname} onChange={ onChange } 
                        ref={register({required: true, maxLength:20, minLength:4})}/>
                        {errors.Firstname && <p id="err">Enter 4 or more characters</p>}   
                      </InputGroup>  
                      <label>LastName</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-3">           
                        <Input type="text"  name="Lastname"   value={user.Lastname} onChange={ onChange }  
                         ref={register({required: true, maxLength:20, minLength:1})}/>
                         {errors.Lastname && <p id="err">Enter 1 or more characters</p>}     
                      </InputGroup>  
                      <label>Username</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-3">  
                        <Input type="text" name="Username"   value={user.Username} onChange={ onChange }  
                        ref={register({required: true, pattern:{value:/^[A-Z][A-Za-z0-9]{3,9}$/}})}/>
                        {errors.Username && <p id="err">Enter 4 characters, begin with capital letter & including numbers</p>}      
                      </InputGroup>  
                      <label>Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-4">  
                       <Input type="text"  name="Password"  value={user.Password} onChange={ onChange }  
                       ref={register({required: true, pattern:{value:/^[A-Z]{1}[a-z0-9]+[*$#]{1,}$/}})}/>
                       {errors.Password && <p id="err">Enter Valid Password ex. Amith7*</p>}    
                      </InputGroup>
                      <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-4">  
                       <Input type="text"  name="Email"  value={user.Email} onChange={ onChange } 
                       ref={register({required: true, pattern:{value:/^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,10}$/i}})}/>  
                       {errors.Email && <p id="err">Enter valid email ex."kavya@gmail.com"</p>} 
                      </InputGroup>  
                     
                      <label>Phone</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-4">  
                        <Input type="number"  name="Phone"  value={user.Phone} onChange={ onChange }  
                        ref={register({required: true,  maxLength:10, minLength:10})}
                        />
                        {errors.Phone && <p id="err">Enter valid 10 digit Phone number </p>}   
                      </InputGroup>
                      <label>Date Of Birth</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-4">  
                        <Input type="text"  name="DateOfBirth" placeholder="dd-mm-yyyy"  value={user.DateOfBirth} onChange={ onChange }  
                        ref={register({required: true})}
                        />
                        {errors.Email && <p id="err">Enter Date of birth"</p>}    
                      </InputGroup>
                      <div className="radio-button">
                    <label>Gender:</label>&nbsp;&nbsp;
                    <input name="Gender" id="Male" placeholder="Gender" value="Male" onChange={onChange} type="radio"/>Male &nbsp;&nbsp;
                    <input name="Gender" id="Female" placeholder="Gender" value="Female" onChange={onChange} type="radio"/>Female &nbsp;&nbsp;
                  </div>
             <label>Account Number</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-4">  
                        <Input type="text"  name="AccountNum"  value={user.AccountNum} onChange={ onChange }  disabled/>  
                      </InputGroup>
                      {/* <label>Pin</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-4">  
                        <Input type="text"  name="Pin"  value={user.Pin} onChange={ onChange }  
                        ref={register({required: true, pattern:{value:/^[0-9]{4}$/}})}
                        />
                        {errors.Pin && <p id="err">Enter 4 digit Pin. ex."8055"</p>}  
                      </InputGroup> */}
                      <label>Account Balance</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-4">  
                        <Input type="text"  name="OpeningBal"  value={user.OpeningBal} onChange={ onChange }  disabled/>  
                      </InputGroup>
                      <label>Aadhar Number</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InputGroup className="mb-4">  
                        <Input type="text"  name="AadharNum"  value={user.AadharNum} onChange={ onChange }  disabled/>  
                      </InputGroup>              
                  
                                                           
                      <CardFooter className="p-4">  
                          <Row>  
                          <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1" ><span>Update</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" ><span>Cancel</span></Button>  
                            </Col>  
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container>  
              </div>  
        )  
}  
  
export default View  











// import React from 'react';   
// import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
// import axios from 'axios'  
// class EditAsset extends React.Component {  
//     constructor(props) {  
//         super(props)  

//     this.onChangeAssetName = this.onChangeAssetName.bind(this);  
//     this.onChangeQuantity = this.onChangeQuantity.bind(this);  
//     this.onChangePricePerItem = this.onChangePricePerItem.bind(this);  
      
//     this.onSubmit = this.onSubmit.bind(this);  

//          this.state = {  
//             AssetName: '',  
//             Quantity: '',  
//             PricePerItem: '' 
//         }  
//     }  

//   componentDidMount() {  
//       axios.get('http://localhost:44330/api/addasset/assetdetails?id='+this.props.match.params.id)  
//           .then(response => {  
//               this.setState({   
//                 AssetName: response.data.AssetName,   
//                 Quantity: response.data.Quantity,  
//                 PricePerItem: response.data.PricePerItem,  
//                 });  

//           })  
//           .catch(function (error) {  
//               console.log(error);  
//           })  
//     }  

//   onChangeAssetName(e) {  
//     this.setState({  
//         AssetName: e.target.value  
//     });  
//   }  
//   onChangeQuantity(e) {  
//     this.setState({  
//         Quantity: e.target.value  
//     });    
//   }  
//   onChangePricePerItem(e) {  
//     this.setState({  
//         PricePerItem: e.target.value  
//     });  
// }  
    

//   onSubmit(e) {  
//     debugger;  
//     e.preventDefault();  
//     const obj = {  
//         AssetID:this.props.match.params.id,  
//       AssetName: this.state.AssetName,  
//       Quantity: this.state.Quantity,  
//       PricePerItem: this.state.PricePerItem,  
//     };  

//     axios.post('https://localhost:44330/api/addasset/InsertAsset/', obj)  
//         .then(res => console.log(res.data));  
//         debugger;  
//         this.props.history.push('/AssetsList')  
//   }  
//     render() {  
//         return (  
//             <Container className="App">  

//              <h4 className="PageHeading">Update Informations</h4>  
//                 <Form className="form" onSubmit={this.onSubmit}>  
//                     <Col>  
//                         <FormGroup row>  
//                             <Label for="name" sm={2}>Asset Name</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="AssetName" value={this.state.AssetName} onChange={this.onChangeAssetName}  
//                                 placeholder="Enter Asset Name" />  
//                             </Col>  
//                         </FormGroup>  
//                         <FormGroup row>  
//                             <Label for="Password" sm={2}>Quantity</Label>  
//                             <Col sm={10}>  
//                                 <Input type="number" name="Quantity" value={this.state.Quantity} onChange={this.onChangeQuantity} placeholder="Enter Quantity" />  
//                             </Col>  
//                         </FormGroup>  
//                          <FormGroup row>  
//                             <Label for="Password" sm={2}>Price Per Item</Label>  
//                             <Col sm={10}>  
//                                 <Input type="number" name="PricePerItem" value={this.state.PricePerItem} onChange={this.onChangePricePerItem} placeholder="Enter Price" />  
//                             </Col>  
//                         </FormGroup>  
                          
//                     </Col>  
//                     <Col>  
//                         <FormGroup row>  
//                             <Col sm={5}>  
//                             </Col>  
//                             <Col sm={1}>  
//                           <Button type="submit" color="success" >Submit</Button>{' '}  
//                             </Col>  
//                             <Col sm={1}>  
//                                 <Button color="danger">Cancel</Button>{' '}  
//                             </Col>  
//                             <Col sm={5}>  
//                             </Col>  
//                         </FormGroup>  
//                     </Col>  
//                 </Form>  
//             </Container>  
//         );  
//     }  

// }  

// export default EditAsset;