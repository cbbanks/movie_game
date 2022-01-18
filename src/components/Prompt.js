import './Prompt.css'

const Lookup = () => {
    alert('lookup');
}

const Prompt = () => {
    return (
        <div className="Prompt">
            <div className="row">
                <label htmlFor="actor">Actor</label> <input id="actor" name="actor" type="text" />
            </div>
            <div className="row">
                <label  htmlFor="movie">Movie</label> <input id="movie" type="text" />
            </div>
            <div className="control">
                <button onClick={Lookup}>Lookup</button>
            </div>
        </div>
    )
}

export default Prompt
