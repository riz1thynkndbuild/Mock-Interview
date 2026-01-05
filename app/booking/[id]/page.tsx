import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { INTERVIEWERS } from '@/lib/data';
import './page.css';

export default function BookingPage({ params }: { params: { id: string } }) {
    const interviewer = INTERVIEWERS.find(i => i.id === params.id) || INTERVIEWERS[0];
    const today = new Date();

    return (
        <main>
            <Navbar />
            <div className="container booking-container">
                <section className="booking-main">
                    <h1>Schedule your session with {interviewer.name}</h1>

                    <div className="step-indicator">
                        <div className="step active">1. Date & Time</div>
                        <div className="step">2. Details</div>
                        <div className="step">3. Payment</div>
                    </div>

                    <div className="calendar-section">
                        <h3>Select a Date</h3>
                        <div className="calendar-grid">
                            {/* Mock Calendar UI */}
                            {Array.from({ length: 7 }).map((_, i) => (
                                <div key={i} className={`calendar-day ${i === 1 ? 'selected' : ''}`}>
                                    <span className="day-name">Oct</span>
                                    <span className="day-number">{10 + i}</span>
                                </div>
                            ))}
                        </div>

                        <h3>Select a Time</h3>
                        <div className="time-slots">
                            <button className="time-slot">10:00 AM</button>
                            <button className="time-slot selected">2:00 PM</button>
                            <button className="time-slot">4:00 PM</button>
                            <button className="time-slot">8:00 PM</button>
                        </div>
                    </div>
                </section>

                <aside className="booking-summary">
                    <div className="summary-card">
                        <h3>Session Summary</h3>
                        <div className="summary-item">
                            <span>Interviewer</span>
                            <strong>{interviewer.name}</strong>
                        </div>
                        <div className="summary-item">
                            <span>Date</span>
                            <strong>Oct 11, 2024</strong>
                        </div>
                        <div className="summary-item">
                            <span>Time</span>
                            <strong>2:00 PM - 3:00 PM</strong>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span className="total-price">৳ {interviewer.price}</span>
                        </div>

                        <Link href="/dashboard/candidate" className="btn btn-primary btn-block" style={{ marginTop: '24px' }}>Confirm & Pay</Link>
                        <p className="secure-note">🔒 Secure Payment via SSLCommerz</p>
                    </div>
                </aside>
            </div>
        </main>
    );
}

export function generateStaticParams() {
    return INTERVIEWERS.map((interviewer) => ({
        id: interviewer.id,
    }));
}
