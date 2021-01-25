import './App.css';
import ImageList from './ImageList';
import React, { useState } from 'react';
const axios = require('axios')

function App() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [myclass, setMyclass] = useState("");
  const [btnText, setbtnText] = useState("Fetch");
  const [images, setImages] = useState([]);
  const handleSubmit = (evt) => {
      evt.preventDefault();
      // alert(`Submitting Name ${url}`);
      setImages([]);
      setError('');
      setbtnText('Fetching...');
      setMyclass('');
      if(url === '')
      {
        setError('URL required');
        setbtnText('Fetch');
        setMyclass('');
      }
      else
      {
        axios.post('https://dev.invality.com/api/fetch-images', {
          url:url
        })
        .then(function (response) {
          if(response.data.data.length > 0)
          {
            setbtnText('Fetch');
            setMyclass('fixedheader');
            setImages(response.data.data);
          }else
          {
            setbtnText('Fetch');
            setError('No Image Found');
          }
          
        })
        .catch(function (error){
          setbtnText('Fetch');
          setError('Invalid URL');
        });
      }
      
  }

  return (
    <div className="container">
    <h1 className="headerlogo">Imagex</h1>
    <form onSubmit={handleSubmit}>
    <div className={'mtl row '+ myclass}>
      <div className="col-sm-10 col-md-10 col-10">
        <input type="text" className="form-control mytext" value={url} placeholder="URL" onChange={e => setUrl(e.target.value)}/>
        <div>
            <p className="errormessage">{error}</p>
        </div>
      </div>
      <div className="col-sm-2 col-md-2 col-2">
        <button className="btn btn-primary searchbtn">
          {btnText}
        </button>
      </div>
    </div>
    <div>
      <ImageList images={images}/>
    </div>
    </form>
    </div>
  );
}

export default App;
