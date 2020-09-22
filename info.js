
 
    let first=document.getElementById("f_name").value;
    let middle=document.getElementById("m_name").value;
    let last=document.getElementById("l_name").value;
    let phone=document.getElementById("mynum").value;
    let mail=document.getElementById("mymail").value;
    let postal=document.getElementById("myadd").value;
    let form=document.getElementById("form-info").value;

form.addEventListener('submit',e =>{
    e.preventdefault();
    validate();
    passvalue();

})



function validate(){
    if (!valid_name(first)) {
		setErrorFor(first ,'Name must contain only alphabets(A-Z)');
	} else {
		setSuccessFor(first);
    }
    
    if (!valid_name(middle)) {
		setErrorFor(middle ,'Name must contain only alphabets(A-Z)');
	} else {
		setSuccessFor(middle);
    }
    
    if (!valid_name(last)) {
		setErrorFor(last ,'Name must contain only alphabets(A-Z)');
	} else {
		setSuccessFor(last);
    }
    

    if (!valid_number(phone)) {
		setErrorFor(phone ,'Numeric values only');
	} else {
		setSuccessFor(phone);
    }
    
    if (!valid_post(postal)) {
		setErrorFor(postal ,'Invalid Address');
	} else {
		setSuccessFor(postal);
	}
    if (!valid_mail(mail)) {
		setErrorFor(mail, 'Not a valid Ashesi email');
	} else {
		setSuccessFor(mail);
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
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function Valid(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}    
        
        
    