// localStorage.setItem('Name', 'Amaan');
// localStorage.setItem("Age", 20);

// console.log(localStorage.getItem("Name"));
// localStorage.removeItem("name");

// localStorage // To show all the key Value pairs

// obj = localStorage;

// jso = JSON.stringify(obj);
// // Converted to a string;


// parsed = JSON.parse(jso);
// console.log(parsed);

// onload;
addEventListener("load", UpdateTable);

let enterButton = document.getElementById('enterButton');
let res = document.getElementById('detail');
res.addEventListener("keypress", () => {
if (event.key === "Enter") {
    event.preventDefault();
    enterButton.click();
}
});


enterButton.addEventListener("click", () => {
    usertitle = document.getElementById('title').value;
    userdetails = document.getElementById('detail').value;

    if (usertitle || userdetails !== '') {
        document.getElementById('title').value = '';
        document.getElementById('detail').value = '';

        if(localStorage.getItem('itemsJson') == null){
            let itemsJsonArray = [];
            console.log("Hello");
            itemsJsonArray.push([usertitle, userdetails]);
            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
            console.log(itemsJsonArray);
        } else {
            itemsJsonArraystr = localStorage.getItem("itemsJson");
            itemsJsonArray = JSON.parse(itemsJsonArraystr);
            itemsJsonArray.push([usertitle, userdetails]);
            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
            console.log(itemsJsonArray);
        }

    UpdateTable();
    }
    
});


function UpdateTable() {
    itemsJsonArraystr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArraystr);

    let tablebody = document.getElementById('tables');
    let str = `<tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Button</th>
                </tr>`;
    
    itemsJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <td>${index + 1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><a href="javascript:;" onclick="deleteItem(${index});" class="del">Delete</a></td>
        </tr>
    `;
        console.log()
    });
    tablebody.innerHTML = str;

}


function deleteItem(index) {
    itemsJsonArraystr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArraystr);
    
    itemsJsonArray.splice(index, 1);

    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    UpdateTable();
}
