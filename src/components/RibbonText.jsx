import { useState } from "react";

export default function RibbonText({ title, symbol, theme='green' }) {
    // const items = Array(10).fill('<div class="ribbon-item">about me</div>').join('');

    // const [items, setItems] = useState(Array(10).fill(
    //     { word: 'about me', symbol: '@' }
    // ));
    // const [items, setItems] = useState(['about me', '@']);

    const items = Array.from({ length: 21 }, (_, i) => i % 2 === 0 ? title : symbol);

    let classnamerbn = theme === 'green' ? 'ribbon green' : 'ribbon violet';

    return (
        <div className={classnamerbn}>
            {/* <div className="ribbon-track" id="track">{items}</div> */}
            <div className="ribbon-track">
                {items.map((item, i) => (
                    <div className={(i % 2 === 0 ? 'ribbon-item violet' : 'ribbon-item beige')}>{item}</div>
                ))}
            </div>
        </div>
    )
}