
 
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
		Error(first ,'Name must contain only alphabets(A-Z)');
	} else {
		Valid(first);
    }
    
    if (!valid_name(middle)) {
		Error(middle ,'Name must contain only alphabets(A-Z)');
	} else {
		Valid(middle);
    }
    
    if (!valid_name(last)) {
		Error(last ,'Name must contain only alphabets(A-Z)');
	} else {
		Valid(last);
    }
    

    if (!valid_number(phone)) {
		Error(phone ,'Numeric values only');
	} else {
		Valid(phone);
    }
    
    if (!valid_post(postal)) {
		Error(postal ,'Invalid Address');
	} else {
		Valid(postal);
	}
    if (!valid_mail(mail)) {
		Error(mail, 'Not a valid Ashesi email');
	} else {
		Valid(mail);
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
    return /([a-z])([.]?[a-z])*@(ashesi.edu.gh)$/.test(mail);
}

function valid_post(postal){
    return /0-9a-zA-Z ]/.test(postal);
}
function valid_number(numb){
    return /^([0-9]{0,2})[0-9]/.test(numb);
}
function valid_name(name){
    return /a-zA-z\s-/.test(name);
}
    
function Error(input, message) {
	let formControl = input.parentElement;
	let small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function Valid(input) {
	let formControl = input.parentElement;
	formControl.className = 'form-control success';
}    
        
        
    