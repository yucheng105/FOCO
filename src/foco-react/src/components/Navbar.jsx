import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({ pageTitle }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <>
            {/* 遮罩層 */}
            <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
            
            {/* 側邊選單 */}
            <nav className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
                <div onClick={() => handleNavigation('/')} className="menu-item">🏠 首頁</div>
                <div onClick={() => handleNavigation('/farm')} className="menu-item">🌾 農場</div>
                <div onClick={() => handleNavigation('/stats')} className="menu-item">📊 統計</div>
                <div onClick={() => handleNavigation('/mission-list')} className="menu-item">📋 任務列表</div>
            </nav>

            {/* 頂部列 */}
            <div className="nav-bar">
                <div className="menu-icon" onClick={toggleMenu}>☰</div>
                <span>{pageTitle}</span>
            </div>
        </>
    );
};

export default Navbar;