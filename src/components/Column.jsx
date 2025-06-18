import Row from "./Row";

export default function Column({ guesses, currentGuess, turn }) {
    return (
        <div className="column">
            {guesses.map((guess, idx) => {
                if (idx === turn) {
                    return <Row key={idx} currentGuess={currentGuess} />
                }
                return <Row key={idx} guess={guess} />
            })}
        </div>
    );
}
