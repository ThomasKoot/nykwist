import './App.css';
import Main from './components/Main';

function App() {

  return (
    <div style={{display: "flex", 
      alignItems: "center", 
      flexDirection:"column", 
      justifyContent:"center", 
      height: "100vh", 
      width: "100vw",
      background: "rgb(250,250,250)"
    }}>
      <Main />
    </div>
  );
}

export default App;
