let items = [
    {id: 1, name: 'digamber', tel:'1234'},
    {id: 2, name: 'deepen', tel:'1234'},
    {id: 3, name: 'umesh', tel:'1234'},
    {id: 4, name: 'sachet', tel:'1234'},
]

const main= () =>{
    let listElement = document.createElement('li');
    listElement.innerHTML = '';
    
    
    
    
    let mainListElement = document.getElementById('main-list');
    mainListElement.appendChild(listElement);
}


document.addEventListener('DOMContentLoaded',main)