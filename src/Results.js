import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
    return (
        <div className="search">
            {pets.length === 0 ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map(pet => (
                    <Pet 
                        animal={pet.type}
                        key={pet.id}
                        breed={pet.breeds.primary}
                        media={pet.photos}
                        location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                        id={pet.id}
                        name={pet.name}

                    />
                ))
            )}
        </div>
    )
}

export default Results;