import React, {Component} from 'react';
import {API_BASE, RANKS} from "../variables";
import BackCard from './BackCard';
import Card from "./Card";
import Controls from './Controls';

export default class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deck: [],
            currentCard: {},
            nextCard: {},
            playAgain: false,
            guessResult: ""
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.handlePlayAgain = this.handlePlayAgain.bind(this);
    }

    getDeck() {
        fetch(API_BASE+"CardGame")
        .then((response) => { 
            return response.json();
        })
        .then((data) => {
            let firstCard = data.pop();
            let secondCard = data.pop();

            this.setState({
                deck: data,
                currentCard: firstCard,
                nextCard: secondCard
            });
        });

        //local deck for testing 
        //let deck = [{"suit":"spades","rank":"queen"},{"suit":"hearts","rank":"ace"},{"suit":"hearts","rank":"queen"},{"suit":"diamonds","rank":"ace"},{"suit":"clubs","rank":"5"},{"suit":"hearts","rank":"6"},{"suit":"spades","rank":"ace"},{"suit":"clubs","rank":"8"},{"suit":"diamonds","rank":"5"},{"suit":"diamonds","rank":"queen"},{"suit":"diamonds","rank":"6"},{"suit":"hearts","rank":"3"},{"suit":"clubs","rank":"jack"},{"suit":"hearts","rank":"2"},{"suit":"hearts","rank":"4"},{"suit":"diamonds","rank":"2"},{"suit":"spades","rank":"10"},{"suit":"spades","rank":"7"},{"suit":"clubs","rank":"2"},{"suit":"diamonds","rank":"3"},{"suit":"spades","rank":"6"},{"suit":"clubs","rank":"3"},{"suit":"spades","rank":"8"},{"suit":"clubs","rank":"7"},{"suit":"hearts","rank":"8"},{"suit":"spades","rank":"4"},{"suit":"diamonds","rank":"8"},{"suit":"spades","rank":"3"},{"suit":"diamonds","rank":"9"},{"suit":"diamonds","rank":"7"},{"suit":"hearts","rank":"jack"},{"suit":"hearts","rank":"7"},{"suit":"clubs","rank":"queen"},{"suit":"diamonds","rank":"10"},{"suit":"hearts","rank":"10"},{"suit":"diamonds","rank":"king"},{"suit":"clubs","rank":"10"},{"suit":"spades","rank":"jack"},{"suit":"spades","rank":"king"},{"suit":"diamonds","rank":"jack"},{"suit":"clubs","rank":"4"},{"suit":"clubs","rank":"king"},{"suit":"hearts","rank":"king"},{"suit":"clubs","rank":"6"},{"suit":"spades","rank":"9"},{"suit":"hearts","rank":"9"},{"suit":"spades","rank":"5"},{"suit":"clubs","rank":"ace"},{"suit":"hearts","rank":"5"},{"suit":"spades","rank":"2"},{"suit":"clubs","rank":"9"},{"suit":"diamonds","rank":"4"}];
        // let firstCard = deck.pop();
        // let secondCard = deck.pop();

        // this.setState({
        //     deck: deck,
        //     currentCard: firstCard,
        //     nextCard: secondCard
        // });
    }

    componentDidMount() {
        this.getDeck();
    }

    getLastCard() {
        const { deck } = this.state;
        let card = deck.pop();
        this.setState({
            deck: deck
        });
        return card;
    }

    compareCards() {
        const currentCardRank = RANKS[this.state.currentCard.rank];
        const nextCardRank = RANKS[this.state.nextCard.rank];
        
        // higher
        if (nextCardRank > currentCardRank)
            return "higher";
        else if (nextCardRank < currentCardRank)
            return "lower";
        else
            return "same";
    }

    handleClick(e) {
        let { playAgain } = this.state;
        let guess = e.target.className;
        let result = "";

        if (guess === this.compareCards())
            result = "correct";
        else
            result = "incorrect";

        this.setState({
            playAgain: !playAgain,
            guessResult: result
        });
    }

    //might have to set next card here for the game to refresh nicely
    handlePlayAgain() {
        let { playAgain } = this.state;
        let {nextCard} = this.state;
        this.setState({
            playAgain: !playAgain,
            currentCard: nextCard,
            nextCard: this.getLastCard()
        });        
    }

    render() {
        // find a nicer way to unpack these
        const {deck} = this.state;
        const {currentCard} = this.state;
        const {nextCard} = this.state;
        const {playAgain} = this.state;
        const {guessResult} = this.state;

        return(
            <>
                <br></br>
                <h3>Remaining cards: {deck.length+1} </h3>

                {/*
                <div>
                    <button onClick={() => {console.log(deck)}}>Log Deck</button>
                </div>
                */}

                <br></br>
                <div className="cards">
                    <Card {...currentCard}/>
                    {playAgain ? ( <Card {...nextCard}/> ) : ( <BackCard /> )}

                </div>
                <br></br>

                {playAgain ? (
                    <>
                        <h4>Your guess was {guessResult}</h4>
                        <button className = "playAgain" onClick={this.handlePlayAgain}>Play Again</button>
                    </> 
                    ) : ( 
                    <Controls handleClick={this.handleClick} />
                )}
            </>
        )
    }
}
