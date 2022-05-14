import { useEffect, useState} from 'react';
// import { ImageContainer } from './components/image-container.js';
import { Menu } from './components/menu.js';
import { MenuOpen } from './components/menu-open.js';
import menuClose from './images/close-menu-icon.svg';
import axios from 'axios';

function Home() {

  const [menu, setMenu] = useState(false);
  const [onHome, setHome] = useState(true);
  const [topicTitle, setTopicTitle] = useState("Home");
  const [topics, setTopics] = useState ([]);
  const [homePhotos, setHomePhotos] = useState ([]);
  let [photos, setPhotos] = useState ([]);
  const [clientId,setClientId] = ("DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE");

  useEffect(() => {
    axios.get(`https://api.unsplash.com/topics/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setTopics([...topics, ...res.data]);
    });

    axios.get(`https://api.unsplash.com/photos/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setHomePhotos([...homePhotos, ...res.data]);
    });

  }, []); 

  const handleSubmit = (slug) => {

    axios.get(`https://api.unsplash.com/topics/${slug}/photos?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setPhotos(photos = []);
      setPhotos([...photos, ...res.data])
    });
  }

  return (
    <div className="Home-container">
      <h1 className={"topic"}>{topicTitle}</h1>

      {menu &&
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
      } 

      {!menu &&
        <MenuOpen setMenu={setMenu}/>
      }

      {onHome &&
      <div className={"image-container"}>
        <div className={"image-wrapper"} onWheel = {(e) => 
          { 
            const scrollContainer = document.querySelector(".image-wrapper");
              scrollContainer.scrollLeft += e.deltaY;
          }}>

          {homePhotos.map(image => ( 
            <img className={"image-item"} src={image.urls.regular} key={image.id}/>
          ))}
        </div>
      </div>  
      }

      {!onHome &&
        <div className={"image-container"}>
          <div className={"image-wrapper"} onWheel = {(e) => 
            { 
              const scrollContainer = document.querySelector(".image-wrapper");
                scrollContainer.scrollLeft += e.deltaY;
            }}>

            {photos.map(image => ( 
              <img className={"image-item"} src={image.urls.regular} key={image.id}/>
            ))}
          </div>
        </div>
      }

    </div>
  );
}

export default Home;
