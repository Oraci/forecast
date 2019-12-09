import { helper } from '@ember/component/helper';

export default helper(function weatherIcon(params/*, hash*/) {
  let icon = "wi-day-sunny";
  switch (params[0]) {
      case "Clouds": icon = 'wi-day-cloudy';
          break;
      case "Rain": icon = 'wi-day-rain';
          break;
      case "Snow": icon = 'wi-day-snow';
          break;
      case "Extreme": icon = 'wi-day-thunderstorm';
          break;
      case "Clouds": icon = 'wi-day-cloudy';
          break;
      // And more - I couldn't find a list of them on openweathermap.org
      default: icon = "wi-day-sunny";
          break;
  }

  return icon;
});
