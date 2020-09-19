window.addEventListener('load',()=>{

    document.getElementById('fame').innerHTML=sessionStorage.getItem("first");
    document.getElementById('mame').innerHTML=sessionStorage.getItem("middle");
    document.getElementById('lame').innerHTML=sessionStorage.getItem("last");
    document.getElementById('address-res').innerHTML=sessionStorage.getItem("address");
    document.getElementById('gender-res').innerHTML=sessionStorage.getItem("gender");
    document.getElementById('number-res').innerHTML=sessionStorage.getItem("number");
    document.getElementById('mail-res').innerHTML=sessionStorage.getItem("email");
    
})



