using System;
using Xunit;

namespace TodoApi.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var a = false;
            Assert.False(a);
        }

        [Fact]
        public void PassingTest()
        {
            Assert.Equal(4, Add(2, 2));
        }

        [Fact]
        public void FailingTest()
        {
            Assert.Equal(5, Add(2, 2));
        }

        int Add(int x, int y)
        {
            return x + y;
        }

        [Fact]
        public void TemperatureFExistsWeatherForecast()
        {
            var weatherForecast = new WeatherForecast(){
                Id = 1,
                Date = DateTime.Now,
                TemperatureC = 20
            };
            var temperatureF = 32 + (int)(20 / 0.5556);

            Assert.Equal(temperatureF, weatherForecast.TemperatureF);            
        }
    }
}
