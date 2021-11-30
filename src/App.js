import './App.css';
import Nav from './components/Nav';

function App() {
  const links = [
    {
      name:"foo",
      href:"/foo"
    },
    {
      name:"bar",
      href:"/bar"
    },
    {
      name:"test",
      href:"/test"
    },
    {
      name:"asf",
      href:"/asf"
    },
  ]
  return (
    <div className="App">
      <Nav links={links}/>
    </div>
  );
}

export default App;