import { BsArrowReturnRight } from "react-icons/bs";
import './Panel.css';

export function PanelItem({ children }: { children: React.ReactNode }) {
    return (
        <div className="panel-item">
            <div className="panel-image-container">
                <BsArrowReturnRight size={20} color="#181717" />
            </div>
            {children}
        </div>
    );
}

export default function Panel({ company, date, image_url, children }: { company: string, date: string, image_url: string, children: React.ReactNode }) {
    return (
        <div className="panel">
            <div className="panel-header">
                <div className="panel-header-content">
                    <span className="panel-image-container">
                        <img className="panel-image" src={image_url} alt="" />
                    </span>
                    <span>{company}</span>
                </div>
                <div className="panel-header-side">
                    {date}
                </div>
            </div>
            <div className="panel-content">
                {children}
            </div>
        </div>
    );
}
