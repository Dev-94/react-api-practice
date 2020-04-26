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



        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "joke3.p.rapidapi.com",
                "x-rapidapi-key": "ed72fe8d65msh9f0ecb50dd7c28fp1dabd8jsn14921d62feb3"
            }
        })
            // gets data
            .then(res => res.json())

            // saves data
            .then(json => {
                // const regex = /[\x00-\x7F]/g
                // str.match(/[\x00-\x7F]/g).join('')
                // console.log(bar.join(''))
                // const parsed = json.match(/[\x00-\x7F]/g).join('')

                this.setState({
                    isLoaded: true,
                    id: json.id,
                    joke: json.content.match(/[\x00-\x7F]/g).join('')
                });
            });

    }




    render() {

        var { isLoaded, jokes } = this.state;
        const loading = <div>Loading Joke...</div>
        const joke = <div key={this.state.id} >{this.state.joke} </div>


        if (!isLoaded) {
            return loading
        }

        else {

            return (
                <div>
                    <ul>
                        {joke}

                    </ul>

                </div>
            );

        }

    }



}


export default Joke;

