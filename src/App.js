import './App.css';
import HomePage from "./components/HomePage";
import jabulani from './components/images/jabulani.png'
import mercurial from './components/images/mercurial.png'
import predator from './components/images/adidas.png'
import selecao from './components/images/selecao.png'
import corinthians from './components/images/corinthians.png'
import basket from './components/images/basket.png'
import gstate from './components/images/gstate.png'
import lakers from './components/images/lakers.png'
import raquete from './components/images/raquete.png'
import tenis from './components/images/bolas.png'
import revolution from './components/images/revolution.png'
import meia from './components/images/meia.png'
import Item from "./components/Item";

const products = [
    {
        image: jabulani,
        title: "Bola Copa 2010 Jabulani",
        price: 450.00
    },
    {
        image: mercurial,
        title: "Chuteira Nike Mercurial",
        price: 199.99
    },
    {
        image: predator,
        title: "Chuteira Adidas Predator",
        price: 189.99
    },
    {
        image: selecao,
        title: "Camisa Seleção Brasileira",
        price: 258.00
    },
    {
        image: corinthians,
        title: "Camisa Nike Corinthians",
        price: 199.00
    },
    {
        image: basket,
        title: "Bola de Basket Wilson",
        price: 258.00
    },
    {
        image: gstate,
        title: "Regata Golden State",
        price: 199.99
    },
    {
        image: lakers,
        title: "Regata LA Lakers",
        price: 199.99
    },
    {
        image: raquete,
        title: "Raquete Wilson Ultra25",
        price: 659.00
    },
    {
        image: tenis,
        title: "Kit bolas wilson",
        price: 59.99
    },
    {
        image: revolution,
        title: "Tênis Nike Revolution5",
        price: 179.99
    },
    {
        image: meia,
        title: "Meia de Compressão",
        price: 49.79
    }
]

function App() {
  return (
    <div className="App">
        <HomePage/>
        <h2>Produtos</h2>
        <div className="card-items">
            {products.map((item, index) => (
                <Item key={index} imgSrc={item.image} title={item.title} price={item.price.toFixed(2)}/>
            ))}
        </div>


    </div>
  );
}

export default App;
