
import Header from './components/Header';
import Description from './components/Description';
import Collection from './components/Collection';
import BooksApp from './components/BooksApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Description />
      <Collection />
      <BooksApp />
      <Footer />
    </div>
  );
}

export default App;
