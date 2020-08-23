//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)


//executar uma acao
function cloneField() {
    //duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //pegar os campos. Quais campos?
     const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa
        field.value = ""
    })
    //colocar na pagina: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
