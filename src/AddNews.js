import React, { useState } from 'react'  
import axios from 'axios';  
function AddNews(props) {  
  const [data, setdata] = useState({ Headlines: '',News:''})  
  const apiUrl = "http://localhost:60671/api/news/AddNews";  
  const PostNews = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { Headlines: data.Headlines,News:data.News};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid data');  
        else  
        {
          alert('News Added!')
          props.history.push('/AdminHome')  
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
                  <h1 class="h4 text-gray-900 mb-4"><b>Post News </b></h1>  
                </div>  
                <form onSubmit={PostNews} class="user">  
                  {/* <div class="form-group row">   */}
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Headlines" onChange={onChange} value={data.Headlines} class="form-control" id="exampleFirstName" placeholder="Headlines" />  
                    </div>  
                    <br/>
                  
                    <div class="col-sm-6">  
                    <textarea type="text" name="News" onChange={onChange} value={data.News} class="form-control" id="exampleInputEmail" placeholder="news" />  
                  </div>  
                 
                  {/* </div>   */}
                  <br/>
                    

                  
                  
                  <button type="submit" class="btn btn-primary  btn-block text-center">  
                    Add News 
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
  
export default AddNews