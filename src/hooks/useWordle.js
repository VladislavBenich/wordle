import { useState } from "react";

export function useWordle(solution) {
    const [guesses, setGuesses] = useState(Array.from({ length: 5 }, () => new Array(5).fill('')))
    const [currentGuess, setCurrentGuess] = useState([])
    const [turn, setTurn] = useState(0)
    const [isCorrect, setIsCorrect] = useState(false)

    function formatGuess() {
        const formattedGuess = currentGuess.map(l => {
            return { letter: l, color: 'grey' }
        })

        formattedGuess.forEach((l, i) => {
            if (solution[i] === l.letter) {
                formattedGuess[i].color = 'green'
            } else if (solution.includes(l.letter)) {
                formattedGuess[i].color = 'orange'
            }
        })

        return formattedGuess
    }

    function addNewGuess(formattedGuess) {
        if (JSON.stringify(currentGuess) === JSON.stringify(solution)) {
            setIsCorrect(true)
            alert('You won')
        }

        setGuesses(prev => {
            const newGuesses = [...prev]
            newGuesses[turn] = formattedGuess
            setTurn(turn + 1)
            setCurrentGuess([])
            return newGuesses
        })
    }

    function handleKeyDown(e) {
        if (isCorrect) {
            return
        }

        if (e.key === 'Enter') {
            if (currentGuess.length === 5 && turn < 5) {
                addNewGuess(formatGuess())
            }
        }

        if (e.key === 'Backspace') {
            setCurrentGuess(prev => {
                const tmp = [...prev]
                tmp.pop()
                return tmp
            })
        }

        if (/^[A-Za-z]$/.test(e.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => [...prev, e.key])
            }
        }
    }

    return { guesses, currentGuess, turn, handleKeyDown }
}
