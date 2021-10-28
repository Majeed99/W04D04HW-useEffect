import {useEffect, useState} from "react"
import axios from "axios"

function Trending (){

    const[type, setType]= useState('Anime');
    const[item, setItems]= useState([]);
    
    
    function fetchAnime (){

axios.get(`https://kitsu.io/api/edge/trending/${type}`)
.then(function(response){
    let fetchDate = response.data.data;
    let Array =[];
    fetchDate.forEach(el =>{
        console.log(el);
        Array.push([el.attributes.canonicalTitle, el.attributes.posterImage.large]);
    });
    setItems(Array)
})
}


useEffect(()=>{
    fetchAnime();
},[type]);

return (
<div>
    <div>
        <button onClick={()=>setType("Anime")}>Anime</button>
        <button onClick={()=>setType("Manga")}>Manga</button>
    </div>
    {item.map(function(item){
    if (item){
        return(
            <div>
                <h3>{item[0] || "No Name"}</h3>
                <img src ={item[1]} width={200} height={200}></img>

            </div>
        )}
    
    }
)}
</div>
);
}




export default Trending;