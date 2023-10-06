// import logo from './logo.svg';
import './App.css';


// Components
import Header from './components/Header'; // Here we used ./ because we have to import file only form the same forlder
// but if we had to import for different folder then we weoud use ../

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        /div>
    );
}

export default App;