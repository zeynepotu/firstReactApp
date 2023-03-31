import { forwardRef } from "react";

const Input = forwardRef((props , ref) =>{
    return(
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input 
            className={props.className}
            type={props.type}
            ref ={ref}
            autoComplete={props.autoComplete}
            id={props.name}
            onChange={props.onChange}
            ></input>

        </div>
    )
});
export default Input; 