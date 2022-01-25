import './styles.css';
import Topsection from './components/Topsection';
import Midesection from './components/Midesection';
import Skillsection from './components/Skillsection';
import Projectsection from './components/Projectsection';
import Footer from './components/Footer';





function App() {
  
  
  
  return (
    <div>
    
      <div>
        <Topsection />
      </div>

      <div>
        <Midesection />
      </div>

      <div>
        <Skillsection/>
      </div>

      <div>
        <Projectsection/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
    
    
    
  );
}

export default App;
