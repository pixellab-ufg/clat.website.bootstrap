/** função para adaptar os gráficos pequenos */
function adaptaGrafico(w) {
  var c = document.getElementsByTagName("canvas");
  if (w.matches) {
    for (var i = 0; i < c.length; i++) {
      c[i].setAttribute("height", "800");
    }
    document.getElementById("desafiosIndividual").setAttribute("height", "999");
    document.getElementById("erro").setAttribute("height", "999");
    flag = true;
  } else {
    flag = false;
  }
}

var x = window.matchMedia("(max-width: 450px)")
adaptaGrafico(x) // Call listener function at run time
x.addListener(adaptaGrafico) // Attach listener function on state changes

/** GRÁFICO GÊNERO */
var ctx = document.getElementById("genero");
var genero = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Feminino", "Masculino", "Outro"],
    datasets: [
      {
        backgroundColor: ["#e0004f", "#fa6400", "#1b8406"],//["#F88E01", "#F359B3", "#84CC01"], // ["#f28900", "#e8309b", "#84CC01"],
        data: [98, 5, 1]
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
          return data['datasets'][0]['data'][tooltipItem['index']] + ' profissionais';
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
        },
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
 * GRÁFICO DA FAIXA ETÁRIA
 * 
 */

var ctx = document.getElementById('idades');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["< 26", "26 - 36", "37 - 46", "47 - 55", "> 55"],
    datasets: [{
      label: 'Pessoas',
      data: [4, 36, 38, 20, 6],
      backgroundColor: '#609401',
    }]
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
          display: true,
          autoSkip: false,
          max: 4,
        },
        barPercentage: 1.3,
      }],
      yAxes: [{
        display: false,

        gridLines: {
          display: false, // needed to hide line at left edge from Y scale. Added in v2.1.4
        },
        ticks: {
          fontSize: flag ? 14 : 20,
          fontColor: '#333333',
          fontFamily: 'Roboto',
          padding: 12,
          beginAtZero: true,
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
          return data['datasets'][0]['data'][tooltipItem['index']] + ' profissionais';
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
          let percentage = (value * 100 / 104).toFixed(0) + "%";
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
 * GRÁFICO DO ANO ESCOLAR
 * 
 */

var ctx = document.getElementById("anoEscolar");
var anoEscolar = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Até Ensino Médio", "Ensino Superior", "Especialização", "Mestrado", "Doutorado"],
    datasets: [
      {
        backgroundColor: '#107abc', //["#F88E01", "#F359B3", "#84CC01", "#52D7D5"],
        data: [2, 23, 67, 11, 1],
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
          fontSize: flag || window.screen.width < 800 ? 14 : 20,
          fontColor: '#333333',
          fontFamily: 'Roboto',
          padding:12,
        }
      }]
    },
    layout: {
      padding: {
        left: 5,
        right:5,
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
          return data['datasets'][0]['data'][tooltipItem['index']] + ' profissionais';
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
 * GRÁFICO DO TEMPO DE ATUAÇÃO
 * 
 */

var ctx = document.getElementById("tempoAtuacao");
var tempoAtuacao = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Menos de 5 anos", "5 a 10 anos", "11 a 20 anos", "Mais de 20 anos"],
    datasets: [
      {
        backgroundColor: '#fa6400', //["#F88E01", "#F359B3", "#84CC01", "#52D7D5"],
        data: [28, 38, 22, 16],
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
          fontSize: flag || window.screen.width < 800 ? 14 : 20,
          fontColor: '#333333',
          fontFamily: 'Roboto',
          padding: 12,
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
          return data['datasets'][0]['data'][tooltipItem['index']] + ' profissionais';
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
 * GRÁFICO DITADOS
 */

var ctx = document.getElementById("ditados");
var ditados = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Sim", "Não", ""],
    datasets: [
      {
        backgroundColor: ["#1b8406", "#d3d3d3"],
        data: [86, 18]
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
          return data['datasets'][0]['data'][tooltipItem['index']] + ' profissionais';
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
 * GRÁFICO DITADO INDIVIDUAL
 * 
 */

var ctx = document.getElementById("individual");
var individual = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: flag ? [["Dita um conjunto", "de palavras"], ["Pergunta o que a criança", "deseja escrever"], ["Não aplica ditados", "individuais"]] : ["Dita um conjunto de palavras", "Pergunta o que a criança deseja escrever", "Não aplica ditados individuais"],
    //data:[50,45,39,14,8,6,2],
    datasets: [
      {
        label: "Recursos",
        backgroundColor: '#fa6400',//["#F88E01", "#F359B3", "#84CC01", "#52D7D5", "#3E474E", "#3E474E", "#3E474E"],
        data: [61, 17, 8]
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
          return data['datasets'][0]['data'][tooltipItem['index']] + ' profissionais';
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
          let percentage = (value * 100 / 86).toFixed(0) + "%";
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
 * GRÁFICO DO TEMPO DITADO INDIVIDUAL
 * 
 */

var ctx = document.getElementById("tempoIndividual");
var tempoIndividual = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: flag ? [["Até 15 minutos"], ["16 a 30 minutos"], ["31 a 60 minutos"], ["Mais de 60 minutos"],["Não realizo", "ditados individuais"]]:["Até 15 minutos", "16 a 30 minutos", "31 a 60 minutos", "Mais de 60 minutos", "Não realizo ditados individuais"],
    //data:[50,45,39,14,8,6,2],
    datasets: [
      {
        label: "Conteúdos",
        backgroundColor: '#e0004f',//["#F88E01", "#F359B3", "#84CC01", "#52D7D5", "#3E474E", "#3E474E", "#3E474E"],
        data: [34, 34, 9, 5, 4]
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
          let percentage = (value * 100 / 86).toFixed(0) + "%";
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
 * GRÁFICO SOBRE DESAFIOS DITADOS INDIVIDUAIS 
 * */

var ctx = document.getElementById("desafiosIndividual");
var desafiosIndividual = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: flag ? [["Quantidade de crianças", "em uma turma"], ["Manter as demais ", "crianças em atividade"], ["Ambiente adequado"], ["Organização dos ", "registros das crianças"], ["Avaliação dos", " resultados"], ["Não há desafios", "ou dificuldades"], ["Outro"]] : ["Quantidade de crianças em uma turma", "Manter as demais crianças em atividade regular", "Ambiente adequado", "Organização dos registros das crianças", "Avaliação dos resultados", "Não há desafios ou dificuldades", "Outro"],
    datasets: [
      {
        label: "Conteúdos",
        backgroundColor: '#1b8406',//["#F88E01", "#F359B3", "#84CC01", "#52D7D5", "#3E474E", "#3E474E", "#3E474E"],
        data: [38, 21, 19, 17, 16, 11, 1]
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
          let percentage = (value * 100 / 86).toFixed(0) + "%";
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
 * NUVEM DE PALAVRAS
 * DITADO DE PALAVRAS
 */
anychart.licenseKey("fabrizziosoares.me-5132aa16-b19d68be");

anychart.onDocumentReady(function () {
  var data = [
      {"x": "escrita", "value": 36, category: "Palavras mais citadas"},
      {"x": "crianças", "value": 23, category: "Palavras mais citadas"},
      {"x": "palavras", "value": 15, category: "Palavras mais citadas"},
      {"x": "hipóteses", "value": 12, category: "Palavras mais citadas"},
      {"x": "atividade", "value": 7, category: "Palavras mais citadas"},
      {"x": "escrever", "value": 7, category: "Palavras mais citadas"},
      {"x": "nível", "value": 6, category: "Palavras mais citadas"},
      {"x": "atenção", "value": 4, category: "Palavras mais citadas"},
      {"x": "sabe", "value": 4, category: "Palavras mais citadas"},
      {"x": "sobre", "value": 4, category: "Palavras mais citadas"},
      {"x": "acordo", "value": 3, category: "Palavras mais citadas"},
      {"x": "aluno", "value": 3, category: "Palavras mais citadas"},
      {"x": "consciência", "value": 3, category: "Palavras mais citadas"},
      {"x": "construção", "value": 3, category: "Palavras mais citadas"},
      {"x": "correta", "value": 3, category: "Palavras mais citadas"},
      {"x": "ditado", "value": 3, category: "Palavras mais citadas"},
      {"x": "elas", "value": 3, category: "Palavras mais citadas"},
      {"x": "entre", "value": 3, category: "Palavras mais citadas"},
      {"x": "fonológica", "value": 3, category: "Palavras mais citadas"},
      {"x": "forma", "value": 3, category: "Palavras mais citadas"},
      {"x": "maneira", "value": 3, category: "Palavras mais citadas"},
      {"x": "pensando", "value": 3, category: "Palavras mais citadas"},
      {"x": "quais", "value": 3, category: "Palavras mais citadas"},
      {"x": "sistema", "value": 3, category: "Palavras mais citadas"},
      {"x": "capacidade", "value": 2, category: "Palavras mais citadas"},
      {"x": "compreensão", "value": 2, category: "Palavras mais citadas"},
      {"x": "depois", "value": 2, category: "Palavras mais citadas"},
      {"x": "dificuldades", "value": 2, category: "Palavras mais citadas"},
      {"x": "ditada", "value": 2, category: "Palavras mais citadas"},
      {"x": "ensinado", "value": 2, category: "Palavras mais citadas"},
      {"x": "entendimento", "value": 2, category: "Palavras mais citadas"},
      {"x": "escreve", "value": 2, category: "Palavras mais citadas"},
      {"x": "escritas", "value": 2, category: "Palavras mais citadas"},
      {"x": "escuta", "value": 2, category: "Palavras mais citadas"},
      {"x": "grafia", "value": 2, category: "Palavras mais citadas"},
      {"x": "interesse", "value": 2, category: "Palavras mais citadas"},
      {"x": "intervenção", "value": 2, category: "Palavras mais citadas"},
      {"x": "leitura", "value": 2, category: "Palavras mais citadas"},
      {"x": "letras", "value": 4, category: "Palavras mais citadas"},
      {"x": "momento", "value": 2, category: "Palavras mais citadas"},
      {"x": "noção", "value": 2, category: "Palavras mais citadas"},
      {"x": "professor", "value": 2, category: "Palavras mais citadas"},
      {"x": "relação", "value": 2, category: "Palavras mais citadas"},
      {"x": "silábica", "value": 2, category: "Palavras mais citadas"},
      {"x": "som", "value": 4, category: "Palavras mais citadas"},
      {"x": "capacidade", "value": 2, category: "Palavras mais citadas"},
      {"x": "sílabas", "value": 2, category: "Palavras mais citadas"},
      {"x": "suas", "value": 2, category: "Palavras mais citadas"},
  
  
    ];
      // create tag cloud
      var chart = anychart.tagCloud();
      // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);

      // set chart title
      chart
        .title(
          ''
        )
        // set array of angles, by which words will be placed
        .angles([0])
        // enabled color range
        /*.colorRange(true)
        // set color scale
        .colorScale(anychart.scales.ordinalColor())
        // set settings for normal state
  */
  
        .normal({
          fontFamily: 'Roboto',
          fill: '#1b8406'
        })
        // set settings for hovered state
        .hovered({
          fill: '#e0004f'
        })
        // set settings for selected state
        .selected({
          fill: '#107abc',
          fontWeight: 'bold'
        });
  
      // set container id for the chart
      chart.container("container");
      // initiate chart drawing
      chart.draw();
  
  });
  

/**
 * NUVEM DE PALAVRAS
 * COMO AVALIA?
 */

anychart.onDocumentReady(function () {

  var data = [
   {"x": "individual", "value": 6, category: "Palavras mais citadas"},
   {"x": "escrita", "value": 5, category: "Palavras mais citadas"},
   {"x": "avaliação", "value": 5, category: "Palavras mais citadas"},
   {"x": "crianças", "value": 3, category: "Palavras mais citadas"},
   {"x": "individual", "value": 3, category: "Palavras mais citadas"},
   {"x": "palavras", "value": 6, category: "Palavras mais citadas"},
   {"x": "alunos", "value": 2, category: "Palavras mais citadas"},
   {"x": "atuo", "value": 2, category: "Palavras mais citadas"},
   {"x": "desenvolvimento", "value": 2, category: "Palavras mais citadas"},
   {"x": "faço", "value": 2, category: "Palavras mais citadas"},
   {"x": "mesa", "value": 2, category: "Palavras mais citadas"},
   {"x": "observando", "value": 2, category: "Palavras mais citadas"},
   {"x": "quadro", "value": 2, category: "Palavras mais citadas"},
   {"x": "semana", "value": 2, category: "Palavras mais citadas"},
   {"x": "textos", "value": 2, category: "Palavras mais citadas"},
   {"x": "vez", "value": 2, category: "Palavras mais citadas"},
   {"x": "vou", "value": 2, category: "Palavras mais citadas"},
   {"x": "acompanhamento", "value": 1, category: "Palavras mais citadas"},
 ];

   // create tag cloud
   var chart = anychart.tagCloud();
  
   // create a tag (word) cloud chart
 var chart = anychart.tagCloud(data);


   // set chart title
   chart
     .title(
       ''
     )
     // set array of angles, by which words will be placed
     .angles([0])
     // enabled color range
     /*.colorRange(true)
     // set color scale
     .colorScale(anychart.scales.ordinalColor())
     // set settings for normal state
*/


     .normal({
       fontFamily: 'Roboto',
       fill: '#e0004f'
     })
     // set settings for hovered state
     .hovered({
       fill: '#fa6400'
     })
     // set settings for selected state
     .selected({
       fill: '#107abc',
       fontWeight: 'bold'
     });

   // set container id for the chart
   chart.container("avaliacaoEscrita");
   // initiate chart drawing
   chart.draw();

});



/**
 * GRÁFICO SOBRE CLASSIFICAÇÃO 
 * */

var ctx = document.getElementById("erro");
var erro = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: flag ? [["Sim, baseado","em Emília Ferreiro"], ["Sim, baseado", "em Linnea Ehri"], ["Sim, baseado"," no TDE"], ["Sim, com níveis ou fases", "personalizados por mim"], ["Não"], ["Outro"]] : ["Sim, baseado em Emília Ferreiro", "Sim, baseado em Linnea Ehri", "Sim, baseado no Teste de Desempenho Escolar (TDE)", "Sim, com níveis ou fases personalizados por mim", "Não", "Outro"],
    datasets: [
      {
        label: "Conteúdos",
        backgroundColor: '#107abc',//["#F88E01", "#F359B3", "#84CC01", "#52D7D5", "#3E474E", "#3E474E", "#3E474E"],
        data: [82, 3, 1, 13, 3, 1]
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
          return data['datasets'][0]['data'][tooltipItem['index']] + ' profissionais';
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
          let percentage = (value * 100 / 104).toFixed(0) + "%";
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


//GRÁFICO DE MANUTENÇÃO DAS ATIVIDADES

var ctx = document.getElementById("manutencaoAtiv");
var manutencaoAtiv = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Sim", "Não", ""],
    datasets: [
      {
        backgroundColor: ["#1b8406", "#d3d3d3"],
        data: [76, 28]
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
          return data['datasets'][0]['data'][tooltipItem['index']] + ' profissionais';
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
 *  período de pandemia
 */
anychart.onDocumentReady(function () {

  var data = [
   {"x": "atividades", "value": 27, category: "Palavras mais citadas"},
   {"x": "não", "value": 19, category: "Palavras mais citadas"},
   {"x": "escrita", "value": 12, category: "Palavras mais citadas"},
   {"x": "foto", "value": 9, category: "Palavras mais citadas"},
   {"x": "ainda", "value": 6, category: "Palavras mais citadas"},
   {"x": "avaliei", "value": 6, category: "Palavras mais citadas"},
   {"x": "aulas", "value": 5, category: "Palavras mais citadas"},
   {"x": "propostas", "value": 5, category: "Palavras mais citadas"},
   {"x": "vídeo", "value": 4, category: "Palavras mais citadas"},
   {"x": "avaliação", "value": 3, category: "Palavras mais citadas"},
   {"x": "enviadas", "value": 3, category: "Palavras mais citadas"},
   {"x": "objetos", "value": 3, category: "Palavras mais citadas"},
   {"x": "pais", "value": 3, category: "Palavras mais citadas"},
   {"x": "plataformas", "value": 3, category: "Palavras mais citadas"},
   {"x": "adulto", "value": 2, category: "Palavras mais citadas"},
   {"x": "alunos", "value": 4, category: "Palavras mais citadas"},
   {"x": "amostras", "value": 2, category: "Palavras mais citadas"},
   {"x": "correta", "value": 2, category: "Palavras mais citadas"},
   {"x": "crianças", "value": 2, category: "Palavras mais citadas"},
   {"x": "ditados", "value": 2, category: "Palavras mais citadas"},
   {"x": "e-mail", "value": 2, category: "Palavras mais citadas"},
   {"x": "envio", "value": 2, category: "Palavras mais citadas"},
   {"x": "família", "value": 2, category: "Palavras mais citadas"},
   {"x": "jogos", "value": 2, category: "Palavras mais citadas"},
   {"x": "palavras", "value": 2, category: "Palavras mais citadas"},
   {"x": "participação", "value": 2, category: "Palavras mais citadas"},
   {"x": "produção", "value": 2, category: "Palavras mais citadas"},
   {"x": "registros", "value": 2, category: "Palavras mais citadas"},
   {"x": "remotas", "value": 2, category: "Palavras mais citadas"},
   {"x": "tela", "value": 2, category: "Palavras mais citadas"},
   {"x": "possível", "value": 2, category: "Palavras mais citadas"},
   
 ];

   // create tag cloud
   var chart = anychart.tagCloud();
  
   // create a tag (word) cloud chart
 var chart = anychart.tagCloud(data);


   // set chart title
   chart
     .title(
       ''
     )
     // set array of angles, by which words will be placed
     .angles([0])
     // enabled color range
     /*.colorRange(true)
     // set color scale
     .colorScale(anychart.scales.ordinalColor())
     // set settings for normal state
*/


     .normal({
       fontFamily: 'Roboto',
       fill: '#107abc'
     })
     // set settings for hovered state
     .hovered({
       fill: '#e0004f'
     })
     // set settings for selected state
     .selected({
       fill: '#1b8406',
       fontWeight: 'bold'
     });

   // set container id for the chart
   chart.container("periodoRemoto");
   // initiate chart drawing
   chart.draw();

});
