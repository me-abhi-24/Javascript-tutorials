const bt=document.querySelectorAll("button")
const bd=document.querySelector("body")

bt.forEach((b)=>{
    b.addEventListener('click', function(e){
        if (e.target.id==='red') {
            bd.style.backgroundColor=e.target.id
        }
        if (e.target.id==='blue') {
            bd.style.backgroundColor=e.target.id
        }
        if (e.target.id==='green') {
            bd.style.backgroundColor=e.target.id
        }
        if (e.target.id==='grey') {
            bd.style.backgroundColor=e.target.id
        }
        if (e.target.id==='yellow') {
            bd.style.backgroundColor=e.target.id
        }
        if (e.target.id==='orange') {
            bd.style.backgroundColor=e.target.id
        }
    })
})
