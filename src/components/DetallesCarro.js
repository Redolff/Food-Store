import { Component } from "react";

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
        color: 'black',
        border: '1px solid rgb(0,0,0,0.1)',
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
    },
    button: {
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

class DetallesCarro extends Component {
    render(){
        const { carro, eliminarProducto } = this.props

        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map((x) => 
                        <li style={styles.producto} key={x.id}>
                            <img alt={x.name} src={x.img} width='50' height='32'/>
                            {x.name}
                            <span>{x.cantidad}</span>
                            <button style={styles.button} onClick={() => eliminarProducto(x.id)}>
                                Eliminar
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro