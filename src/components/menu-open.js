import menuOpen from '../images/menu-icon.svg';

export function MenuOpen({setMenu}) { 
    return (
        <div className={"topic-menu-container"}>
            <div className={"topic-menu-wrapper"} onClick={() => setMenu(true)}>
                <img className={"menu-icon"} src={menuOpen} alt="" />
                <p className={"topic-text"}>Text</p>
            </div>
        </div>
    )
}