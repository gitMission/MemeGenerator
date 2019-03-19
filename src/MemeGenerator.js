import React from "react"

export default class MemeGenerator extends React.Component{

    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                    const {memes} = response.data;
                    this.setState({
                        allMemeImgs: memes
                    })
                })
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        // get a random int (index in the array)
        // get the meme from that index
        // set `randomImg` to the `.url` of the random item I grabbed
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({ randomImg: randMemeImg });

    }

    render() {
        return(
            <div className="meme-generator">
                <form className="meme-form" onSubmit={this.handleSubmit}>

                    <input
                        type="text"
                        name="topText"
                        placeholder=" Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder=" Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <br />


                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img
                        src={this.state.randomImg}
                        alt=""
                    />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}