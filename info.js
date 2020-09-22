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





    
    let number=/^([0-9]{0,2})[0-9]/;
    let email=/([a-z])([.]?[a-z])*@(ashesi.edu.gh)$/;
    let addres=/0-9a-zA-Z ]/;
    let first=document.getElementById("f_name").value;
    let middle=document.getElementById("m_name").value;
    let last=document.getElementById("l_name").value;
    let phone=document.getElementById("mynum").value;
    let mail=document.getElementById("mymail").value;
    let postal=document.getElementById("myadd").value;

function validatefName(){
    let pattern=/a-zA-z\s-/;
    if(first.match(pattern)){
        document.getElementById("First_em").innerHTML= "Good!";
        return true;
    }
    else{
        document.getElementById("First_em").innerHTML = "Name can only contain alphabets(A-Z)";
        return false;
        }
    
    }

function validatemName(){
    let pattern=/a-zA-z\s-/;
    if(middle.match(pattern)){
        document.getElementById("Middle_em").style.display = "none";
        return true;
    }
    else{
        document.getElementById("Middle_em").style.display = "Name can only contain alphabets(A-Z)";
        return false;
    }
}

function validatelName(){
    let pattern=/a-zA-z\s-/;
    if(last.match(pattern)){
        document.getElementById("Last_em").innerHTML = "Good!";
        return true;
    }
    else{
        document.getElementById("Last_em").style.display = "Name can only contain alphabets(A-Z)";
        return false;
    }
}




function validate(){
    if(validatefName()){
        if(validatemName()){
            if(validatelName()){
                

            }
        }
    }
    return true;
}

    

    // if(!phone.match(number)){
    //     document.getElementById("number_em").style.display = "inline";
    //     return false;
    // }
    // if(!mail.match(mail)){
    //     document.getElementById("mail_em").style.display = "inline";
    //     return false;
    // }
    // if(!postal.match(addres)){
    //     document.getElementById("address_em").style.display = "inline";
    //     return false;
    // }

    // else{
        
        
        
    //     if(phone.match(number)){
    //         document.getElementById("number_em").style.display = "none";
    //         return true;
    //     }
    //     if(mail.match(email)){
    //         document.getElementById("mail_em").style.display = "none";
    //         return true;
    //     }
    //     if(postal.match(address)){
    //         document.getElementById("address_em").style.display = "none";
    //         return true;
    //     }

    // }
