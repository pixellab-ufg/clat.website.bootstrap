/** função para adaptar os gráficos pequenos */
function adaptaGrafico(w) {
  var c = document.getElementsByTagName("canvas");
  if (w.matches) {
    for (var i = 0; i < c.length; i++) {
      c[i].setAttribute("height", "800");
    }
    document.getElementById("dificuldades").setAttribute("height", "999");
    flag = true;
  } else {
    flag = false;
  }
}

var x = window.matchMedia("(max-width: 450px)")
adaptaGrafico(x) // Call listener function at run time
x.addListener(adaptaGrafico) // Attach listener function on state changes

/** GRÁFICO TIPO DE ESCOLA */
var ctx = document.getElementById("tipoEscola");
var tipoEscola = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Privada", "Pública", "Outra"],
    datasets: [
      {
        backgroundColor: ["#FF5297", "#F06C00", "#6AA300"],//["#F88E01", "#F359B3", "#84CC01"], // ["#f28900", "#e8309b", "#84CC01"],
        data: [80, 36, 3]
      }
    ]
  },
  options: {
    legend: {
      display: false,
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
        top: 30,
        bottom: 50
      }
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' crianças';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
        },
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderColor: 'white',
        borderWidth: 3,
        color: 'white',//'#4f4f51', //'white',
        anchor: 'end',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 20,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    },
  }
});


/**
 * GRÁFICO DO ANO ESCOLAR
 * 
 */

var ctx = document.getElementById("anoEscolar");
var anoEscolar = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Ed. Infantil", "1º ano", "2º ano", "3º ano"],
    datasets: [
      {
        backgroundColor: '#2AA2A0', //["#F88E01", "#F359B3", "#84CC01", "#52D7D5"],
        data: [73, 29, 14, 3]
      }
    ]
  },
  options: {
    legend: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false, // hides the grid lines from this axis
        },
        ticks: {
          display: false,
        }
      },
      ],
      yAxes: [{
        gridLines: {
          display: false, // needed to hide line at left edge from Y scale. Added in v2.1.4
        },
        ticks: {
          fontSize: 20,
          fontColor: '#333333',
          fontFamily: 'Roboto',
        }
      }]
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 0,
        bottom: 0
      }
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' crianças';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          //return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
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
        anchor: 'end',
        position: 'outside',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 20,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    }
  }
});


/** 
 * GRÁFICO ATIVIDADES REMOTAS
 */

var ctx = document.getElementById("atividadesRemotas");
var manteve = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Sim", "Não", ""],
    datasets: [
      {
        backgroundColor: ["#6AA300", "#d3d3d3"],
        data: [90, 29]
      }
    ]
  },
  options: {
    legend: {
      display: false,
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
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' escolas';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
        },
        backgroundColor: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          var rotulo = context.chart.data.labels[context.dataIndex];
          if (rotulo === 'Sim') {
            return context.dataset.backgroundColor;
          } else {
            //If it's any other label, we color it 'black'
            return value = '#3e474f';
          }
        },
        borderColor: 'white',
        //borderRadius: 25,
        borderWidth: 2,
        color: 'white',
        anchor: 'end',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 20,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    },
  }
});

/** 
 * GRÁFICO ATIVIDADES REMOTAS PÚBLICA
 */

var ctx = document.getElementById("atividadesRemotasPub");
var manteveP = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Sim", "Não", ""],
    datasets: [
      {
        backgroundColor: ["#d3d3d3", "#f72e4d"],
        data: [13, 23]
      }
    ]
  },
  options: {
    legend: {
      display: false,
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
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' escolas públicas';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
        },
        backgroundColor: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          var rotulo = context.chart.data.labels[context.dataIndex];
          if (rotulo === 'Não') {
            return context.dataset.backgroundColor;
          } else {
            //If it's any other label, we color it 'black'
            return value = '#3e474f';
          }
        },
        borderColor: 'white',
        //borderRadius: 25,
        borderWidth: 2,
        color: 'white',
        anchor: 'end',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 20,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    },
  }
});

/** 
 * GRÁFICO ATIVIDADES REMOTAS PRIVADA
 */

var ctx = document.getElementById("atividadesRemotasPri");
var mantevePri = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Sim", "Não", ""],
    datasets: [
      {
        backgroundColor: ["#6AA300", "#d3d3d3"],
        data: [77, 3]
      }
    ]
  },
  options: {
    legend: {
      display: false,
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
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' escolas privadas';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
        },
        backgroundColor: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          var rotulo = context.chart.data.labels[context.dataIndex];
          if (rotulo === 'Sim') {
            return context.dataset.backgroundColor;
          } else {
            //If it's any other label, we color it 'black'
            return value = '#3e474f';
          }
        },
        borderColor: 'white',
        //borderRadius: 25,
        borderWidth: 2,
        color: 'white',
        anchor: 'end',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 20,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    },
  }
});


/**
 * GRÁFICO DOS RECURSOS
 * 
 */

var ctx = document.getElementById("recursos");
var recursos = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Redes sociais", "AVA", "Plataformas de vídeo", "E-mail", "Sites ou blogs", "Pastas compartilhadas", "Outros"],
    //data:[50,45,39,14,8,6,2],
    datasets: [
      {
        label: "Recursos",
        backgroundColor: '#F06C00',//["#F88E01", "#F359B3", "#84CC01", "#52D7D5", "#3E474E", "#3E474E", "#3E474E"],
        data: [50, 45, 39, 14, 8, 6, 2]
      },
    ]
  },
  options: {
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontColor: '#333333',
        fontSize: 25,
        fontFamily: 'Roboto',
      },
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false, // hides the grid lines from this axis
        },
        ticks: {
          display: false,
        }
      },
      ],
      yAxes: [{
        gridLines: {
          display: false, // needed to hide line at left edge from Y scale. Added in v2.1.4
        },
        ticks: {
          fontSize: flag ? 13 : 20,
          fontColor: '#333333',
          fontFamily: 'Roboto',
          padding: 12,
        }
      }]
    },
    layout: {
      padding: {
        left: 5,
        right: 25,
        top: 20,
        bottom: 20
      }
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' escolhas';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          let percentage = (value * 100 / 89).toFixed(0) + "%";
          //return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
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
        anchor: 'end',
        position: 'inside',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 20,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    }
  }
});


/**
 * GRÁFICO DOS CONTEÚDOS
 * 
 */

var ctx = document.getElementById("conteudos");
var conteudos = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Vídeos gravados", "Tarefas", "Aulas ao vivo (on-line)", "Livro didático", "Material para leitura", "Áudio gravado", "Outros"],
    //data:[50,45,39,14,8,6,2],
    datasets: [
      {
        label: "Conteúdos",
        backgroundColor: '#FF5297',//["#F88E01", "#F359B3", "#84CC01", "#52D7D5", "#3E474E", "#3E474E", "#3E474E"],
        data: [30, 22, 18, 15, 2, 1, 2]
      },
    ]
  },
  options: {
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontColor: '#333333',
        fontSize: 25,
        fontFamily: 'Roboto',
      },
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false, // hides the grid lines from this axis
        },
        ticks: {
          display: false,
        }
      },
      ],
      yAxes: [{
        gridLines: {
          display: false, // needed to hide line at left edge from Y scale. Added in v2.1.4
        },
        ticks: {
          fontSize: flag ? 14 : 20,
          fontColor: '#333333',
          fontFamily: 'Roboto',
          padding: 12,
        }
      }]
    },
    layout: {
      padding: {
        left: 5,
        right: 25,
        top: 20,
        bottom: 20
      }
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' escolhas';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          let percentage = (value * 100 / 90).toFixed(0) + "%";
          //return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
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
        anchor: 'end',
        position: 'inside',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 20,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    }
  }
});

/**
 * 
 * GRÁFICO DA AVALIAÇÃO
 */

var ctx = document.getElementById("avaliacao");
var avaliacao = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Foto", "Não está \n avaliando", "Plataforma", "Outra"],
    datasets: [
      {
        backgroundColor: ["#FF5297", "#F06C00", "#6AA300", "#2AA2A0"],//["#F88E01", "#F359B3", "#84CC01"], // ["#f28900", "#e8309b", "#84CC01"],
        data: [38, 36, 14, 2]
      }
    ]
  },
  options: {
    legend: {
      display: false,
      labels: {
        fontColor: '#333333',
        fontSize: 15,
        fontFamily: 'Roboto',
      },
      position: 'bottom',
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
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' escolhas';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
        },
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderColor: 'white',
        //borderRadius: 25,
        borderWidth: 3,
        color: 'white',//'#4f4f51', //'white',
        anchor: 'end',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: flag?12:18,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    },
  }
});

/**
 * GRÁFICO SOBRE DIFICULDADES
 */

var ctx = document.getElementById("dificuldades");
var dificuldades = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: flag? [["Dependência de","um adulto"], ["Não comunicação","com a criança"], ["Restringir acesso digital","apenas para estudo"], ["Falta de avaliação", "ou correção"], "Não há dificuldades", ["Necessidade de acesso", "a redes sociais"], ["Comunicação entre ", "todos os profissionais"], "Outros"]: ["Dependência de um adulto", "Não comunicação direta com a criança", "Restringir acesso digital apenas para estudo", "Falta de avaliação/correção", "Não há dificuldades", "Necessidade de acesso a redes sociais", "Comunicação entre todos os profissionais", "Outros"],
    datasets: [
      {
        label: "Conteúdos",
        backgroundColor: '#5F9300',//["#F88E01", "#F359B3", "#84CC01", "#52D7D5", "#3E474E", "#3E474E", "#3E474E"],
        data: [81, 35, 18, 18, 16, 14, 12, 3]
      },
    ]
  },
  options: {
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontColor: '#333333',
        fontSize: 25,
        fontFamily: 'Roboto',
      },
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false, // hides the grid lines from this axis
        },
        ticks: {
          display: false,
        }
      },
      ],
      yAxes: [{
        gridLines: {
          display: false, // needed to hide line at left edge from Y scale. Added in v2.1.4
        },
        ticks: {
          fontSize: flag || window.screen.width < 800 ? 14 : 20,
          fontColor: '#333333',
          fontFamily: 'Roboto',
          padding: 12,
        }
      }]
    },
    layout: {
      padding: {
        left: flag ? 20 : 5,
        right: flag ? 0 : 25,
        top: 20,
        bottom: 20
      }
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' escolhas';
        }
      },
      backgroundColor: '#FFF',
      titleFontSize: 20,
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
          let percentage = (value * 100 / 119).toFixed(0) + "%";
          //return percentage + '\n' + ctx.chart.data.labels[ctx.dataIndex];
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
        anchor: 'end',
        position: 'inside',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 20,
            },
            textAlign: 'center',
          },
        }
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
    }
  }
});