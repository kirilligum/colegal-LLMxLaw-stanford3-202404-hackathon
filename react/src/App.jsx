import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function readFileContent(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = event => resolve(event.target.result);
    reader.onerror = error => reject(error);
    reader.readAsText(file);
  });
}

function App() {
  const [count, setCount] = useState(0)

  const [transcript, setTranscript] = useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const content = await readFileContent(file);
      setTranscript(content);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        colegal
      </h1>
      <div className="transcript-container">
        <input type="file" accept=".txt" onChange={handleFileUpload} ref={fileInputRef} />
      </div>
      <div className="text-left">
        <pre>{transcript}</pre>
      </div>
    </>
  )
}

export default App
