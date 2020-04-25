import React, { useEffect, useState } from "react"



const Images = () => {

    const [image, setImage] = useState([]);
    var [count, setCount] = useState(0);


    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/photos'
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log('image fetch works!')
                // console.log('json: ' + JSON.stringify(json))
                // json is an array of objects
                // json[0].title
                // json = json.map(data => data.title)
                setImage(json.slice(count + 1, count + 3));
            });
    }, [count]);


    return (
        <div>
            <ul>
                <button onClick={() => setCount(count + 1)}> Get Images</button>

                {count}
                {image.map(data => (

                    < li key={data.id} >
                        {data.title}
                        < img src={data.thumbnailUrl} alt={`${data.title}`} />
                    </li>
                ))}



            </ul>
        </div>
    )




}



export default Images