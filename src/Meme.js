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
  letter-spacing: 1.5px;
  `
const Mainimg = styled.img`
    position: relative;
    margin: auto;
    width: 50%;`

const Myh2 = styled.h2`
    position: relative;
    width: 90%;
    text-align: cen;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-size: 2em;
    text-transform: uppercase;
    color: black;
    letter-spacing: 1px;

`

const Maindiv = styled.div`
    background: whitesmoke;
    margin: 0;
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
            <Maindiv>
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
                    <Mainimg src={this.state.randomImg} alt='' />
                    <Myh2 className='top'>{this.state.topText}</Myh2>
                    <Myh2 className='bottom'>{this.state.bottomText}</Myh2>
                </div>
            </Maindiv>
        )
    }
}

export default Meme