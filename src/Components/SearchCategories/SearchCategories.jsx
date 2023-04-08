import { useState } from "react";
const SearchCategories = ({setSongs,songs,makeGetRequest}) => {
    const [thisButton,setThisButton]=useState("inactive")
    const [thisButton1,setThisButton1]=useState("inactive")
    const [thisButton2,setThisButton2]=useState("inactive")
    const [thisButton3,setThisButton3]=useState("inactive")
    
    function selected(){
        if(thisButton==="inactive"){
            setThisButton("active")
        }
        if(thisButton==="active"){
            setThisButton("inactive")
        }
    }
    function selected1(){
        if(thisButton1==="inactive"){
            setThisButton1("active")
        }
        if(thisButton1==="active"){
            setThisButton1("inactive")
        }
    }
    function selected2(){
        if(thisButton2==="inactive"){
            setThisButton2("active")
        }
        if(thisButton2==="active"){
            setThisButton2("inactive")
        }
    }
    function selected3(){
        if(thisButton3==="inactive"){
            setThisButton3("active")
        }
        if(thisButton3==="active"){
            setThisButton3("inactive")
        }
    }
    
    function search(categorie){
        let uniqueItems=[]
        if(thisButton==="active"){
            let items=songs.map((option)=>{
                if(categorie=='album'){
                    if(!uniqueItems.includes(option.album)){
                        uniqueItems.push(option.album)
                        return true
                    }
                    else{return false}
                }
            })}
        if(thisButton1==="active"){
            let items=songs.map((option)=>{
                if(categorie=='artist'){
                    if(!uniqueItems.includes(option.artist)){
                        uniqueItems.push(option.artist)
                        return true
                    }
                    else{return false}
                }
            })}
        if(thisButton2==="active"){
            let items=songs.map((option)=>{
                if(categorie=='genre'){
                    if(!uniqueItems.includes(option.genre)){
                        uniqueItems.push(option.genre)
                        return true
                    }
                    else{return false}
                }
            })}
        if(thisButton3==="active"){
            let items=songs.map((option)=>{
                if(categorie=='release_date'){
                    if(!uniqueItems.includes(option.release_date)){
                        uniqueItems.push(option.release_date)
                        return true
                    }
                    else{return false}
                }
            })}
        return (
            <div>
                {uniqueItems.map((item)=>{
                    return (
                        // onClick={displaySongs(item)}
                        <div><button>{item}</button></div>
                        // <div>{item}</div>
                        )
                    })}
            </div>
        )
        
    }
    function displaySongs(categorie){
        let results=[]
        let result=songs.filter((song)=>{
            if(song.album==categorie){
                results.push(song)
                return true}
            else if(song.genre==categorie){
                results.push(song)
                return true
            }
            else if(song.artist==categorie){
                results.push(song)
                return true
            }
            else if(song.release_date==categorie){
                results.push(song)
                return true
            }
        })
        setSongs(results)
    }
    return ( 
        <div >
            <div><button className={thisButton} onClick={selected}>Album</button>{search('album')}</div>
            <div><button className={thisButton1} onClick={selected1}>Artist</button>{search('artist')}</div>
            <div><button className={thisButton2} onClick={selected2}>Genre</button>{search('genre')}</div>
            <div><button className={thisButton3} onClick={selected3}>Release Date</button>{search('release_date')}</div>
        </div>
        );

} 
export default SearchCategories;