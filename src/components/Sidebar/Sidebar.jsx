import './Sidebar.css';
import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'
import icon5 from './assets/icon5.svg'

const Sidebar = () => {

    return (
        <div className="sidebar" >
            <div className="sidebar-icon">
                <img src={icon1} alt=""/>
            </div>
            <div className="sidebar-icon">
                <img src={icon2} alt=""/>
            </div>
            <div className="sidebar-icon">
                <img src={icon3} alt=""/>
            </div>
            <div className="sidebar-icon">
                <img src={icon4} alt=""/>
            </div>
            <div className="sidebar-icon">
                <img src={icon5} alt=""/>
            </div>
        </div>
    )
}

export  default Sidebar;