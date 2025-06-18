import Column from './Column';
import ReactSwitch from 'react-switch';
import { useEffect, useState } from 'react';
import { useWordle } from '../hooks/useWordle'
import { ThemeContext } from '../context/ThemeContext';

export default function Wordle({ solution }) {
    const [theme, setTheme] = useState("light")
    const { guesses, currentGuess, turn, handleKeyDown } = useWordle(solution)

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => document.removeEventListener('keydown', handleKeyDown)
    })

    function toggleTheme() {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App">
                <div id={theme}>
                    <div className='switch'>
                        <label>{theme} mode</label><ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                    </div>
                    <div className='center'>
                        <Column guesses={guesses} currentGuess={currentGuess} turn={turn} />
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
