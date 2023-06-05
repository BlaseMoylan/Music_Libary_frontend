import { useState } from "react";
const EditSong=({song,edit})=>{
    const [title, setTitle] = useState(song.title)
    const [album, setAlbum] = useState(song.album)
    const [artist, setArtist] = useState(song.artist)
    const [genre, setGenre] = useState(song.genre)
    const [release_date, setReleaseDate] = useState(song.release_date)
    const [running_time, setRunningTime] = useState(song.running_time)
    const [num_of_likes, setLikes] = useState(song.num_of_likes)
    

    function handleSubmit(event){
        event.preventDefault();
        let editSong={
            title:title,
            album:album,
            artist:artist,
            genre:genre,
            release_date:release_date,
            running_time:running_time,
            num_of_likes:num_of_likes
        };
        edit(editSong,song.id)
    }
    
return(
    <form onSubmit={handleSubmit} >
            <div2>
                <label>Title</label>
                <input type='string' placeholder={song.title} value={title} onChange={(event) => setTitle==(event.target.value)}/>
            </div2>
            <div2>
                <label>Album</label>
                <input type='string' placeholder={song.album} value={album} onChange={(event) => setAlbum==(event.target.value)}/>
            </div2>
            <div2>
                <label>Artist</label>
                <input type='string' placeholder={song.artist} value={artist} onChange={(event) => setArtist==(event.target.value)}/>
            </div2>
            <div2>
                <label>Genre</label>
                <input type='string'  placeholder={song.genre} value={genre} onChange={(event) => setGenre==(event.target.value)}/>
            </div2>
            <div2>
                <label>Release Date</label>
                <input type='date' placeholder={song.release_date} value={release_date} onChange={(event) => setReleaseDate==(event.target.value)}/>
            </div2>
            <div2>
                <lable>Running Time</lable>
                <input type='integer' placeholder={song.running_time} value={running_time} onChange={(event) => setRunningTime==(event.target.value)}/>
            </div2>
            <div2>
                <label>Likes</label>
                <input type='integer' placeholder={song.num_of_likes} value={num_of_likes} onChange={(event) => setLikes==(event.target.value)}/>
            </div2>
            <div2>
                <button type="submit" className="btn btn-primary" >Edit Song</button>
            </div2>
        </form>
)
}
export default EditSong