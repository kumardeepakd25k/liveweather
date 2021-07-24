$(document).ready(function(){
    $("#searchinput").on("keyup", function(e){
       var cityname = e.target.value;
       const APIkey = "f68f2ba73930ba7a79266a24a26c77d8";

       $.ajax({


           url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`,


       }).done(function(weatherdata){



       console.log(weatherdata);

       $("#profile").html(`
       <div class="container">
           <div class="row">

                    <div class="card" style="width: 18rem;">
                            <img src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Weather:${weatherdata.weather[0].description}</h5>
                                <p class="card-text">The Temperature at ${cityname} is = ${weatherdata.main.temp} &#8451; and feels like ${weatherdata.main.feels_like} &#8451; </p>
                                <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about this place</a>
                            </div>
                    </div>

           </div>
        
        </div>`);   


       });


   })


})   