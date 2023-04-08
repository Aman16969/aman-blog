
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NonFound';
function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
     <div className="content">
      <Routes>
      <Route exact path="/" element= {<Home/>}/>
      <Route exact path="/create" element= {<Create/>}/>
      <Route exact path="/blogs/:id" element= {<BlogDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>

     
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
