import memesData from "../data/memesData"

export default function Meme() {
    // console.table(memesData)

    function getNewMemeImage() {
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)

    }


    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="input--form" />
                <input type="text" placeholder="Bottom Text" className="input--form" />
                <button 
                className="form--button"
                onClick={getNewMemeImage}
                >Get a new meme image 🖼</button>
            </div>
        </main>
    )
}