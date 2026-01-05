import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
    return (
        <main>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <h1>Master Your Next Interview</h1>
                    <p>One-on-one mock interviews with industry experts.</p>
                    <Link href="/interviewers" className="btn btn-primary">Find an Interviewer</Link>
                </div>
            </section>
        </main>
    );
}
