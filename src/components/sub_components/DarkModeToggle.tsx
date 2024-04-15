import React from 'react';
import { useDarkMode } from '../../helper/DarkModeContext';
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
const DarkModeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            <input type="checkbox"
                id="switch"
                className="checkbox"
                checked={darkMode}
                onChange={()=>{}}
                />

            <label
               className="toggle">
            <FaRegMoon style={{ fontSize: '20px' }}/>
            <IoSunny style={{ fontSize: '20px' }}/>
        </label>   
        </div >
    );
};

export default DarkModeToggle;
