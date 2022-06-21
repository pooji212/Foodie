import React from 'react';
function Overview()
{
    return(
        <div className="content overview" style={{marginLeft:'1rem'}}>
            <div className="row">
                <div className="col-md-8">
                    <h3>About this place</h3>

                    <h5 className="mt-4">Known for</h5>
                    <p className="description">Biryani and Haleem</p>

                    <h5 className="mt-4">Popular Dishes</h5>
                    <p className="description">Iranian Chai, Irani Haleem, Special Mutton Biryani, Chicken Manchuria, Chicken Majestic, Tea</p>

                    <h5 className="mt-4">People Say This Place Is Known For</h5>
                    <p className="description">Delivery Timing, Very Good Service, Relaxed Atmosphere, Ample Seating Area, Super Service, Order Online</p>

                    <h5 className="mt-4">Average Cost</h5>
                    <p className="mb-0 description">₹900 for two people (approx.)</p>
                    <small>Exclusive of applicable taxes and charges, if any</small>

                    <h6 className="mt-4">Cash and Cards accepted</h6>
                    <h6 className="mb-4">Digital payments accepted</h6>

                    <h5 className="mt-3">More info</h5>
                    <ul style={{padding: '0px', lineHeight: '2rem'}}>
                        <li><i className="bi bi-check-circle text-success"></i> Home Delivery</li>
                        <li><i className="bi bi-check-circle text-success"></i> Indoor Seating</li>
                        <li><i className="bi bi-check-circle text-success"></i> Takeaway Available</li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <div className="card p-4" style={{marginRight:'1rem',borderRadius: '10px', position: 'sticky', top: '65px'}}>
                        <h5>Call</h5>
                        <p className="text-danger">+919848422003</p>
                        <h5 className="mt-3">Direction</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60921.35170040085!2d78.49945642028497!3d17.383716248579244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1648527163998!5m2!1sen!2sin" style={{border:'0'}} title="map" loading="lazy" > </iframe>
                        <p className="mt-3 card-text description">Plot-66, Alkapuri X Road, Inner Ring Road, Sai Nagar, Nagole, Hyderabad</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview