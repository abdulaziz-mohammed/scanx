﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ScanX.Core.Models
{
    public class ScannerDevice
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Port { get; set; }
    }
}