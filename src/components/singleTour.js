import React from "react";

const SingleTour=({tour})=>{
    return(
        <div className="singletour-container">
            <div className="single-detail">
                    <h3>{tour.title}</h3>
                    </div>
        {/* <h1>{tour.title}</h1> */}
        <div className="imagesingle">
        <img src={tour.images[0]} width="500"/>

        </div>
        <div class="single-description">
        <p>{tour.description}</p>
        <p>{tour.tripDescription}</p>
        <div className="all-section">
        <div class="left-section">
            <p><strong>sheduled-date:</strong>{tour.dateScheduled}</p>
            <p><strong>Due Date:</strong>{tour.dueDate}</p>

        </div>
        <div className="right-section">
        <p><strong>available seat: </strong>{tour.seats}</p>
        <p><strong>Phone:</strong>{tour?.user.phone}</p>
        </div>
        

        </div>
       

        

        </div><br/>
        <div className="single-detail">
                    <h3>More</h3>
                    <div className="tour-img">
                    {
                        tour.images.map((image)=>(<img src={image} width="500"/>))

                        
                    }
                    </div>
                    
                    </div>
                    <p style={{textAlign:"right"}} style={{marginRight:"3px"}}>posted by:<strong>{tour.user.name}</strong></p>

              
                
    </div>
  

    )
    

}
export default SingleTour;
