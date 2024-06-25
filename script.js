const container=document.querySelector(".container")

container.addEventListener("click",function(e){
    if(e.target.classList.contains("fa-plus")){
       
      e.target.parentElement.nextElementSibling.classList.toggle("active")
      e.target.parentElement.parentElement.style.height="auto"
      e.target.classList.add("fa-minus")
      e.target.classList.remove("fa-plus")
    
     
    
    }else if(e.target.classList.contains("fa-minus")){
        e.target.parentElement.nextElementSibling.classList.toggle("active")
        e.target.parentElement.parentElement.style.height="60px"
        e.target.classList.add("fa-plus")
        e.target.classList.remove("fa-minus")
    }



})