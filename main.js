function showDay(){
	var dateObj=new Date();
	console.log(dateObj);
	var Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var Month=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var day=dateObj.getDay();
	var month=dateObj.getMonth()+1;
	var date=dateObj.getDate();
	var yr=dateObj.getFullYear();
	 
	 if(month<10){
		 month="0"+month;
	 }
	
	var day0= document.getElementById("sun").value;
	var day1= document.getElementById("mon").value;
	var day2= document.getElementById("tue").value;
	var day3= document.getElementById("wed").value;
	var day4= document.getElementById("thu").value;
	var day5= document.getElementById("fri").value;
	var day6= document.getElementById("sat").value;

	var checkDay=dateObj.getDay();
	console.log(checkDay);
	if(checkDay==0){
		sun.checked="true";
	}else if(checkDay==1){
		mon.checked="true";
	}
	else if(checkDay==2){
		tue.checked="true";
	}
	else if(checkDay==3){
		wed.checked="true";
	}
	else if(checkDay==4){
		thu.checked="true";
	}
	else if(checkDay==5){
		fri.checked="true";
	}
	else if(checkDay==6){
		sat.checked="true";
	}

	var showDay= date +" "+":" + " " + month+ ":" + " " +yr;
	document.getElementById("date").innerHTML=showDay;
}
showDay();

function showTime(){
	var date=new Date();
	var hr=date.getHours();
	var mins=date.getMinutes();
	var sec=date.getSeconds();
	
	if(hr==0){
		hr=12;
	}
	if(hr>12){
		hr=hr-12;
	}
	if(hr<10){
		hr="0"+hr;
	}
	if(mins<10){
		mins="0"+mins;
	}
	if(sec<10){
		sec="0"+sec;
	}
	
	var session1= document.getElementById("am").value;
	var session2=document.getElementById("pm").value;
	
	if(date.getHours()>=12){
		pm.checked="true";
	}
	else{
		am.checked="true";
	}
	var time=hr + "  "+"  "+ " "+":" + "  "+"  "+ "  " + mins +"  "+"  "+ "  " + ":" +"  "+"  "+ "  " + sec;
	document.getElementById("clockDisplay").innerText=time;
	setInterval(showTime,1000);
}
showTime();
