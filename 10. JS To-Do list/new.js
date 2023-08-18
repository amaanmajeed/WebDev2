addEventListener("load", updateTable());

function updateTable() {
    let mytable = document.getElementById('tables');
    let str = `
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Button</th>
        </tr>
    `;

    itemsJsonArraystr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArraystr);

    itemsJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <td>${index + 1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="del" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    mytable.innerHTML = str;
}

function deleted(index) {
    itemsJsonArraystr = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArraystr);
    
    itemsJsonArray.splice(index, 1);

    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    updateTable();

}

let enterButton = document.getElementById("enterButton");
let temp = document.getElementById('detail');
temp.addEventListener("keypress", () => {
    if (event.key === "Enter") {
        event.preventDefault();
        enterButton.click();
    }
});


enterButton.addEventListener("click", () => {
    let titlefield = document.getElementById('title').value;
    let detailsfield = document.getElementById('detail').value;
    
    document.getElementById('title').value = '';
    document.getElementById('detail').value = '';

    if (titlefield || detailsfield != '') {
        // console.log(titlefield, detailsfield);

        if (localStorage.getItem('itemsJson') == null) {
            itemsJsonArray = [];
            itemsJsonArray.push([titlefield, detailsfield]);
            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
            console.log(itemsJsonArray);
        } else {
            itemsJsonArraystr = localStorage.getItem('itemsJson');
            itemsJsonArray = JSON.parse(itemsJsonArraystr);
            itemsJsonArray.push([titlefield, detailsfield]);
            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
            console.log(itemsJsonArray);
        }
    }
    updateTable();
});