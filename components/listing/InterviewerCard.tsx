import Link from 'next/link';
import './InterviewerCard.css';

interface InterviewerProps {
    id: string;
    name: string;
    title: string;
    company: string;
    experience: string;
    image: string;
    price: number;
    rating: number;
    reviews: number;
}

export default function InterviewerCard({ data }: { data: InterviewerProps }) {
    return (
        <Link href={`/interviewers/${data.id}`} className="interviewer-card">
            <div className="card-header">
                <img src={data.image} alt={data.name} className="avatar" />
                <div className="header-info">
                    <h3>{data.name}</h3>
                    <p className="title">{data.title} at {data.company}</p>
                </div>
            </div>
            <div className="card-body">
                <div className="stat">
                    <span className="label">Experience</span>
                    <span className="value">{data.experience}</span>
                </div>
                <div className="stat">
                    <span className="label">Rating</span>
                    <span className="value">★ {data.rating} ({data.reviews})</span>
                </div>
            </div>
            <div className="card-footer">
                <span className="price">৳ {data.price} <small>/ session</small></span>
                <span className="btn-text">View Profile →</span>
            </div>
        </Link>
    );
}
