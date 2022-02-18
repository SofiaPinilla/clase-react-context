import "./App.css";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
function App() {
  return (
    <div className="App">
      <Router>
      <GlobalProvider>
        <Header/>
        <Routes>
        <Route path="/" element={  <Characters />} />
        <Route path="/form" element={  <Form/>} />
        </Routes>
      </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
