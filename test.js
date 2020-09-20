
    function handleSubmit(){
        checkData();
        passvalue();
    }


    function checkData(){
       if(BlurFName()){
           if(BlurMName()){
               if(BlurLName()){
                   if(checkGender()){
                       if(BlurAddress()){
                           if(BlurMail()){
                               if(BlurPhone()){
                                document.getElementById("Valid").style.display="inline";
                               }
                           }
                       }
                   }
               }
           }
       }
        return false;

    };

    function checkNumber(){
        let num_len=/^[0-9]+$/;
        let phonenum=document.getElementById("mynum");
        if(!phonenum.value.match(num_len)){
            document.getElementById("number_em").style.display = "inline";
            return true;
        }
    };

        function BlurPhone(){
            let num_len=/^[0-9]+$/;
            let phonenum=document.getElementById("mynum");
            if(phonenum.value.match(num_len)){
                document.getElementById("number_em").style.display = "none";
            return false;
        }
    };


    function checkFName(){
        let name_len=/^[A-Za-z]+$/;
        let fname= document.getElementById("f_name");
        if(!fname.value.match(name_len)){
            document.getElementById("First_em").style.display = "inline";
            return true;
        } 
    };
    function BlurFName(){   
        let name_len=/^[A-Za-z]+$/;
        let fname= document.getElementById("f_name");

        if(fname.value.match(name_len)){
            document.getElementById("First_em").style.display = "none";
            return false;
        }
    
};

    function checkMName(){
        let name_len=/^[A-Za-z]+$/;
        let mname= document.getElementById("m_name");
            if(!mname.value.match(name_len)){
                document.getElementById("Middle_em").style.display = "inline";
                return true;
            }
        };
        function BlurMName(){
            let name_len=/^[A-Za-z]+$/;
            let mname= document.getElementById("m_name");
                if(mname.value.match(name_len)){
                    document.getElementById("Middle_em").style.display = "none";
                return false;
            }
        };

    function checkLName(){
        let name_len=/^[A-Za-z]+$/;
        let lname= document.getElementById("l_name");
        if(!lname.value.match(name_len)){
            lname.className=lname.className + "field-red";
            document.getElementById("Surname_em").style.display = "inline";
            return;
        }
    };

    function BlurLName(){
        let name_len=/^[A-Za-z]+$/;
        let lname= document.getElementById("l_name");
        if(lname.value.match(name_len)){
            lname.className=lname.className.replace("field-red","");
            document.getElementById("Surname_em").style.display = "none";
            return;     
                }
               
    };


    function CheckAddress(){
        let addr_len=/^[0-9a-zA-Z]+$/;
        let address=document.getElementById("myadd");
        if(!address.value.match(addr_len)){
            document.getElementById("address_em").style.display = "inline";
            return true;
        }
    };

    function BlurAddress(){
        let addr_len=/^[0-9a-zA-Z]+$/;
        let address=document.getElementById("myadd");
          if(address.value.match(addr_len)){
            document.getElementById("address_em").style.display = "none";
            return;
          }
        };
   

    function checkEmail(){
        let mail_len=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let mail=document.getElementById("mymail");
        if(!mail.value.match(mail_len)){
            document.getElementById("mail_em").style.display = "inline";
            return true;
        }
    };
        function BlurMail(){
            let mail=document.getElementById("mymail");
            let mail_len=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(mail.value.match(mail_len)){
            document.getElementById("mail_em").style.display = "none";
        return false;
            
        }
    }


    function checkGender(){
        let gender=document.getElementById("gender");
        if(gender.value=="Select an Option"){
            document.getElementById("gender_em").style.display = "inline";
            return false;
        }
        else{
            document.getElementById("gender_em").style.display = "none";
            return true;
            }
    };

   
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


