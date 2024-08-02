const btn = document.querySelector("#btnAtrasadaUm");

btn.addEventListener("click", function(e){

    e.preventDefault();


    const name = document.querySelector("#atrasadaUm");

    const value = name.value;

    console.log(value);
})



