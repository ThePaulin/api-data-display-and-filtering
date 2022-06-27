
import './App.css';
import StudentsProfiles from './components/StudentsProfiles';
import {AppContextProvider} from './components/AppContext';



function App() {

  return (
    <>
      
   <AppContextProvider>
        <div className="App">
          <StudentsProfiles />
        </div>
   </AppContextProvider>
     

      
    </>
    
  );
}

export default App;


