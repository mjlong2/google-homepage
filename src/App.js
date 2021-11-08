import './App.css';

function App() {
  return (
    <div className="App">
      <div id="top-bar">
        <div id="top-left-links">
          <a class="text-link">About</a><a class="text-link">Store</a>
        </div>
        <div id="top-right-links">
          <a class="text-link">Gmail</a><a class="text-link">Images</a><a class="text-link">...</a><a class="text-link">🤔</a>
        </div>
      </div>
      <div id="content">
        <img src="https://www.google.com/logos/doodles/2021/dr-kamal-ranadives-104th-birthday-6753651837109127.2-l.webp"></img>
        <input type="text"></input>
        <div>
        <button>Google Search</button><button>I'm Feeling Lucky</button>
        </div>
      </div>
      <div id="bottom-bar">
        <div id = "bottom-left-links">
          <a class="text-link">Advertising</a>
          <a class="text-link">Business</a>
          <a class="text-link">How Search Works</a>
        </div>
        <p id ="carbon-msg">Carbon neutral since 2007</p>
        <div id = "bottom-right-links">
          <a class="text-link">Privacy</a>
          <a class="text-link">Terms</a>
          <a class="text-link">Settings</a>
        </div>
      </div>
    </div>
  );
}

export default App;
