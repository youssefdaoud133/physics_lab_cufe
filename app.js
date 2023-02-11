const g = console.log
const shroot = document.querySelector(".shroot");
shroot.onclick = () => {
    console.log("hello world");
    const shrttwo = document.querySelector(".shrttwo");
    const shrtone = document.querySelector(".shrtone");
    const shrtthree = document.querySelector(".shrtthree");
    const leftcont = document.querySelector(".leftcont");
    const rightcont = document.querySelector(".rightcont");
    const ex = document.querySelector(".ex");
    leftcont.classList.add("morewidth");
    rightcont.classList.add("lesswidth");
    ex.classList.add("fgaa");

    getAllConnectedUsers();
}
const ex = document.querySelector(".ex");
ex.onclick = () => {
    console.log("hello world");

    let leftcont = document.querySelector(".leftcont");
    const rightcont = document.querySelector(".rightcont");
    const ex = document.querySelector(".ex");
    leftcont.classList.remove("morewidth");
    rightcont.classList.remove("lesswidth");
    ex.classList.remove("fgaa");
    if (leftcont.childNodes.length > 1) {
        let i;
        for (i = 0; i < leftcont.childNodes.length - 1; i++) {
            let del = document.querySelector(".useronline");
            del.remove();
        }

    } else {
        del.remove();
    }
}
// bhgt tanyyy 5als
// const l = document.querySelectorAll("D1"
let n = 3.0;
function sumd(t){
    let sumd = 0;
let counter;
for (counter = 1; counter <=n ; counter++){
    sumd+=parseFloat(document.querySelectorAll(`.${t}${counter}`)[0].value);
    
};
return sumd;
}
function sume(t){
    let sumd = 0;
let counter;
for (counter = 1; counter <=n ; counter++){
    sumd+=parseFloat(document.querySelectorAll(`.${t}${counter}`)[0].innerHTML);
    
};
return sumd;
}
g(document.querySelectorAll(".sod"))
startbtn=document.querySelectorAll(`.btn-outline-primary`)[0]
startbtn.onclick = () =>{
    document.querySelectorAll(".sod")[0].innerHTML = (sumd("D")/n);
    document.querySelectorAll(".sol")[0].innerHTML = ((sumd("L")/n));
    document.querySelectorAll(".som")[0].innerHTML = ((sumd("M")/n));
    for (counter = 1; counter <=n ; counter++){

        document.querySelectorAll(`.de${counter}`)[0].innerHTML = Math.abs((sumd("D")/n)-parseFloat(document.querySelectorAll(`.D${counter}`)[0].value));
        document.querySelectorAll(`.le${counter}`)[0].innerHTML = Math.abs((sumd("L")/n)-parseFloat(document.querySelectorAll(`.L${counter}`)[0].value));
        document.querySelectorAll(`.me${counter}`)[0].innerHTML = Math.abs((sumd("M")/n)-parseFloat(document.querySelectorAll(`.M${counter}`)[0].value));
        document.querySelectorAll(`.avgd`)[0].innerHTML = (sume("de")/n);
        document.querySelectorAll(`.avgl`)[0].innerHTML = (sume("le")/n);
        document.querySelectorAll(`.avgm`)[0].innerHTML = (sume("me")/n);
        // let pd =(4*(sumd("M")/n))/(3.14*((sumd("D")/n))*((sumd("D")/n))*((sumd("L")/n)))
        // document.querySelectorAll(`.pd`)[0].innerHTML = pd;
        // let dm = Math.abs((sumd("M")/n)-parseFloat(document.querySelectorAll(`.M${counter}`)[0].value))
        // document.querySelectorAll(`.dpd`)[0].innerHTML = pd(((dm)/())+()+());
        
        
    };
    
    /////////////////////////////////////////
    let l =parseFloat(document.querySelectorAll(`.sol`)[0].innerHTML) ;
    let d =parseFloat(document.querySelectorAll(`.sod`)[0].innerHTML );
    let m =parseFloat(document.querySelectorAll(`.som`)[0].innerHTML);
    let dl =parseFloat(document.querySelectorAll(`.avgl`)[0].innerHTML) ;
    let dd =parseFloat(document.querySelectorAll(`.avgd`)[0].innerHTML );
    let dm =parseFloat(document.querySelectorAll(`.avgm`)[0].innerHTML);
    let zel =parseFloat(document.querySelectorAll(`.zel`)[0].value) ;
    let zed =parseFloat(document.querySelectorAll(`.zed`)[0].value );
    let zem =parseFloat(document.querySelectorAll(`.zem`)[0].value);
    let pd =(4*(m-zem)/(3.14*(d-zed)*(d-zed)*(l-zel)))
    document.querySelectorAll(`.pd`)[0].innerHTML = pd;
    
    g(zel)
    g(zem)
    g(m)
    g(dl)
    g(dm)
    g(dd)
   
    // document.querySelectorAll(`.pd`)[0].innerHTML = pd;
   
    //////////////////////////////////
    // let dm = Math.abs((sumd("M")/n)-parseFloat(document.querySelectorAll(`.M${counter}`)[0].value))
    let firstterm =2*Math.abs((dd)/(d))
    let secondterm=Math.abs((dl)/(l))
    let thiedterm=Math.abs((dm)/(m))
    document.querySelectorAll(`.dpd`)[0].innerHTML = pd*(firstterm+secondterm+thiedterm);
    
    
}
let btnreset =document.querySelectorAll(`.btnreset`)[0]
btnreset.onclick =() =>{
    document.querySelectorAll(`.sol`)[0].innerHTML =0
    document.querySelectorAll(`.sod`)[0].innerHTML =0;
    document.querySelectorAll(`.som`)[0].innerHTML=0;
    document.querySelectorAll(`.avgl`)[0].innerHTML =0;
    document.querySelectorAll(`.avgd`)[0].innerHTML =0;
    document.querySelectorAll(`.avgm`)[0].innerHTML=0;
    document.querySelectorAll(`.zel`)[0].value =0;
    document.querySelectorAll(`.zed`)[0].value =0;
    document.querySelectorAll(`.zem`)[0].value =0;
    function sumd(t){
        
    let counter;
    for (counter = 1; counter <=n ; counter++){
       document.querySelectorAll(`.${t}${counter}`)[0].value=0
        
    };
    }
    sumd("L")
    sumd("D")
    sumd("M")
    document.querySelectorAll(`.pd`)[0].innerHTML =0
    document.querySelectorAll(`.dpd`)[0].innerHTML =0
}