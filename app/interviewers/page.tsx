import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import InterviewerCard from '@/components/listing/InterviewerCard';
import { INTERVIEWERS, CATEGORIES } from '@/lib/data';
import './page.css';

export default function ListingPage() {
    return (
        <main>
            <Navbar />
            <div className="container listing-container">
                <aside className="filters">
                    <h3>Filters</h3>

                    <div className="filter-group">
                        <label>Category</label>
                        <div className="checkbox-group">
                            {CATEGORIES.map(cat => (
                                <div key={cat} className="checkbox-item">
                                    <input type="checkbox" id={cat} />
                                    <label htmlFor={cat}>{cat}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <label>Price Range</label>
                        <input type="range" min="500" max="5000" className="range-slider" />
                        <div className="price-labels">
                            <span>৳500</span>
                            <span>৳5000+</span>
                        </div>
                    </div>
                </aside>

                <section className="results">
                    <div className="results-header">
                        <h2>Available Interviewers</h2>
                        <div className="sort-controls">
                            <label>Sort by:</label>
                            <select>
                                <option>Recommended</option>
                                <option>Rating: High to Low</option>
                                <option>Price: Low to High</option>
                            </select>
                        </div>
                    </div>

                    <div className="interviewer-grid">
                        {INTERVIEWERS.map(interviewer => (
                            <InterviewerCard key={interviewer.id} data={interviewer} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
