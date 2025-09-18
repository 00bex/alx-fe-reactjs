import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from './components/AddrecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            🍲 Recipe Sharing App
          </Link>
        </h1>
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
    </div>
  
    </Router>
    
  );
}

export default App;