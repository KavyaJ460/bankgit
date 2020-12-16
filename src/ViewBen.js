import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function ViewBen(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('http://localhost:60671/api/beneficiary/BeneficiaryRequestDetailsID?id='+ props.match.params.id);  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  

  const deletecustomer = (ID) => {  

    debugger;  

    axios.delete('http://localhost:60671/api/beneficiary/DeleteBeneficiary?id=' + ID)  

      .then((result) => {  

        props.history.push('/ViewBen')  

      });  

  };  



 

  

  return (  

    <div className="animated fadeIn">  

      <Row>  

        <Col>  

          <Card>  

            <CardHeader>  

              <i className="fa fa-align-justify"></i> Beneficiary List  

              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm">  

                <thead>  

                  <tr>  

                   
                  {/* <th>Beneficiary Id</th> */}
                    <th>Firstname</th> 
                    <th>Lastname</th>

                    <th>Amount</th>  
                  

                    <th>Email</th>  

                    
                    <th>AccountNum</th>  



                   

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                        
{/* <td>{item.BeneficiaryId}</td>  */}
                        <td>{item.Firstname}</td> 
                        <td>{item.Lastname}</td> 

                        <td>₹{item.Amount}</td> 
                         
                        <td>{item.Email}</td>  

                       
                        <td>{item.AccountNum}</td>  

                       

                        

                        <td>  

                          <div class="btn-group">  

                              

                            <button className="btn btn-danger" onClick={() => { deletecustomer(item.BeneficiaryId) }}>Delete</button>  
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
export default ViewBen