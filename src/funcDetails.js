import React, { useState, useEffect } from 'react'
import pet from "@frontendmasters/pet";

const DetailsComponent = ({id}) => {
    const [animal, setAnimal] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        pet.animal(id).then((res) => {
            const { animal } = res
            setLoading(false)
            setAnimal(animal)
        }, console.error)
    }, [id])

    if(loading || !animal ) {
        return <h1>Loading...</h1>
    } else {
        const { name, breed, type, location, description } = animal
        return (
<div className="details">
            <div>
            <h1>{animal.name}</h1>
            <h2>{`${type} - ${breed} - ${location}`}</h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
            </div>
        </div>
        )
    }        
}

export default DetailsComponent