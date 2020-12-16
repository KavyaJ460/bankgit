import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function EditCustomer(props) {  
        const [customer, setcustomer]= useState({CustomerId:'', Firstname: '',Lastname:'',Username:'', Password: '',Email:'', Phone: '', DateOfBirth: '',Gender:'',AccountNum:'',Pin:'',OpeningBal:'',AadharNum:''});  
        const Url = "http://localhost:60671/api/customer/CustomerRequestDetailsID?id=" + props.match.params.id;  
        
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setcustomer(result.data);  
          };  
        
          GetData();  
        }, []);   
        const UpdateCustomer = (e) => {  
          e.preventDefault();  
          const data = {CustomerId:props.match.params.id, Firstname:customer.Firstname, Lastname: customer.Lastname,Username:customer.Username ,Password:customer.Password,Email:customer.Email,Phone:customer.Phone,DateOfBirth:customer.DateOfBirth,Gender:customer.Gender,AccountNum:customer.AccountNum,Pin:customer.Pin,OpeningBal:customer.OpeningBal,AadharNum:customer.AadharNum};  
          
          axios.post('http://localhost:60671/api/customer/UpdateCustomer', data)  
            .then((result) => {  
              props.history.push('/ViewCustomer')  
            });  
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setcustomer({...customer, [e.target.name]: e.target.value});  
        }  

        



        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateCustomer}>  
                            <h1>Update Request</h1>  
                            <InputGroup className="mb-3">          
                              <Input type="text"  name="CustomerId"  value={customer.CustomerId} onChange={ onChange }placeholder="Customer ID" disabled/>  
                            </InputGroup>  
                             <InputGroup className="mb-3">          
                              <Input type="text"  name="Firstname"  value={customer.Firstname} onChange={ onChange } placeholder="Firstname"/>  
                            </InputGroup>  
                            <InputGroup className="mb-3">           
                              <Input type="text"  name="Lastname"   value={customer.Lastname} onChange={ onChange } placeholder="Lastname" />  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
                              <Input type="text" name="Username"   value={customer.Username} onChange={ onChange } placeholder="Username" />  
                            </InputGroup>  
                            <InputGroup className="mb-4">  
                             <Input type="text"  name="Password"  value={customer.Password} onChange={ onChange } placeholder="Password" />  
                            </InputGroup>
                            <InputGroup className="mb-4">  
                             <Input type="text"  name="Email"  value={customer.Email} onChange={ onChange } placeholder="Email" />  
                            </InputGroup>  
                           
                            <InputGroup className="mb-4">  
                              <Input type="text"  name="Phone"  value={customer.Phone} onChange={ onChange } placeholder="Phone" />  
                            </InputGroup>
                            <InputGroup className="mb-4">  
                              <Input type="text"  name="DateOfBirth"  value={customer.CustomerId} onChange={ onChange } placeholder="dd-mm-yyyy" />  
                            </InputGroup>
                            <div className="radio-button">
                    <label>Gender:</label>&nbsp;&nbsp;
                    <input name="Gender" id="Male" placeholder="Gender" value="Male" onChange={onChange} type="radio"/>Male &nbsp;&nbsp;
                    <input name="Gender" id="Female" placeholder="Gender" value="Female" onChange={onChange} type="radio"/>Female &nbsp;&nbsp;
                  </div>
                            <InputGroup className="mb-4">  
                              <Input type="text"  name="AccountNum"  value={customer.AccountNum} onChange={ onChange } placeholder="AccountNum" />  
                            </InputGroup>
                            <InputGroup className="mb-4">  
                              <Input type="text"  name="Pin"  value={customer.CustomerId} onChange={ onChange } placeholder="Pin" />  
                            </InputGroup>
                            <InputGroup className="mb-4">  
                              <Input type="text"  name="OpeningBal"  value={customer.OpeningBal} onChange={ onChange } placeholder="OpeningBal" disabled />  
                            </InputGroup>
                            <InputGroup className="mb-4">  
                              <Input type="text"  name="AadharNum"  value={customer.CustomerId} onChange={ onChange } placeholder="AadharNum" disabled/>  
                            </InputGroup>
                             
                      <CardFooter className="p-4">  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1"  ><span>Update</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
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

export default EditCustomer