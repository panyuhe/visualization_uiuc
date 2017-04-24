"use strict";

var G = new jsnx.DiGraph();

var edges = []; //required because edges are added to the graph dynamically
data.forEach(function(d) {
    G.addNode(d.Number, {
        color: "#7FFFD4",
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

//console.log(getPrereqs("MATH 347", data));

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
        //console.log(node.children().last().html());
        if(nodeid == node.children().last().html()){   
            ret = node;
        }
    }
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
    console.log(nodeid);
    console.log(getCircle(getNodeG(nodeid)));
}

setNodesOnClick(function(nodeid){
    setNodeFillColor(nodeid, "#4286f4")
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
