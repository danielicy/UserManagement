using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.caculator.Models
{
    /*public class IntCalculation : Operation<int>
    {
        public int[] Operators { get; set; }       

    }*/

    public  class Calculation  {
        public Operations[] Operations { get; set; }

        public string[] Operators { get; set; }
    }

    public class Payload
    {
        public string Title { get; set; }
    }
}
