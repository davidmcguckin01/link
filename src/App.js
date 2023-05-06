import './App.css';
import Header from './Header'
import Animation from './Animation'
import Time from './Time'
import ExpiryDate from './ExpiryDate'
import Destinations from './Destinations';


function App() {
  return (
    <div className="App">
      <Header />
      <Animation />
      <Time />
      <ExpiryDate />
      <Destinations />
    </div>
  );
}

export default App;
