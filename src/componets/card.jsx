import {useState} from 'react'
import React from 'react'

const Cards = () => {
    const [newCard, setCard] = useState(" ")
    const [button, setButton] = useState(0);
    const questionsList = ["What animal is known as the King of the Jungle?", "What animal has 8 tentacles?"]
    const answersList = ["Lion", "Octopus"]
    const handleButtonClick = () => {
        setButton(button + 1);
    }
    return (
        <div>
        <div>
            <div className= "front">
                {questionsList[button]}
            </div>
            <div className= "back">
                {answersList[button]}
            </div>
        </div>
        </div>
    )
}

export default Cards