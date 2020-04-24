import React, { Component } from 'react';

class Koala extends Component {


    constructor() {
        super()
        this.state = {
            koalas: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        const url = 'https://some-random-api.ml/facts/koala';

        fetch(url)
            // gets data
            .then(res => res.json())
            // saves data
            .then(json => {
                this.setState({
                    isLoaded: true,
                    koalas: json,
                });
            });
    }



    render() {

        var { isLoaded, koalas } = this.state;
        if (!isLoaded) {
            return <div>Loading Koala Fact...</div>
        }

        else {

            return (
                <div>

                    <ul>
                        {koalas.map(fact => (
                            <li key={fact.id}>
                                Fact: {fact}}

                            </li>
                        ))}
                    </ul>

                </div>
            );

        }

    }








    // constructor() {
    //     super()
    //     this.state = {
    //         facts: []
    //     };
    // }

    // async componentDidMount() {
    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     // const url = 'https://some-random-api.ml/facts/koala';
    //     const url = 'https://jsonplaceholder.typicode.com/users';


    //     //     fetch(url, proxyurl, { mode: 'cors' })
    //     //         .then(res => res.json())
    //     //         .then(data => this.setState({ data }));
    //     // }

    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Accept', 'application/json');
    //     headers.append('GET', 'POST', 'OPTIONS');
    //     // get info from API
    //     fetch(proxyurl + url,
    //         {
    //             mode: 'cors',
    //             method: 'GET',
    //             headers: headers
    //         }
    //     ).then((response) => {
    //         // validate response
    //         if (!response.ok) {
    //             throw new Error(response.statusText)
    //         }
    //         // return response in a JSON format
    //         console.log(response.json())
    //         return response.json()
    //         // show response 
    //     })
    //         .then((responseAsJSON) => {
    //             console.log(responseAsJSON)
    //             // seperate fact from rest of json

    //             this.setState({ facts: responseAsJSON })
    //             console.log("facts: " + responseAsJSON)
    //             return responseAsJSON
    //         })
    //         .catch((error) => {
    //             console.error('There has been a problem with your fetch operation: ' + error)
    //         })

    //     return (
    //         <div> {this.state.facts}</div >
    //     )

    //     // return (
    //     //     <>
    //     //         <div key={this.state.facts}>
    //     //             <div> {this.state.facts} </div>
    //     //         </div>
    //     //     </>
    //     // )
    // }



    // render() {

    //     return (
    //         <div>

    //             <div> hello: {this.state.facts} </div>
    //         </div>
    //     )
    // }

}


export default Koala;

