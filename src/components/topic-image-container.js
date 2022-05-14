export function TopicImageContainer({photosSetOne, photosSetTwo}) {
    return (
        <div className={"image-container"}>
            <div className={"image-wrapper"} onWheel = {(e) => 
            { 
                const scrollContainer = document.querySelector(".image-wrapper");
                scrollContainer.scrollLeft -= e.deltaY;
            }}>

            {photosSetOne.map(image => ( 
                <img className={"image-item"} src={image.urls.regular} key={image.id}/>
            ))}

            {photosSetTwo.map(image => ( 
                <img className={"image-item"} src={image.urls.regular} key={image.id}/>
            ))}
            <div className={"button button-left"} onClick={(e) => 
            {
                const scrollContainer = document.querySelector(".image-wrapper");
                scrollContainer.scrollLeft -= 250;
            }}>⬅</div>
            <div className={"button button-right"} onClick={(e) => 
            {
                const scrollContainer = document.querySelector(".image-wrapper");
                scrollContainer.scrollLeft += 250;
            }}>➡</div>
            </div>
        </div>
    );
}
   