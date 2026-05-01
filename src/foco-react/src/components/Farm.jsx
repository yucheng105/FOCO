import React, { useState } from 'react';
import './Farm.css';
import { useNavigate } from 'react-router-dom'; // 1. 引入導航 Hook
import Navbar from './Navbar';

const Farm = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isPackOpen, setPackOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const togglePack = () => {
        setPackOpen(!isPackOpen);
    };

    const feed = (item) => {
        alert('小橘子吃掉了 ' + item + '！');
        togglePack();
    };

    return (
        <div className="farm-page">
            <Navbar pageTitle="我的農場" />

            <div className="header-section">
                <div className="petname-badge">小橘子</div>
                <div className="hp-bar-container">
                    <div className="hp-fill"></div>
                </div>
                <div style={{fontSize: '0.75rem', color: 'var(--text-sub)', marginTop: '6px', fontWeight: 500}}>
                    Health Points: 75%
                </div>
            </div>

            <div className="main-display">
                <button className="pack-btn" onClick={togglePack}>
                    <span>🎒</span><span style={{fontSize: '0.6rem'}}>PACK</span>
                </button>
                <div className="pet-circle">🐱</div>
            </div>

            <div className="stats-section">
                <div className="tag-row">
                    <div className="stat-tag" style={{color: 'var(--primary-color)'}}>🐱 貓咪族</div>
                    <div className="stat-tag">💪 力量 15</div>
                    <div className="stat-tag">⚡ 速度 20</div>
                </div>
                
                <div className="chart-label">📊 每日陪伴寵物時長 (Min)</div>
                
                <div className="chart-container">
                    <div className="bar" style={{height: '40%'}} data-label="Mon"></div>
                    <div className="bar" style={{height: '70%'}} data-label="Tue"></div>
                    <div className="bar" style={{height: '55%'}} data-label="Wed"></div>
                    <div className="bar" style={{height: '90%'}} data-label="Thu"></div>
                    <div className="bar" style={{height: '65%'}} data-label="Fri"></div>
                    <div className="bar" style={{height: '30%'}} data-label="Sat"></div>
                    <div className="bar" style={{height: '85%'}} data-label="Sun"></div>
                </div>
            </div>

            <div className={`modal-overlay ${isPackOpen ? 'active' : ''}`} id="packModal" style={{display: isPackOpen ? 'flex' : 'none'}}>
                <div className="modal-content">
                    <h3 style={{margin:0}}>🎒 寵物背包</h3>
                    <div className="food-grid">
                        <div className="food-item" onClick={() => feed('🐟')}>🐟</div>
                        <div className="food-item" onClick={() => feed('🍖')}>🍖</div>
                        <div className="food-item" onClick={() => feed('🥛')}>🥛</div>
                        <div className="food-item" onClick={() => feed('🍎')}>🍎</div>
                        <div className="food-item" onClick={() => feed('🍪')}>🍪</div>
                        <div className="food-item" style={{background:'#eee'}}></div>
                    </div>
                    <button onClick={togglePack} style={{border:'none', padding:'10px 20px', borderRadius:'10px', cursor:'pointer'}}>關閉</button>
                </div>
            </div>
        </div>
    );
}

export default Farm;
