import React from 'react';
function Overview()
{
    return(
        <div className="content overview" style={{marginLeft:'1rem'}}>
            <div className="row">
                <div className="col-md-8">
                    <h3>About this place</h3>

                    <h5 className="mt-4">Known for</h5>
                    <p className="description">Biryani</p>

                    <h5 className="mt-4">Popular Dishes</h5>
                    <p className="description">Iranian Tea, Drum Sticks, Cheesecake, Noodles</p>

                    <h5 className="mt-4">People Say This Place Is Known For</h5>
                    <p className="description">Venue, Fastest Delivery, Hygienic Place, Best Quality, Good Delivery, Contactless Delivery</p>

                    <h5 className="mt-4">Average Cost</h5>
                    <p className="mb-0 description">₹850 for two people (approx.)</p>
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
                        <p className="text-danger">+918897650121</p>
                        <h5 className="mt-3">Direction</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d15230.609866016555!2d78.50800262867462!3d17.380448209322957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d17.394410399999998!2d78.5092769!4m3!3m2!1d17.3681183!2d78.5219328!5e0!3m2!1sen!2sin!4v1648550820688!5m2!1sen!2sin" title='cornerbakers-map' style={{border:'0'}}  loading="lazy"></iframe>
                        <p className="mt-3 card-text description">D 16-11-739/2-9, Ground Floor, 1st & 2nd Floor, Dilsuknagar, Hyderabad</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview