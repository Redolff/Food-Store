import { Component } from 'react';
import './App.css';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {

  state = {
    productos: [
      {id: 1, name: 'Lechuga', price: 200, img:'/assets/lechuga.jpg'},
      {id: 2, name: 'Tomate', price: 150, img:'/assets/tomate.jpg'},
      {id: 3, name: 'Arbejas', price: 50, img:'/assets/arbejas.jpg'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state

    if(carro.find((x) => x.id === producto.id)){
      const newCarro = carro.map(x => x.id === producto.id 
        ? ({
          ...x,
          cantidad: x.cantidad + 1,
        })
        : x)
        return this.setState( {carro: newCarro } )
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  eliminarProducto = (id) => {
    const { carro } = this.state
    const index = carro.find((x) => x.id === id)
    if(index.id === id){
      if(index.cantidad !== 1){
        const newCarro = carro.map((x) => x.id === id
        ? ({
          ...x,
          cantidad: x.cantidad - 1,
        }) 
        : x 
        )
        this.setState({ carro: newCarro })
      }else{
        const newCarro = carro.filter((x) => x.id !== id)
        return this.setState({
          carro: newCarro
        })
      }
    }
    /*const newCarro = carro.filter((x) => {
      return x.id !== id
    })*/
  }

  

  render() {
    const { esCarroVisible } = this.state

    return (
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
          eliminarProducto={this.eliminarProducto}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro} 
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
