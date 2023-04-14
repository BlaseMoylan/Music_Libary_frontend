import React,{useEffect, useState} from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable'
import CreateNewSongForm from './Components/CreateNewSongForm/CreateNewSongForm';
import SearchBar from './Components/NavBar/NavSearchBar';
import SearchCategories from './Components/SearchCategories/SearchCategories';
import "./App.css"
// make axios request request to the Music Library Apia for (get all songs)
// need to put the api request in a useEffect hook function with an empty dependency array
function App() {

  const [songs,setSongs]=useState([])
  const [runTime,setRunTime]=useState("")

  useEffect(()=>{
    makeGetRequest();
  }, [])
  async function makeGetRequest(){
    try{
      let response=await axios.get('http://127.0.0.1:5000/api/songs');
      console.log(response.data);
      setSongs(response.data.songs)
    }catch (ex) {
      console.log('error in makeGetRequest Api call!')
    }
  }
  async function makeTimeGetRequest(){
    try{
      let response=await axios.get('http://127.0.0.1:5000/api/songs');
      console.log(response.data);
      setRunTime(response.data.total)
    }catch (ex) {
      console.log('error in makeTimeGetRequest Api call!')
    }
  }
  makeTimeGetRequest()
  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:5000/api/songs',newSong);
    if(response.status===201){
      await makeGetRequest();
    }
  }
  async function deleteSong(id){
    let response = await axios.delete(`http://127.0.0.1:5000/api/songs/${id}` )
    if(response.status===204){
      await makeGetRequest();
    }
  }
  // async function edit(id,song){
  //   let response = await axios.put(`http://127.0.0.1:5000/api/songs/${id}`,song)
  //   if(response.status===200){
  //     await makeGetRequest();
  //   }
  // }
  async function edit(song,id) {
    console.log(song)
    try {
        let response = await fetch(`http://127.0.0.1:5000/api/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json",
            },
          });
          if(response.status===200){
                await makeGetRequest();
              }
        console.log(response)
    } catch (err) {
    }
}
  return (
    <div className='body'>
      <div className='navBar'>
        <div>My Music Library</div>
        <div1>
          <SearchBar setSongs={setSongs} songs={songs} makeGetRequest={makeGetRequest}/>
        </div1>
      </div>
      
      <div>
        {songs.length!=0 ? <MusicTable songs={songs} deleteSong={deleteSong} edit={edit}/> :
        <div className='response'>This Song is not in you Library.</div>}
      </div>
      <div>
        <SearchCategories setSongs={setSongs} songs={songs} makeGetRequest={makeGetRequest}/>
      </div>
      <div>
        <CreateNewSongForm newSong={createSong}/>
        <div className='Time'>Total Run Time: {runTime}</div>
      </div>
      
      
    </div>
  );
}

export default App;
