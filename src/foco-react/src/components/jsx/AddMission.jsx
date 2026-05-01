import React, { useState } from 'react';
import '../css/AddMission.css';
import { useNavigate } from 'react-router-dom'; // 1. 引入導航 Hook
import Navbar from './Navbar';

const AddMission = () => {
    const navigate = useNavigate(); // 2. 初始化導航功能
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const saveMission = () => {
        if (!title) {
            alert("請至少輸入任務標題！");
            return;
        }

        const newMission = {
            id: Date.now(),
            title: title,
            description: desc,
            progress: 0
        };

        let missions = JSON.parse(localStorage.getItem('foco_missions')) || [];
        missions.push(newMission);
        localStorage.setItem('foco_missions', JSON.stringify(missions));

        // window.location.href = `Focus_Timer.html?id=${newMission.id}`;
        navigate(`/focus-timer`); // 3. 使用 navigate() 代替 window.location.href
    };

    return (
        <div className="add-mission-page">

            <Navbar pageTitle="建立新任務" />
            
            <div className="form-container">
                <div className="input-group">
                    <label htmlFor="mission-title">任務標題 (Mission Title)</label>
                    <input 
                        type="text" 
                        id="mission-title" 
                        placeholder="例如：撰寫期末報告..." 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="mission-desc">任務內容 (Mission Description)</label>
                    <textarea 
                        id="mission-desc" 
                        placeholder="詳細描述你想完成的步驟..."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>

                <button className="btn-submit" onClick={saveMission}>儲存任務並開始</button>
            </div>
        </div>
    );
}

export default AddMission;