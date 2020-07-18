

var ctx = document.getElementById("tipoEscola");
var tipoEscola = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Privada", "Pública", "Outra"],
    datasets: [
      {
        backgroundColor: ["#F88E01", "#F359B3", "#84CC01"],
        data: [80, 36, 3]
      }
    ]
  },
  options: {

    legend: {
      display: true,
      labels: {
        fontColor: '#333333',
        fontSize: 25,
        fontFamily: 'Roboto',
      },
      position: 'right',

    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    },

    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function(tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' participantes';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 28,
      titleFontColor: '#333333',
      bodyFontColor: '#000',
      bodyFontSize: 20,
      displayColors: false,
      caretPadding: 20,
      xPadding: 20,
      yPadding: 20,
    },
    responsive: true,
    plugins: {
      // Change options for ALL labels of THIS CHART
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          let percentage = (value * 100 / sum).toFixed(0) + "%";
          return percentage;
        },
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderColor: 'white',
        borderRadius: 25,
        borderWidth: 2,
        color: 'white',

        color: '#ffffff',
        anchor: 'center',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 25,
            }
          },
        }
      }
    }
  }
});
