/**
 * Created by NicholasTurner on 10/12/16.
 */
'use strict';

var shapes, names, i, htmlTable, itemsMatched;
shapes = ['square', 'rectangle', 'circle', 'triangle'];
names = ['Barry', 'Jessica', 'Clark'];

function createHtmlTable(items){
    var htmlTable = '<table>';

    for(i = 0; i < items.length; i++){
        htmlTable += '<tr><td>' + (i + 1) + '</td><td>' + items[i] + '</td></tr>'
    }
    htmlTable +='</table>';

    return htmlTable;
}
function itemsMatching(items, text) {
    var itemsMatched = [];
    for (i = 0; i < items.length; i++) {
        if (items[i].toLowerCase().indexOf(text) !== -1) {
            itemsMatched.push(items[i]);
        }
    }
    return itemsMatched;
}
console.log(itemsMatched);
// itemsMatching(shapes, "c");
// // var shapesWithC = [];
// // for (i = 0; i < shapes.length; i++) {
// //     if (shapes[i].toLowerCase().indexOf("c")!== -1){
// //         shapesWithC.push(shapes[i]);
// //     }
// // }

var shapesWithC = itemsMatching(shapes, "c");
htmlTable = createHtmlTable(shapesWithC);
console.log(htmlTable);

var namesWithC = itemsMatching(names, "c");
htmlTable = createHtmlTable(namesWithC);
console.log(htmlTable);

// itemsMatching(names, "c");
// var namesWithC = [];
// for ( i = 0; i < names.lenth; i++) {
//     if(names[i].toLowerCase().indexOf("c") !== -1){ //case insensitive search
//         namesWithC.push(names[i]);
//     }
// }
//
// htmlTable = createHtmlTable(names);
// console.log(htmlTable);


// <table>
//     <tr>
//         <td>index</td>
//         <td>element</td>
//     </tr>
// </table>
