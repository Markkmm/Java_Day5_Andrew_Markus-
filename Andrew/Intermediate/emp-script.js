// Parse: String to Object
let employeesAfterParse = JSON.parse(employees);

const result = document.getElementById('result');
const t1 = document.getElementById('ttitle');
const rows = document.getElementById('tbody');

// Tests
console.log(Object.keys(employeesAfterParse[0])[0]);
console.log(employeesAfterParse.uniqueID);

for (let x of employeesAfterParse) {
    for (let i = 0; i < 6; i++)
        t1.innerHTML += `<th>${Object.keys(x)[i]}</th>`;
    break;
}

for (let x of employeesAfterParse) {
    tbody.innerHTML += `<tr>
        <th scope="row">${x.uniqueID}</th>
        <td>${x.jobTitleName}</td>
        <td>${x.firstName}</td>
        <td>${x.lastName}</td>
        <td>${x.emailAddress}</td>
        <td>$${x.salary} per annum</td>
        </tr>
    `;
}