import { InfoCard } from './components/InfoCard';
import { MovieCards } from './components/MovieCards';
import { Nav } from './components/Nav';
import { PeliculasProvider } from './context/PeliculasContext';


function App() {



  return (
    <div className="App">
      <PeliculasProvider>
        <Nav />
        <MovieCards />
        <InfoCard />
      </PeliculasProvider>
    </div>
  );
}

export default App;
