export default function Letter({ letter, color }) {
    return (
        <div className={`letter ${color}`}>{letter}</div>
    );
}
