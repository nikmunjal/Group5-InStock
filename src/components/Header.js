import { Link } from 'react-router-dom';
import headerLogo from '../assets/Logo/InStock-Logo.svg';


function Header(props) {

    return (
        <div className="header">
            
            <img className="header__logo" src={headerLogo} alt="instock logo"/>

            <section className="header__links">
                <Link className="header__links-left" to="/">
                    <button className={`warehouses__link ${props.warehouseLink}`}>
                        Warehouses
                    </button>
                </Link>
                <Link className="header__links-right" to="/inventory">
                    <button className={`inventory__link ${props.inventoryLink}`}>
                        Inventory
                    </button>
                </Link>
            </section>

        </div>
    )
};

export default Header;