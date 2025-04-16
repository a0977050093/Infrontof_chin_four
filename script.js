const csvUrl = 'https://raw.githubusercontent.com/a0977050093/Infrontof_chin_four/main/%E4%B8%80%E6%8E%92%E5%81%87%E8%A1%A80320%20-%20%E8%90%AC%E5%B9%B4%E5%81%87%E8%A1%A8.csv';

fetch(csvUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        const rows = data.split('\n').map(row => row.split(','));
        const table = document.getElementById('data-table');
        rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    })
    .catch(error => console.error('Error fetching the CSV file:', error));
