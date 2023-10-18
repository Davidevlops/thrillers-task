import Sidebar from './components/sidebar';
import Main from './main/main';
import './App.css';


function App() {
  return (
    <div className='my-container my-bg'>
      <div className='grid grid-cols-6 '>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
