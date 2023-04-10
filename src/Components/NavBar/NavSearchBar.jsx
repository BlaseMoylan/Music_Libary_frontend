import { useState } from "react";
import "./SearchBar.css"

const SearchBar=({setSongs,songs,makeGetRequest}) => {
    const [onClick,setOnClick]=useState("inactive")
    const [input,setInput] =useState("")
    function handleSubmit(event){
        if(onClick==="inactive"){
            setOnClick("active")
            event.preventDefault();
            console.log(songs)
            let results=songs.filter(function(song){
                if(song.title.toLowerCase()==input.toLowerCase()){
                    return song}
                else if(song.album.toLowerCase()==input.toLowerCase()){
                    return song}
                else if(song.artist.toLowerCase()==input.toLowerCase()){
                    return song}
                else if(song.genre.toLowerCase()==input.toLowerCase()){
                    return song}
                else if(song.release_date.toLowerCase()==input.toLowerCase()){
                    return song}
            })
            setSongs(results)
        }
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
        <form onSubmit={handleSubmit} >
            <div className="searchBar">
                <input type='string' className="input" onChange={(event) => setInput(event.target.value)}/>
                <button type="submit" className="btn btn-primary searchButton" ><i>{tag}</i></button>
            </div>
        </form>
    )
}
export default SearchBar;