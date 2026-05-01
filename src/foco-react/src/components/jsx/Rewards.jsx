import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. 引入導航 Hook
import '../css/Rewards.css';

const Rewards = () => {
    const navigate = useNavigate(); // 2. 初始化導航功能
    const [percent, setPercent] = useState(80);
    const [activeTags, setActiveTags] = useState([]);
    const [activeMood, setActiveMood] = useState('😊');
    const [rewardsVisible, setRewardsVisible] = useState(false);

    const updatePercent = (value) => {
        setPercent(value);
    };

    const toggleTag = (tag) => {
        setActiveTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const selectMood = (mood) => {
        setActiveMood(mood);
    };

    const showRewards = () => {
        setRewardsVisible(true);
    };

    const goHome = () => {
        navigate('/'); 
    };

    const tags = ['📱 手機社群', '☕ 生理需求', '💭 雜念發呆', '🗣️ 他人中斷', '✅ 完全專注'];
    const moods = ['😫', '😐', '😊', '🔥'];

    return (
        <div className="rewards-page">
            <div className="reflection-card">
                <h2>任務達成！</h2> 
                
                <span className="section-title">這輪完成度：<span>{percent}</span>%</span>
                <input 
                    type="range" 
                    className="slider" 
                    min="0" 
                    max="100" 
                    value={percent} 
                    onInput={(e) => updatePercent(e.target.value)}
                />

                <span className="section-title">剛剛有被什麼干擾嗎？(多選)</span>
                <div className="tag-container">
                    {tags.map(tag => (
                        <div 
                            key={tag}
                            className={`tag ${activeTags.includes(tag) ? 'active' : ''}`}
                            onClick={() => toggleTag(tag)}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                <span className="section-title">現在的心情？</span>
                <div className="mood-row">
                    {moods.map(mood => (
                        <span 
                            key={mood}
                            className={`mood-item ${activeMood === mood ? 'active' : ''}`}
                            onClick={() => selectMood(mood)}
                        >
                            {mood}
                        </span>
                    ))}
                </div>

                {rewardsVisible && (
                    <div className="rewards-preview" style={{display: 'block'}}>
                        <div>獲得 💎 x 5</div>
                        <div>寵物經驗值 + 20</div>
                    </div>
                )}

                <button className="btn-submit" onClick={rewardsVisible ? goHome : showRewards}>
                    {rewardsVisible ? '回首頁' : '領取獎勵並結算'}
                </button> 
            </div>
        </div>
    );
}

export default Rewards;