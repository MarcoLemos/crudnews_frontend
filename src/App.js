import ArticlePage from './ArticlePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';



function App() {
  //TODO: Find workaround process.env erros so can bring env variables
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;