import './App.css';

let name ="react app"
let className = "App-header";
function App() {
  console.log('App')
  return (
    <div className="App">
      <div className={className}>
        {name}
        <Demo />
      </div>
    </div>
  );
}

function Demo() {
  console.log('Demo')
  return (
    <div className="App">
      <div className="App-header">
        Demo
      </div>
    </div>
  );
}

export default App;
