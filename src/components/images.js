
import imagesData from "./imageData";
export const images=()=>{
    return( <div>
        {
          imagesData().map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>)
   
}
export default images