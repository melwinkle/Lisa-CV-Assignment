function checkData(){
    if(checkFName()){
        if(checkMName()){
            if(checkLName()){
                if(checkNumber()){
                    if(checkEmail()){
                        if(CheckAddress()){

                        }
                    }
                }
            }
        }
    }
    return false;
}


function handlesubmit(){
    checkData();
    passvalue();
}


/*
Function to check if the number inputted is valid when the input is focused
*/
    function checkNumber(){
        let num_len=/^[0-9]+$/;
        let phonenum=document.getElementById("mynum");
        if(!phonenum.value.match(num_len)){
            document.getElementById("number_em").style.display = "inline";
            return true;
        }
    };

/*
Function to check if the number inputted is valid when the input is blurred
*/

        function BlurPhone(){
            let num_len=/^[0-9]+$/;
            let phonenum=document.getElementById("mynum");
            if(phonenum.value.match(num_len)){
                document.getElementById("number_em").style.display = "none";
            return false;
        }
    };

/*
Function to check if the name inputted is valid when the input is focused
*/

    function checkFName(){
        let name_len=/^[A-Za-z\s]+$/;
        let fname= document.getElementById("f_name");
        if(!fname.value.match(name_len)){
            document.getElementById("First_em").style.display = "inline";
            return true;
        } 
    };

/*
Function to check if the name inputted is valid when the input is blurred
*/
    function BlurFName(){   
        let name_len=/^[A-Za-z\s]+$/;
        let fname= document.getElementById("f_name");

        if(fname.value.match(name_len)){
            document.getElementById("First_em").style.display = "none";
            return false;
        }
    
};

/*
Function to check if the name inputted is valid when the input is focused
*/

function checkMName(){
    let name_len=/^[A-Za-z\s]+$/;
    let mname= document.getElementById("m_name");
    if(!mname.value.match(name_len)){
        document.getElementById("Middle_em").style.display = "inline";
    return true;
    }
};

/*
Function to check if the name inputted is valid when the input is blurred
*/
        function BlurMName(){
            let name_len=/^[A-Za-z\s\s]+$/;
            let mname= document.getElementById("m_name");
                if(mname.value.match(name_len)){
                    document.getElementById("Middle_em").style.display = "none";
                return false;
            }
        };
/*
Function to check if the name inputted is valid when the input is focused
*/
    function checkLName(){
        let name_len=/^[A-Za-z\s]+$/;
        let lname= document.getElementById("l_name");
        if(!lname.value.match(name_len)){
            lname.className=lname.className + "field-red";
            document.getElementById("Surname_em").style.display = "inline";
            return;
        }
    };

/*
Function to check if the name inputted is valid when the input is blurred
*/

    function BlurLName(){
        let name_len=/^[A-Za-z\s]+$/;
        let lname= document.getElementById("l_name");
        if(lname.value.match(name_len)){
            lname.className=lname.className.replace("field-red","");
            document.getElementById("Surname_em").style.display = "none";
            return;     
                }
               
    };
/*
Function to check if the address inputted is valid when the input is focused
*/

    function CheckAddress(){
        let addr_len=/^[0-9a-zA-Z\s]+$/;
        let address=document.getElementById("myadd");
        if(!address.value.match(addr_len)){
            document.getElementById("address_em").style.display = "inline";
            return true;
        }
    };
/*
Function to check if the address inputted is valid when the input is blurred
*/
    function BlurAddress(){
        let addr_len=/^[0-9a-zA-Z\s]+$/;
        let address=document.getElementById("myadd");
          if(address.value.match(addr_len)){
            document.getElementById("address_em").style.display = "none";
            return;
          }
        };
   
/*
Function to check if the email inputted is valid when the input is focused
*/
    function checkEmail(){
        let mail_len=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let mail=document.getElementById("mymail");
        if(!mail.value.match(mail_len)){
            document.getElementById("mail_em").style.display = "inline";
            return true;
        }
    };

/*
Function to check if the email inputted is valid when the input is blurred
*/
        function BlurMail(){
            let mail=document.getElementById("mymail");
            let mail_len=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(mail.value.match(mail_len)){
            document.getElementById("mail_em").style.display = "none";
        return false;
            
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


