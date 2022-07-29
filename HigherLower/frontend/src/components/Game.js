import React, {Component} from 'react';
import {API_BASE, RANKS} from "../variables";
import Card from "./Card";
import Controls from './Controls';
import Score from "./Score";
import PlayAgain from './PlayAgain';
import GameOver from './GameOver';
import GuessCard from "./GuessCard";
import { Container } from "react-bootstrap";
import  { withAuth0 } from "@auth0/auth0-react";

//renders all of the components necessary to play the game together
class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deck: [],
            currentCard: {},
            nextCard: {},
            playAgain: false,
            guessResult: "",
            score: {
                correct: 0,
                incorrect: 0
            },
            gameOver: false
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.handlePlayAgain = this.handlePlayAgain.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    //gets shuffled deck from backend
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
        // let deck = [{"suit":"spades","rank":"queen"},{"suit":"hearts","rank":"ace"},{"suit":"hearts","rank":"queen"},{"suit":"diamonds","rank":"ace"},{"suit":"clubs","rank":"5"},{"suit":"hearts","rank":"6"},{"suit":"spades","rank":"ace"},{"suit":"clubs","rank":"8"},{"suit":"diamonds","rank":"5"},{"suit":"diamonds","rank":"queen"},{"suit":"diamonds","rank":"6"},{"suit":"hearts","rank":"3"},{"suit":"clubs","rank":"jack"},{"suit":"hearts","rank":"2"},{"suit":"hearts","rank":"4"},{"suit":"diamonds","rank":"2"},{"suit":"spades","rank":"10"},{"suit":"spades","rank":"7"},{"suit":"clubs","rank":"2"},{"suit":"diamonds","rank":"3"},{"suit":"spades","rank":"6"},{"suit":"clubs","rank":"3"},{"suit":"spades","rank":"8"},{"suit":"clubs","rank":"7"},{"suit":"hearts","rank":"8"},{"suit":"spades","rank":"4"},{"suit":"diamonds","rank":"8"},{"suit":"spades","rank":"3"},{"suit":"diamonds","rank":"9"},{"suit":"diamonds","rank":"7"},{"suit":"hearts","rank":"jack"},{"suit":"hearts","rank":"7"},{"suit":"clubs","rank":"queen"},{"suit":"diamonds","rank":"10"},{"suit":"hearts","rank":"10"},{"suit":"diamonds","rank":"king"},{"suit":"clubs","rank":"10"},{"suit":"spades","rank":"jack"},{"suit":"spades","rank":"king"},{"suit":"diamonds","rank":"jack"},{"suit":"clubs","rank":"4"},{"suit":"clubs","rank":"king"},{"suit":"hearts","rank":"king"},{"suit":"clubs","rank":"6"},{"suit":"spades","rank":"9"},{"suit":"hearts","rank":"9"},{"suit":"spades","rank":"5"},{"suit":"clubs","rank":"ace"},{"suit":"hearts","rank":"5"},{"suit":"spades","rank":"2"},{"suit":"clubs","rank":"9"},{"suit":"diamonds","rank":"4"}];
        // let firstCard = deck.pop();
        // let secondCard = deck.pop();
        // this.setState({
        //     deck: deck,
        //     currentCard: firstCard,
        //     nextCard: secondCard
        // });

        //small local deck for testing 
        // let deck = [{"suit":"spades","rank":"queen"},{"suit":"hearts","rank":"ace"},{"suit":"hearts","rank":"queen"},{"suit":"diamonds","rank":"ace"}];
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

    //gets top card from deck
    getLastCard() {
        const { deck } = this.state;
        let card = deck.pop();
        this.setState({
            deck: deck
        });
        return card;
    }

    //compares the current card and next card ranks
    compareCards() {
        const currentCardRank = RANKS[this.state.currentCard.rank];
        const nextCardRank = RANKS[this.state.nextCard.rank];

        if (nextCardRank > currentCardRank)
            return "higher";
        else if (nextCardRank < currentCardRank)
            return "lower";
        else
            return "same";
    }

    //handles what happens when the user clicks on the higher or lower buttons
    handleClick(e) {

        let { deck, score } = this.state;
        let guess = e.target.id ;
        let result = "";

        if (guess === this.compareCards()) {
            result = "correct";
            score.correct += 1;
        }
        else {
            result = "incorrect";
            score.incorrect += 1;
        }

        this.setState({
            playAgain: true,
            guessResult: result,
            score: {
                correct: score.correct,
                incorrect: score.incorrect
            },
            gameOver: (deck.length === 0 && true)  
        });
    }

    //handles what happens when the user clicks the play again button
    handlePlayAgain() {
        let { nextCard } = this.state;

        this.setState({
            playAgain: false,
            currentCard: nextCard,
            nextCard: this.getLastCard()
        });        
    }

    //handles what happens when the user clicks on the new game button
    newGame() {
        const { score } = this.state;
        const { user, isAuthenticated } = this.props.auth0;

        const date = new Date();
        date.setHours( date.getHours() + 1 );

        const email = isAuthenticated ? user.email : "Guest";

        // add score to db 
        const newScore = {
            email: email,
            time: date,
            scoreCount: score.correct
        };
        fetch(API_BASE+"Score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newScore)
        }).then(() => {
            console.log("new score added");
        });

        //reset state
        this.setState({
            score: {
                correct: 0,
                incorrect: 0
            },
            gameOver: false,
            playAgain: false
        });

        //get new deck
        this.getDeck();
    }

    render() {
        const {deck, currentCard, nextCard, playAgain, guessResult, score, gameOver} = this.state;

        return(
            <>
            <Container id="game">
                <Score {...score} />

                <h5>Cards remaining: {deck.length+1} </h5>
                
                <Container id="cards">
                    <Card {...currentCard}/>
                    {playAgain && <Card {...nextCard}/> }
                    {!playAgain && <GuessCard /> }
                </Container>
            
                <Container id = "controls">
                    {playAgain && <PlayAgain guessResult={guessResult} handlePlayAgain={this.handlePlayAgain}/> }
                    {!playAgain && <Controls handleClick={this.handleClick} /> }
                </Container>

            </Container>
            {gameOver && <GameOver newGame={this.newGame} score={score.correct}/>}

            </>
        )
    }
}

export default withAuth0(Game);