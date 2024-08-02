import React, { useState } from 'react';
import axios from 'axios';

const backendPort = process.env.BACKEND_PORT || 5000
const backendUrl = `http://localhost:${backendPort}`

const ApiButtons = () => {
  const [result, setResult] = useState('');
  const [downloadFileName, setDownloadFileName] = useState('');

  const getCreationTime = async () => {
    try {
      const response = await axios.get(`${backendUrl}/creation`);
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setResult(`Error: ${error.message}`);
      console.error('Error:', error);
    }
  };

  const getDynamicValue = async () => {
    try {
      const response = await axios.get(`${backendUrl}/dynamic`);
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setResult(`Error: ${error.message}`);
      console.error('Error:', error);
    }
  };

  const getDockerfile = async () => {
    try {
      const response = await axios.get(`${backendUrl}/dockerfile`, { responseType: 'text' });
      setResult(response.data);
    } catch (error) {
      setResult(`Error: ${error.message}`);
      console.error('Error:', error);
    }
  };

  const getIndex = async () => {
    try {
      const response = await axios.get(`${backendUrl}/`, { responseType: 'text' });
      setResult(response.data);
    } catch (error) {
      setResult(`Error: ${error.message}`);
      console.error('Error:', error);
    }
  };

  const uploadFile = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.put(`${backendUrl}/put`, formData);
      setResult(response.data);
    } catch (error) {
      setResult(`Error: ${error.message}`);
      console.error('Error:', error);
    }
  };

  const downloadFile = async () => {
    try {
      const response = await axios.get(`${backendUrl}/get?filename=${downloadFileName}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', downloadFileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      setResult(`Error: ${error.message}`);
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Flask App</h1>
      <button onClick={getCreationTime}>Get Creation Time</button>
      <button onClick={getDynamicValue}>Get Dynamic Value</button>
      <button onClick={getDockerfile}>Get Dockerfile</button>
      <button onClick={getIndex}>Get Index</button>
      <input type="file" id="fileInput" onChange={uploadFile} style={{ display: 'none' }} />
      <button onClick={() => document.getElementById('fileInput').click()}>Upload File</button>
      <input
        type="text"
        value={downloadFileName}
        onChange={(e) => setDownloadFileName(e.target.value)}
        placeholder="Enter filename to download"
      />
      <button onClick={downloadFile}>Download File</button>
      <pre id="result">{result}</pre>
    </div>
  );
};

export default ApiButtons;
