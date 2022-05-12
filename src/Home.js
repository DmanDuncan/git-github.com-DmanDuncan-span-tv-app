import { useEffect, useState} from 'react';
import { ImageContainer } from './components/image-container.js';
import { Menu } from './components/menu.js';
import { MenuOpen } from './components/menu-open.js';

function Home() {

  const [menu, setMenu] = useState(false);

  return (
    <div className="Home-container">
      <h1 className={"topic"}>Topic {menu}</h1>

      <ImageContainer />
      
      {(menu === true) &&
        <Menu setMenu={setMenu}/>
      }

      {(menu !== true) &&
        <MenuOpen setMenu={setMenu}/>
      }  

    </div>
  );
}

export default Home;
