import React, { Component } from 'react'

class Practice extends Component {

    constructor() {
        super()
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            // gets data
            .then(res => res.json())
            // saves data
            .then(json => {
                console.log(json)
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
    }



    render() {

        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {

            return (
                <div>

                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.name} | Email: {item.email}

                            </li>
                        ))}
                    </ul>

                </div>
            );

        }

    }



}

export default Practice;