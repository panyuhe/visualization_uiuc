"use strict";

var G = new jsnx.DiGraph();

var edges = []; //required because edges are added to the graph dynamically
data.forEach(function(d) {
    G.addNode(d.Number, {
        id: d.Number
    });

    var required = d.Required;
    for (var i = 0; i < required.length; i++) {
        var edge = [d.Number, required[i]];
        edges.push(edge);
    }

});

G.addEdgesFrom(edges);

jsnx.draw(G, {
        element: "#chart",
        nodeAttr: {
            r: 20
        },
        withLabels: true,
        labels: 'id'
    },
    false);

function setNodesOnClick(myFun) {
    $.each($("#chart .nodes").children(), function(index, value) {
        var node = $(value);
        node.click(function() {
            myFun(node.children().last().html())
        });
    });
}

function setNodesMousover(myFun) {
    $.each($("#chart .nodes").children(), function(index, value) {
        var node = $(value);
        node.mouseover(function() {
            myFun(node.children().last().html())
        });
    });
}

setNodesOnClick(function(x) {
    alert(x)
});
setNodesMousover(function(x) {
    data.forEach(function(d) {
        if (d.Number == x) {
            x += ": " + d.Name + "\n";

            x += "Required: ";
            for (var i = 0; i < d.Required.length; i++) {
                x += d.Required[i];
                if (i < d.Required.length - 1) {
                    x += ", ";
                }
            }
            x += "\n";

            x += "Recommended: ";
            for (var i = 0; i < d.Recommended.length; i++) {
                x += d.Recommended[i];
                if (i < d.Recommended.length - 1) {
                    x += ", ";
                }
            }
            x += "\n";

            x += d.URL;
        }
    });
    console.log(x)
})
