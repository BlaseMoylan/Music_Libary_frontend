import React,{useEffect, useState} from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable'
// make axios request request to the Music Library Apia for (get all songs)
// need to put the api request in a useEffect hook function with an empty dependency array
function App() {

  const [songs,setSongs]=useState([])

  useEffect(()=>{
    makeGetRequest();
  }, [])
  async function makeGetRequest(){
    try{
      let response=await axios.get('http://127.0.0.1:5000/api/songs');
      console.log(response.data);
      setSongs(response.data)
    }catch (ex) {
      console.log('error in makeGetRequest Api call!')
    }
  }
  return (
    <div >
      {/* <h1>async await axios Exsample</h1>
      <button onClick={makeGetRequest}>Remake Api call</button> */}
      <div>
        {songs.length!=0 ? <MusicTable songs={songs}/> :
        <div>loading...</div>}
      </div>
      
    </div>
  );
}

export default App;
