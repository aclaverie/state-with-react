import './App.css';
import StateUI from './components/stateui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="head-left">
          <div className="head-logo">
            <img src={ process.env.PUBLIC_URL + 'static/images/state_logo.png'}
                  alt="State UI Logo" width="46px" />
          </div>
          <div className="App-title">
            React State UI's
          </div>
        </div>
        <div className="head-right">
          React Project - 6
        </div>
      </header>
      <main className="container">
        <StateUI />
      </main>
      <div className="App-footer">
        <div className="footer-info">
          Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
