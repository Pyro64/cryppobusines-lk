import './Style/Style.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Balance from './Components/Balance/Balance';
import History from './Components/History/History';
import Statistic from './Components/Statistic/Statistic';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className='Content'>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/balance"
              element={<Balance />}
            />
            <Route
              path="/history"
              element={<History />}
            />
            <Route
              path="/statistic"
              element={<Statistic />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;