import { helper } from '@ember/component/helper';

export default helper(function temperature(params/*, hash*/) {
  const temperature = params[0];
  return Math.floor(temperature) + "°";
});
