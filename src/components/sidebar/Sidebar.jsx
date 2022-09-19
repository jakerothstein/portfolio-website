import React, {useState} from 'react';
import "./sidebar.css";
import Logo from "../../assets/JakeLogo.svg";

const Sidebar = () => {
    // function DarkLightMode() {
    //     console.log(document.getElementById('checkbox').checked)
    //     if (document.getElementById('checkbox').checked === false) {
    //         document.documentElement.style.setProperty('--body-color', 'hsl(258, 60%, 98%)')
    //     } else {
    //         document.documentElement.style.setProperty('--body-color', 'hsl(0,0%,0%)')
    //     }
    //     return
    // }
    const [checked, setChecked] = useState(false);
    const handleChange = () => {

        console.log(checked);
        setChecked(!checked);
        if (!checked) {
            document.documentElement.style.setProperty('--first-color', 'hsl(353, 100%, 65%)')
            document.documentElement.style.setProperty('--title-color', 'hsl(244, 24%, 26%)')
            document.documentElement.style.setProperty('--text-color', 'hsl(244, 16%, 43%)')
            document.documentElement.style.setProperty('--body-color', 'hsl(258, 60%, 98%)')
            document.documentElement.style.setProperty('--container-color', '#fff')

        } else {
            document.documentElement.style.setProperty('--first-color', '#a68f33')
            document.documentElement.style.setProperty('--title-color', '#4e6c8d')
            document.documentElement.style.setProperty('--text-color', '#597c96')
            document.documentElement.style.setProperty('--body-color', '#31414D')
            document.documentElement.style.setProperty('--container-color', '#b8cee3')

        }

    };

    return (<aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt=""/>
            </a>

            <nav className='nav'>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <input className="toggle" type="checkbox" id="checkbox" onChange={handleChange}/>

            <div className="nav__footer">
                <span className="copyright">&copy; 2022 - 2023 <br/>Jake Rothstein</span>
            </div>
        </aside>
    );
};


export default Sidebar;