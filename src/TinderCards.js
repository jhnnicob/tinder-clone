import React, { useEffect, useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';

function TinderCards() {

    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetData() {
            const request = await axios.get('/cards');
            setPeople(request.data)
        }
        fetData();
    },[])
   
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }

    return (
        <div className="tinderCards" >
            <div className="tinderCards__container">
                {people.map((person, index) => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "dow"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>

                        <div
                            style={{backgroundImage: "url(" + person.url + ")"}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
