import logo from './logo.svg';
import './App.css';
import "./index.css";
import HeaderComponent from './VituralGlassesComponent/HeaderComponent/HeaderComponent';
import BodyComponent from './VituralGlassesComponent/BodyComponent/BodyComponent';

function App() {
  return (
    <div className="glasses-project">
      <HeaderComponent/>
      <BodyComponent/>
    </div>
  );
}

export default App;
