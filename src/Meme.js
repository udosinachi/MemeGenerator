import React from 'react'

class Meme extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jng',
            allMemeImg: []
        }
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImg : memes})
        })
    }

    render(){
        return(
            <h1>Meme</h1>
        )
    }
}

export default Meme