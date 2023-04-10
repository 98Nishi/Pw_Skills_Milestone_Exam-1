// In an online shopping application, customers can add multiple items to their cart. However, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
// affect the accuracy of the purchase order.


var arr = ["suit", "plazzo",
"jeans", "jeans", "lehnga", "lehnga","dupatta","shrug"];

function removeDuplicates(arr) {
var unique = [];
arr.forEach(element => {
    if (!unique.includes(element)) {
        unique.push(element);
    }
});
return unique;
}
console.log(removeDuplicates(arr));