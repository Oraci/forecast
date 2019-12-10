import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('currentCity', undefined);
    this.set('today', undefined);
    this.set('forecast', undefined);
    this.set('message', undefined);
  },  
});
