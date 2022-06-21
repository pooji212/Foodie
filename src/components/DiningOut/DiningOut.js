import React from 'react';
import Slider from "react-slick";
import './DiningOut.css'
import { MdPlayArrow } from 'react-icons/md'
import { GoStar } from 'react-icons/go'
function DiningOut() 
{

    const collections = [
        {
            
            id: 1,
            title: "New in Town",
            places:'12 Places',
            image: "https://b.zmtcdn.com/data/collections/e3fe1bbc28cb17b576a41f434278c80b_1653042482.jpg?output-format=webp"
        },
        {
            id: 2,
            title: "Trending This Week",
            places: '30 Places',
            image: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040543.png?output-format=webp"
        },
        {
            id: 3,
            title: "Best of Hyderabad",
            places: '65 Places',
            image: "https://b.zmtcdn.com/data/collections/057499abcb8bcb8ac4428d0e4c0f5218_1653044995.jpg?output-format=webp"
        },
        {
            id: 4,
            title: "Calling all Bar Hoppers",
            places: '28 Places',
            image: "https://b.zmtcdn.com/data/collections/701c1be8afa8d585c69fd02997643498_1653043999.jpg?output-format=webp"
        },
        {
            id: 5,
            title: "Rmance in the air",
            places: '29 Places',
            image: "https://b.zmtcdn.com/data/collections/a4fd328a421ffcd63b3aba01f6eb9b5d_1653045501.jpg?output-format=webp"
        },
        {
            id: 6,
            title: "For the love of Biryani",
            places: '30 Places',
            image: "https://b.zmtcdn.com/data/collections/d716d16f80016a90c3c9fec63663dc6c_1653043562.jpg?output-format=webp"
        },
        {
            id: 7,
            title: "Local Awesomeness",
            places: '30 Places',
            image: "https://b.zmtcdn.com/data/collections/61c474e89378285b20682db38cce8b76_1653044714.jpg?output-format=webp"
        },
        {
            id: 8,
            title: "Happy Hours",
            places: '27 Places',
            image: "https://b.zmtcdn.com/data/collections/6ca6779562f818a58d327e487502d51d_1653042262.jpg?output-format=webp"
        }        
    ];

    const Restaurants = [
        {
            id: 1,
            restaurantName: "Urban Beats Family Bar",
            image: "https://b.zmtcdn.com/data/pictures/6/20124406/6f798a7424b402d35445b58752898e84_featured_v2.jpg",            
            altImg:"https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese",
            price: "₹500 for two",
            rating: "3.3",
            distance: "1.3 km",      
            location:"L B Nagar, Hyderabad"      
        },
        {
            id: 2,
            restaurantName: "Bahar Biryani Cafe",
            image: "https://b.zmtcdn.com/data/pictures/chains/2/18375822/478e0815ccc64bb074c7bc4689e6a02a_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Chimese, North Indian",
            price: "₹900 for two",
            rating: "4.2",
            distance: "249 m",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 3,
            restaurantName: "Tabla",
            image: "https://b.zmtcdn.com/data/pictures/7/18426597/77312d28cbf885f189c268b611c7373a_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Andhra, Chinese",
            price: "₹900 for two",
            rating: "4.0",
            distance: "1.5 km",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 4,
            restaurantName: "Sai Cakes & Bakes",
            image: "https://b.zmtcdn.com/data/pictures/4/19616764/99da2e72f34e8971db3998c11528de61_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Bakery, Fast Food, Chinese",
            price: "₹300 for two",
            rating: "3.2",
            distance: "492 m",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 5,
            restaurantName: "KFC",
            image: "https://b.zmtcdn.com/data/pictures/chains/5/90195/cef97695a73b348c78178dc721a35c5c_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Burger, Fast Food, Biryani",
            price: "₹500 for two",
            rating: "4.3",
            distance: "211 m",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 6,
            restaurantName: "The Natural Thickshakes",
            image: "https://b.zmtcdn.com/data/pictures/3/20212173/c3580d7e3219979b224cdea05451fb98_o2_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Shake, Ice Cream, Coffee",
            price: "₹100 for two",
            rating: "3.8",
            distance: "29 min",
            location: "L B Nagar, Hyderabad"
        },        
        {
            id: 7,
            restaurantName: "Riders Sports Bar",
            image: "https://b.zmtcdn.com/data/pictures/9/18576359/187fd0127b3c1a0e91022379e21719b4_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Continental, Italian, North Indian",
            price: "₹200 for two",
            rating: "3.5",
            distance: "26 min",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 8,
            restaurantName: "MC Donald's",
            image: "https://b.zmtcdn.com/data/pictures/chains/2/97262/6d7abd8fb04cccb18c74e50eb5003ed3_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Burger, Fast Food, Beverages",
            price: "₹500 for two",
            rating: "4.1",
            distance: "670 m",
            location: "L B Nagar, Hyderabad"      
        },
        {
            id: 9,
            restaurantName: "Surabhi Multicuisine Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/1/96031/b829ba4b792c8d05c9ff9f31c5a1172f_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese, Biryani",
            price: "₹700 for two",
            rating: "3.9",
            distance: "1.5 km",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 10,
            restaurantName: "KS Bakers",
            image: "https://b.zmtcdn.com/data/pictures/6/18627426/e2ae492f43714bfa27e7adb8c3b617de_o2_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese, Bakery",
            price: "₹250 for two",
            rating: "3.9",
            distance: "25 min",           
            location: "L B Nagar, Hyderabad" 
        },
        {
            id: 11,
            restaurantName: "Sai Tipsy Topsy Bakery",
            image: "https://b.zmtcdn.com/data/pictures/9/18517279/f5f12a8491c323b137421043f839915b_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Bakery, Fast Food, Chinese",
            price: "₹300 for two",
            rating: "3.4",
            distance: "25 min",           
            location: "L B Nagar, Hyderabad" 
        },
        {
            id: 12,
            restaurantName: "Domino's Pizza",            
            image: "https://b.zmtcdn.com/data/pictures/chains/7/90237/d6f71e7037cd6b2aa6751e7f94a68da2_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Pizza, Fast Food, Desserts",
            price: "₹400 for two",
            rating: "4.0",
            distance: "1.2 km",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 13,
            restaurantName: "Amaravathi Family Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/7/19829827/050a578061cd1b38ad3530b559a8495a_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "South Indian, North Indian",
            price: "₹750 for two",
            rating: "3.4",
            distance: "640 m",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 14,
            restaurantName: "Cream Stone",
            image: "https://b.zmtcdn.com/data/pictures/chains/6/90706/edda032efb15ec61b3c667c306b0e00c_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Ice Cream, Desserts",
            price: "₹400 for two",
            rating: "3.2",
            distance: "1.3 km",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 15,
            restaurantName: "Karachi Bakery",
            image: "https://b.zmtcdn.com/data/pictures/chains/2/90862/38a60c8c5a0e7a51e2a7fe8f98611df6_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Fast Food, Pizza, Sandwich",
            price: "₹300 for two",
            rating: "3.8",
            distance: "1.4 km",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 16,
            restaurantName: "KS Bakers",
            image: "https://b.zmtcdn.com/data/pictures/chains/2/90272/9957405697c35e9a57b56d5eab8bdb59_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Bakery, Fast Food, Pizza",
            price: "₹400 for two",
            rating: "4.3",
            distance: "626 m",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 17,
            restaurantName: "Papadams",
            image: "https://b.zmtcdn.com/data/pictures/7/18199457/5846f4b351837c4a447f4d0be2a1547f_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "North Indian, Chinese",
            price: "₹800 for two",
            rating: "4.0",
            distance: "2.7 km",            
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 18,
            restaurantName: "Mandi@365",
            image: "https://b.zmtcdn.com/data/pictures/0/19007440/cbffb8a88f06e205974a36fac3007cd2_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Arabian, Hyderabadi",
            price: "₹600 for two",
            rating: "3.3",
            distance: "1 km",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 19,
            restaurantName: "Burger King",
            image: "https://b.zmtcdn.com/data/pictures/chains/8/18138658/572999873b161d836dce1cb64827ef6f_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Burger, Fast Food",
            price: "₹400 for two",
            rating: "4.2",
            distance: "211 m",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 20,
            restaurantName: "Makers Of Milkshakes",
            image: "https://b.zmtcdn.com/data/pictures/4/19197864/82176d5803e9a4c74ebade050ded3894_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Shake, Ice Cream, Beverages",
            price: "₹350 for two",
            rating: "3.7",
            distance: "766 m",
            location: "L B Nagar, Hyderabad"
        },
        {
            id: 21,
            restaurantName: "Cafe Coffee Day",
            image: "https://b.zmtcdn.com/data/pictures/chains/9/93379/f74f5d1912e9d6b950e97f260a793fb0_featured_v2.jpg",
            altImg: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
            text: "Cafe, Fast Food, Desserts",
            price: "₹500 for two",
            rating: "3.3",
            distance: "682 m",
            location: "L B Nagar, Hyderabad"
        }
    ]

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className='bg-light'>
                <div className='container' style={{ padding: '20px 25px' }}>
                    <h2 className='mb-4'>Collections</h2>
                    <div className='d-flex justify-content-between'>
                        <p style={{ fontSize: '18px' }}>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</p>
                        <span style={{ color:'#EF4F5F'}}>All Collections in Hyderabad <MdPlayArrow/></span>
                    </div>
                    <Slider {...settings} className="mt-1">
                        {
                            collections.map((item) => (
                                <div key={item.id} className="card collection-items bg-light">
                                    <img src={item.image} className='card-img-top' alt='' />
                                    <div className='image-placeholder'></div>
                                    <div className='card-title'><h5>{item.title}</h5></div>
                                    <div className='card-title-place'><h6>{item.places} <MdPlayArrow/></h6></div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

            <div className='container mt-4 restaurants'>
                <h2>Dine-Out Restaurants in Hyderabad</h2>                
                <div className='row'>       
                {             
                    Restaurants.map((r)=>(                                    
                    <div className='col-md-4' key={r.id}>                                            
                        <div className='card mt-3'>                            
                            <img src={r.image} className='card-img-top' alt=''/>                            
                            {r.image === "" && <img src={r.altImg} className='card-img-top' alt='' />}
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

export default DiningOut
