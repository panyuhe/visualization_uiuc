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

    var recommended = d.Recommended;
    for (var i = 0; i < recommended.length; i++) {
        var edge = [d.Number, recommended[i]];
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
        labels: 'id',
        layoutAttr: {
        charge: -300,
        linkDistance: 100
        },
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

function setNodesMouseover(myFun) {
    $.each($("#chart .nodes").children(), function(index, value) {
        var node = $(value);
        node.mouseenter(function() {
            myFun(node,node.children().last().html())
        });
    });
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

setNodesMouseover(function(node, x) {
    data.forEach(function(d) {
        if (d.Number == x) {
            x += " • " + d.Name + " • ";

            x += "Required: ";
            if (d.Required.length == 0) {
                x += "N/A";
            }
            else {
                for (var i = 0; i < d.Required.length; i++) {
                    x += d.Required[i];
                    if (i < d.Required.length - 1) {
                        x += ", ";
                    }
                }
            }
            x += " • ";

            x += "Recommended: ";
            if (d.Recommended.length == 0) {
                x += "N/A";
            }
            else {
                for (var i = 0; i < d.Recommended.length; i++) {
                    x += d.Recommended[i];
                    if (i < d.Recommended.length - 1) {
                        x += ", ";
                    }
                }
            }
        }
    });
    console.log(x);
    tempAlert(node, x);
    //setTimeout(function() { alert(x); }, 5000);

})

function tempAlert(node,msg)
{
    var el = document.createElement("div");
    el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:#7FFFD4;");
    el.innerHTML = msg;
    node.mouseleave(function() {
        if(el.parentNode !== null)
           el.parentNode.removeChild(el);
    });
    document.body.appendChild(el);
}
