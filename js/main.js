var num=document.getElementById("number");
var heading=document.getElementById("heading");
var button=document.getElementById("btn");

button.addEventListener("click",function(){
   console.log("hello")
      var number=num.value;
		var lengthNumber=number;
		var newNumber=number;
		var length=0;
		var seperate;
		var lengthSeperate;
		var answer=0;
		

		while(lengthNumber!=0){
			lengthSeperate=lengthNumber%10;
			lengthNumber=(lengthNumber-lengthSeperate)/10;
			length++;
		}

		console.log(length)
		while(number!=0){
			seperate=number%10;
			number=(number-seperate)/10;
			answer+=seperate**length;
		}	
		if(newNumber==answer){
			heading.innerText=`The number ${answer} is armstrong`
		}
		else{
			heading.innerText=`The number ${answer} is not armstrong`
		}
})