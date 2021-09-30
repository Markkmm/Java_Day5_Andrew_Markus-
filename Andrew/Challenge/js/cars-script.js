console.log(typeof (cars));
console.log(cars);

let carsParse = JSON.parse(cars);
console.log(typeof (carsParse));
console.log(carsParse);

// Declare DOM TREE variables
const row = document.getElementById('row');

for (let x of carsParse) {
    row.innerHTML
        += `<div class="col-sm"><div class="card" style="width: 18rem; margin: 0.1em auto; cursor: pointer; background-color: #899;">
            <img src="img/${x.name}.jpg" class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
                <h5 class="card-title" style="text-align: center;">${x.name}</h5>
                <p class="card-text" style="text-align: center;">I can't believe someone would name a f***ing car Picasso!</p>
                </div>
                
                <div class="card-body" style="text-align: center;">
                    <a href="#" class="card-link">More Info</a>
                    <a href="#" class="card-link">Autotrader</a>
                </div>
            </div>
        </div>
    `
}

const items = document.getElementsByClassName('col-sm');
console.log(items[0]);

for (let i = 0; i < items.length; i++) {
    // Test
    // items[i].addEventListener('click', function () {
    //     console.log(i);
    // })
    items[i].addEventListener('click', function () {
        let hidden = document.getElementById('hidden-div');
        hidden.innerHTML = `
        <div class="col-lg-12"><div class="card" style="width: 18rem; margin: 0.1em auto;">
        <img src="img/${carsParse[i].name}.jpg" class="card-img-top img-thumbnail" alt="...">
        <div class="card-body">
        <h5 class="card-title">${carsParse[i].name}</h5>
        <p class="card-tecarsParset">I can't believe someone would name a f***ing car Picasso!</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${carsParse[i].year}</li>
        <li class="list-group-item">${carsParse[i].price}€</li>
        <li class="list-group-item">${carsParse[i].eco} CO<sub>2</sub>/km</li>
        </ul>
        <div class="card-body">
        <a href="#" class="card-link">More Info</a>
        <a href="#" class="card-link">Autotrader</a>
        </div>
        </div>
        </div>
        `;
        hidden.style.display = 'block';
    });
};


