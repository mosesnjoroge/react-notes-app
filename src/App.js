import './components/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notes from './components/NotesComponents/Notes'
import Header from './components/NotesComponents/Header';

function App() {

    return (

      <div className="main">
        <Header />
        <Notes />
      </div>
  );
}

export default App;
