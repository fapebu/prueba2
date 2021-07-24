import './App.css';
// import Viewallpersons from '../src/components/personsget/viewListPersons'
// import FormInput from '../src/components/personpost/formpost'
import MainPersonComponent from '../src/components/personMain.jsx'
import { Provider } from 'react-redux'
import store from './components/redux/store'

function App() {
  return (
    <>
      <Provider store={ store }>
        <MainPersonComponent />
      </Provider>
    </>

  );
}

export default App;
