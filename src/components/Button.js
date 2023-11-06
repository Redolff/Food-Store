import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#eee',
        padding: '20px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer' 
    }
}

class Button extends Component{
    render() {

        return(
            <button style={styles.button} {...this.props} />
        )

    }

}

export default Button