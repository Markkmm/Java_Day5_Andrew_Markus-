// Check
console.log(typeof (books));
console.log(books);

// Parse
let booksObj = JSON.parse(books);
console.log(typeof (booksObj));

const result = document.getElementById('result');

for (let x of booksObj) {
    if (x.read == true) {
        result.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="img/${x.title}.jpeg" class="card-img-top" alt="...">
        <div class="card-body" style="background: #eee; text-align: center;">
            <h3>${x.title}</h3><b><i>by ${x.author}</i></b>
            <p class="card-text"><a href="#">Synopsis of ${x.title}.</a></p>
        </div>
        </div>
        `
    }
    else {
        result.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="img/${x.title}.jpeg" class="card-img-top" alt="...">
        <div class="card-body" style="background: #555; color: #eef; text-align: center;">
            <h3>${x.title}</h3><b><i>by ${x.author}</i></b>
            <p class="card-text"><a href="#">Synopsis of ${x.title}.</a></p>
        </div>
        </div>
        `

    }
}
