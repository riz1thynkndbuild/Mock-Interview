import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link href="/" className="logo">
                    Bdjobs <span className="logo-suffix">Interview</span>
                </Link>
                <div className="nav-links">
                    <Link href="/interviewers" className="nav-link">Find Interviewers</Link>
                    <Link href="/dashboard/candidate" className="nav-link">Dashboard</Link>
                    <Link href="/login" className="btn btn-outline">Log In</Link>
                </div>
            </div>
        </nav>
    );
}
