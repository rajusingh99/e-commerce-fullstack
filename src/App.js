import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CustomerRoutes from './Routes/CustomerRoutes';

function App() {
  return (
    <div className="">
      <BrowserRouter>
         <Routes>
            <Route path='/*' element={<CustomerRoutes/>}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
