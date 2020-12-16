using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BankingApplication.Models;

namespace BankingApplication.Controllers
{
    [RoutePrefix("api/Transaction")]
    public class TransactionController : ApiController
    {
        BankEntities11 DB = new BankEntities11();
        BankEntities9 DB1 = new BankEntities9();

        [Route("NewTransaction")]
        [HttpPost]
        public object NewTransaction(Transact tr)
        {
            try
            {

                Transaction_Detail td = new Transaction_Detail();
                CustomerDetail cr = new CustomerDetail();
                if (td.TransactionId == 0)
                {
                    td.Time = tr.Time;
                    td.Remarks = tr.Remarks;
                    td.Mode = tr.Mode;
                    td.Amount = tr.Amount;
                    td.CustomerId = tr.CustomerId;
                    var bal = DB1.CustomerDetails.Where(x => x.CustomerId == tr.CustomerId).ToList().FirstOrDefault();
                    if (bal.OpeningBal >= td.Amount && td.Mode == "Debit")
                    {
                        DB.Transaction_Detail.Add(td);
                        DB.SaveChanges();
                        return new Response
                        { Status = "Success", Message = "Transaction Successfull" };
                    }
                    else if (td.Mode == "Credit")
                    {
                        DB.Transaction_Detail.Add(td);
                        DB.SaveChanges();
                        return new Response
                        { Status = "Success", Message = "Transaction Successfull" };
                    }


                    else
                    {
                        return new Response
                        { Status = "Error", Message = "Invalid Data." };
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
        [Route("TransactionDetails")]
        [HttpGet]
        public object TransactionDetails1()
        {

            var a = DB.Transaction_Detail.ToList();
            return a;
        }

        [Route("TransactionDetailsID")]
        [HttpGet]
        public object TransactionDetails2(int id)
        {
            var obj = DB.Transaction_Detail.Where(x => x.CustomerId == id).ToList();
            return obj;
        }

        [HttpDelete]
        [Route("DeleteTransaction")]
        public object DeleteTransaction(int id)

        {

            var obj = DB.Transaction_Detail.Where(x => x.TransactionId == id).ToList().FirstOrDefault();

            DB.Transaction_Detail.Remove(obj);

            DB.SaveChanges();

            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };

        }
    }
}