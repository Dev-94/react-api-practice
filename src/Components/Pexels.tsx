import React, { useEffect, useState } from "react";

const Pexels = () => {

    var [image, setImage] = useState({
        id: 0,
        url: "",
        tags: []
    });
    var [count, setCount] = useState(0);

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
            .then((response: any) => {
                console.log(response);
                return response.json();
            })
            .then((json: any) => {
                console.log('fetch is working!: ' + JSON.stringify(json))
                setImage(json)
            })
    }, [count])



    return (
        < div >
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Get Animal
            </button>
            <div>
                < img key={image.id} src={image.url} />
                < p>{image.tags}</p>
            </div>

        </div >

    )
}

export default Pexels;