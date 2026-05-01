import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. 引入導航 Hook
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate(); // 2. 初始化導航功能

    return (
        <div className="home-page">
            <div className="header">
                <div className="user-info">
                    <div className="user-meta-group">
                        <div className="rank-badge" title="你的等級徽章">🏆</div>
                        <div className="username">資管系小明</div>
                    </div>
                    <button className="btn-farm-link" onClick={() => navigate('/farm')}>
                        🌾 前往農場
                    </button>
                </div>
                <div className="xp-container">
                    <div style={{fontSize: '0.8rem', color: '#636e72'}}>等級 10 · 600 / 1000 XP</div>
                    <div className="xp-bar-bg">
                        <div className="xp-bar-fill" style={{ width: '60%' }}></div>
                    </div>
                </div>
            </div>

            <div className="farm-area">
                <div className="pet-image">🐱</div>
            </div>

            <div className="controls">
                <button className="btn-icon" onClick={() => navigate('/stats')} title="統計數據">📊</button>
                <button className="btn-start" onClick={() => navigate('/mission-list')}>START</button>
                <button className="btn-icon" onClick={() => navigate('/farm')} title="我的農場">🏠</button>
            </div>
        </div>
    );
}

export default HomePage;