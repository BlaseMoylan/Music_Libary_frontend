import { useState } from "react";


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
        if(add_new_song === "inactive"){
            
            return (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type='string' value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div>
                        <label>Album</label>
                        <input type='string' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    </div>
                    <div>
                        <label>Artist</label>
                        <input type='string' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    </div>
                    <div>
                        <label>Genre</label>
                        <input type='string' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                    <div>
                        <label>Release Date</label>
                        <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div>
                    <div>
                        <lable>Running Time</lable>
                        <input type='integer' value={running_time} onChange={(event) => setRunningTime(event.target.value)}/>
                    </div>
                    <div>
                        <label>Likes</label>
                        <input type='integer' value={num_of_likes} onChange={(event) => setLikes(event.target.value)}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" >Add Song</button>
                    </div>
                </form>)
        if(add_new_song === "active"){
            
            return (<div></div>)
        }
        }

    }
    let form=AddNewSong()
    return (
        <div><button onClick={onClickAdd}>Add New Song</button>{form}</div>
    );
}
export default CreateNewSongForm;