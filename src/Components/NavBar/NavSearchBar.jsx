import { useState } from "react";
// import MusicTable from "../MusicTable/MusicTable";

const SearchBar=({setSongs,songs,makeGetRequest}) => {
    const [onClick,setOnClick]=useState("inactive")
    const [input,setInput] =useState("")
    function handleSubmit(event){
        if(onClick==="inactive"){
            setOnClick("active")
            event.preventDefault();
            console.log(songs)
            let results=songs.filter(function(song){return song.title==input})
            setSongs(results)}
        else{
            setOnClick("inactive")
            makeGetRequest()
        }
    }
    
    function change(){
        if(onClick=="inactive"){
            return "Search"
        }
        else {return "Reset"}
    }
    let tag=change()
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='string' onChange={(event) => setInput(event.target.value)}/>
                <button type="submit" className="btn btn-primary" >{tag}</button>
            </div>
        </form>
    )
}
export default SearchBar;