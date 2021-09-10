import './App.css';
import Education from './sections/edu';
import Objective from './sections/obj';
import Experience from './sections/exp';
import SoftSkill from './sections/soft';
import PersonalDetail from './sections/personal';

function App() {
  return (
    <div>
      <Objective />
      <Education />
      <Experience />
      <SoftSkill />
      <PersonalDetail />

    </div>
  );
}

export default App;
