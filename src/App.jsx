import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <>
     <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      </Provider>
    </>
  );
}

export default App;
