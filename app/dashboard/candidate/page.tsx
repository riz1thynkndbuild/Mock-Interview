import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import './page.css';

export default function CandidateDashboard() {
    const upcomingSessions = [
        { id: 1, interviewer: 'Rahim Ahmed', date: 'Oct 15, 2024', time: '10:00 AM', type: 'Technical' },
    ];

    const pastSessions = [
        { id: 101, interviewer: 'Sarah Rahman', date: 'Sep 28, 2024', rating: 4.5, feedback: 'Great communication, needs work on system design depth.' },
    ];

    return (
        <main>
            <Navbar />
            <div className="container dashboard-container">
                <h1>Candidate Dashboard</h1>

                <section className="dashboard-section">
                    <h2>Upcoming Interviews</h2>
                    {upcomingSessions.length > 0 ? (
                        <div className="session-list">
                            {upcomingSessions.map(session => (
                                <div key={session.id} className="session-card">
                                    <div className="session-info">
                                        <h3>{session.interviewer}</h3>
                                        <p>{session.type} Interview</p>
                                    </div>
                                    <div className="session-time">
                                        <strong>{session.date}</strong>
                                        <span>{session.time}</span>
                                    </div>
                                    <button className="btn btn-outline">Join Meeting</button>
                                </div>
                            ))}
                        </div>
                    ) : <p>No upcoming sessions.</p>}
                </section>

                <section className="dashboard-section">
                    <h2>Past Sessions & Feedback</h2>
                    <div className="session-list">
                        {pastSessions.map(session => (
                            <div key={session.id} className="session-card feedback-card">
                                <div>
                                    <h3>{session.interviewer}</h3>
                                    <p className="date">{session.date}</p>
                                </div>
                                <div className="feedback-preview">
                                    <p>"{session.feedback}"</p>
                                    <span className="rating-badge">★ {session.rating}</span>
                                </div>
                                <Link href={`/feedback/${session.id}`} className="btn-text">View Full Report</Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
