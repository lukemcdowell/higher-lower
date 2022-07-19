import React, {Component} from 'react';
import {API_BASE, RANKS} from "../variables";
import Card from "./Card";
import Controls from './Controls';
import Score from "./Score";
import PlayAgain from './PlayAgain';
import GuessCard from "./GuessCard";
import { Container } from "react-bootstrap";

export default class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deck: [],
            currentCard: {},
            nextCard: {},
            playAgain: false,
            guessResult: "",
            numCorrect: 0,
            score: {
                correct: 0,
                incorrect: 0
            }
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.handlePlayAgain = this.handlePlayAgain.bind(this);
    }

    getDeck() {
        // fetch(API_BASE+"CardGame")
        // .then((response) => { 
        //     return response.json();
        // })
        // .then((data) => {
        //     let firstCard = data.pop();
        //     let secondCard = data.pop();

        //     this.setState({
        //         deck: data,
        //         currentCard: firstCard,
        //         nextCard: secondCard
        //     });
        // });

        //local deck for testing 
        let deck = [{"suit":"spades","rank":"queen"},{"suit":"hearts","rank":"ace"},{"suit":"hearts","rank":"queen"},{"suit":"diamonds","rank":"ace"},{"suit":"clubs","rank":"5"},{"suit":"hearts","rank":"6"},{"suit":"spades","rank":"ace"},{"suit":"clubs","rank":"8"},{"suit":"diamonds","rank":"5"},{"suit":"diamonds","rank":"queen"},{"suit":"diamonds","rank":"6"},{"suit":"hearts","rank":"3"},{"suit":"clubs","rank":"jack"},{"suit":"hearts","rank":"2"},{"suit":"hearts","rank":"4"},{"suit":"diamonds","rank":"2"},{"suit":"spades","rank":"10"},{"suit":"spades","rank":"7"},{"suit":"clubs","rank":"2"},{"suit":"diamonds","rank":"3"},{"suit":"spades","rank":"6"},{"suit":"clubs","rank":"3"},{"suit":"spades","rank":"8"},{"suit":"clubs","rank":"7"},{"suit":"hearts","rank":"8"},{"suit":"spades","rank":"4"},{"suit":"diamonds","rank":"8"},{"suit":"spades","rank":"3"},{"suit":"diamonds","rank":"9"},{"suit":"diamonds","rank":"7"},{"suit":"hearts","rank":"jack"},{"suit":"hearts","rank":"7"},{"suit":"clubs","rank":"queen"},{"suit":"diamonds","rank":"10"},{"suit":"hearts","rank":"10"},{"suit":"diamonds","rank":"king"},{"suit":"clubs","rank":"10"},{"suit":"spades","rank":"jack"},{"suit":"spades","rank":"king"},{"suit":"diamonds","rank":"jack"},{"suit":"clubs","rank":"4"},{"suit":"clubs","rank":"king"},{"suit":"hearts","rank":"king"},{"suit":"clubs","rank":"6"},{"suit":"spades","rank":"9"},{"suit":"hearts","rank":"9"},{"suit":"spades","rank":"5"},{"suit":"clubs","rank":"ace"},{"suit":"hearts","rank":"5"},{"suit":"spades","rank":"2"},{"suit":"clubs","rank":"9"},{"suit":"diamonds","rank":"4"}];
        let firstCard = deck.pop();
        let secondCard = deck.pop();

        this.setState({
            deck: deck,
            currentCard: firstCard,
            nextCard: secondCard
        });
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
        let { playAgain, score } = this.state;
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
            playAgain: !playAgain,
            guessResult: result,
            score: {
                correct: score.correct,
                incorrect: score.incorrect
            }
        });
    }

    handlePlayAgain() {
        let { playAgain, nextCard } = this.state;
        this.setState({
            playAgain: !playAgain,
            currentCard: nextCard,
            nextCard: this.getLastCard()
        });        
    }

    render() {
        const {deck, currentCard, nextCard, playAgain, guessResult, score} = this.state;

        return(
            <Container id="game">
                <Score {...score} />

                <h5>Cards remaining: {deck.length+1} </h5>

                
                    <Container id="cards">
                        <Card {...currentCard}/>
                        {playAgain ? ( <Card {...nextCard}/> ) : ( <GuessCard /> )}
                    </Container>
                
                <Container id = "controls">
                {playAgain ? (
                    <PlayAgain guessResult={guessResult} handlePlayAgain={this.handlePlayAgain}/>
                    ) : ( 
                    <Controls handleClick={this.handleClick} />
                )}
                </Container>

            </Container>
        )
    }
}
