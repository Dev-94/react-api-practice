import React, { Component } from 'react';

class Koala extends Component {
    constructor() {
        super();
        this.state = {
            facts: [],
        };
    }


    componentWillMount() {

        fetch('https://some-random-api.ml/facts/koala')
            .then((results) => {
                return results.json()
            })
            .then((data) => {
                let facts = data.results.map((fact) => {

                    return (
                        <div
                            key={fact.results}>
                            <p> {fact.results} </p>

                        </div>
                    )

                })
                this.setState({ facts: facts })
            })
    }



    render() {
        return (
            <div>

                hello: {this.state.facts}

            </div>
        )
    }

}



export default Koala;

