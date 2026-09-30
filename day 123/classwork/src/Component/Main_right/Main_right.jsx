import './Main_right.css'
import GrowIcon from './grow.svg'

export default function Main_right() {
    return (
        <div className="main-right">
            <div className="grow-container">

                </div>
                <div className="stats-grid">
                    <div className="stat-card">
                            <div className="stat-top"><span>✦</span><span>2.4M</span></div>
                            <div className="stat-bottom"><span>Students reached</span><span>Across 31 countries since 2011.</span></div>
                    </div>
                    <div className="stat-card">
                            <div className="stat-top"><span>+</span><span>1,284</span></div>
                            <div className="stat-bottom"><span>Schools partnered</span><span>In 14 countries, from Kenya to Guatemala.</span></div>
                    </div>
                    <div className="stat-card">
                            <div className="stat-top"><span>→</span><span>38K</span></div>
                            <div className="stat-bottom"><span>Schools partnered</span><span>Equipped with modern tools and methodology.</span></div>
                    </div>
                    <div className="stat-card">
                            <div className="stat-top"><img src={GrowIcon} className="grow-icon" alt="Grow" /><span>3.1x</span></div>
                            <div className="stat-bottom"><span>Schools partnered</span><span>Partner schools outperform national averages 3x.</span></div>
                    </div>
            </div>
        </div>
    )
}
