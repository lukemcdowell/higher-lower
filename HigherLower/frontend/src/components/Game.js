import React, {Component} from 'react';
import variables from "../variables";
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
            playAgain: false
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.handlePlayAgain = this.handlePlayAgain.bind(this);
    }

    getDeck() {
        //needs updating in order to work with the api

        // fetch(variables.API_BASE+"CardGame")
        // .then(response=>response.json())
        // .then(data=>{
        //     this.setState({deck:data});
        // });

        let localDeck = [{"suit":"spades","rank":"queen"},{"suit":"hearts","rank":"ace"},{"suit":"hearts","rank":"queen"},{"suit":"diamonds","rank":"ace"},{"suit":"clubs","rank":"5"},{"suit":"hearts","rank":"6"},{"suit":"spades","rank":"ace"},{"suit":"clubs","rank":"8"},{"suit":"diamonds","rank":"5"},{"suit":"diamonds","rank":"queen"},{"suit":"diamonds","rank":"6"},{"suit":"hearts","rank":"3"},{"suit":"clubs","rank":"jack"},{"suit":"hearts","rank":"2"},{"suit":"hearts","rank":"4"},{"suit":"diamonds","rank":"2"},{"suit":"spades","rank":"10"},{"suit":"spades","rank":"7"},{"suit":"clubs","rank":"2"},{"suit":"diamonds","rank":"3"},{"suit":"spades","rank":"6"},{"suit":"clubs","rank":"3"},{"suit":"spades","rank":"8"},{"suit":"clubs","rank":"7"},{"suit":"hearts","rank":"8"},{"suit":"spades","rank":"4"},{"suit":"diamonds","rank":"8"},{"suit":"spades","rank":"3"},{"suit":"diamonds","rank":"9"},{"suit":"diamonds","rank":"7"},{"suit":"hearts","rank":"jack"},{"suit":"hearts","rank":"7"},{"suit":"clubs","rank":"queen"},{"suit":"diamonds","rank":"10"},{"suit":"hearts","rank":"10"},{"suit":"diamonds","rank":"king"},{"suit":"clubs","rank":"10"},{"suit":"spades","rank":"jack"},{"suit":"spades","rank":"king"},{"suit":"diamonds","rank":"jack"},{"suit":"clubs","rank":"4"},{"suit":"clubs","rank":"king"},{"suit":"hearts","rank":"king"},{"suit":"clubs","rank":"6"},{"suit":"spades","rank":"9"},{"suit":"hearts","rank":"9"},{"suit":"spades","rank":"5"},{"suit":"clubs","rank":"ace"},{"suit":"hearts","rank":"5"},{"suit":"spades","rank":"2"},{"suit":"clubs","rank":"9"},{"suit":"diamonds","rank":"4"}];
        let card = localDeck.pop();
        this.setState({
            deck: localDeck,
            currentCard: card
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

    handleClick(e) {
        let { playAgain } = this.state;
        let guess = e.target.className;
        let card = this.getLastCard();
        this.setState({
            nextCard: card,
            playAgain: !playAgain
        });
    }

    handlePlayAgain() {
        let { playAgain } = this.state;
        let {nextCard} = this.state;
        this.setState({
            playAgain: !playAgain,
            currentCard: nextCard,
            nextCard: {}
        });        
    }

    render() {
        const {deck} = this.state;
        const {currentCard} = this.state;
        const {nextCard} = this.state;
        const {playAgain} = this.state;

        return(
            <>
                <h3>Remaining cards: {deck.length} </h3>
                <h3>Current card: {currentCard.rank} of {currentCard.suit}</h3>
                <h3>Next card: {nextCard.rank} of {nextCard.suit}</h3>

                <br></br>
                <div>
                    <button onClick={() => {console.log(deck)}}>Log Deck</button>
                </div>
                <br></br>
                <div className="cards">
                    <Card {...currentCard}/>
                    {playAgain ? ( <Card {...nextCard}/> ) : ( <BackCard /> )}

                </div>
                <br></br>

                {playAgain ? (
                <button onClick={this.handlePlayAgain}>Play Again</button>
                ) : (
                <Controls handleClick={this.handleClick} />
                )}
            </>
        )
    }
}
