import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
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
                loading: false,
                today: undefined,
                forecast: undefined,
                currentCity: undefined,
                message: undefined
            });

            return;
        }
        
        $.getJSON("//api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=16&appid=08386da1df4f62f3426794b77cce7146",
            function (data) {
                return data
            }).done(function(data) {
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
            }).fail(function() {
                _this.setProperties({
                    today: undefined,
                    forecast: undefined,
                    currentCity: undefined,
                    loading: false, 
                    message: "City not found, please repeat your search."
                });            
            });

    }
});