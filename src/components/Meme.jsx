import memesData from "../data/memesData"
import { useState } from "react"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [memes, setMemes] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        // const url = memeArray[randomNumber].url
        // console.log(url)
        const url = memeArray[randomNumber].url
        setMemes(prevMemes => ({
            ...prevMemes,
            randomImage: url
        }))
        

    }


    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="input--form" />
                <input type="text" placeholder="Bottom Text" className="input--form" />
                <button 
                className="form--button"
                onClick={getMemeImage}
                >Get a new meme image 🖼</button>
            </div>
            <img className="meme--image" src={memes.randomImage} />
        </main>
    )
}