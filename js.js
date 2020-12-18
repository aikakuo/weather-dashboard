var inputValue = document.querySelector(".input-value")



var date = (new Date()).toISOString().split('T')[0];



  var apiKey = '1b4f8b955a88a2ead047909c85a25270'
 


  $('#button').on('click',function(){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=" + apiKey + '&units=imperial'

    $.ajax({
    url: queryURL,
   method: 'GET',

  }).then(function(weatherData){
    console.log(weatherData)
    // $(".date").text(today);
    $('.city').text('City: ' + weatherData.name + '  ' + date)
    $('.wind').text('Wind Speed: ' + weatherData.wind.speed)
    $('.humidity').text('Humidity: ' + weatherData.main.humidity)
    $('.temp').text('Temp: ' + weatherData.main.temp + " C")
    $('.lat').text('Lat: '+ weatherData.coord.lat)
    $('.lon').text('Lon: '+ weatherData.coord.lon)
    
   var queryTwoURL = "http://api.openweathermap.org/data/2.5/uvi?lat="+ weatherData.coord.lat+"&lon=" + weatherData.coord.lon + "&appid=" + apiKey

    $.ajax({
    url: queryTwoURL,
    method: 'GET',

    }).then(function(Data){
      console.log(data)
    })
  })
})
  



