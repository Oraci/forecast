import { helper } from '@ember/component/helper';

export default helper(function weatherIcon(params) {
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
      default: icon = "wi-day-sunny";
          break;
  }

  return icon;
});
