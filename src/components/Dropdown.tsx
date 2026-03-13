

export default function Dropdown({ title, description }: { title: string, description: string }) {
    return (
        <div>
            <div className="chevron">

            </div>
            <div className="counter-container">

            </div>
            <div className="title">
                {title}
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    );
}