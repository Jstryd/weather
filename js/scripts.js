// YOUR SCRIPTS GO HERE

// simple weather from unheap
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

$.simpleWeather({
  location: 99004,
  unit: 'f',
  
  success: function(weather){
    //check for weather
    console.log(weather);
    
    // display weather
    $('.temp').text(weather.temp);
    
    // display city
    $('.city').text(weather.city);
    
    // display state
    $('.state').text(weather.region);
    
    $('.image img').attr('src', weather.image);
  },

  
  error: function(error){
    console.log('Refresh page.');
  }
});