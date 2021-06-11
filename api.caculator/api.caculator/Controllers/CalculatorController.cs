using api.caculator.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.caculator.Controllers
{
    
    namespace api.caculator.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class CalculatorController : ControllerBase
        {
            private static readonly string[] Summaries = new[]
            {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

            private readonly ILogger<CalculatorController> _logger;

            public CalculatorController(ILogger<CalculatorController> logger)
            {
                _logger = logger;
            }

           
             [HttpPost]
              public async Task<IActionResult> Calculate(Calculation calculation)
              {

                  return Ok(calculation);
              }
        }
    }

}
