$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
    })

    $('form button').click(function(){
        alert('Dados enviados');
    })

    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00)00000-0000');
})
