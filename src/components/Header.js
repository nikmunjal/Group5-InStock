import headerLogo from '../assets/Logo/InStock-Logo.svg';


function Header() {

    return (
        <div className="header">
            
            <img className="header__logo" src={headerLogo} alt="instock logo"/>

            <section className="header__links">
                <section className="header__links-left">
                    <button className="warehouses__link">
                        Warehouses
                    </button>
                </section>
                <section className="header__links-right">
                    <button className="inventory__link">
                        Inventory
                    </button>
                </section>
            </section>

        </div>
    )
};

export default Header;