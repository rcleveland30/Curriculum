const itemsList = document.getElementById('items-list');
const searchInput = document.getElementById('search');

const renderItemsList = items => {
    itemsList.innerHTML = '';
    items.forEach (item => {
        const li = document.createElement('li');
        li.innerText = item;
        itemsList.append(li);
    })
};

renderItemsList(items);

searchInput.addEventListener ('keyup', e => {
    const value = e.target.value;
    const filteredItems = items.filter(item => item.toLowerCase().search(value) !== -1);
    renderItemsList(filteredItems);
})
