import React, {Component} from 'react';
import {variables} from "../Variables";

export class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        }
    }

    getDeck(){
        fetch(variables.API_BASE+"CardGame")
        .then(response=>response.json())
        //.then(data => console.log(data))
        .then(data=>{
            this.setState({cards:data});
        });
    }

    componentDidMount(){
        this.getDeck();
    }

    render(){
        const {
            cards
        } = this.state;

        return(
            <div>
                <h3>Deck length: {cards.length}</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Suit</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map(c=>
                            <tr>
                                <td>{c["suit"]}</td>
                                <td>{c["rank"]}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}