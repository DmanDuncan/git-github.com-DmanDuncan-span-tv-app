export function HomeImageContainer({homePhotosSetOne, homePhotosSetTwo}) {
  return (
    <div className={"image-container"}>
        <div className={"image-wrapper"} onWheel = {(e) => 
          { 
            const scrollContainer = document.querySelector(".image-wrapper");
              scrollContainer.scrollLeft += e.deltaY;
          }}>

          {homePhotosSetOne.map(image => ( 
            <img className={"image-item"} src={image.urls.regular} key={image.id}/>
          ))}

          {homePhotosSetTwo.map(image => ( 
            <img className={"image-item"} src={image.urls.regular} key={image.id}/>
          ))}
        </div>
    </div>  
  );
}
   