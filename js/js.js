  $(document).ready(function(){
    $('.modal1').modal();
    $('.sidenav').sidenav();
  });
  
  $(document).ready(function(){
    $('.parallax').parallax();
  });
  
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  // -------- BOTÃO SELECT ------- //
  $(document).ready(function(){
    $('select').formSelect();
  });

//----- PAGINAÇÃO ------- //

$(document).ready(function(){
      $('#dtBasicExample').DataTable({
          "language": {
                "lengthMenu": "",
                "zeroRecords": "Nada encontrado",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "Nenhum registro disponível",
                "infoFiltered": "(filtrado de _MAX_ registros no total)",
                "páginarevious": "Anterior",
                "Next": "Próximo",
                "dataTables_filter  ": "Pesquisar"
            }
        });
  });

  // --- DATA/HORA ----- //

// $('.dataIniFim').pickadate({
//   selectMonths: true,
//   selectYears: 15,
//   // Título dos botões de navegação
//   labelMonthNext: 'Próximo Mês',
//   labelMonthPrev: 'Mês Anterior',
//   // Título dos seletores de mês e ano
//   labelMonthSelect: 'Selecione o Mês',
//   labelYearSelect: 'Selecione o Ano',
//   // Meses e dias da semana
//   monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
//   monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
//   weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
//   weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
//   // Letras da semana
//   weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
//   //Botões
//   today: 'Hoje',
//   clear: 'Limpar',
//   close: 'Fechar',
//   // Formato da data que aparece no input
//   format: 'dd/mm/yyyy',
//   onClose: function() {
//     $(document.activeElement).blur()
//   }
   
// });
     
 // --------------------------- GRÁFICOS --------------------------- //

let ctx = document.getElementById("chartsDonuts"); // chama o elemento CANVAS através do seu ID

	let dados = {
	    datasets: [{
	        data: [10, 20, 30, 50],
	        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 200, 10)', 'rgb(55, 99, 132)', 'rgb(0, 255, 0)']
	    }],

	    labels: ['Vermelho', 'Amarelo', 'Azul', 'Verde']
	};

	let opcoes = {
	    cutoutPercentage: 40
	};


let meuDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: dados,
    options: opcoes
});



