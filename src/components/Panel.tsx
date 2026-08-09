import './Panel.css';

export default function Panel({
    company,
    date,
    image_url,
    href,
    children,
}: {
    company: string;
    date: string;
    image_url: string;
    href?: string;
    children: React.ReactNode;
}) {
    const name = href ? (
        <a className="entry-name" href={href} target="_blank" rel="noreferrer">
            {company}
        </a>
    ) : (
        <span className="entry-name">{company}</span>
    );

    return (
        <div className="entry">
            <span className="entry-logo">
                <img src={image_url} alt="" loading="lazy" />
            </span>
            {name}
            <span className="entry-date">{date}</span>
            <p className="entry-note">{children}</p>
        </div>
    );
}
