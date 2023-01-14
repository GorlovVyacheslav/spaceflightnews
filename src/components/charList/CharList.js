import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import arrow from '../../resources/img/Arrow - Right.svg';

const CharList = () => {
    return (
        <div className="char__list">
            <ul className="char__grid">
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                    <button className="btn">Read more</button>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                    <div className="arrow">
                        <img
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                    <button className="btn">Read more </button>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss" />
                    <div className="char__name">Abyss</div>
                </li>
            </ul>
        </div>
    );
};

export default CharList;
