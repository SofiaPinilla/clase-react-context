import "./App.css";
import Characters from "./components/Characters/Characters";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Characters />
      </GlobalProvider>
    </div>
  );
}

export default App;
