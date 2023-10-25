function calcT() {
    console.log("ingreso a calcT")

    let cant=document.getElementById("cant").value


    

    if(cant>0){
      let total=cant*1000
      let desc=document.getElementById("descuento").value
      total= total-(total*desc/100)
     document.getElementById("total").className= "bg-info text-white"
     document.getElementById("total").innerHTML=total
    }else{
        document.getElementById("total").innerHTML="La cantidad debe ser al menos de un ticket "
        document.getElementById("total").className= "bg-danger text-white"
        
    }
}

  function sel(descuento){
    document.getElementById("descuento").value=descuento
  }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function lim(){
    total=0
    document.getElementById("total").innerHTML=total
  }