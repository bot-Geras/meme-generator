import memesData from "../data/memesData"
import { useState } from "react"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [memes, setMemes] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    
    function handleChange(event) {
        const {name, value} = event.target
        setMemes(prevState => ({
            ...prevState,
            [name] : value
        }))

    }

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
                <input type="text" onChange={handleChange} name="topText" placeholder="Top Text" className="input--form" />
                <input type="text" onChange={handleChange} name="bottomText" placeholder="Bottom Text" className="input--form" />
                <button 
                className="form--button"
                onClick={getMemeImage}
                >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memes.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memes.topText}</h2>
                <h2 className="meme--text bottom">{memes.bottomText}</h2>
            </div>
        </main>
    )
}