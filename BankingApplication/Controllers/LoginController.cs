using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BankingApplication.Models;

namespace BankingApplication.Controllers
{
    [RoutePrefix("api/customer")]

    public class LoginController : ApiController
    {


        BankEntities9 DB = new BankEntities9();
        [Route("Login")]
        [HttpPost]
        public IHttpActionResult Get(Login login)
        {
            var log = DB.CustomerDetails.Where(x => x.Username.Equals(login.Username) && x.Password.Equals(login.Password)).FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
        }
        [Route("RegisterCustomer")]
        [HttpPost]
        public object RegisterCustomer(Register Reg)
        {
            try
            {

                CustomerDetail mg = new CustomerDetail();
                if (mg.CustomerId == 0)
                {
                    mg.Firstname = Reg.Firstname;
                    mg.Lastname = Reg.Lastname;
                    mg.Username = Reg.Username;
                    mg.Password = Reg.Password;
                    mg.Email = Reg.Email;
                    mg.Phone = Reg.Phone;
                    mg.DateOfBirth = Convert.ToDateTime(Reg.DateOfBirth);
                    mg.Gender = Reg.Gender;
                    mg.AccountNum = Reg.AccountNum;
                    mg.Pin = Reg.Pin;
                    mg.OpeningBal = Reg.OpeningBal;
                    mg.AadharNum = Reg.AadharNum;
                    DB.CustomerDetails.Add(mg);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Record SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }

       
        [Route("UpdateCustomer")]
        [HttpPost]
        public object UpdateCustomer(Register AA)
        {
            try
            {

                CustomerDetail RA = new CustomerDetail();
                var obj = DB.CustomerDetails.Where(z => z.CustomerId == AA.CustomerId).ToList().FirstOrDefault();
                //int x;
                if (obj.CustomerId > 0)
                {
                    obj.Firstname = AA.Firstname;
                    obj.Lastname = AA.Lastname;
                    obj.Username = AA.Username;
                    obj.Password = AA.Password;
                    obj.Email = AA.Email;
                    obj.Phone = AA.Phone;
                    obj.DateOfBirth = Convert.ToDateTime(AA.DateOfBirth);
                    obj.Gender = AA.Gender;
                    obj.AccountNum = AA.AccountNum;
                    obj.Pin = AA.Pin;
                    obj.OpeningBal = AA.OpeningBal;
                    obj.AadharNum = AA.AadharNum;

                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Asset SuccessFully Updated." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
        [Route("CustomerRequestDetails")]
        [HttpGet]
        public object CustomerRequestDetails1()
        {

            var a = DB.CustomerDetails.ToList();
            return a;
        }

        [Route("CustomerRequestDetailsID")]
        [HttpGet]
        public object CustomerRequestDetails2(int id)
        {
            var obj = DB.CustomerDetails.Where(x => x.CustomerId == id).ToList().FirstOrDefault();
            return obj;
        }
        [HttpDelete]
        [Route("DeleteCustomer")]
        public object DeleteCustomer(int id)

        {

            var obj = DB.CustomerDetails.Where(x => x.CustomerId == id).ToList().FirstOrDefault();

            DB.CustomerDetails.Remove(obj);

            DB.SaveChanges();

            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };

        }
    }
}