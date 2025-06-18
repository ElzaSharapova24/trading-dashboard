/**
 * QUANTITY PRESET BUTTONS FUNCTIONALITY
 * Handles the preset quantity buttons in the trading form
 * Sets the quantity input value when a preset button is clicked
 */
const quantityInput = document.getElementById('quantity');
const presetButtons = document.querySelectorAll('.preset-btn');

presetButtons.forEach(button => {
    button.addEventListener('click', () => {
        quantityInput.value = button.textContent.trim();
    });
});

/**
 * TIME & SALES DATA
 * Mock data for the Time & Sales section
 * Each object contains time, price, and volume information
 */
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

/**
 * TIME & SALES TABLE ELEMENTS
 * Reference to the container element for the Time & Sales data
 */

const content = document.getElementById('content');
/**
 * DATA ROW CREATION
 * Creates a new row for the Time & Sales table
 * @param {Object} data - Object containing time, price, and volume data
 * @returns {HTMLElement} - The created row element with formatted data
 */
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

/**
 * DATA INITIALIZATION
 */
function loadInitialData() {
    // Set table role for accessibility
    content.setAttribute('role', 'table');
    content.setAttribute('aria-label', 'Time and Sales Data');

    // Create header row
    const headerRow = document.createElement('div');
    headerRow.className = 'grid grid-cols-3 text-grey-text-color font-regular text-sm tracking-tight';
    headerRow.setAttribute('role', 'row');
    content.appendChild(headerRow);

    // Add data rows
    initialData.forEach(data => {
        content.appendChild(createDataRow(data));
    });
}

// Initialize the Time & Sales table when the script loads
loadInitialData();
