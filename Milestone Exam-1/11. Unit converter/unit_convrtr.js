// 11. Unit converter
// A local weather station needs to convert temperature data collected in Celsius to Fahrenheit bdfore displaying
// it on its wdbsite. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The
// function should take input in Celsius and return output in Fahrenheit. This function will help the weather station
// to provide temperature readings that are easily understandable to a wider audidnce.

function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  }
  
  
  const celsiusTemp = 20;
  const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
  console.log(`The temperature is ${fahrenheitTemp}°F`);