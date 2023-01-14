import CharList from '../charList/CharList';
import './App.css';
import vector from '../../resources/img/Vector.jpg';

const App = () => {
    return (
        <body>
            <header className="app__header">
                <h1 className="app__title">
                    <p>Filter by keywords</p>
                </h1>
            </header>
            <div className="search-box">
                <img className="search" src={vector} alt="vector" />
                <input
                    type="text"
                    className="search-txt"
                    placeholder="Type to search"
                />
            </div>
            <div className="results">
                <p>Results:6</p>
            </div>
            <div className="line"></div>
            <div className="content">
                <CharList />
            </div>
        </body>
    );
};

export default App;
