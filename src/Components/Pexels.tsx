import React, { useEffect, useState } from "react";

const Pexels = () => {

    const [image: any, setImage: any] = useState([]);
    var [count: number, setCount: any] = useState(0);

    useEffect(() => {
        const url: string = 'https://mlemapi.p.rapidapi.com/randommlem';
        const specs: object = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mlemapi.p.rapidapi.com",
                "x-rapidapi-key": "ed72fe8d65msh9f0ecb50dd7c28fp1dabd8jsn14921d62feb3"
            }
        }

        fetch(url, specs)
            .then((response: object) => {
                console.log(response);
                return response.json();
            })
            .then((json: any) => {
                console.log('Pexels fetch is working: ' + json)
                setImage(json)
            })
    }, [count])



    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                {count}
            </button>
            < img src={image.url} />

        </div >

    )
}

export default Pexels;