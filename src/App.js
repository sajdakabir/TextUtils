import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';


function App() {
  return (
   
<>
<Navbar title="Textutils" aboutText="About Us"/>
<div className="container my-3">
<TextFrom heading="Enter the text to analyze below"/>
</div>

</>
 
  );
}

export default App;
