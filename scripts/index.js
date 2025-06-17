document.addEventListener('DOMContentLoaded', () => {
    const presetButtons = document.querySelectorAll('[role="group"] button');
    const quantityInput = document.getElementById('quantity');

    presetButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantityInput.value = button.textContent;
        });
    });
});

const initialData = [
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' },
    { time: '16:59:32', price: '420.56', volume: '25' }
];

const content = document.getElementById('content');

function createDataRow(data) {
    const row = document.createElement('div');
    row.className = 'grid grid-cols-3 text-white font-regular text-sm tracking-tight';
    row.setAttribute('role', 'row');

    row.innerHTML = `
        <span role="cell" aria-label="Time">${data.time}</span>
        <span role="cell" aria-label="Price" class="text-center ml-[38px]">${data.price}</span>
        <span role="cell" aria-label="Volume" class="text-right">${data.volume}</span>
    `;

    return row;
}

function loadInitialData() {
    content.setAttribute('role', 'table');
    content.setAttribute('aria-label', 'Time and Sales Data');

    const headerRow = document.createElement('div');
    headerRow.className = 'grid grid-cols-3 text-grey-text-color font-regular text-sm tracking-tight';
    headerRow.setAttribute('role', 'row');
    content.appendChild(headerRow);

    initialData.forEach(data => {
        content.appendChild(createDataRow(data));
    });
}

loadInitialData();
