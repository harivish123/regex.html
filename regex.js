var form = document.getElementById("form")
var EmailId = document.getElementById("EmailId")
var password = document.getElementById("password")
EmailId.addEventListener('input',function(e){
     var pattern = /^[\w]{3,5}$/
     var currentValue = e.target.value
     var valid = pattern.test(currentValue)
     
     if(valid) {
         errpara.style.display ='none'
     } else {
         errpara.style.display = 'block'
     }
})