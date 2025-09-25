import "../styling/Menu.css"
import { useContent } from "../context/ContentContext.jsx";

export default function Menu() {

    const { setDisplayedContentFlag } = useContent();

    return (
        <div className='menu-content-wrapper'>
            <div className="menu-items-wrapper">
                <div className="menu-item" onClick={() => setDisplayedContentFlag("regex")}>regex</div>
                <div className="menu-item" onClick={() => setDisplayedContentFlag("diff")}>diff checker</div>
            </div>
        </div>
    )
}