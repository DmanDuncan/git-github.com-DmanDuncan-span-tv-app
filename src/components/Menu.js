import menuClose from '../images/close-menu-icon.svg';

export function Menu({setMenu, setHome, setTopicTitle, topics, handleSubmit}) { 

  return ( 
    <div className="menu-container">
        <div className={"menu-wrapper"}>
            <img className={"menu-close"} src={menuClose} alt="" onClick={() => {setMenu(false);}}/>
            <ul className={"menu"}>
              <li className={"menu-item"} onClick={() => {setHome(true); setTopicTitle("Home"); setMenu(false);}}>Home</li>
              {topics.map(topic => ( 
                <li className={"menu-item"} key={topic.id} onClick={() => {setHome(false); setTopicTitle(topic.title); handleSubmit(topic.slug); setMenu(false); }}>{topic.title}</li>
              ))} 
            </ul> 
          </div>
      </div>
  );
}