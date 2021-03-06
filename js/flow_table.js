function createFlowTable(nodes) {
    "use strict";
    var flowTable = document.getElementById("flow_table");

    var table = document.createElement("table");
    // table header
    var tr = document.createElement("tr");
    ["Index", "Switch", "Rule"].forEach(function(d) {
        var th = document.createElement("th");
        th.textContent = d;
        tr.appendChild(th);
    });
    table.appendChild(tr);
    // table body
    nodes.filter(function(node, index) {
        // 2 nodes (endpoints) per 1-flow.
        // use 1 node.
        return index % 2 === 0;
    }).forEach(function(node) {
        tr = document.createElement("tr");
        tr.id = "flow_" + node.flowIndex;
        tr.setAttribute("class", node.tags);
        tr.onmouseover = function() { edgeMouseEvent(this); };
        [node.flowIndex, node.switch, node.data.ruleStr].forEach(function(d) {
            var td = document.createElement("td");
            td.textContent = d;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    flowTable.appendChild(table);
}
