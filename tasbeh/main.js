let btn = document.querySelector('.btn')
let btn1 = document.querySelector('.btn1')
let input = document.querySelector('.input')

btn.addEventListener('click' , function(){
        input.value = parseInt(input.value) +1;
        btn1.style.display  = "block"
     if(input.value >= 1){
        btn1.style.backgroundColor = "green"
        btn1.style.cursor = "pointer"
    }
})

btn1.addEventListener('click' , function(){
    input.value = 0
    if(input.value == 0){
        btn1.style.backgroundColor ='red'
        btn1.style.cursor = "none"
    } 
})

 