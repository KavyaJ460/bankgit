//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BankingApplication.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CustomerDetail
    {
        public int CustomerId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public int AccountNum { get; set; }
        public int Pin { get; set; }
        public int OpeningBal { get; set; }
        public int AadharNum { get; set; }
    }
}