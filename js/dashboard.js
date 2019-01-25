(function ($) {
  'use strict';
  $(function () {

    $("#logout").click(function () {
      window.location.href = "login.html";
    });

    if ($("#user").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          
            let fullname = object.firstname +" "+ object.lastname;

            $("#user").prepend(`<h4 class="mt-1 mb-1">Hi, ${fullname}</h4>`);
          }
          
        }
      

      request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
      request.send();
    }

    if ($("#total-sales-amount").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          $("#total-sales-amount").text(object.amount);
          $("#total-sales-currency").text(object.currency);
          $("#total-sales-period").text(object.period);
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/totalsales", true);
      request.send();
    }

    if ($("#total-purchases-amount").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          $("#total-purchases-amount").text(object.amount);
          $("#total-purchases-currency").text(object.currency);
          $("#total-purchases-period").text(object.period);
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/totalpurchases", true);
      request.send();
    }

    if ($("#sales-report-overview-downloads").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          $("#sales-report-overview-downloads").text(object.downloads);
          $("#sales-report-overview-purchases").text(object.försäljning);
          $("#sales-report-overview-users").text(object.users);
          $("#sales-report-overview-growth").text(object.growth);
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/salesreportoverview", true);
      request.send();
    }

    if ($("#total-order-amount").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          $("#total-order-amount").text(object.amount);
          $("#total-order-currency").text(object.currency);
          $("#total-order-period").text(object.period);
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/totalorders", true);
      request.send();
    }

    if ($("#total-growth-amount").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          $("#total-growth-amount").text(object.amount);
          $("#total-growth-currency").text(object.currency);
          $("#total-growth-period").text(object.period);
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/totalgrowth", true);
      request.send();
    }

    if ($("#updates-section").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          for (var i = 0; i < object.updates.length; i++) {
            $("#updates-section").append(
              `<li>
            <h6>${object.updates[i].title}</h6>
            <p class="mt-2">${object.updates[i].description}</p>
            <p class="text-muted mb-4">
            <i class="mdi mdi-clock-outline"></i>
            ${object.updates[i].time}
            </p>
            </li>`);
          }
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/updates", true);
      request.send();
    }


    if ($("#tickets-section").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          for (var i = 0; i < object.years.length; i++) {
            $("#tickets-year-filter").append(
              `
           <a class="dropdown-item" href="#">${object.years[i]}</a>
           `);
          }




          for (var i = 0; i < object.tickets.length; i++) {
            let names = object.tickets[i].fullname.split(" ")
            let initials = names[0].charAt(0) + names[1].charAt(0);

            $("#tickets-section").append(
              `
           <tr>
           <td class="pl-0">
             <div class="icon-rounded-primary icon-rounded-md">
               <h4 class="font-weight-medium">${initials}</h4>
             </div>
           </td>
           <td>
             <p class="mb-0">${object.tickets[i].fullname}</p>
             <p class="text-muted mb-0">${object.tickets[i].city}</p>
           </td>
           <td>
             <p class="mb-0">${object.tickets[i].date}</p>
             <p class="text-muted mb-0">${object.tickets[i].time}</p>
           </td>
           <td>
             <p class="mb-0">${object.tickets[i].project}</p>
             <p class="text-muted mb-0">${object.tickets[i].status}</p>
           </td>
           <td class="pr-0">
             <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
           </td>
         </tr>
           `);
          }
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
      request.send();
    }

    if ($("#invoices-section").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          for (var i = 0; i < object.invoices.length; i++) {
            $("#invoices-section").append(
              `
              <tr>
              <td>${object.invoices[i].invoicenumber}</td>
              <td>${object.invoices[i].customer}</td>
              <td>${object.invoices[i].shipping}</td>
              <td class="font-weight-bold">$${object.invoices[i].totalprice}</td>
              <td>$${object.invoices[i].customerprice}</td>
              <td>
                <div class="badge badge-success badge-fw">${object.invoices[i].status}</div>
              </td>
            </tr>
           `);
          }
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/openinvoices", true);
      request.send();
    }


    if ($("#total-sales-chart").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          $("#total-sales-chart-revenue").text(object.revenue);
          $("#total-sales-chart-returns").text(object.returns);
          $("#total-sales-chart-queries").text(object.queries);
          $("#total-sales-chart-invoices").text(object.invoices);

          var areaData = {
            labels: object.labels,
            datasets: [
              {
                data: object.datasets[0].data,
                backgroundColor: [
                  'rgba(61, 165, 244, .0)'
                ],
                borderColor: [
                  'rgb(61, 165, 244)'
                ],
                borderWidth: 2,
                fill: 'origin',
                label: object.datasets[0].label
              },
              {
                data: object.datasets[1].data,
                backgroundColor: [
                  'rgba(241, 83, 110, .0)'
                ],
                borderColor: [
                  'rgb(241, 83, 110)'
                ],
                borderWidth: 2,
                fill: 'origin',
                label: object.datasets[1].label
              }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: true,
                ticks: {
                  display: true,
                  padding: 20,
                  fontColor: "#000",
                  fontSize: 14
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: true,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  fontColor: "#000",
                  fontSize: 14,
                  padding: 18,
                  stepSize: 100000,
                  callback: function (value) {
                    var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                    ];
                    function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                          return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                    }
                    return formatNumber(value);
                  }
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .37
              },
              point: {
                radius: 0
              }
            }
          }
          var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
          var revenueChart = new Chart(revenueChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/totalsaleschart", true);
      request.send();
    }

    if ($("#users-chart").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);
          $("#users-chart-users").text(object.users);
          $("#users-chart-growth").text(object.growth);

          var areaData = {
            labels: object.labels,
            datasets: [{
              data: object.datasets[0].data,
              backgroundColor: [
                '#e0fff4'
              ],
              borderWidth: 2,
              borderColor: "#00c689",
              fill: 'origin',
              label: object.datasets[0].label
            }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: false,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  min: 0,
                  max: 300
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .35
              },
              point: {
                radius: 0
              }
            }
          }
          var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
        }
      };

      request.open("GET", "https://fe18.azurewebsites.net/api/userschart", true);
      request.send();
    }

    if ($("#projects-chart").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          $("#projects-chart-procent").text(object.procent);
          $("#projects-chart-growth").text(object.growth);

          var areaData = {
            labels: object.labels,
            datasets: [{
              data: object.datasets[0].data,
              backgroundColor: [
                '#e5f2ff'
              ],
              borderWidth: 2,
              borderColor: "#3da5f4",
              fill: 'origin',
              label: object.datasets[0].label
            }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: false,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  min: 0,
                  max: 300
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .05
              },
              point: {
                radius: 0
              }
            }
          }
          var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
        }
      };

      request.open("GET", "https://fe18.azurewebsites.net/api/projectschart", true);
      request.send();
    }

    if ($('#offlineProgress').length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          var bar = new ProgressBar.Circle(offlineProgress, {
            color: '#000',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 6,
            trailWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: true,
              style: {
                color: "#fff",
                position: 'absolute',
                left: '40%',
                top: '50%'
              }
            },
            svgStyle: {
              width: '90%'
            },
            from: {
              color: '#f1536e',
              width: 6
            },
            to: {
              color: '#f1536e',
              width: 6
            },
            // Set default step function for all animate calls
            step: function (state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);

              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }

            }
          });

          bar.text.style.fontSize = '1rem';
          bar.animate(object.offline); // Number from 0.0 to 1.0
        }
      };

      request.open("GET", "https://fe18.azurewebsites.net/api/downloads", true);
      request.send();
    }


    if ($('#onlineProgress').length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);
          var bar = new ProgressBar.Circle(onlineProgress, {
            color: '#000',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 6,
            trailWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: true,
              style: {
                color: "#fff",
                position: 'absolute',
                left: '40%',
                top: '50%'
              }
            },
            svgStyle: {
              width: '90%'
            },
            from: {
              color: '#fda006',
              width: 6
            },
            to: {
              color: '#fda006',
              width: 6
            },
            // Set default step function for all animate calls
            step: function (state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);

              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }

            }
          });

          bar.text.style.fontSize = '1rem';
          bar.animate(object.online); // Number from 0.0 to 1.0
        }
      };

      request.open("GET", "https://fe18.azurewebsites.net/api/downloads", true);
      request.send();
    }

    if ($("#revenue-chart").length) {
      var CurrentChartCanvas = $("#revenue-chart").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["1982", "", "1993", "", "2003", "", "2013"],
          datasets: [{
            label: 'Europe',
            data: [280000, 90000, 150000, 200000, 50000, 150000, 260000, 150000, 260000],
            backgroundColor: '#405189'
          },
          {
            label: 'Africa',
            data: [250000, 230000, 130000, 160000, 110000, 230000, 50000, 230000, 50000],
            backgroundColor: '#3da5f4'
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                fontColor: "#000",
                display: true,
                fontStyle: 400,
                fontSize: 14,
                stepSize: 100000,
                callback: function (value) {
                  var ranges = [
                    { divider: 1e6, suffix: 'M' },
                    { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                    for (var i = 0; i < ranges.length; i++) {
                      if (n >= ranges[i].divider) {
                        return (n / ranges[i].divider).toString() + ranges[i].suffix;
                      }
                    }
                    return n;
                  }
                  return formatNumber(value);
                }
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: .5,
              barPercentage: 1,
              ticks: {
                beginAtZero: true,
                fontColor: "#000",
                display: true,
                fontSize: 14
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }

    if ($("#distribution-chart").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          var areaData = {
            labels: object.labels,
            datasets: [{
              data: object.datasets[0].data,
              backgroundColor: [
                "#3da5f4", "#f1536e", "#fda006"
              ],
              borderColor: "rgba(0,0,0,0)"
            }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            segmentShowStroke: false,
            cutoutPercentage: 72,
            elements: {
              arc: {
                borderWidth: 4
              }
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            legendCallback: function (chart) {
              var text = [];
              text.push('<div class="distribution-chart">');
              text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[0] + '"></div>');
              text.push(`<p>${object.datasets[0].city[0]}</p>`);
              text.push('</div>');
              text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[1] + '"></div>');
              text.push(`<p>${object.datasets[0].city[1]}</p>`);
              text.push('</div>');
              text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[2] + '"></div>');
              text.push(`<p>${object.datasets[0].city[2]}</p>`);
              text.push('</div>');
              text.push('</div>');
              return text.join("");
            },
          }
          var distributionChartPlugins = {
            beforeDraw: function (chart) {
              var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

              ctx.restore();
              var fontSize = .96;
              ctx.font = "600 " + fontSize + "em sans-serif";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#000";

              var text = "70%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;

              ctx.fillText(text, textX, textY);
              ctx.save();
            }
          }
          var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
          var distributionChart = new Chart(distributionChartCanvas, {
            type: 'doughnut',
            data: areaData,
            options: areaOptions,
            plugins: distributionChartPlugins
          });
          document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/distributionchart", true);
      request.send();
    }

    if ($("#sale-report-chart").length) {
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          var object = JSON.parse(this.response);

          var CurrentChartCanvas = $("#sale-report-chart").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: object.labels,
              datasets: [{
                label: object.datasets[0].label,
                data: object.datasets[0].data,
                backgroundColor: ["#3da5f4", "#e0f2ff", "#3da5f4", "#e0f2ff", "#3da5f4", "#e0f2ff", "#3da5f4", "#e0f2ff", "#3da5f4", "#e0f2ff", "#3da5f4"]
              }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
                }
              },
              scales: {
                yAxes: [{
                  display: true,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    fontColor: "#000",
                    display: true,
                    padding: 20,
                    fontSize: 14,
                    stepSize: 10000,
                    callback: function (value) {
                      var ranges = [
                        { divider: 1e6, suffix: 'M' },
                        { divider: 1e3, suffix: 'k' }
                      ];
                      function formatNumber(n) {
                        for (var i = 0; i < ranges.length; i++) {
                          if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                          }
                        }
                        return n;
                      }
                      return "$" + formatNumber(value);
                    }
                  }
                }],
                xAxes: [{
                  stacked: false,
                  categoryPercentage: .6,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#000",
                    display: true,
                    padding: 20,
                    fontSize: 14
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: true
                  },
                  barPercentage: .7
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
          });
        }
      }

      request.open("GET", "https://fe18.azurewebsites.net/api/salereportchart", true);
      request.send();
    }

  });

})(jQuery);