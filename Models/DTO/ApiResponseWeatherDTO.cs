using System;

namespace TodoApi
{
    public class ApiResponseWeatherDTO
    {
        public int Day { get; set; }

        public int TemperatureC { get; set; }

        public string Summary { get; set; }
    }
}