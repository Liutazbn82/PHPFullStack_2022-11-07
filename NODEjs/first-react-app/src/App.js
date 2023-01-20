import './App.css';
import Header from './components/header/Header';
import Headline from './components/headline/Headline'
import Subheadline from './components/subheadline/Subheadline';
import Footer from './components/footer/Footer';
import { useId } from 'react'; // paimamas react Hook is react bibliotekos

// Komponentas
const App = () => { 

  const navLinks = ['Tour', 'Product', 'Features', 'Enterprise', 'Support', 'Pricing', 'Cart'];

  const Headlines = () => {

    const products = [];
    const id = useId();
    console.log(id)

    for(let i = 0; i < 4; i++) {
      products.push(<Subheadline key={id+i} />); // generuojam  4 subheadlines, galima yrasyt eilutes paprastai
    }

    return products;
  }

  return ( 
    <> 
      <Header nuorodos={navLinks} />
      <main>
        <Headline />
        <Headlines /> 
      </main>
      <Footer />
    </>
  )

}

export default App;







