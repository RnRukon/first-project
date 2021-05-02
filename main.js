const sceondId = document.querySelector('.sceond');
const minuteId = document.querySelector('.minute');
const hourseId = document.querySelector('.hours');

let sceondCount = 0;
let minuteCount = 0;
let hoursCount  = 0;


function sceondChange() {
	if(sceondCount <10){
		sceondId.innerText = '0' + sceondCount;
	}else{
		sceondId.innerText =  sceondCount;
	}
	 
	  if (sceondCount == 60) {
	 	minuteCount +=1;
	 	if(minuteCount <10){
	 		minuteId.innerText ='0' + minuteCount;
	 	}else{ 
	 		minuteId.innerText = minuteCount;
	 	}
	 	sceondCount = 0;
	 }
 
	 if(minuteCount == 60){
	 	hoursCount+=1;
	 	minuteCount = 0;
	 	if (hoursCount<10) {
	 		hourseId.innerText = '0' + hoursCount;
	 	}else{
	 		hourseId.innerText = hoursCount;
	 	}
	 }
	
	sceondCount += 1;
}

setInterval(sceondChange, 1000)
sceondChange();