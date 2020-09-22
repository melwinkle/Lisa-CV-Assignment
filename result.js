window.addEventListener('load',()=>{

    document.getElementById('fame').innerHTML=localStorage.getItem("first")+localStorage.getItem("middle")+localStorage.getItem("last");
    // document.getElementById('mame').innerHTML=localStorage.getItem("middle");
    // document.getElementById('lame').innerHTML=localStorage.getItem("last");
    document.getElementById('address-res').innerHTML=localStorage.getItem("address");
    document.getElementById('gender-res').innerHTML=localStorage.getItem("gender");
    document.getElementById('number-res').innerHTML=localStorage.getItem("number");
    document.getElementById('mail-res').innerHTML=localStorage.getItem("email");
    
})



