using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TreasureHunter.Server.Models;

namespace TreasureHunter.Server.ViewModels
{
    public class OpponentInfo
    {
        public ApplicationUser Opponent { get; set; }
        public int Win { get; set; }
        public int Draw { get; set; }
        public int Lose { get; set; }

    }
}