import "./MusicTable.css"
const MusicTable=({songs}) =>{
    // let s= songs.songs[0]
    // let lables=Object.keys(s)
    return (
        <table className="Table">
            <thead>
            <tr className="titles">
                <th>ID</th>
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
                {songs.map((song) =>{
                    return (
                        <tr className="data">
                            <td>{song.id}</td>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td>{song.running_time}</td>
                            <td>{song.num_of_likes}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
export default MusicTable;