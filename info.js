
 
    let first=document.getElementById("f_name").value;
    let middle=document.getElementById("m_name").value;
    let last=document.getElementById("l_name").value;
    let phone=document.getElementById("mynum").value;
    let mail=document.getElementById("mymail").value;
    let postal=document.getElementById("myadd").value;
    let form=document.getElementById("form-info");

form.addEventListener('submit',e =>{
    e.preventdefault();
    validate();
    passvalue();

});
 


function validate(){
    if (!valid_name(first)) {
		alert("Error");
	} 
    
    if (!valid_name(middle)) {
		alert("Error!");
	} 
    if (!valid_name(last)) {
		alert("Error!");
	} 
    

    if (!valid_number(phone)) {
		alert("error!");
	} 
    
    if (!valid_post(postal)) {
		alert("Error!")
	} 
    if (!valid_mail(mail)) {
		alert("error!");
	} 
}


 /*
Function to set the values in the form and store them locally
*/

   
function passvalue(){
    let fname=document.getElementById("f_name").value;
    let mname=document.getElementById("m_name").value;
    let lname=document.getElementById("l_name").value;
    let address=document.getElementById("myadd").value;
    let mygen=document.getElementById("gender").value;
    let email=document.getElementById("mymail").value;
    let num=document.getElementById("mynum").value;


localStorage.setItem("first",fname);
localStorage.setItem("middle",mname);
localStorage.setItem("last",lname);
localStorage.setItem("gender",mygen);
localStorage.setItem("address",address);
localStorage.setItem("number",num);
localStorage.setItem("email",email);

return false;

}



function valid_mail(mail){
    let pat_mail=/([a-z])([.]?[a-z])*@(ashesi.edu.gh)$/;
    if(mail.match(pat_mail)){
        return true;
    }
}

function valid_post(postal){
    let pat_post=/0-9a-zA-Z ]/;
    if(postal.match(pat_post)){
        return true;
    }

}
function valid_number(numb){
    let pat_num= /^([0-9]{0,2})[0-9]/;
    if(numb.match(pat_num)){
        return true;
    }
}
function valid_name(name){
    let pat_name=/a-zA-z\s-/;
    if(name.match(pat_name)){
        return true;
    }
}
    
function Error(input) {
	input.className=input.className.replace("field-red");
}

function Valid(input) {
	input.className=input.className.replace("field-red","field-green");
}    
        
        
    