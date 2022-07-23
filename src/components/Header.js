import headerLogo from '../assets/Logo/InStock-Logo_1x.png';



function Header() {

    return (
        <div className="header">
            
            <img className="header__logo" src={headerLogo} alt="instock logo"/>

            

        </div>
    )
};

export default Header;