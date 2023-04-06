
const MusicTable=({songs}) =>{
    let s= songs.songs[0]
    let lables=Object.keys(s)
    return (
        <table>
            <thead>
            <tr>
                {lables.map((lable)=>{
                    return (
                        <th>{lable}</th>
                    )
                })}
            </tr>
            </thead>
            <tbody>
                {songs.songs.map((song) =>{
                    return (
                        <tr>
                            {Object.values(song).map((value) => {
                                
                                return (
                                    <td>{value}</td>
                                );
                            })}
                            
                        </tr>
                    );
                })}
            </tbody>
        </table>
        // <div>
        //     {songs.map}
        // </div>
    )
}
export default MusicTable;