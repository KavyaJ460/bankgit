using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BankingApplication.Models;

namespace BankingApplication.Controllers
{
    [RoutePrefix("api/news")]
    public class NewsController : ApiController
    {
        BankEntities12 DB = new BankEntities12();
        [Route("AddNews")]
        [HttpPost]
        public object AddNews(PostNews Reg)
        {
            try
            {

                PostNew mg = new PostNew();
                if (mg.NewsId == 0)
                {
                    mg.Headlines = Reg.Headlines;
                    mg.News = Reg.News;
                   


                    DB.PostNews.Add(mg);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "News SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
        [Route("NewsRequestDetails")]
        [HttpGet]
        public object NewsRequestDetails1()
        {

            var a = DB.PostNews.ToList();
            return a;
        }

        [Route("NewsRequestDetailsID")]
        [HttpGet]
        public object NewsRequestDetails2(int id)
        {
            var obj = DB.PostNews.Where(x => x.NewsId == id).ToList().FirstOrDefault();
            return obj;
        }
       
    }
}