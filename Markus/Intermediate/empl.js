var emploAfterParse = JSON.parse
(emplo);
console.table(emploAfterParse);

// HTML text
for (let x of emploAfterParse) {
    document.getElementById("result").innerHTML
    += `<p>${x.UniqueID}</p>
    <p>${x.FName}</p>
    <p>${x.LName}</p>
    <p>${x.Email}</p>
    <p>${x.JobTitle}</p>
    <p>${x.Salary}$</p> `;
}
