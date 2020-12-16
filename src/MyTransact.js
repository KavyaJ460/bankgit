import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function MyTransact(props) {  

  const [data, setData] = useState([]);  

  const Url = "http://localhost:60671/api/Transaction/TransactionDetailsID?id=" + props.match.params.id;

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios(Url);  

      setData(result.data); 
    }
    GetData(); 
   
  }, []);  
  const deletetransact = (ID) => {  

    debugger;  

    axios.delete('http://localhost:60671/api/Transaction/DeleteTransaction?id=' + ID)  

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

              <i className="fa fa-align-justify"></i> Transaction List 

              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm">  

                <thead>  

                  <tr>  

                   
                  {/* <th>Transaction Id</th> */}
                    <th>Time</th>  

                    <th>Remarks</th>  
                  

                    <th>Mode</th>  

                    
                    <th>Amount</th>  



                   

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                        
{/* <td>{item.TransactionId}</td>  */}
                        <td>{item.Time}</td>  

                        <td>{item.Remarks}</td> 
                         
                        <td>{item.Mode}</td>  

                       
                        <td>₹{item.Amount}</td>  

                       

                        

                        <td>  

                          <div class="btn-group">  

                              

                            <button className="btn btn-danger" onClick={() => { deletetransact(item.TransactionId) }}>Delete</button>  
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
export default MyTransact