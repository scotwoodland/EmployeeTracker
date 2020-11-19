      // Current day and time
      let m = moment();
      let currentDate = m.toDate();
      let currentTime = moment();
      console.log(currentDate);
      console.log(currentTime);
      
      function getcurrentTime() {
        $("#currentDay").append("Current Date/Time: " + currentDate);
      };
      getcurrentTime();

      
       
      // Populate userInput areas within local storage to be saved upon page refresh.
      function initPage() {
        var init7 = JSON.parse(localStorage.getItem("7:00am"));
        document.getElementById("7input").innerHTML = init7;

        var init8 = JSON.parse(localStorage.getItem("8:00am"))
        document.getElementById("8input").innerHTML = init8;

        var init9 = JSON.parse(localStorage.getItem("9:00am"))
        document.getElementById("9input").innerHTML = init9;

        var init10 = JSON.parse(localStorage.getItem("10:00am"))
        document.getElementById("10input").innerHTML = init10;

        var init11 = JSON.parse(localStorage.getItem("11:00am"))
        document.getElementById("11input").innerHTML = init11;

        var init12 = JSON.parse(localStorage.getItem("12:00pm"))
        document.getElementById("12input").innerHTML = init12;

        var init1 = JSON.parse(localStorage.getItem("1:00pm"))
        document.getElementById("1input").innerHTML = init1;

        var init2 = JSON.parse(localStorage.getItem("2:00pm"))
        document.getElementById("2input").innerHTML = init2;

        var init3 = JSON.parse(localStorage.getItem("3:00pm"))
        document.getElementById("3input").innerHTML = init3;

        var init4 = JSON.parse(localStorage.getItem("4:00pm"))
        document.getElementById("4input").innerHTML = init4;

        var init5 = JSON.parse(localStorage.getItem("5:00pm"))
        document.getElementById("5input").innerHTML = init5;
        
        var init6 = JSON.parse(localStorage.getItem("6:00pm"))
        document.getElementById("6input").innerHTML = init6;
      } 
    
      initPage();

     // Save Button - Saves text to the internal storage. 
        $("#saveBtn7").on("click", function(){
        userInput = $(this).siblings("#7input").val().trim();
        hourSpan = $(this).siblings("#7time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn8").on("click", function(){
        userInput = $(this).siblings("#8input").val().trim();
        hourSpan = $(this).siblings("#8time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn9").on("click", function(){
        userInput = $(this).siblings("#9input").val().trim();
        hourSpan = $(this).siblings("#9time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn10").on("click", function(){
        userInput = $(this).siblings("#10input").val().trim();
        hourSpan = $(this).siblings("#10time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn11").on("click", function(){
        userInput = $(this).siblings("#11input").val().trim();
        hourSpan = $(this).siblings("#11time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn12").on("click", function(){
        userInput = $(this).siblings("#12input").val().trim();
        hourSpan = $(this).siblings("#12time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn1").on("click", function(){
        userInput = $(this).siblings("#1input").val().trim();
        hourSpan = $(this).siblings("#1time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn2").on("click", function(){
        userInput = $(this).siblings("#2input").val().trim();
        hourSpan = $(this).siblings("#2time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn3").on("click", function(){
        userInput = $(this).siblings("#3input").val().trim();
        hourSpan = $(this).siblings("#3time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });

        $("#saveBtn4").on("click", function(){
        userInput = $(this).siblings("#4input").val().trim();
        hourSpan = $(this).siblings("#4time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });
        
        $("#saveBtn5").on("click", function(){
        userInput = $(this).siblings("#5input").val().trim();
        hourSpan = $(this).siblings("#5time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });
        
        $("#saveBtn6").on("click", function(){
        userInput = $(this).siblings("#6input").val().trim();
        hourSpan = $(this).siblings("#6time").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
        });
  
        

        





