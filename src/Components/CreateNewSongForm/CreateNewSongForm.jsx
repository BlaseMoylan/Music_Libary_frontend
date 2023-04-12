import { useState } from "react";
import "./CreateNewSong.css"

const CreateNewSongForm=(newSong)=>{
    const [title, setTitle] = useState("")
    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [release_date, setReleaseDate] = useState("")
    const [running_time, setRunningTime] = useState("")
    const [num_of_likes, setLikes] = useState("")
    const [add_new_song,setSong]= useState("inactive");

    function handleSubmit(event){
        event.preventDefault();
        let addSong={
            title:title,
            album:album,
            artist:artist,
            genre:genre,
            release_date:release_date,
            running_time:running_time,
            num_of_likes:num_of_likes
        };
        newSong.newSong(addSong)
    }
    function onClickAdd(){
        if(add_new_song === "inactive"){
            setSong("active")
        }
        if(add_new_song === "active"){
            setSong("inactive")
        }
    }
    function AddNewSong(){
        if(add_new_song === "active"){
            
            return (
                <form onSubmit={handleSubmit} className="form">
                    <div2>
                        <label>Title</label>
                        <input type='string' value={title} data-test="title" onChange={(event) => setTitle(event.target.value)}/>
                    </div2>
                    <div2>
                        <label>Album</label>
                        <input type='string' value={album} data-test="album" onChange={(event) => setAlbum(event.target.value)}/>
                    </div2>
                    <div2>
                        <label>Artist</label>
                        <input type='string' value={artist} data-test="artist" onChange={(event) => setArtist(event.target.value)}/>
                    </div2>
                    <div2>
                        <label>Genre</label>
                        <input type='string' value={genre} data-test="genre" onChange={(event) => setGenre(event.target.value)}/>
                    </div2>
                    <div2>
                        <label>Release Date</label>
                        <input type='date' value={release_date} data-test="release_date" onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div2>
                    <div2>
                        <lable>Running Time</lable>
                        <input type='integer' value={running_time} data-test="running_time" onChange={(event) => setRunningTime(event.target.value)}/>
                    </div2>
                    <div2>
                        <label>Likes</label>
                        <input type='integer' value={num_of_likes} data-test="likes" onChange={(event) => setLikes(event.target.value)}/>
                    </div2>
                    <div2>
                        <button type="submit" className="btn btn-primary addButton2" data-test="add_button" >Add Song</button>
                    </div2>
                </form>)
        if(add_new_song === "inactive"){
            
            return (<div></div>)
        }
        }

    }
    let form=AddNewSong()
    return (
        <div><button className="addSong" onClick={onClickAdd}><i>Add New Song</i></button>{form}</div>
    );
}
export default CreateNewSongForm;