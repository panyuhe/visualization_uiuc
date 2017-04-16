"use strict";

/* Boilerplate jQuery */
/*
$(function() {
  $.get("res/fileName.csv")
   .done(function (csvData) {
     var data = d3.parseCsv(csvData);
     visualize(data);
   })
  .fail(function(e) {
     alert("Failed to load CSV file!");
  });
});
*/
/* Visualize the data in the visualize function */
var visualize = function(data) {
  console.log(data);

  // == BOILERPLATE ==
  var margin = { top: 50, right: 50, bottom: 50, left: 50 },
     width = 800 - margin.left - margin.right,
     height = 1000;
     /*
  var svg = d3.select("#chart")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .style("width", width + margin.left + margin.right)
              .style("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  */

var G = new jsnx.DiGraph();
 
G.addNodesFrom([1,2,3,4,5,[9,{color: '#008A00'}]], {color: '#0064C7'});
G.addCycle([1,2,3,4,5]);
G.addEdgesFrom([[1,9], [9,1]]);
 console.log(G);
jsnx.draw(G, {
    element: '#chart', 
    withLabels: true, 
    nodeStyle: {
        fill: function(d) { 
            return d.data.color; 
        }
    }, 
    labelStyle: {fill: 'white'},
    stickyDrag: true
});
  // == Your code!  ==

};
var data = 10;
visualize([1]);