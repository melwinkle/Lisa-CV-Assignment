
 
    let first=document.getElementById("f_name").value;
    let middle=document.getElementById("m_name").value;
    let last=document.getElementById("l_name").value;
    let phone=document.getElementById("mynum").value;
    let mail=document.getElementById("mymail").value;
    let postal=document.getElementById("myadd").value;
    let form=document.getElementById("form-info");

function finaldata(){
   
    validate();
    passvalue();

}
 


function validate(){
    if (valid_fname()) {
		
    if (valid_mname() ){
    if (valid_lname()) {
		
    if (valid_number()) {
    
    if (valid_post()) {
    if (valid_mail()) {
    }}}}}
    }
    return true; 
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



function valid_mail(){
    let pat_mail=/([a-z])([.]?[a-z])*@(ashesi.edu.gh)$/;
    if(mail.match(pat_mail)){
        return true;
    }
    else{
        document.getElementById("mail_em").style.display = "inline";
        return false;
    }
}

function valid_post(){
    let pat_post=/0-9a-zA-Z ]/;
    if(postal.match(pat_post)){
        return true;
    }

}
function valid_number(){
    let pat_num= /^([0-9]{0,2})[0-9]/;
    if(phone.match(pat_num)){
        return true;
    }
}
function valid_fname(){
    let pat_name=/a-zA-z\s-/;
    if(first.match(pat_name)){
        return true;
    }
}
function valid_mname(){
    let pat_name=/a-zA-z\s-/;
    if(middle.match(pat_name)){
        return true;
    }
}
function valid_lname(){
    let pat_name=/a-zA-z\s-/;
    if(last.match(pat_name)){
        return true;
    }
}
    
   
        
        
    