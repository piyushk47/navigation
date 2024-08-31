var active=4;
var mncircles=document.querySelectorAll(".mncircel");
gsap.to(mncircles[active-1],{
    opacity:.8
})

mncircles.forEach(function(val,index){
    val.addEventListener("click",function(){
       gsap.to("#circle",{
        rotate:(3-(index+1))*10,
     
       })
    //    greyout();
    //    gsap.to(this,{
    //     opacity:.5
    //    })
    })
})

// function greyout(){
//     gsap.to(mncircles,{
//         opacity:.08
//     })
// }

gsap.to("#circle",{
    rotate:0,
    ease:Expo.easeInOut,
  duration:1.5,
delay:1

})