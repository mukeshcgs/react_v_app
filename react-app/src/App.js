import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="container">
        <Form />
      </div>
    </div>
  );
}

export default App;
