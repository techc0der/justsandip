import { useMemo } from 'react';
import './GitHubGraph.css';

export default function GitHubGraph() {
    const weeks = 52;
    const days = 7;

    const contributions = useMemo(() => {
        const data = [];
        for (let w = 0; w < weeks; w++) {
            const week = [];
            for (let d = 0; d < days; d++) {
                const rand = Math.random();
                let level = 0;
                if (rand > 0.7) level = 1;
                if (rand > 0.82) level = 2;
                if (rand > 0.9) level = 3;
                if (rand > 0.96) level = 4;
                week.push(level);
            }
            data.push(week);
        }
        return data;
    }, []);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <section className="github-graph">
            <div className="github-container">
                <div className="github-header">
                    <h2 className="section-title">Contribution Graph</h2>
                    <p className="github-subtitle">
                        <span className="contribution-count">547</span> contributions in the last year
                    </p>
                </div>
                <div className="graph-wrapper">
                    <div className="graph-months">
                        {months.map(m => (
                            <span key={m}>{m}</span>
                        ))}
                    </div>
                    <div className="graph-grid">
                        {contributions.map((week, wi) => (
                            <div className="graph-week" key={wi}>
                                {week.map((level, di) => (
                                    <div
                                        className={`graph-cell level-${level}`}
                                        key={`${wi}-${di}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="graph-legend">
                        <span>Less</span>
                        <div className="graph-cell level-0" />
                        <div className="graph-cell level-1" />
                        <div className="graph-cell level-2" />
                        <div className="graph-cell level-3" />
                        <div className="graph-cell level-4" />
                        <span>More</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
