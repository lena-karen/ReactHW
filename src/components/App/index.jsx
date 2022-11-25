import Message from '../Message';
import '../../App.css';

function App() {
  const text = 'Hello world'
  return (
    <div className="App">
      <Message text = {text}/>
    </div>
  );
}

export default App;
