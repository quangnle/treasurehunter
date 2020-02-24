using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TreasureHunter.Server.Models;

namespace TreasureHunter.Server.ViewModels
{
    public class UserMatch
    {
        public ApplicationUser Opponent { get; set; }
        public int MatchResult { get; set; } //0: draw, 1: win, 2: lose
    }
}