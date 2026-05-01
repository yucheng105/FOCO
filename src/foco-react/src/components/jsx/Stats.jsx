import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // 在 React 中建議使用 /auto 來自動載入所有組件
import { useNavigate } from 'react-router-dom';
import '../css/Stats.css';

const Stats = () => {
    const navigate = useNavigate();
    // 1. 使用 useRef 取得 DOM 節點，而不是 document.getElementById
    const distractionChartRef = useRef(null);
    const focusChartRef = useRef(null);

    useEffect(() => {
        // 2. 定義數據 (這部分可以從 props 或 API 取得)
        const distractionData = {
            labels: ['完全專注', '手機誘惑', '雜念發呆', '外部干擾'],
            datasets: [{
                data: [65, 15, 10, 10],
                backgroundColor: ['#6c5ce7', '#fab1a0', '#ffeaa7', '#dfe6e9']
            }]
        };

        const weeklyFocusData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: '專注時長',
                data: [120, 150, 90, 180, 210, 60, 45],
                backgroundColor: '#a29bfe',
                borderRadius: 8
            }]
        };

        // 3. 初始化圖表
        const pieChart = new Chart(distractionChartRef.current, {
            type: 'pie',
            data: distractionData,
            options: { 
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } } 
            }
        });

        const barChart = new Chart(focusChartRef.current, {
            type: 'bar',
            data: weeklyFocusData,
            options: { 
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } }
            }
        });

        // 4. 重要：組件卸載時銷毀圖表實例，防止重複渲染與內存洩漏
        return () => {
            pieChart.destroy();
            barChart.destroy();
        };
    }, []);

    return (
        <div className="stats-page">
            <div className="nav-bar">
                {/* 使用 navigate(-1) 回到上一頁 */}
                <div className="back-btn" onClick={() => navigate(-1)}>←</div>
                <strong id="mission-display">專注狀況分析</strong>
            </div>

            <div className="chart-card">
                <span className="chart-title">分心原因分析</span>
                <div className="chart-container">
                    <canvas ref={distractionChartRef}></canvas>
                </div>
            </div>

            <div className="chart-card">
                <span className="chart-title">本週專注趨勢 (分鐘)</span>
                <div className="chart-container">
                    <canvas ref={focusChartRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default Stats;