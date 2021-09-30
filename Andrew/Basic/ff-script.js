console.log(typeof (sandwiches));
console.log(typeof (fries));
console.log(sandwiches);
console.log(fries);

// Convert to Object
var sandwichesAfterParse = JSON.parse(sandwiches);
var friesAfterParse = JSON.parse(fries);
console.log(typeof (sandwichesAfterParse));
console.log(typeof (friesAfterParse));

const printHere = document.getElementById('fastfood');

printHere.innerHTML
    = `
        <i>My favorite sandwich is a <b>seitan</b> ${sandwichesAfterParse.sandwich} which has 
        approximately <b>${sandwichesAfterParse.calories}</b> calories less than a beef one. <br>Along with it I enjoy eating 
        ${friesAfterParse.fries_size} which have about <b>${friesAfterParse.calories}</b> more calories than french fries.</i>
    `