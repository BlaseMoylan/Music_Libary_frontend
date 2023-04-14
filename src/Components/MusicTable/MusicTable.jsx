import "./MusicTable.css"
import { useState } from "react";
import EditSong from "./EditSong/EditSong.jsx";
const MusicTable=({songs,deleteSong,edit}) =>{
    const [editButton,setEditButton]=useState(null)
    function deleteS(key){
        deleteSong(key);
    }
    function editCheck(index){
        console.log(editButton)
        if(editButton===index){
            setEditButton(null)

        }
        else{setEditButton(index)}
    }
    function editS(song){
        // if(editButton!==0){
            return (
                <EditSong songs={songs} edit={edit} songId={song.id}/>
            )
        // }
        
    
    }
    return (
        <table className="Table">
            <thead>
            <tr className="titles">
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
                <th>Running Time</th>
                <th>Likes</th>
            </tr>
            </thead>
            <tbody>
                {console.log(editButton)}
                {songs.map((song,index) =>{
                    return (
                        <tr className="data"  >
                            
                            <td>{index+1}</td>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td>{song.running_time}</td>
                            <td>{song.num_of_likes}</td>
                            <td><button className="delete" onClick={()=>deleteS(song.id)}>delete</button></td>
                            <td><button className="editButton" onClick={()=>editCheck(index)}>edit</button>{editButton==index ?<EditSong song={song} edit={edit}/>:<div></div>}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
export default MusicTable;