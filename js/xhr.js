//Declarando variaveis globais
var xhr;
var txt ;
 
function ajax(){
//Verificando se os browsers aceitam o objeto XMLHttpRequest
if(window.XMLHttpRequest){
xhr  = new XMLHttpRequest();
}
//Verificando se o browser IE vers�o > 6
else if(window.ActiveXObject){
try{
xhr = new ActiveXObject(Msxml2.XMLHTTP);
}
catch(e){
try{
xhr =  new ActiveXObject(Microsoft.XMLHTTP);
}
catch(er){
txt = "Seu browser n�o aceita AJAX!";
alert(txt);
}
}
}
return xhr;
}