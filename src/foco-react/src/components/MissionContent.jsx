import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. 引入導航 Hook
import './MissionContent.css';
import Navbar from './Navbar';

const MissionContent = () => {
    const navigate = useNavigate(); // 2. 初始化導航功能
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [mission, setMission] = useState(null);
    const [duration, setDuration] = useState(25);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const missionId = urlParams.get('id');
        if (missionId) {
            const missions = JSON.parse(localStorage.getItem('foco_missions')) || [];
            const currentMission = missions.find(m => m.id === parseInt(missionId));
            setMission(currentMission);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false); // 跳轉後關閉選單
    };

    const adjustTime = (val) => {
        setDuration(prev => Math.max(5, Math.min(120, prev + val)));
    };

    const startFocus = () => {
        // window.location.href = `Focus_Timer.html?id=${mission.id}&duration=${duration}`;
        navigate(`/focus-timer`); // 3. 使用 navigate() 代替 window.location.href
    };

    const progress = mission ? mission.progress : 0;
    const progressStyle = {
        background: `conic-gradient(var(--primary-color) ${progress}%, #dfe6e9 0)`
    };

    return (
        <div className="mission-content-page">
            <Navbar pageTitle="任務內容" />

            <div className="mission-header">
                <div className="mission-name">{mission ? mission.title : '讀取中...'}</div>
                <p>當前累積進度</p>
                <div className="chart-container" style={progressStyle}>
                    <div className="chart-inner">
                        <span>{progress}%</span>
                    </div>
                </div>
            </div>

            <div className="timer-setup">
                <p>設定本次專注時長</p>
                <div className="duration-display"><span>{duration}</span>:00</div>
                
                <div className="adjust-row">
                    <button className="btn-adjust" onClick={() => adjustTime(-5)}>-</button>
                    <button className="btn-adjust" onClick={() => adjustTime(5)}>+</button>
                </div>

                <button className="btn-start-focus" onClick={startFocus}>開始專注</button>
            </div>
        </div>
    );
}

export default MissionContent;
