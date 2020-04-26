import React, { Component } from 'react';

class Joke extends Component {

    constructor() {
        super()
        this.state = {
            id: 0,
            joke: '',
            isLoaded: false,
        };
    }

    componentDidMount() {
        const url = 'https://joke3.p.rapidapi.com/v1/joke';
        const specs = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "joke3.p.rapidapi.com",
                "x-rapidapi-key": "ed72fe8d65msh9f0ecb50dd7c28fp1dabd8jsn14921d62feb3"
            }
        }

        fetch(url, specs)
            // gets data
            .then(res => res.json())
            // saves data
            .then(json => {
                this.setState({
                    isLoaded: true,
                    id: json.id,
                    joke: json.content.match(/[\x00-\x7F]/g).join('')
                });
            });
    }




    render() {
        const { id, joke, isLoaded } = this.state;
        const loading = <div>Loading Joke...</div>
        const present = <div key={this.state.id} >{this.state.joke} </div>

        if (!isLoaded) return loading

        else {
            return (
                <div>{present}</div>
            );
        }
    }
}


export default Joke;

