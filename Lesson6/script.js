// for (var i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }
// console.log(document.body.lastChild.nodeType);
// console.log("---------------------------");

// for (let node of document.body.childNodes) {
//     console.log(node);
//     // покажет все узлы из коллекции
// }
// console.log("---------------------------");
// let elem = document.body;
// console.dir(elem);
// console.log(elem.nodeType);

// console.log(document.body.childNodes);
// console.log(document.body.children);

var myList = document.querySelector(".mainBlock");

function numberOfNodesForAncestors() {
    console.log(document.body.children[0].children);
    console.log(myList.children.length);
}
numberOfNodesForAncestors();

var mainBody = document.querySelector("body");

function numberOfNodesForAll() {
    console.log(document.body.children);
    console.log(mainBody.children.length);
}
numberOfNodesForAll();