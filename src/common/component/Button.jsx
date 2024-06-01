import { useState } from "react";

const Button = (props) => {
    const [style, setStyle] = useState();
    if(props.style){
        console.log('스타일 있음');
        setStyle(props.style);
    }
    return(
        <button
        onClick={props.onClick}
        style={
            style? style : {
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 10,
                fontSize: 18,
                marginRight: 30,
                marginBottom: 30,
                marginLeft: 30,
            }
        }>{props.text}</button>
    )
}

export default Button;