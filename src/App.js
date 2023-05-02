import Content from './components/Content';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
