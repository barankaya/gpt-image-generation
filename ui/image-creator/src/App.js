import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImage] = useState("");

  const createImg = async () => {
    const response = await axios.post("http://localhost:8080/create", {
      prompt,
    });
    setImage(response.data);
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Create Your Art!</h1>
        <input
          class="input-text"
          type="text"
          onChange={handleChange}
          placeholder="Enter your image description"
        />
        <button type="submit" className="input-text btn" onClick={createImg}>
          Submit
        </button>
        {imageURL && <img src={imageURL} alt="prompt" />}
      </div>
    </div>
  );
}

export default App;