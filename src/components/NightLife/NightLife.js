import React from 'react';
import { MdPlayArrow } from 'react-icons/md'
import { GoStar } from 'react-icons/go'

function NightLife()
{
    const collections = [        
        {
            id: 1,
            title: "Calling all Bar Hoppers",
            places: '28 Places',
            image: "https://b.zmtcdn.com/data/collections/701c1be8afa8d585c69fd02997643498_1653043999.jpg?output-format=webp"
        },        
        {
            id: 2,
            title: "Happy Hours",
            places: '27 Places',
            image: "https://b.zmtcdn.com/data/collections/6ca6779562f818a58d327e487502d51d_1653042262.jpg?output-format=webp"
        }
    ];

    const Restaurants = [
        {
            id: 1,
            restaurantName: "Riders Sports Bar",
            image: "https://b.zmtcdn.com/data/pictures/9/18576359/187fd0127b3c1a0e91022379e21719b4_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Continental, Italian",
            price: "₹1,200 for two",
            rating: "3.8",
            distance: "1.4 km",
            location: "L B Nagar, Hyderabad"            
        },
        {
            id: 2,
            restaurantName: "Sky Lounge",
            image: "https://b.zmtcdn.com/data/pictures/0/18576380/24779da931a04787624eff47f3bece0c_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Continental, Burger",
            price: "₹1,400 for two",
            rating: "4.2",
            distance: "1.4 km",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 3,
            restaurantName: "Over the Flow",
            image: "https://b.zmtcdn.com/data/pictures/2/18356472/72fe83295f00dceb003c07c18b17b217_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Continental, Bar Food",
            price: "₹1,200 for two",
            rating: "4.0",
            distance: "1.5 km",
            location: "Kothapet, Hyderabad"
        },
        {
            id: 4,
            restaurantName: "King's Bar & Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/5/19568785/8d8298b9a0af67dabe7b362e7801b739_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Bar Food",
            price: "₹800 for two",
            rating: "3.2",
            distance: "749 m",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 5,
            restaurantName: "Moon Bean",
            image: "https://b.zmtcdn.com/data/pictures/3/18744203/3dd9459da6e316fb2638bce9c00b1d72_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Chinese, North Indian",
            price: "₹1,000 for two",
            rating: "4.3",
            distance: "211 m",
            location: "Malakpet, Hyderabad"
        },
        {
            id: 6,
            restaurantName: "Chemistry Family Bar",
            image: "https://b.zmtcdn.com/data/pictures/3/18392043/5984eb2f687662e6d002bbdf1f7b57fd_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese",
            price: "₹1,000 for two",
            rating: "3.8",
            distance: "1.6 km",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 7,
            restaurantName: "Bar One",
            image: "https://b.zmtcdn.com/data/pictures/4/90184/a81220d96b2565ecb13f8ae2f1eda57d_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese",
            price: "₹1,000 for two",
            rating: "3.8",
            distance: "2.8 km",
            location: "Kothapet, Hyderabad"
        },
        {
            id: 8,
            restaurantName: "Beer House Restaurant and Bar",
            image: "https://b.zmtcdn.com/data/pictures/4/18613874/2d0731f2d25f0363ba5fb2073293d382_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Finger Food",
            price: "₹600 for two",
            rating: "3.5",
            distance: "2.1 km",
            location: "Saroor Nagar, Hyderabad"
        },
        {
            id: 9,
            restaurantName: "MRR Bar & Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/1/92841/b829ba4b792c8d05c9ff9f31c5a1172f_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "MRR Bar & Restaurant",
            price: "₹700 for two",
            rating: "3.1",
            distance: "3.9 km",
            location: "Dilsukhnagar, Hyderabad"
        },
        {
            id: 10,
            restaurantName: "Sai Yuva Restaurant & Bar",
            image: "https://b.zmtcdn.com/data/pictures/8/19568428/826b446b1eea351cbd05b70754961cb5_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Fast Food",
            price: "₹1,000 for two",
            rating: "3.2",
            distance: "2 km",
            location: "Vanasthalipuram, Hyderabad"
        },
        {
            id: 11,
            restaurantName: "Sri Sapthagiri Bar & Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/9/19518199/079aa1b0874220ee9e58e0121d3d9942_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Bar Food",
            price: "₹1,200 for two",
            rating: "3.9",
            distance: "4.9 km",
            location: "Chandrayanagutta, Hyderabad"
        },
        {
            id: 12,
            restaurantName: "Narendra Restaurant & Bar",
            image: "https://b.zmtcdn.com/data/pictures/2/19665322/f44f6c551c9ea312971e80ffa3702737_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese",
            price: "₹850 for two",
            rating: "3.0",
            distance: "2.3 km",
            location: "Nagole, Hyderabad"
        },
        {
            id: 13,
            restaurantName: "Abhimanyu Restaurant & Bar",
            image: "https://b.zmtcdn.com/data/pictures/9/20233699/feaaaec98a66c2a62fcf9caf2f6f2f1e_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Bar Food, Biryani, Fast Food",
            price: "₹900 for two",
            rating: "3.4",
            distance: "3.2 km",
            location: "Vanasthalipuram, Hyderabad"
        },
        {
            id: 14,
            restaurantName: "Sai Mithra Restaurant & Bar",
            image: "https://b.zmtcdn.com/data/pictures/2/20228302/bbffbea903cdabaf7ba0717edc4ada88_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "South Indian, Chinese",
            price: "₹1,200 for two",
            rating: "3.2",
            distance: "2.3 km",
            location: "Vanasthalipuram, Hyderabad"
        },
        {
            id: 15,
            restaurantName: "Sama Regency Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/8/20224378/a55e21b35b56a188628221e1b9d0595e_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Chinese, Seafood, Beverages",
            price: "₹1,300 for two",
            rating: "3.8",
            distance: "3.2 km",
            location: "Saroor Nagar, Hyderabad"
        },
        {
            id: 16,
            restaurantName: "Blue Fox",
            image: "https://b.zmtcdn.com/data/pictures/chains/9/90129/1a9842266afb0a327c06074e7c15be0a_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Chinese, North Indian",
            price: "₹1,200 for two",
            rating: "4.0",
            distance: "9.2 km",
            location: "Himayath Nagar, Hyderabad"
        },
        {
            id: 17,
            restaurantName: "Blue Orchid",
            image: "https://b.zmtcdn.com/data/pictures/chains/8/91958/2dfa75a6ae226a2b0390f292436a9c77_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese",
            price: "₹1,000 for two",
            rating: "3.6",
            distance: "8.2 km",
            location: "Habsiguda, Hyderabad"
        },
        {
            id: 18,
            restaurantName: "Playstation Sports Lounge",
            image: "https://b.zmtcdn.com/data/pictures/1/18776171/e1be80405fce26c28d020cabb8ffbceb_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Continental",
            price: "₹1,000 for two",
            rating: "3.6",
            distance: "8.5 km",
            location: "Uppal, Hyderabad"
        },
        {
            id: 19,
            restaurantName: "Shree Mallikarjun Bar",
            image: "https://b.zmtcdn.com/data/pictures/9/20215659/c420861999b9a9dd43a1322c0a3f1d81_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Bar Food, Biryani",
            price: "₹1,200 for two",
            rating: "3.2",
            distance: "8.7 km",
            location: "Vanasthalipuram, Hyderabad"
        },
        {
            id: 20,
            restaurantName: "Annapurna Bar & Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/8/97138/3546938172599b5d4f797abfedff7bc9_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese",
            price: "₹700 for two",
            rating: "3.7",
            distance: "8.4 km",
            location: "RTC X roads, Hyderabad"
        },
        {
            id: 21,
            restaurantName: "Priya Bar And Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/6/93106/c59249d5d2626248f58d28920876daeb_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Finger Food, North Indian",
            price: "₹1,000 for two",
            rating: "3.6",
            distance: "682 m",
            location: "Nampally, Hyderabad"
        }
    ]

    return (
        <div>
            <div className='bg-light'>
                <div className='container' style={{ padding: '20px 25px' }}>
                    <h2 className='mb-4'>Collections</h2>
                    <div className='d-flex justify-content-between'>
                        <p style={{ fontSize: '18px' }}>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</p>
                        <span style={{ color: '#EF4F5F' }}>All Collections in Hyderabad <MdPlayArrow /></span>
                    </div>                    
                    <div className='d-flex'>
                        {                            
                            collections.map((item) => (                                
                                <div key={item.id} className="card collection-items bg-light me-4">
                                    <img src={item.image} className='card-img-top' alt=''/>
                                    <div className='image-placeholder'></div>
                                    <div className='card-title'><h5>{item.title}</h5></div>
                                    <div className='card-title-place'><h6>{item.places} <MdPlayArrow /></h6></div>
                                </div>
                            ))
                        }   
                    </div>                 
                </div>
            </div>

            <div className='container mt-4 restaurants'>
                <h2>Night Life Restaurants in Hyderabad</h2>
                <div className='row'>
                    {
                        Restaurants.map((r) => (
                            <div className='col-md-4' key={r.id}>
                                <div className='card mt-3'>
                                    <img src={r.image} className='card-img-top' alt='' />
                                    {r.image === "" && <img src={r.altImg} className='card-img-top' alt='alt_image' />}
                                    <div className='off-distance'>
                                        <span className='distance badge'>{r.distance}</span>
                                    </div>
                                    <div className='card-body'>
                                        <div className='card-text'>
                                            <p>{r.restaurantName}</p>
                                            <span className="badge bg-success">{r.rating}<GoStar /></span>
                                        </div>
                                        <div className='text-price'>
                                            <span className='text'>{r.text}</span>
                                            <span>{r.price}</span>
                                        </div>
                                        <div>
                                            <span className='text-muted m-0 p-0'>{r.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default NightLife