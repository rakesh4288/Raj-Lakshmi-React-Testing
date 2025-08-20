import './App.css';
import { Routes, Route } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import HomePage from './Pages/HomePage';
import GetByAllRolePage from './Pages/GetByAllRolePage';
import MultipleElementsCustomRole from './Pages/MultipleElementsCustomRole';
import ImageComponent from './Pages/ImageComponent';
import InputElement from './Pages/InputElement';
import FunctionTesting from './Pages/FunctionTesting';
import GetByRoleQuery from './Pages/GetByRoleQuery';
import GetByLabelText from './Pages/GetByLabelText';

function App() {
  return (
    <>
      <SiteHeader />
        <main className='mainBody'>
          <Routes>
            <Route index Component={HomePage}/>
            <Route path="/home" Component={HomePage}/>
            <Route path="/how-to-test-images" Component={ImageComponent}/>
            <Route path="/rtl-getAllByRole" Component={GetByAllRolePage}/>
            <Route path="/rtl-getByRoleQuery" Component={GetByRoleQuery}/>
            <Route path="/rtl-getByLabelText" Component={GetByLabelText}/>
            <Route path="/rtl-multiple-element" Component={MultipleElementsCustomRole}/>
            <Route path="/how-to-test-input-element" Component={InputElement} />
            <Route path="/how-to-test-function-testing" Component={FunctionTesting}/>
          </Routes>
        </main>
      <SiteFooter />
    </>
  );
}

export default App;
