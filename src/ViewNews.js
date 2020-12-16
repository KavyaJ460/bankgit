import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function ViewNews(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('http://localhost:60671/api/news/NewsRequestDetails');  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  

  



 

  

  return (  

    <div className="animated fadeIn">  

      <Row>  

        <Col>  

          <Card>  

            <CardHeader>  

              <i className="fa fa-align-justify"></i> News List  

              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm">  

                <thead>  

                  <tr>  

                   
                  <th>Sl.No</th>
                    <th>Headlines</th>  

                    <th>News</th>  
                  

                  



                   

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                        
<td>{item.NewsId}</td> 
                        <td>{item.Headlines}</td>  

                        <td>{item.News}</td> 
                         
                         

                       

                        

                        <td>  

                         
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
export default ViewNews