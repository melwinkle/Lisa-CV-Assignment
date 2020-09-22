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


/*
Function to check name 
*/
function ValFName(){
    let pattern=/A-aZ-z\s/;
    let first=document.getElementById("f_name");
    if(first.value.match(pattern)){
        document.getElementById("First_em").style.display = "none";
        return true;
    }
    else{
        document.getElementById("First_em").style.display = "inline";
        return false;
    }
}

/*
Function to validate the data
*/
function ValData(){
    if(ValFName()){
        passvalue();
    }
    else{
        window.alert("Invalid Fields");
    }
}
