import './App.scss';
import {Basket, Header, Sneakers} from "./components";

function App() {
  return (
    <div className="App">
      <div className="main">
          <Header/>
          <Sneakers/>
          <div className="basket">
              <Basket/>
          </div>
      </div>
    </div>
  );
}

export default App;
