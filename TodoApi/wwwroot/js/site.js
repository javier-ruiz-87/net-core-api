//alert("Hi JS!");

const uri = "api/TodoItems";
let todos = [];

//READ - LIST
function getItems() {
    fetch(uri)
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
        return _displayItems(data);
    })
    .catch(function(err) {
        console.error(err);
    });
}

//CREATE
function addItem() {
    const item = {
        isComplete: false,
        name: document.getElementById('add-name').value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(function(response) {
        console.log('response =', response);
    })
    .then(function(data) {
        console.log('data = ', data);
        document.getElementById('add-name').value = '';
        getItems();
        //location.reload();
        
    })
    .catch(function(err) {
        console.error('Unable to add item.', error);
    });
}

function findItemByIdInArray(id) {
    return elem => elem.id === id;
}

//EDIT
function displayEditForm(id) {
    //const item = todos.find(item => item.id === id);
    const item = todos.find(findItemByIdInArray(id));

    //fill edit form
    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-isComplete').value = item.isComplete;
    document.getElementById('editForm').style.display = 'block';
}

//EDIT
function updateItem() {
    const itemId = document.getElementById('edit-id');
    const item = {
        id: parseInt(itemId.value),
        isComplete: document.getElementById('edit-isComplete').checked,
        name: document.getElementById('edit-name').value.trim()
    };

    fetch(uri+'/'+item.id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(() => getItems())
    .catch(function(err) {
        console.error('Unable to update item.', error);
    });

    closeInput();
}

//DELETE
function deleteItem(id) {
    fetch(uri+'/'+id, {
        method: 'DELETE'
    })
    .then(() => getItems())
    .catch(function(err) {
        console.error('Unable to delete item.', error);
    });
    closeInput();
}

function _displayCount(itemCount) {
    document.getElementById("counter").innerText = itemCount;
}

function _displayItems(data) {
    const tbody = document.getElementById('todos');

    //recharge
    tbody.innerHTML = '';

    _displayCount(data.length);

    data.forEach(element => {
        //create checkboxs
        let isCompleteCheckbox = document.createElement('input');
        isCompleteCheckbox.type = 'checkbox';
        isCompleteCheckbox.disabled = true;
        isCompleteCheckbox.checked = element.isComplete;

        //EDIT
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', 'displayEditForm('+element.id+')');

        //DELETE
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', 'deleteItem('+element.id+')');

        //create table content
        let tr = tbody.insertRow();

        let td0 = tr.insertCell(0);
        td0.appendChild(document.createTextNode(element.id));

        let td1 = tr.insertCell(1);
        td1.appendChild(isCompleteCheckbox);

        let td2 = tr.insertCell(2);
        td2.appendChild(document.createTextNode(element.name));

        let td3 = tr.insertCell(3);
        td3.appendChild(editButton);
        
        let td4 = tr.insertCell(4);
        td4.appendChild(deleteButton);
    });

    todos = data;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
  }
