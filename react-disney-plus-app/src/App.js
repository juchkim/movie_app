
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './page/MainPage';
import Nav from './components/Nav';
import LoginPage from './page/LoginPage';
import DetailPage from './page/DetailPage';
import SearchPage from './page/SearchPage';

const Layout = () => {
  return(
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
