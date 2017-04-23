"use strict";

const prereqColor = "#42f48c";
const curColor = "#41f4d9";
const unselectedColor = "#a041f4";

var curSelectedNode;


var G = new jsnx.DiGraph();

var edges = []; //required because edges are added to the graph dynamically
data.forEach(function(d) {
    G.addNode(d.Number, {
        color: unselectedColor,
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
        nodeStyle: {
            fill: function(d){return d.data.color},
        },
        withLabels: true,
        labels: 'id'
    },
    true);

function getPrereqs(key, data){
    for(var i = 0; i < data.length; i++){
        if(data[i].Number == key){
          return data[i].Required;
        }
    }

    console.log("key not found");
    return -1;
}

function setNodesOnClick(myFun) {
    $.each($("#chart .nodes").children(), function(index, value) {
        var node = $(value);
        node.click(function() {
            myFun(node.children().last().html())
        });
    });
}

function getNodeG(nodeid){
    var ret;
    $.each($("#chart .nodes").children(), function(index, value) {
        var node = $(value);
        if(nodeid == node.children().last().html()){   
            ret = node;
        }
    });
    return ret;
}

function getCircle(node){
    return node.children().first();
}

function setNodeFillColor(nodeid, color){
    getCircle(getNodeG(nodeid)).css("fill", color);
}

function deselectNode(nodeid){
    setNodeFillColor(nodeid, unselectedColor);
    var prereqs = getPrereqs(nodeid, data);
    prereqs.forEach(function(currentValue, index, array) {
        setNodeFillColor(currentValue, unselectedColor);
    });
}

function selectNode(nodeid){
    if(curSelectedNode){
        deselectNode(curSelectedNode);
    }
    curSelectedNode = nodeid;
    setNodeFillColor(nodeid, curColor);
    var prereqs = getPrereqs(nodeid, data);
    prereqs.forEach(function(currentValue, index, array) {
        setNodeFillColor(currentValue, prereqColor);
    });
}

setNodesOnClick(function(nodeid){
    selectNode(nodeid);
});

