import Letter from "./Letter";

export default function Row({ guess, currentGuess }) {
    if (guess) {
        return (
            <div className="row">
                {guess.map((l, idx) =>
                    <Letter key={idx} letter={l.letter} color={l.color} />
                )}
            </div>
        );
    }

    if (currentGuess) {
        return (
            <div className="row">
                {currentGuess.map((l, idx) =>
                    <Letter key={idx} letter={l} />
                )}
                {new Array(5 - currentGuess.length).fill('').map((_, idx) =>
                    <Letter key={idx} />
                )}
            </div>
        );
    }
}
