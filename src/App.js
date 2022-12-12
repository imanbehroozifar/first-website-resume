import './App.css';
import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom'
import Home from './Pages';
import NotFound from './Pages/NotFound';
import Blog from './Pages/Blog';
import Id from './Pages/Id';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='notfound' element={<NotFound />} />
        <Route path='blog' element={<Blog />} />
        <Route path='/blog/:id' element={<Id/>} />   
        <Route path='*' element={<Navigate replace to='notfound' />} />
    </Routes>
    </BrowserRouter>
  );
}
 
export default App;