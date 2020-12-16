using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BankingApplication.Models;

namespace BankingApplication.Controllers
{
    [RoutePrefix("api/beneficiary")]
    public class BeneficiaryController : ApiController
    {
        BankEntities10 DB = new BankEntities10();
        BankEntities9 DB1 = new BankEntities9();
        [Route("RegisterBeneficiary")]
        [HttpPost]
        public object RegisterBeneficiary(Beneficiaries Reg)
        {
            try
            {

                Beneficiary mg = new Beneficiary();
                CustomerDetail cr = new CustomerDetail();
                if (mg.BeneficiaryId == 0)
                {
                    mg.Firstname = Reg.Firstname;
                    mg.Lastname = Reg.Lastname;
                    mg.AccountNum = Reg.AccountNum;
                    mg.Email = Reg.Email;
                    mg.Amount = Reg.Amount;
                    mg.Phone = Reg.Phone;
                    mg.CustomerId = Reg.CustomerId;
                    var bal = DB1.CustomerDetails.Where(x => x.CustomerId == Reg.CustomerId).ToList().FirstOrDefault();
                    if (bal.OpeningBal >= mg.Amount)
                    {
                        DB.Beneficiaries.Add(mg);
                        DB.SaveChanges();
                        return new Response
                        { Status = "Success", Message = "Record SuccessFully Saved." };
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
        [Route("BeneficiaryRequestDetails")]
        [HttpGet]
        public object BeneficiaryRequestDetails1()
        {

            var a = DB.Beneficiaries.ToList();
            return a;
        }

        [Route("BeneficiaryRequestDetailsID")]
        [HttpGet]
        public object CustomerRequestDetails2(int id)
        {
            var obj = DB.Beneficiaries.Where(x => x.CustomerId == id).ToList();
            return obj;
        }
        [HttpDelete]
        [Route("DeleteBeneficiary")]
        public object DeleteBeneficiary(int id)

        {

            var obj = DB.Beneficiaries.Where(x => x.BeneficiaryId == id).ToList().FirstOrDefault();

            DB.Beneficiaries.Remove(obj);

            DB.SaveChanges();

            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };

        }
    }
}