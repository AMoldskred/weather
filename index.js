    $( document ).ready(function() {
    var a = {
        urlStart: "https://api.wunderground.com/api/3c51cebba314d2ad/conditions/forecast10day/",
        l: "",
        format: ".json"
    };

$.get("http://api.wunderground.com/api/3c51cebba314d2ad/geolookup/q/autoip.json", function( data ) {
a.userLat = data.location.lat;
a.userLon = data.location.lon;
a.l = data.location.l;

}).done(function(){
 $.ajax({
            type: "GET",
            url: a.urlStart + a.l + a.format,
            dataType: "json",
            success: function(e) {
                  console.log(e);
                  var cast =  e.forecast.simpleforecast.forecastday;
                  $('#location').html(e.current_observation.display_location.full);
                  $('#condition').html(e.current_observation.weather);
                  window.cel = e.current_observation.feelslike_c
                  window.celsius = true;
                  window.fagr = e.current_observation.feelslike_f
                  $('#temp').html(cel+'&deg C');
                  
                  $.each(cast, function(i, item) {
                    if(i > 5){

                    }
                    else{
                      
                      $('.fore:eq('+i+')').html('<img class="icon" src="http://icons.wxug.com/i/c/v4/'+this.icon+'.svg" draggable="false"></img>');
                      $('.max:eq('+i+')').html(this.high.celsius+'&deg C'+' / '+this.high.fahrenheit+'&deg F');
                      $('.min:eq('+i+')').html(this.low.celsius+'&deg C'+' / '+this.low.fahrenheit+'&deg F');
                       $('#date'+i+'').html(this.date.weekday_short);
                      
                      
                    }
                     
                    
                 });
            },
            error: function() {
                alert('Something went wrong\n Please reload')
            }
        })
}).done(function(){
    //Show screen
    setTimeout(function(){
      $('#all').fadeIn( "slow");
    },100)
    

    $('#switch').on('click',function(){
      if(window.celsius){
        $('#temp').html(fagr+'&deg F');
        window.celsius = false;
      }
      else{
       $('#temp').html(cel+'&deg C'); 
       window.celsius = true;
      }
    })


})

                   // Setting day or night
var time = new Date().getHours();
    if(time >= 18){
      document.getElementById("inter").style.color = "#2196F3";
    }
    else{
     document.getElementById("inter").style.color = "#214050"; 
    }

$('.next').hover(function(){
  $('.mhm').toggleClass('hide');
})

//Saved copy
    /*
        $(document).ready(function(){
            var ad = document.getElementById("mysvg");

            //it's important to add an load event listener to the object, as it will load the svg doc asynchronously
            ad.addEventListener("load",function(){
                var svgDoc = ad.contentDocument; //get the inner DOM of alpha.svg
                var svgRoot  = svgDoc.documentElement;


                 // Setting day or night
    var time = new Date().getHours();
    if(time >= 18){
      document.getElementById('daybg').style.display = "none";
      document.getElementById('sun').style.display = "none";
    }
    else{}
//---------------------------------------------
//API
    var a = {
        urlStart: "https://api.wunderground.com/api/3c51cebba314d2ad/conditions/forecast10day/",
        l: "",
        format: ".json"
    };

$.get("http://api.wunderground.com/api/3c51cebba314d2ad/geolookup/q/autoip.json", function( data ) {
a.userLat = data.location.lat;
a.userLon = data.location.lon;
a.l = data.location.l;

}).done(function(){
 $.ajax({
            type: "GET",
            url: a.urlStart + a.l + a.format,
            dataType: "json",
            success: function(e) {
                  console.log(e.forecast.simpleforecast.forecastday);
                  var cast =  e.forecast.simpleforecast.forecastday[0];
                  console.log(cast);
                  console.log(e);
                  
                 var cond = cast.conditions;
                 
      // --------------------------
     //Setting clouds
      if(){
      console.log('snow');
     // document.getElementById('rain').style.display = "none";
     // document.getElementById('cloudy').style.display = "none";
      }
      else if(){
        console.log('cloudy');
      //document.getElementById('rain').style.display = "none";
      //document.getElementById('snow').style.display = "none";
      //document.getElementById('sun').style.display = "none";
      }
      else if(){
        console.log('rain');
      //document.getElementById('snow').style.display = "none";
      //document.getElementById('sun').style.display = "none";
      }
      
      else if(){
      console.log('sun');
      //document.getElementById('rain').style.display = "none";
      //document.getElementById('snow').style.display = "none";
     // document.getElementById('cloudy').style.display = "none";
      }
      else{
      }

               
            },
            error: function() {
                alert('Something went wrong :/');
            }
        });
})
                 
            },false);
        })
*/
});
    