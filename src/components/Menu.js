import menuClose from '../images/close-menu-icon.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Menu({setMenu}) { 

  const [topics, setTopics] = useState ([]);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/topics/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setTopics([...topics, ...res.data]);
      // console.log(res.data);
    });
  }, []); 

  return (
    <div className="menu-container">
      <div className={"menu-wrapper"}>
          <img className={"menu-close"} src={menuClose} alt="" onClick={() => {setMenu(false)}}/>
          <ul className={"menu"}>
          {/* {topics.map(topic => ( 
            <li className={"menu-item"} >{topic.title}</li>
          ))}  */}
              <li className={"menu-item"}>one</li>
              <li className={"menu-item"}>two</li>
              <li className={"menu-item"}>three</li>
              <li className={"menu-item"}>four</li>
              <li className={"menu-item"}>five</li>
              <li className={"menu-item"}>six</li>
              <li className={"menu-item"}>seven</li>
              <li className={"menu-item"}>eight</li>
              <li className={"menu-item"}>nine</li>
              <li className={"menu-item"}>ten</li> 
          </ul> 
        </div>
    </div>
  );
}