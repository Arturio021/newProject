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

// Количество всех узлов которые находятся внутри тега body
// console.log(document.body.childNodes.length);
// console.log(document.body.childNodes);
// console.log(document.body.children);

// Количество только "элементов-узлов" которые являются дочерними для тега body
buttonOne = document.querySelector(".buttonOne");
var buttonTwo = document.querySelector(".buttonTwo");
var mainBody = document.querySelector("body");

function numberOfChildElemnts() {
    console.log(
        'Количество только "элементов - узлов" которые являются дочерними для тега body:'
    );
    console.log(mainBody.children);
    console.log(`Количество дочерних элементов: ${mainBody.children.length}`);
    console.log("---------------------------");
}

buttonTwo.addEventListener("click", numberOfChildElemnts);

// Количество всех узлов которые находятся внутри тега body

function allNodes() {
    console.log("Количество всех узлов которые находятся внутри тега body:");
    console.log(mainBody.childNodes);
    console.log(mainBody.childNodes.length);
    console.log("---------------------------");
}
buttonOne.addEventListener("click", allNodes);