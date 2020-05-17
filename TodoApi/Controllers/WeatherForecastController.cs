using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TodoApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Id = index,
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        //https://localhost:5001/WeatherForecast/1
        [HttpGet("{id:int}")]
        public ApiResponseWeatherDTO GetForecast(int id)
        {
            if(id == 1) {
                WeatherForecast miObjeto = new WeatherForecast() {
                    Id = 1,
                    Date = DateTime.Now.AddDays(1),
                    TemperatureC = 18,
                    Summary = "Bracing"
                };
                //guardar en DB WeatherForecast

                ApiResponseWeatherDTO miObjetoResponse = new ApiResponseWeatherDTO() {
                    Day = miObjeto.Date.Day,
                    TemperatureC = miObjeto.TemperatureC,
                    Summary = miObjeto.Summary
                };

                return miObjetoResponse;
            } else {
                return null;
            }
        }
    }
}
