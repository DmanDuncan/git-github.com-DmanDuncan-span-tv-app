import { useEffect, useRef, useState} from 'react';
import axios from 'axios';

export function ImageContainer() {
  
  const [images, setImages] = useState ([]);

  useEffect(() => {
    
    axios.get(`https://api.unsplash.com/topics/architecture/photos/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setImages([...images, ...res.data]);
    });
 
  }, []);

  return (
    <div className="Image-container">
      <h1>images here</h1> 
      {images.map(image => (
        <img className={"image-item"} src={image.urls.thumb} key={image.id}/>
      ))}
    </div>
  );
}
   