const Input =(props) =>{
    return(
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input 
            className={props.className}
            type={props.type}
            autoComplete={props.autoComplete}
            id={props.name}
            onChange={props.onChange}
            ></input>

        </div>
    )
}
export default Input; 