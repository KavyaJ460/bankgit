using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BankingApplication.Models
{
    public class Transact
    {
        public int TransactionId { get; set; }
        public DateTime Time = DateTime.Now;
        public string Remarks { get; set; }
       public string Mode { get; set; }
        public int Amount { get; set; }
        public int CustomerId { get; set; }
    }
}