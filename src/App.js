import { PeliculasProvider } from './context/PeliculasContext';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    <div className="App">
      <PeliculasProvider>
        <AppRouter />
      </PeliculasProvider>
    </div>
  );
}

export default App;
