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
    } else {
      ele.style.display = "block"
    }
    })
})

clicker.forEach((rel,i)=>{
    rel.addEventListener("click",()=>{
        changer.forEach(rel=>{rel.classList.remove("active")})
        changer[i].classList.add("active")
        if(i==2)
        {
            scroll()
        }
    })
})

function scroll()
{
    let scrolls = bars.querySelectorAll(".progress-bar")
let srm = [85, 75, 60]
scrolls.forEach(scroll => {
    scroll.style.width = "0%";
  })

for (let i = 0; i < scrolls.length; i++) {
  setTimeout(() => {
    scrolls[i].style.width = srm[i] + "%";
  }, 250*i); // adjust the delay as needed
}
}

