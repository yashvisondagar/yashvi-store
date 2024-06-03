import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/Create';
import Update from './components/pages/Update';
import Home from './components/pages/Home';
import Read from './components/pages/Read';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="/read/:id" element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App


// import './App.css';
// import { Header, Footer } from './components/layout';
// import Home from './components/pages/Home';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Contact from './components/pages/Contact';
// import Notfound from './components/pages/Notfound';
// import Products from './components/pages/Products';
// import { Body } from './components/layout';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="*" element={<Notfound/>}></Route>
//       </Routes>
//       <Body></Body>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
