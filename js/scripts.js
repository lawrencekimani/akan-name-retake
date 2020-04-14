function akanName (){
    var dd= parseInt(document.getElementById("birth-day").value);
    var mm= parseInt(document.getElementById("birth-month").value);
    var yyyy= parseInt(document.getElementById("birth-year").value);
  
   
    
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var daysOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
  
  
    var gender = document.getElementsByName("gender");
    if(gender.checked === true){
      gender = "Male";
    }
    else {
      gender= "Female";
    }
    var day= new Date(yyyy+"/"+ mm+"/"+ dd);
    var result = day.getDay();
    
    if (dd<1||dd>31 || mm===2 && dd>29||mm<1 || mm>12) {
      alert("Invalid date input!");
    }
    else if (yyyy.toString().length<4||yyyy.toString().length>4){
      alert("Input Valid Year of Birth please");
    }
    else if(gender==="Male"){
      alert("You were born on a " + daysOfTheWeek[result]+ ". Your Akan name is " + maleNames[result]);
    }
    else if(gender==="Female"){
      alert("You were born on a " + daysOfTheWeek[result]+ ". Your Akan name is " + femaleNames[result]);
    }
    else{
      alert("error!");
    }
  }