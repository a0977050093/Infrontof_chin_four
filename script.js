function sortTable(columnIndex) {
    const table = document.getElementById('data-table');
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent;
        const bText = b.cells[columnIndex].textContent;
        return aText.localeCompare(bText);
    });
    rows.forEach(row => table.appendChild(row));
}