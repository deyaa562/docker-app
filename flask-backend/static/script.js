function getCreationTime() {
    fetch('http://localhost:5000/creation')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));
}

function getDynamicValue() {
    fetch('http://localhost:5000/dynamic')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));
}

function getDockerfile() {
    fetch('http://localhost:5000/dockerfile')
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

function getIndex() {
    fetch('http://localhost:5000/')
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
    fileInput.onchange = () => {
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:5000/put', {
            method: 'PUT',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerText = data;
        })
        .catch(error => console.error('Error:', error));
    };
}

function downloadFile() {
    const filename = document.getElementById('downloadFileName').value;
    fetch(`http://localhost:5000/get?filename=${filename}`)
        .then(response => {
            if (response.ok) {
                return response.blob();
            }
            throw new Error('File not found');
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error:', error));
}