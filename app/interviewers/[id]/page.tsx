import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { INTERVIEWERS } from '@/lib/data';
import './page.css';

export default function ProfilePage({ params }: { params: { id: string } }) {
    const interviewer = INTERVIEWERS.find(i => i.id === params.id) || INTERVIEWERS[0];

    return (
        <main>
            <Navbar />
            <div className="container profile-container">
                <section className="profile-header">
                    <div className="profile-info-main">
                        <img src={interviewer.image} alt={interviewer.name} className="profile-photo" />
                        <div>
                            <h1>{interviewer.name} {interviewer.verified && <span className="badge">✓ Verified</span>}</h1>
                            <p className="profile-title">{interviewer.title} at {interviewer.company}</p>
                            <p className="profile-meta">{interviewer.experience} Experience • {interviewer.category}</p>
                            <div className="profile-rating">
                                <span className="star">★</span> {interviewer.rating} ({interviewer.reviews} Reviews)
                            </div>
                        </div>
                    </div>
                    <div className="profile-actions">
                        <div className="price-tag">৳ {interviewer.price} / Session</div>
                        <Link href={`/booking/${interviewer.id}`} className="btn btn-primary btn-block">Book Now</Link>
                    </div>
                </section>

                <div className="profile-content">
                    <div className="content-left">
                        <section className="section-card">
                            <h2>About</h2>
                            <p>Experienced professional with a proven track record. I specialize in helping candidates improve their system design and behavioral interview skills. My sessions are structured to provide actionable feedback.</p>
                        </section>

                        <section className="section-card">
                            <h2>Expertise</h2>
                            <div className="skills-tags">
                                {interviewer.skills.map(skill => (
                                    <span key={skill} className="tag">{skill}</span>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="content-right">
                        <section className="section-card">
                            <h3>Availability</h3>
                            <div className="calendar-preview">
                                <div className="cal-day available">Sun</div>
                                <div className="cal-day available">Mon</div>
                                <div className="cal-day available">Tue</div>
                                <div className="cal-day">Wed</div>
                                <div className="cal-day available">Thu</div>
                            </div>
                            <p className="availability-note">Next available: Tomorrow</p>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
}

export function generateStaticParams() {
    return INTERVIEWERS.map((interviewer) => ({
        id: interviewer.id,
    }));
}
