import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import './page.css';

export default function InterviewerDashboard() {
    const stats = {
        earnings: 15400,
        sessions: 12,
        rating: 4.9
    };

    const upcomingInterviews = [
        { id: 2, candidate: 'Mahidur Rahman', date: 'Today', time: '4:00 PM', type: 'System Design' },
        { id: 3, candidate: 'Karim Ullah', date: 'Tomorrow', time: '10:00 AM', type: 'Behavioral' },
    ];

    return (
        <main>
            <Navbar />
            <div className="container dashboard-container">
                <div className="dashboard-header">
                    <h1>Interviewer Dashboard</h1>
                    <Link href="/profile/edit" className="btn btn-outline">Edit Profile</Link>
                </div>

                <section className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-label">Total Earnings</span>
                        <span className="stat-value">৳ {stats.earnings}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Compeleted Sessions</span>
                        <span className="stat-value">{stats.sessions}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Average Rating</span>
                        <span className="stat-value">★ {stats.rating}</span>
                    </div>
                </section>

                <section className="dashboard-section">
                    <h2>Upcoming Schedule</h2>
                    <div className="session-list">
                        {upcomingInterviews.map(session => (
                            <div key={session.id} className="session-card">
                                <div className="session-info">
                                    <h3>{session.candidate}</h3>
                                    <p>{session.type}</p>
                                </div>
                                <div className="session-time">
                                    <strong>{session.date}</strong>
                                    <span>{session.time}</span>
                                </div>
                                <div className="session-actions">
                                    <button className="btn btn-primary">Start Session</button>
                                    <button className="btn btn-outline">Reschedule</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
