import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'

const styles = {
    navbar: {
        backgroundColor: '#fff',
        border: 'solid 1px #eee',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0px 2px 3px rgb(0,0,0,0.1)',
    }
}

class Navbar extends Component{
    render(){
        const { carro, esCarroVisible, mostrarCarro, eliminarProducto } = this.props

        return(
            <div style={styles.navbar}>
                <Logo />
                <Carro 
                    carro={carro} 
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={mostrarCarro} 
                    eliminarProducto={eliminarProducto}   
                />
            </div>
        )
    }
}

export default Navbar