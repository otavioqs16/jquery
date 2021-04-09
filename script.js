$( function() 
{
    $( "#tabs" ).tabs();
    $("#txtData").datepicker({
      changeMonth: true,
      changeYear: true
    });

	$( "#slider" ).slider({
	      range: "min",
	      value: 1200,
	      min: 1000,
	      max: 10000,
	      slide: function( event, ui ) {
	        $( "#salario" ).val( "$" + ui.value );
	      }
	    });
	    $( "#salario" ).val( "$" + $( "#slider" ).slider( "value" ) );


	    var dias = [
	    "Domingo",
	    "Segunda",
	    "Terça",
	    "Quarta",
	    "Quinta",
	    "Sexta",
	    "Sabado"
	    ];

    $( "#dia" ).autocomplete({
     source: dias
    });

    $("#enviar").button();

    $("#contato").sortable();

 } );

function enviar(){


	var nome = $("#nome").val();
	var email = $("#email").val();
	var dataNasc = $("#txtData").val();
	var salario = $("#salario").val();
	var diaContato = $("#dia").val();
	var lista = $("#contato").sortable("toArray");
	

	var informacoes = [nome, email, dataNasc, salario];

	document.getElementById('info').innerHTML="<br><b>Nome:</b> " + nome + "<br><b>E-mail:</b> " + email + "<br><b>Data de Nascimento:</b> " + dataNasc + "<br><b>Pretensão Salarial:</b> " + salario + "<br><b>Melhor dia para contato:</b> " + diaContato + "<br><b>Formas de contato:</b> " + lista;

}