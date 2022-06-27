const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <img src="./images/logo.svg"></img>
            <div className="Menu"><img src="./images/icon-menu.svg"></img>
            <div className="Sideers">
                <button className="Closer">
                <img src="./images/icon-close-menu.svg"/>
                </button>
                <div className="MobileSiders">Features<img src="./images/icon-arrow-down.svg"></img>
                <div className="Dropdown1">
                <p><img className="ImgPad" src="./images/icon-todo.svg"></img>Todo List</p>
                <p><img className="ImgPad" src="./images/icon-calendar.svg"></img>Calendar</p>
                <p><img className="ImgPad" src="./images/icon-reminders.svg"></img>Reminder</p>
                <p><img className="ImgPad" src="./images/icon-planning.svg"></img>Planning</p>
                </div></div>
                <div className="MobileSiders">Company<img src="./images/icon-arrow-down.svg"></img>
                <div className="Dropdown1">
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Blog</p>
                </div></div>
                <div className="MobileSiders">Careers</div>
                <div className="MobileSiders">About</div>
                <div className="BBB">
                    <div className="MobileSiders"><button className="MobileSidersL" type="submit">Login</button></div>
                    <div className="MobileSiders"><button className="MobileSidersR" type="submit">Register</button></div>
                </div>
                </div>
            </div>
            <a className="DesktopLink" href="">Features<img src="./images/icon-arrow-down.svg"></img>
            <div className="Dropdown">
                <p><img src="./images/icon-todo.svg"></img>Todo List</p>
                <p><img src="./images/icon-calendar.svg"></img>Calendar</p>
                <p><img src="./images/icon-reminders.svg"></img>Reminder</p>
                <p><img src="./images/icon-planning.svg"></img>Planning</p>
            </div></a>
            <a className="DesktopLink" href="">Company<img src="./images/icon-arrow-down.svg"></img><div className="Dropdown">
                <p>History</p>
                <p>Our Team</p>
                <p>Blog</p>
            </div></a>
            <a className="DesktopLink" href="">Career</a>
            <a className="DesktopLink" href="">About</a>
            <div className="Login">
                <a className="DesktopLink" href="">Login</a>
                <button type="submit" className="Reg">Register</button>
            </div>
        </nav>
     );
}

export default Navbar;


