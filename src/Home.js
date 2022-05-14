import { useEffect, useState} from 'react';
import { HomeImageContainer } from './components/home-image-container.js';
import { TopicImageContainer } from './components/topic-image-container.js';
import { Menu } from './components/menu.js';
import { MenuOpen } from './components/menu-open.js';
import axios from 'axios';

function Home() {

  const [menu, setMenu] = useState(false);
  const [onHome, setHome] = useState(true);
  const [topicTitle, setTopicTitle] = useState("Home");
  const [topics, setTopics] = useState ([]);
  const [homePhotosSetOne, setHomePhotosSetOne] = useState ([]);
  const [homePhotosSetTwo, setHomePhotosSetTwo] = useState ([]);
  let [photosSetOne, setPhotosSetOne] = useState ([]);
  let [photosSetTwo, setPhotosSetTwo] = useState ([]);
  const [clientId,setClientId] = ("DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE");

  useEffect(() => {

    // capture topics and add to topics array
    axios.get(`https://api.unsplash.com/topics/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setTopics([...topics, ...res.data]);
    });

    // default images and add to home images array
    axios.get(`https://api.unsplash.com/photos/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setHomePhotosSetOne([...homePhotosSetOne, ...res.data]);
      
      setHomePhotosSetTwo([...homePhotosSetTwo, ...res.data]);
    });

  }, []); 

  // dynamically load images to photos array according to updated topic slug
  const handleSubmit = (slug) => {

    axios.get(`https://api.unsplash.com/topics/${slug}/photos?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setPhotosSetOne(photosSetOne = []);
      setPhotosSetOne([...photosSetOne, ...res.data])

      setPhotosSetTwo(photosSetTwo = []);
      setPhotosSetTwo([...photosSetTwo, ...res.data])
    });
  }

  return (
    <div className="Home-container">
      <h1 className={"topic"}>{topicTitle}</h1>

      {/* check menu state is true, show menu icon component */}
      {menu &&
        <Menu setMenu={setMenu} setHome={setHome} setTopicTitle={setTopicTitle} topics={topics} handleSubmit={handleSubmit}/>
      } 

      {/* check menu state is false, show menu icon component */}
      {!menu &&
        <MenuOpen setMenu={setMenu}/>
      }

      {/* check home state is true, show home photos */}
      {onHome &&  
        <HomeImageContainer homePhotosSetOne={homePhotosSetOne} homePhotosSetTwo={homePhotosSetTwo}/>
      }

      {/* check home state is flase, show photos according to topic */}
      {!onHome &&
        <TopicImageContainer photosSetOne={photosSetOne} photosSetTwo={photosSetTwo}/>
      }

    </div>
  );
}

export default Home;
