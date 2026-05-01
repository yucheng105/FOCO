import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './MissionList.css';
import Navbar from './Navbar';

const MissionList = () => {
    const navigate = useNavigate(); // 2. 初始化導航功能
    
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [missions, setMissions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('date');

    useEffect(() => {
        const storedMissions = JSON.parse(localStorage.getItem('foco_missions')) || [];
        setMissions(storedMissions);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false); // 跳轉後關閉選單
    };

    const selectMission = (id) => {
        // window.location.href = `Mission_Content.html?id=${id}`;
        navigate(`/mission-content`); // 3. 使用 navigate() 代替 window.location.href
    };

    // const addNewMission = () => {
    //     window.location.href = `Add_Mission.html`;
        
    // };

    const filteredMissions = missions
        .filter(mission => mission.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortType === 'date') {
                return b.id - a.id;
            }
            // Add other sorting logic if needed
            return 0;
        });

    return (
        <div className="mission-list-page">
            <Navbar pageTitle="任務清單" />

            <div className="filter-section">
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="搜尋任務..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="tool-row">
                    <select className="sort-select" onChange={(e) => setSortType(e.target.value)}>
                        <option value="date">排序方式：最新日期</option>
                        <option value="duration">排序方式：專注時長</option>
                    </select>
                </div>
            </div>

            <div className="mission-container">
                {filteredMissions.length > 0 ? (
                    filteredMissions.map(mission => (
                        <div key={mission.id} className="mission-item" onClick={() => selectMission(mission.id)}>
                            <div className="mission-info">
                                <h4>{mission.title}</h4>
                                <p>上次專注：2 小時前</p>
                            </div>
                            <span>⏱️ 25m</span>
                        </div>
                    ))
                ) : (
                    <p>還沒有任何任務，快點新增一個吧！</p>
                )}
            </div>

            <button className="fab-add" onClick={() => navigate('/add-mission')} title="新增任務">+</button>
        </div>
    );
}

export default MissionList;
