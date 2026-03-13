import { useState } from 'react';
import './Dropdown.css';

function toRoman(num: number): string {
    const pairs: [number, string][] = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
    ];
    let result = '';
    for (const [value, numeral] of pairs) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result.toLowerCase();
}

export default function Dropdown({ title, description, count, children }: { title: string, description: React.ReactNode, count: number, children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setOpen(!open)}>
                <div className="dropdown-count">
                    {toRoman(count)}.
                </div>
                <div className={`dropdown-chevron ${open ? 'dropdown-chevron--open' : ''}`}>
                    <span className="dropdown-triangle" />
                </div>
                <div className="dropdown-title">
                    {title}
                </div>
                <div className="dropdown-description">
                    — {description}
                </div>
            </div>
            {open && (
                <div className="dropdown-content">
                    {children}
                </div>
            )}
        </div>
    );
}