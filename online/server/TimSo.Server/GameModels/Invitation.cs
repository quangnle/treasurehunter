﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TreasureHunter.Server.TreasureHunterGameModels
{
    public class Invitation
    {
        public Client Player1 { get; set; }
        public Client Player2 { get; set; }
        public DateTime InvitedTime { get; set; }
    }
}