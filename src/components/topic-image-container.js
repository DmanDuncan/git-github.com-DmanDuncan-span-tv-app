import {useEffect} from 'react';

export function TopicImageContainer({photosSetOne, photosSetTwo}) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"image-container"}>
            <div className={"image-wrapper"} onWheel = {(e) => 
            {   
                // scroll left and right on mouse wheel scroll
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
                // scroll left on button click
                const scrollContainer = document.querySelector(".image-wrapper");
                scrollContainer.scrollLeft -= 250;
            }}>⬅</div>
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
   