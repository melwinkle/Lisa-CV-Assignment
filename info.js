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


function validate(){
    let pattern=/a-zA-z /;
    let first=document.getElementById("f_name").value;

    if(!first.match(pattern)){
        document.getElementById("First_em").style.display = "inline";
        return false;
    }
    else{
        document.getElementById("First_em").style.display = "none";
        return true;
    }
}