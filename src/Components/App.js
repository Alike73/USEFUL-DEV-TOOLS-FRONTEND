import './normalize.css';
import './App.css';
import { useEffect, useState } from 'react';
import Spinner from './Spinner/Spinner';
import Main from './Main/Main';



function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (<Spinner />) : (<Main />)}
    </div>
  );
}

export default App;
