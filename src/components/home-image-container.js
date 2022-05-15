export function HomeImageContainer({homePhotosSetOne, homePhotosSetTwo}) {
  return (
    <div className={"image-container"}>
        <div className={"image-wrapper"} onWheel = {(e) => 
          { 
            // scroll left and right on mouse wheel scroll
            const scrollContainer = document.querySelector(".image-wrapper");
            scrollContainer.scrollLeft += e.deltaY;
          }}>
          {homePhotosSetOne.map(image => ( 
            <img className={"image-item"} src={image.urls.regular} key={image.id}/>
          ))}
          {homePhotosSetTwo.map(image => ( 
            <img className={"image-item"} src={image.urls.regular} key={image.id}/>
          ))}
          <p className={"button button-left"} onClick={(e) => 
          {
              // scroll left on button click
              const scrollContainer = document.querySelector(".image-wrapper");
              scrollContainer.scrollLeft -= 250;
          }}>⬅</p>
          <div className={"button button-right"} onClick={(e) => 
          {
              // scroll right on button click
              const scrollContainer = document.querySelector(".image-wrapper");
              scrollContainer.scrollLeft += 250;
          }}>➡</div>
        </div>
    </div>  
  );
}
   