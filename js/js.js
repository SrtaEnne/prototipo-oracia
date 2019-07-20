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