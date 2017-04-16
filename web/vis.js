"use strict";

  //console.log(data);

  // == BOILERPLATE ==
  var margin = { top: 50, right: 50, bottom: 50, left: 50 },
     width = 500 - margin.left - margin.right,
     height = 500;

  var svg = d3.select("#chart")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .style("width", width + margin.left + margin.right)
              .style("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  var G = new jsnx.DiGraph();

  var edges = []; //required because edges are added to the graph dynamically
  data.forEach(function(d){
    G.addNode(d.Number, {id: d.Number});

    var required = d.Required;
    for(var i = 0; i < required.length; i++){
      var edge = [d.Number, required[i]];
      edges.push(edge);
    }

  });

  G.addEdgesFrom(edges);

  jsnx.draw(G,
            {element: "#chart",
             nodeAttr:{
               r: 20
             },
             withLabels: true,
             labels : 'id'},
            false);
