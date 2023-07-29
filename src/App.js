import GIT from './assets/Octicons-mark-github.svg.png'
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <h2>Aleksandre Jelia</h2>
      <a href="https://github.com/jeliaaa/todo_list.git">
        <i>
          <img src={GIT} alt='...' style={{width:'200px'}} />
        </i>
      </a>
      <a href="https://jeliaaa.github.io/todo_list/">
        <p>See Deployed Page</p>
      </a>
      <img src="https://picsum.photos/300"/>
    </div>
  );
}

export default App;
