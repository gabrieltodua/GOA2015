import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className="dot"></div>
                    <span>Bridge Collective</span>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} Bridge Collective. All rights reserved.
                </p>
                <div className="footer-links">
                    <a href="#">About</a>
                    <a href="#">Programs</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy</a>
                </div>
            </div>
        </footer>
    )
}
