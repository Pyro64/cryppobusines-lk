import './Style/Style.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Balance from './Components/Balance/Balance';
import History from './Components/History/History';
import Statistic from './Components/Statistic/Statistic';
import Support from './Components/Support/Support';
import Settings from './Components/Settings/Settings';
import { ThemeProvider } from 'styled-components';
import React, { useState } from "react";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
function App(props) {

  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === true ? setTheme(false) : setTheme(true);
  };

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className='content'>
            <Header toggle={switchTheme} />
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
              <Route
                path="/support"
                element={<Support />}
              />
              <Route
                path="/settings"
                element={<Settings />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;