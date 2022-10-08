
import { useState, useEffect } from "react"

export default function Meme() {
    
    const [memes, setMemes] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = useState([])

    // useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    // }, [])

    useEffect(() => {
        async function allMemesImages() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMemes(data.data.memes)
            
        }
        allMemesImages()
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMemes(prevState => ({
            ...prevState,
            [name] : value
        }))

    }

    function getMemeImage() {
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        // const url = memeArray[randomNumber].url
        // console.log(url)
        const url = allMemes[randomNumber].url
        setMemes(prevMemes => ({
            ...prevMemes,
            randomImage: url
        }))
        

    }


    return (
        <main>
            <div className="form">
                <input type="text" value={memes.topText} onChange={handleChange} name="topText" placeholder="Top Text" className="input--form" />
                <input type="text" value={memes.bottomText} onChange={handleChange} name="bottomText" placeholder="Bottom Text" className="input--form" />
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