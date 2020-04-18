import React from 'react'
import styled from 'styled-components'

const Myinput = styled.input`
width: 35%;
padding: 12px 20px;
margin: 8px 10px;
box-sizing: border-box;
`
const Mybutton = styled.button`
  width: 10%;
  padding: 12px 20px;
  background-color: red;
  border: none;
  font-size: 17px;
  border-radius: 1.5em;
  `

class Meme extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImg: []
        }
        this.change = this.change.bind(this)
        this.buttonChange = this.buttonChange.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImg : memes})
        })
    }

    change(event){
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    buttonChange(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randMemeImg = this.state.allMemeImg[randNum].url
        this.setState({ randomImg : randMemeImg})
    }

    render(){
        return(
            <div>
                <form className='memeform' onSubmit={this.buttonChange}>
                    <Myinput 
                    type='text'
                    name='topText'
                    placeholder='Top Text'
                    value={this.state.topText}
                    onChange={this.change}
                    />

                    <Myinput 
                    type='text'
                    name='bottomText'
                    placeholder='Bottom Text'
                    value={this.state.bottomText}
                    onChange={this.change}
                    />

                    <Mybutton>Gen</Mybutton>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default Meme