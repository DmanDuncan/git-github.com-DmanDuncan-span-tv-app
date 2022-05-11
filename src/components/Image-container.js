import { useEffect, useRef, useState} from 'react';
import axios from 'axios';

export function ImageContainer(topic) {
  
  const [images, setImages] = useState ([]);
  const [images2, setImages2] = useState ([]);

  useEffect(() => {
    
    axios.get(`https://api.unsplash.com/topics/architecture/photos/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setImages([...images, ...res.data]);
      // console.log(res.data);
    });
 
    axios.get(`https://api.unsplash.com/topics/architecture/photos/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setImages2([...images2, ...res.data]);
      // console.log(res.data);
    });
 
  }, []);

  // const scrollContainer = document.querySelector(".image-wrapper");
      
  //       scrollContainer.addEventListener("wheel", (evt) => {
  //         evt.preventDefault();
  //         scrollContainer.scrollLeft += evt.deltaY;
  // });
  
  return (
    <div className={"image-container"}>
      <div className="image-wrapper" onWheel = {(e) => 
      { 
        const scrollContainer = document.querySelector(".image-wrapper");
      
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY;
      }}>
        {images.map(image => ( 
          <img className={"image-item"} src={image.urls.regular} key={image.id}/>
        ))} 
        {images2.map(image => ( 
          <img className={"image-item"} src={image.urls.regular} key={image.id}/>
          ))}
      </div>
    </div>
  );
 
}
   