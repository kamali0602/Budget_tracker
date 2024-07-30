function addTransaction() {
    const type = document.getElementById('transaction-type').value;
    const name = document.getElementById('transaction-name').value.trim();
    const amount = parseFloat(document.getElementById('transaction-amount').value);

    if (type && name && !isNaN(amount) && amount > 0) {
        const transactionList = document.getElementById('transaction-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${type}</td>
            <td>${name}</td>
            <td>$${amount.toFixed(2)}</td>
            <td class="delete" onclick="deleteTransaction(this)">Delete</td>
        `;

        transactionList.appendChild(row);

        document.getElementById('transaction-type').value = '';
        document.getElementById('transaction-name').value = '';
        document.getElementById('transaction-amount').value = '';
    }
}

function deleteTransaction(element) {
    const row = element.parentElement;
    row.remove();
}
