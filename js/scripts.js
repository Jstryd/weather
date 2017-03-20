// YOUR SCRIPTS GO HERE

// simple weather from unheap
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

$.simpleWeather({
  location: 99004,
  woeid: '',
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

  
  //Display Future Weather
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);
      
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);
      
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high);
      
      console.log(weather.forecast[0].text)
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside :-D');
    }
  
  });