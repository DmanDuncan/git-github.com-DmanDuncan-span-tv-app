export function TopicImageContainer({photosSetOne, photosSetTwo}) {
    return (
        <div className={"image-container"}>
            <div className={"image-wrapper"} onWheel = {(e) => 
            { 
                const scrollContainer = document.querySelector(".image-wrapper");
                scrollContainer.scrollLeft += e.deltaY;
            }}>

            {photosSetOne.map(image => ( 
                <img className={"image-item"} src={image.urls.regular} key={image.id}/>
            ))}

            {photosSetTwo.map(image => ( 
                <img className={"image-item"} src={image.urls.regular} key={image.id}/>
            ))}
            </div>
        </div>
    );
}
   