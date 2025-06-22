let type= new Typed(".text-cng",{
    strings:["veloper","signer"],
    typeSpeed:100,
    backSpeed:130,
    loop:true
});

let bars = document.querySelector("#about-me")
let clicker=bars.querySelectorAll("ul li")
let changer=bars.querySelectorAll(".changer")

let blog=document.getElementById("blog")
let buttons=blog.getElementsByTagName("button")
let blogBlock=blog.querySelectorAll(".col-lg-4")

buttons[0].addEventListener("click",()=>{
    blogBlock.forEach(ele=>{
       if (ele.style.display === "block") {
      ele.style.removeProperty('display')
      buttons[0].textContent="View More"
    } else {
      ele.style.display = "block"
      buttons[0].textContent="View Less"
    }
    })
})


let nav=document.querySelector("nav")
let head=document.querySelector("header")
let turn=false
window.addEventListener("scroll",()=>{
if (window.scrollY > head.offsetHeight-400 && !turn) {
    nav.classList.add("bg-dark");
    nav.classList.remove("bg-transparent");
    turn = true;
  } else if (window.scrollY <= head.offsetHeight && turn) {
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-transparent");
    turn = false;
  }})




clicker.forEach((rel,i)=>{
    rel.addEventListener("click",()=>{
        changer.forEach(rel=>{rel.classList.remove("activa")})
        changer[i].classList.add("activa")
        if(i==2)
        {
            scroll()
        }
    })
})

function scroll()
{
    let scrolls = bars.querySelectorAll(".progress-bar")
let srm = [88, 77, 72]
scrolls.forEach(scroll => {
    scroll.style.width = "0%";
  })

for (let i = 0; i < scrolls.length; i++) {
  setTimeout(() => {
    scrolls[i].style.width = srm[i] + "%";
  }, 250*i); // adjust the delay as needed
}
}

function creator(sub_body, errors)
{
    let old=sub_body.querySelector("ul")
        if (old)
        {
            old.remove()
        }
   if(errors.length>0)
   {
      let disc=document.createElement("ul")
            disc.style.width="100%"
            disc.style.padding="100px"
            disc.style.marginTop="80px"
            disc.style.boxShadow="5px 5px 10px  #f5f5f5"
            sub_body.append(disc)
            errors.forEach(ele=>{
                let self=document.createElement("li")
                self.innerHTML=ele
                disc.append(self)
            })
   }
}


let formControl=document.querySelector("#contactForm")

let FormButton=formControl.querySelector("button");

formControl.addEventListener("submit",(e)=>{
  e.preventDefault();
  let names=formControl.querySelector("#named").value;
let EMail=formControl.querySelector("#EMail").value;
let Subject=formControl.querySelector("#Subs").value;
let Tex=formControl.querySelector("#Texm").value;
  let err=[]
  if(names.length<4)
  {
    err.push("Name Too Short")
  }
  if(EMail.length<10|| !EMail.includes("@"))
  {
    err.push("Email Is Invalid")
  }
  if(Subject.length<5)
  {
    err.push("Can't Be Too Short Subject")
  }
  if(Tex.length<6)
  {
    err.push("Too Short Message")
  }
  creator(formControl,err)
  if(err.length===0)
  {
    alert("Done")
    formControl.reset();
  }
})






