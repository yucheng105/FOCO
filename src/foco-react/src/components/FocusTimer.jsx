import React, { useState, useEffect } from 'react';
import './FocusTimer.css';
import { useNavigate } from 'react-router-dom'; // 1. 引入導航 Hook
import Navbar from './Navbar';

const FocusTimer = () => {
    const navigate = useNavigate(); // 2. 初始化導航功能
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [totalTime, setTotalTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(true);
    const [mission, setMission] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const missionId = urlParams.get('id');
        if (missionId) {
            const missions = JSON.parse(localStorage.getItem('foco_missions')) || [];
            const currentMission = missions.find(m => m.id === parseInt(missionId));
            setMission(currentMission);
        }
    }, []);

    useEffect(() => {
        let timerInterval;
        if (isRunning) {
            timerInterval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timerInterval);
                        navigate('/rewards'); // 3. 使用 navigate() 代替 window.location.href
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerInterval);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = (timeLeft / totalTime) * 880;

    return (
        <div className="focus-timer-page">
            <Navbar pageTitle="專注計時器" />

            <div className="timer-container">
                <svg>
                    <circle className="circle-bg" cx="150" cy="150" r="140"></circle>
                    <circle 
                        id="progress" 
                        className="circle-progress" 
                        cx="150" 
                        cy="150" 
                        r="140"
                        style={{ strokeDashoffset: 880 - progress }}
                    ></circle>
                </svg>
                <div className="timer-content">
                    <div className="pet-display">{isRunning ? '🐱' : '💤'}</div>
                    <div className="time-display">{formatTime(timeLeft)}</div>
                </div>
            </div>

            <div className="button-group">
                <button className="btn-action btn-pause" onClick={toggleTimer}>
                    {isRunning ? '暫停' : '繼續'}
                </button>
                <button className="btn-action btn-finish" onClick={() => navigate('/rewards')}>
                    結束
                </button>
            </div>
        </div>
    );
}

export default FocusTimer;
