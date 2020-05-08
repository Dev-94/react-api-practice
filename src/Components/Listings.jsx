import React, { useState, useEffect } from 'react'
import { Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import PetCard from './PetCard'

const Listings = () => {

    const [animal, setAnimal] = useState()

    const [petName, setPetName] = useState([])
    const [petAge, setPetAge] = useState([])
    const [petBreed, setPetBreed] = useState('Loading...')
    const [petImage, setPetImage] = useState('Loading...')
    const [petSex, setPetSex] = useState('Loading...')
    const [loaded, setLoaded] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            const url = 'https://api.rescuegroups.org/v5/public/animals/'
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/vnd.api+json");
            myHeaders.append("Authorization", "M4heqARw");

            const requestOptions = {
                headers: myHeaders,
            };

            fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => {
                    // setPetName(result.data.slice(0, 2)[0].attributes.name)
                    setPetName(result.data.slice(0, 10).map(name => name.attributes.name))
                    // setPetAge(result.data.slice(0, 2)[0].attributes.ageString)
                    setPetAge(result.data.slice(0, 10).map(age => age.attributes.ageString))
                    setPetBreed(result.data.slice(0, 10)[0].attributes.breedString)
                    // setPetImage(result.data.slice(0, 10)[0].attributes.pictureThumbnailUrl)
                    setPetImage(result.data.slice(0, 10).map(image => image.attributes.pictureThumbnailUrl))
                    setPetSex(result.data.slice(0, 10)[0].attributes.sex)

                    setAnimal(result.data.slice(0, 10).map(pet => pet.data))
                    setLoaded(true)
                    // console.log(petName)
                    // console.log(petAge)
                    // console.log(petBreed)
                    // console.log(Object.values(petImage))
                    // console.log(typeof (petImage))
                    // console.log(petSex)
                    console.log('animal: ' + animal)
                }
                )


        }
        fetchData()
    }, [])



    const [names, ages, images] = [petName, petAge, petImage]
    // console.log(Object.values(images))
    // console.log(typeof (images))
    // console.log(animal.id)
    if (show) {
        return (
            <div>
                Listings


                {
                    animal.map(pet => (
                        <Card>
                            <CardTitle >{pet}</CardTitle>
                            {/* <CardImg top height="60%" src={image} /> */}
                            {/* <CardText>{pet.age}</CardText> */}
                            <Link to="/apply">Apply</Link>
                        </Card>

                    ))
                }






                {/* <CardTitle>Name: {petName} </CardTitle> */}
                {/* {pet[0].map(name => <Card><CardTitle>{name}</CardTitle></Card>)} */}
                {/* {petAge.map(age => <CardText>{age}</CardText>)} */}
                {/* <Card className="card"> */}
                {/* <CardImg top height="60%" src={petImage} alt={petName} /> */}
                {/* <CardBody> */}
                {/* {Object.values(petName).map(pet => <CardTitle>{pet}</CardTitle>)} */}
                {/* <CardSubtitle>Breed: {petBreed}</CardSubtitle> */}
                {/* <CardText>Age: {petAge}</CardText> */}
                {/* <CardText>Sex: {petSex}.</CardText> */}
                {/* <Link to="/apply">Apply</Link> */}
                {/* </CardBody> */}
                {/* </Card> */}
                {/* <PetCard name={props.petName} age={petAge} /> */}



            </div >
        )
    }
    else {
        return (<button onClick={() => setShow(true)}>Show Pets</button>
        )
    }
    // })
    {/* // } */ }
}
export default Listings
