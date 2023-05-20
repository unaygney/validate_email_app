const input = document.querySelector('input');
const icon = document.querySelector('i');


input.addEventListener('keyup', () => {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (input.value === '') {
         icon.classList.replace('fa-circle-check' , 'fa-envelope')
         return icon.style.color = '#b4b4b4'
    }
    if (input.value.match(pattern)){
        icon.classList.replace('fa-envelope'  , 'fa-circle-check')
         return icon.style.color = 'green'
    }
icon.classList.replace('fa-envelope' , 'fa-circle-check')
return icon.style.color ='red'
})