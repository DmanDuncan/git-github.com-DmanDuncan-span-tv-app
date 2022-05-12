import { useEffect, useState} from 'react';
import axios from 'axios';

export function ImageContainer(topic) {
  
  const [firstImageArr, setFirstImageArr] = useState ([]);
  const [secondImageArr, setSecondImageArr] = useState ([]);

  useEffect(() => {
    
    axios.get(`https://api.unsplash.com/topics/architecture/photos/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setFirstImageArr([...firstImageArr, ...res.data]);
      // console.log(res.data);
    });
 
    axios.get(`https://api.unsplash.com/topics/architecture/photos/?client_id=DgfmO40HG_VBzm-OpOdFQOB3fND-lzvHRMcf3ahoMAE`)
    .then((res) => {
      setSecondImageArr([...secondImageArr, ...res.data]);
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
      
          // e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY;
      }}>
        {firstImageArr.map(image => ( 
          <img className={"image-item"} src={image.urls.regular} key={image.id}/>
        ))} 
        {secondImageArr.map(image => ( 
          <img className={"image-item"} src={image.urls.regular} key={image.id}/>
          ))}
      </div>
    </div>
  );
 
}
   