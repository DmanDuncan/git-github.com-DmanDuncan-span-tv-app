import { useEffect, useState} from 'react';
// import { ImageContainer } from './components/image-container.js';
import { Menu } from './components/menu.js';
import { MenuOpen } from './components/menu-open.js';
import menuClose from './images/close-menu-icon.svg';
import axios from 'axios';

function Home() {

  const [menu, setMenu] = useState(false);
  const [topicSlug, setTopicSlug] = useState("");
  const [topicTitle, setTopicTitle] = useState("");
  const [topics, setTopics] = useState ([]);
  const [clientId,setClientId] = ("DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE");

  useEffect(() => {
    axios.get(`https://api.unsplash.com/topics/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setTopics([...topics, ...res.data]);
      console.log(res.data);
    });
  }, []); 

  // const handleChange = (event) => {
  //   setPhoto(event.target.value)
  // }

  const handleSubmit = (slug) => {
    console.log(slug);

    const url = "https://api.unsplash.com/search/photos?page=1&query=" + topicSlug + "&client_="+clientId;

    // axios.get(url)
    // .then((res) => {
    //   console.log(res.data);
    // })

    axios.get("https://api.unsplash.com/topics/" + test + "/photos?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE")
    .then((res) => {
      // setTopics([...topics, ...res.data]);
      console.log(res.data);
    });
  }

  return (
    <div className="Home-container">
      <h1 className={"topic"}>TITLE:{topicTitle} SLUG:{topicSlug}</h1>

      {/* <ImageContainer topicSlug={topicSlug} /> */}
      
      {(menu === true) &&
        <div className="menu-container">
          <div className={"menu-wrapper"}>
              <img className={"menu-close"} src={menuClose} alt="" onClick={() => {setMenu(false)}}/>
              <ul className={"menu"}>
                {topics.map(topic => ( 
                  <li className={"menu-item"} key={topic.id} onClick={() => {setTopicTitle(topic.title); handleSubmit(topic.slug);}}>{topic.title}</li>
                ))} 
              </ul> 
            </div>
        </div>
      }

      {(menu !== true) &&
        <MenuOpen setMenu={setMenu}/>
      }  

    </div>
  );
}

export default Home;
