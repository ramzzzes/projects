import './Header.css';
import logo from './assets/logo.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="header-switchers">
                <img src={logo} alt=""/>
                <div className="sidebar-switcher">
                    <div className="sidebar-switcher-item"/>
                    <div className="sidebar-switcher-item"/>
                    <div className="sidebar-switcher-item"/>
                </div>
            </div>
            <div className="user-panel">
                <div className="user-initials">JD</div>
                <div className="user-name">John Doe</div>
            </div>
        </div>
    )
}

export default Header