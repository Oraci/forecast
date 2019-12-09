import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        // If user click "OK" button
        searchWeather: function (city) {
            const _this = this;

            _this.setProperties({
                loading: true
            });                

            // Start getting data from API
            this.getData(city);
        }
    },
    getData: function (city) {
        const _this = this;

        if (!city) {
            _this.setProperties({
                loading: false
            });

            return;
        }
        
        Ember.$.getJSON("//api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=16&appid=08386da1df4f62f3426794b77cce7146",
            function (data) {

                if (data.cod === "200") {

                    const currentCity = data.city.name;
                    const today = data.list[0];
                    const forecast = data.list.slice(1, 16);

                    // Set data to template
                    _this.setProperties({
                        currentCity: currentCity,
                        today: today,
                        forecast: forecast,
                        loading: false
                    });                
                } else {
                    _this.setProperties({
                        loading: false
                    });                    
                }
            }, function(data) {
                _this.setProperties({
                    loading: false
                });                    
            }, function(data) {
                _this.setProperties({
                    loading: false
                });                    
            });
    }
});