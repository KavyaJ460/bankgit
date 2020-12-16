import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function ViewCustomer(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('http://localhost:60671/api/customer/CustomerRequestDetails');  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  

  const deletecustomer = (ID) => {  

    debugger;  

    axios.delete('http://localhost:60671/api/customer/DeleteCustomer?id=' + ID)  

      .then((result) => {  

        props.history.push('/ViewCustomer')  

      });  

  };  



  const editcustomer1 = (id) => {  

    props.history.push({  

      pathname: '/EditCustomer/' + id  

    });  

  };  

  

  return (  

    <div className="animated fadeIn">  

      <Row>  

        <Col>  

          <Card>  

            <CardHeader>  

              <i className="fa fa-align-justify"></i> Customer List  

              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm">  

                <thead>  

                  <tr>  

                   
                  <th>Customer Id</th>
                    <th>Firstname</th>  

                    <th>Balance</th>  
                    <th>Username</th>  

                    <th>Email</th>  

                    
                    <th>AccountNum</th>  



                   

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                        
<td>{item.CustomerId}</td> 
                        <td>{item.Firstname}</td>  

                        <td>₹{item.OpeningBal}</td> 
                        <td>{item.Username}</td>   
                        <td>{item.Email}</td>  

                       
                        <td>{item.AccountNum}</td>  

                       

                        

                        <td>  

                          <div class="btn-group">  

                            <button className="btn btn-warning" onClick={() => { editcustomer1(item.CustomerId) }}>Edit</button>  

                            <button className="btn btn-danger" onClick={() => { deletecustomer(item.CustomerId) }}>Delete</button>  
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>  
              </Table> 
            
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
     
    </div>  
  )  

}  
export default ViewCustomer