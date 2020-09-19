function passvalue(){
    let fname=document.getElementById("f_name").value;
    let mname=document.getElementById("m_name").value;
    let lname=document.getElementById("l_name").value;
    let address=document.getElementById("myadd").value;
    let mygen=document.getElementById("gender").value;
    let email=document.getElementById("mymail").value;
    let num=document.getElementById("mynum").value;



    sessionStorage.setItem("first",fname);
    sessionStorage.setItem("middle",mname);
    sessionStorage.setItem("last",lname);
    sessionStorage.setItem("gender",mygen);
    sessionStorage.setItem("address",address);
    sessionStorage.setItem("number",num);
    sessionStorage.setItem("email",email);
    
    return false;

}


