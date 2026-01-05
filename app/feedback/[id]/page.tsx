import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import './page.css';

export default function FeedbackPage({ params }: { params: { id: string } }) {
    // Mock Feedback Data
    const feedback = {
        id: params.id,
        interviewer: 'Sarah Rahman',
        date: 'Sep 28, 2024',
        scores: {
            technical: 7,
            communication: 9,
            systemDesign: 6,
            cultureFit: 8
        },
        strengths: [
            'Very clear articulation of thoughts',
            'Good understanding of React fundamentals'
        ],
        weaknesses: [
            'Struggled with database scaling concepts',
            'Need to ask more clarifying questions before diving into code'
        ],
        summary: 'Strong candidate for Junior/Mid-level roles. Communication is a big plus. Needs to brush up on backend scaling strategies for Senior roles.'
    };

    return (
        <main>
            <Navbar />
            <div className="container feedback-container">
                <div className="report-header">
                    <h1>Session Report</h1>
                    <Link href="/dashboard/candidate" className="btn-text">← Back to Dashboard</Link>
                </div>

                <section className="report-card">
                    <div className="report-meta">
                        <h2>{feedback.interviewer}</h2>
                        <p>{feedback.date}</p>
                    </div>

                    <div className="scores-grid">
                        <div className="score-item">
                            <span className="score-label">Technical</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${feedback.scores.technical * 10}%` }}></div>
                            </div>
                            <span className="score-value">{feedback.scores.technical}/10</span>
                        </div>
                        <div className="score-item">
                            <span className="score-label">Communication</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${feedback.scores.communication * 10}%` }}></div>
                            </div>
                            <span className="score-value">{feedback.scores.communication}/10</span>
                        </div>
                        <div className="score-item">
                            <span className="score-label">System Design</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${feedback.scores.systemDesign * 10}%` }}></div>
                            </div>
                            <span className="score-value">{feedback.scores.systemDesign}/10</span>
                        </div>
                        <div className="score-item">
                            <span className="score-label">Culture Fit</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${feedback.scores.cultureFit * 10}%` }}></div>
                            </div>
                            <span className="score-value">{feedback.scores.cultureFit}/10</span>
                        </div>
                    </div>

                    <div className="feedback-text-section">
                        <h3>Strengths</h3>
                        <ul>
                            {feedback.strengths.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                    </div>

                    <div className="feedback-text-section">
                        <h3>Areas for Improvement</h3>
                        <ul>
                            {feedback.weaknesses.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                    </div>

                    <div className="feedback-text-section summary-section">
                        <h3>Interviewer Summary</h3>
                        <p>{feedback.summary}</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
