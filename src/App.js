import './App.css';
import { ChatEngine } from 'react-chat-engine';

function App() {
  return (
    <div className="App">
        <ChatEngine
        height='100vh'
        projectID=""
        userName=""
        userSecret=""
         />
    </div>
  );
}

export default App;
