using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BankingApplication.Models
{
    public class Beneficiaries
    {
        public int BeneficiaryId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int AccountNum { get; set; }
        public string Email { get; set; }
        public int Amount { get; set; }
        public string Phone { get; set; }
        public int CustomerId { get; set; }
    }
}