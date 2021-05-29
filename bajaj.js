
var res=0,com=0,tru=0,cus=0,res_bt="",com_bt="",tru_bt="",cus_bt="";

function changeColor(bt){
	
	res=1;
	if(bt==1)
	{
		document.getElementById("bt1").style.backgroundColor="#ff0000";  
		document.getElementById("bt2").style.backgroundColor="#808080";
		document.getElementById("bt3").style.backgroundColor="#808080";
		document.getElementById("bt4").style.backgroundColor="#808080";
		document.getElementById("bt5").style.backgroundColor="#808080";
		res_bt=bt1;
	}
	else if(bt==2)
	{
		document.getElementById("bt1").style.backgroundColor="#ff6600";
		document.getElementById("bt2").style.backgroundColor="#ff6600";
		document.getElementById("bt3").style.backgroundColor="#808080";
		document.getElementById("bt4").style.backgroundColor="#808080";
		document.getElementById("bt5").style.backgroundColor="#808080";
		res_bt=bt2;
		
	}
	else if(bt==3)
	{
		document.getElementById("bt1").style.backgroundColor="#ff0";
		document.getElementById("bt2").style.backgroundColor="#ff0";
		document.getElementById("bt3").style.backgroundColor="#ff0";
		document.getElementById("bt4").style.backgroundColor="#808080";
		document.getElementById("bt5").style.backgroundColor="#808080";
		res_bt=bt3;
		
	}
	else if(bt==4)
	{
		document.getElementById("bt1").style.backgroundColor="#00cc44";
		document.getElementById("bt2").style.backgroundColor="#00cc44";
		document.getElementById("bt3").style.backgroundColor="#00cc44";
		document.getElementById("bt4").style.backgroundColor="#00cc44";
		document.getElementById("bt5").style.backgroundColor="#808080";
		res_bt=bt4;

	}
	else
	{
		document.getElementById("bt1").style.backgroundColor="#004d00";
		document.getElementById("bt2").style.backgroundColor="#004d00";
		document.getElementById("bt3").style.backgroundColor="#004d00";
		document.getElementById("bt4").style.backgroundColor="#004d00";
		document.getElementById("bt5").style.backgroundColor="#004d00";
		res_bt=bt5;
	}
	if((res==1)&&(com==1)&&(tru==1)&&(cus==1)){
		nextbt();
	}
	}

	function changeColor2(bt){
	com=1;
	if(bt==1)
	{
		document.getElementById("bt6").style.backgroundColor="#ff0000";  
		document.getElementById("bt7").style.backgroundColor="#808080";
		document.getElementById("bt8").style.backgroundColor="#808080";
		document.getElementById("bt9").style.backgroundColor="#808080";
		document.getElementById("bt10").style.backgroundColor="#808080";
		com_bt=bt6;
	}
	else if(bt==2)
	{
		document.getElementById("bt6").style.backgroundColor="#ff6600";
		document.getElementById("bt7").style.backgroundColor="#ff6600";
		document.getElementById("bt8").style.backgroundColor="#808080";
		document.getElementById("bt9").style.backgroundColor="#808080";
		document.getElementById("bt10").style.backgroundColor="#808080";
		com_bt=bt7;
	}
	else if(bt==3)
	{
		document.getElementById("bt6").style.backgroundColor="#ff0";
		document.getElementById("bt7").style.backgroundColor="#ff0";
		document.getElementById("bt8").style.backgroundColor="#ff0";
		document.getElementById("bt9").style.backgroundColor="#808080";
		document.getElementById("bt10").style.backgroundColor="#808080";
		com_bt=bt8;
		
	}
	else if(bt==4)
	{
		document.getElementById("bt6").style.backgroundColor="#00cc44";
		document.getElementById("bt7").style.backgroundColor="#00cc44";
		document.getElementById("bt8").style.backgroundColor="#00cc44";
		document.getElementById("bt9").style.backgroundColor="#00cc44";
		document.getElementById("bt10").style.backgroundColor="#808080";
		com_bt=bt9;

	}
	else
	{
		document.getElementById("bt6").style.backgroundColor="#004d00";
		document.getElementById("bt7").style.backgroundColor="#004d00";
		document.getElementById("bt8").style.backgroundColor="#004d00";
		document.getElementById("bt9").style.backgroundColor="#004d00";
		document.getElementById("bt10").style.backgroundColor="#004d00";
		com_bt=bt10;
	}

	if((res==1)&&(com==1)&&(tru==1)&&(cus==1)){
		nextbt();
	}
	}


function changeColor3(bt){
	tru=1;
	if(bt==1)
	{
		document.getElementById("bt11").style.backgroundColor="#ff0000";  
		document.getElementById("bt12").style.backgroundColor="#808080";
		document.getElementById("bt13").style.backgroundColor="#808080";
		document.getElementById("bt14").style.backgroundColor="#808080";
		document.getElementById("bt15").style.backgroundColor="#808080";
		tru_bt=bt11;
	}
	else if(bt==2)
	{
		document.getElementById("bt11").style.backgroundColor="#ff6600";
		document.getElementById("bt12").style.backgroundColor="#ff6600";
		document.getElementById("bt13").style.backgroundColor="#808080";
		document.getElementById("bt14").style.backgroundColor="#808080";
		document.getElementById("bt15").style.backgroundColor="#808080";
		tru_bt=bt12;
	}
	else if(bt==3)
	{
		document.getElementById("bt11").style.backgroundColor="#ff0";
		document.getElementById("bt12").style.backgroundColor="#ff0";
		document.getElementById("bt13").style.backgroundColor="#ff0";
		document.getElementById("bt14").style.backgroundColor="#808080";
		document.getElementById("bt15").style.backgroundColor="#808080";
		tru_bt=bt13;
		
	}
	else if(bt==4)
	{
		document.getElementById("bt11").style.backgroundColor="#00cc44";
		document.getElementById("bt12").style.backgroundColor="#00cc44";
		document.getElementById("bt13").style.backgroundColor="#00cc44";
		document.getElementById("bt14").style.backgroundColor="#00cc44";
		document.getElementById("bt15").style.backgroundColor="#808080";
		tru_bt=bt14;

	}
	else
	{
		document.getElementById("bt11").style.backgroundColor="#004d00";
		document.getElementById("bt12").style.backgroundColor="#004d00";
		document.getElementById("bt13").style.backgroundColor="#004d00";
		document.getElementById("bt14").style.backgroundColor="#004d00";
		document.getElementById("bt15").style.backgroundColor="#004d00";
		tru_bt=bt15;
	}

	if((res==1)&&(com==1)&&(tru==1)&&(cus==1)){
		nextbt();
	}
	}

	function changeColor4(bt){
	cus=1;
	if(bt==1)
	{
		document.getElementById("bt16").style.backgroundColor="#ff0000";  
		document.getElementById("bt17").style.backgroundColor="#808080";
		document.getElementById("bt18").style.backgroundColor="#808080";
		document.getElementById("bt19").style.backgroundColor="#808080";
		document.getElementById("bt20").style.backgroundColor="#808080";
		cus_bt=bt16;
	}
	else if(bt==2)
	{
		document.getElementById("bt16").style.backgroundColor="#ff6600";
		document.getElementById("bt17").style.backgroundColor="#ff6600";
		document.getElementById("bt18").style.backgroundColor="#808080";
		document.getElementById("bt19").style.backgroundColor="#808080";
		document.getElementById("bt20").style.backgroundColor="#808080";
		cus_bt=bt17;
	}
	else if(bt==3)
	{
		document.getElementById("bt16").style.backgroundColor="#ff0";
		document.getElementById("bt17").style.backgroundColor="#ff0";
		document.getElementById("bt18").style.backgroundColor="#ff0";
		document.getElementById("bt19").style.backgroundColor="#808080";
		document.getElementById("bt20").style.backgroundColor="#808080";
		cus_bt=bt18;
		
	}
	else if(bt==4)
	{
		document.getElementById("bt16").style.backgroundColor="#00cc44";
		document.getElementById("bt17").style.backgroundColor="#00cc44";
		document.getElementById("bt18").style.backgroundColor="#00cc44";
		document.getElementById("bt19").style.backgroundColor="#00cc44";
		document.getElementById("bt20").style.backgroundColor="#808080";
		cus_bt=bt19;

	}
	else
	{
		
		document.getElementById("bt16").style.backgroundColor="#004d00";
		document.getElementById("bt17").style.backgroundColor="#004d00";
		document.getElementById("bt18").style.backgroundColor="#004d00";
		document.getElementById("bt19").style.backgroundColor="#004d00";
		document.getElementById("bt20").style.backgroundColor="#004d00";
		cus_bt=bt20;

	}


	if((res==1)&&(com==1)&&(tru==1)&&(cus==1)){
		nextbt();
	}

	}
	

	function nextbt() {
		
			document.getElementById("next").disabled = false; 
			
		
}

function msg(){
	
	console.log("Responsiveness:"+res_bt.name);
	console.log("Competency in advising right solutions:"+com_bt.name);
	console.log("Trustworthiness:"+tru_bt.name);
	console.log("Customer service and support:"+cus_bt.name);
}




