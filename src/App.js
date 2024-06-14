// import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Products from './customer/components/Product/Products';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      {/* <Products/> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
);
}




export default App;
