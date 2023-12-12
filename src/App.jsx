import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Search } from "./pages";
import { Provider } from 'react-redux';
import store from './redux/store'


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
