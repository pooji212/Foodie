import React from 'react';
import Slider from "react-slick";
import '../Delivery/Delivery.css'
import { GoStar } from 'react-icons/go'
import { Link } from 'react-router-dom';

function Delivery() {

    const foodCollections = [
    {
        id:1,
        title:"Home Style",
        image:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
    },
    {
        id:2,
        title:"Biryani",
        image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:3,
        title:"Chicken",
        image:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:4,
        title:"Shake",
        image:"https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png"
    },
    {
        id:5,
        title:"Pizza",
        image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:6,
        title:"Burger",
        image:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:7,
        title:"Ice Cream",
        image:"https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"        
    },
    {
        id:8,
        title:"Dosa",
        image:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id:9,
        title:"Manchurian",
        image:"https://b.zmtcdn.com/data/o2_assets/2e6d86cd3b90906845c02b3eabf7bc141632716603.png"
    },
    {
        id:10,
        title:"Pulao",
        image:"https://b.zmtcdn.com/data/o2_assets/301b0637eb84c86fdb4482740b35dc351632716576.png"
    },
    {
        id:11,
        title:"Chaat",
        image:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
    },
    {
        id:12,
        title:"Fried Rice",
        image:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
    },
    {
        id:13,
        title:"Juice",
        image:"https://b.zmtcdn.com/data/dish_images/76337f566ed166fad8a5ad6b5e29d75b1634805122.png"
    },
    {
        id:14,
        title:"Tea",
        image:"https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png"
    }
    ];

    const brandCollections = [
        {
            id: 1,
            title: "Mehfil",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png"
        },
        {
            id: 2,
            title: "Shah Ghouse Hotel & Restaurant",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png"
        },
        {
            id: 3,
            title: "Kritunga Restaurant",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/362ebbf4f3ca999b7f09e681ca120f96_1604571864.png"
        },
        {
            id: 4,
            title: "Pista House",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/0f13b4a115d1420b049835a5b2037a46_1649660664.png"
        },
        {
            id: 5,
            title: "Domino's Pizza",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png"
        },
        {
            id: 6,
            title: "KFC",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png"
        },
        {
            id: 7,
            title: "Cream Stone",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/cba530e2b1d8439cd4170fef9b3f1d51_1635882104.png"
        },        
        {
            id: 8,
            title: "KS Bakers",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/e6ef42c260b1633d900ff30c671ed1d9_1600237154.png?output-format=webp"
        },
        {
            id: 9,
            title: "Kwality Walls",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628324770.png?output-format=webp"
        },
        {
            id: 10,
            title: "Karachi Bakery",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/2d813b5517c57e982563fe92ac286286_1646558284.png?output-format=webp"
        },
        {
            id: 11,
            title: "Pizza Hut",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
        },
        {
            id: 12,
            title: "Burger King",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187971.png?output-format=webp"
        },
        {
            id: 13,
            title: "Paradise",
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png?output-format=webp"
        }        
    ];

    const Restaurants = [
        {
            id : 1,
            restaurantName: "Shah Ghouse Hotel & Restaurant",
            link : "Shah-Ghouse-Hotel-And-Restaurant",
            image:"https://b.zmtcdn.com/data/pictures/chains/0/93970/ff2a033de7e1e643935b8899a1e2b42e_o2_featured_v2.jpg?output-format=webp",
            text:"Biryani, North Indian, Chinese",
            price:"₹200 for one",
            rating:"4.0",
            time:"18 min",
            offer:"20% OFF",
            ordersPlaced:"53275+ orders placed from here recently"
        },
        {
            id : 2,
            restaurantName: "Corner Bakers",
            link : "Corner-Bakers",
            image:"https://b.zmtcdn.com/data/pictures/chains/2/18458842/dd319168fdef5f61b8dd973707a50853_o2_featured_v2.jpg?output-format=webp",
            text:"Bakery, Fast Food, Pizza",
            price:"₹200 for one",
            rating:"4.0",
            time:"28 min",
            offer:"50% OFF",
            ordersPlaced:"7975+ orders placed from here recently"
        },
        {
            id : 3,
            restaurantName: "Kritunga Restaurant",
            link: "Kritunga-Restaurant",
            image:"https://b.zmtcdn.com/data/pictures/chains/8/90148/8005a9ef6ce6ade86224cf49c2bc393b_o2_featured_v2.jpg?output-format=webp",
            text:"Andhra, Biryani",
            price:"₹200 for one",
            rating:"4.0",
            time:"16 min",
            offer:"10% OFF",
            ordersPlaced:"22100+ orders placed from here recently"
        },
        {
            id : 4,
            restaurantName: "Lucky Restaurant",
            link: "Lucky-Restaurant",
            image:"https://b.zmtcdn.com/data/pictures/chains/6/94336/b11958906834b77171383978608a20ef_o2_featured_v2.jpg?output-format=webp",
            text:"Chinese, Arabian",
            price:"₹200 for one",
            rating:"3.9",
            time:"19 min",
            offer:"50% OFF",
            ordersPlaced:"116850+ orders placed from here recently"
        },
        {
            id : 5,
            restaurantName : "Mehfil",
            link: "Mehfil",
            image:"https://b.zmtcdn.com/data/pictures/chains/3/93043/472257cae06db1d30e3d73971f9135be_o2_featured_v2.jpg?output-format=webp",
            text: "North Indian, Biryani, Kebab",
            price:"₹200 for one",
            rating:"4.0",
            time:"35 min",
            offer:"10% OFF",
            ordersPlaced:"94650+ orders placed from here recently"
        },
        {
            id : 6,
            restaurantName: "Sri Sai Raghavendra Udipi Veg",
            link: "Sri-Sai-Raghavendra-Udipi-Veg",
            image:"https://b.zmtcdn.com/data/pictures/3/19129303/690593fd1924d2ea471ded9e2807ec8e_o2_featured_v2.jpg?output-format=webp",
            text:"South Indian, North Indian",
            price:"₹200 for one",
            rating:"3.8",
            time:"29 min",
            offer:"30% OFF",
            ordersPlaced:"14450+ orders placed from here recently"
        },
        {
            id : 7,
            restaurantName: "Bahar Biryani Cafe",
            link : "Bahar-Biryani-Cafe",
            image:"https://b.zmtcdn.com/data/pictures/chains/2/18375822/e2a88afa92fbde9ac5573456ce80383c_o2_featured_v2.jpg?output-format=webp",
            text:"Chinese, North Indian",
            price:"₹200 for one",
            rating:"3.9",
            time:"15 min",
            offer:"50% oFF",
            ordersPlaced: "11725+ orders placed from here recently"
        },
        {
            id : 8,
            restaurantName: "Potlam Pulao",
            link: "Potlam-Pulao",
            image:"https://b.zmtcdn.com/data/pictures/8/20035898/f79ebed78236fe45ceabcff709bb12dd_o2_featured_v2.jpg?output-format=webp",
            text:"South Indian, Biryani",
            price:"₹200 for one",
            rating:"3.5",
            time:"26 min",
            offer:"40% OFF",
            ordersPlaced:"825+ orders placed from here recently"
        },
        {
            id : 9,
            restaurantName: "Kwality Wall's Frozen Dessert",
            link: "Kwality-Wall's-Frozen-Dessert",
            image:"https://b.zmtcdn.com/data/pictures/chains/9/94419/acfe0626c6e4f2ac89d41b1d5ff461db_o2_featured_v2.jpg?output-format=webp",
            text:"Ice Cream",
            price:"₹200 for one",
            rating:"4.4",
            time:"18 min",
            offer:"30% OFF",
            ordersPlaced:"1125+ orders placed from here recently"
        },
        {
            id : 10,
            restaurantName: "Raju Gari Biryani",
            link: "Raju-Gari-Biryani",
            image:"https://b.zmtcdn.com/data/pictures/3/19892773/fb44c695e6d16d0b9f08b542c5dc746e_o2_featured_v2.jpg",
            text:"Biryani, Chinese",
            price:"₹200 for one",
            rating:"3.6",
            time:"23 min",
            offer:"40% OFF",
            ordersPlaced:"6100+ orders placed from here recently"
        },
        {
            id : 11,
            restaurantName: "KS Bakers",
            link : "KS-Bakers",
            image:"https://b.zmtcdn.com/data/pictures/chains/2/90272/2c430a5f9cbbc1ee04db52482cb00b73_o2_featured_v2.jpg",
            text:"Bakery, Fast Food, Pizza",
            price:"₹150 for one",
            rating:"4.1",
            time:"25 min",
            offer:"20% OFF",
            ordersPlaced: "4875+ orders placed from here recently"
        },
        {
            id : 12,
            restaurantName: "Cafe Bahar",
            link : "Cafe-Bahar",
            image:"https://b.zmtcdn.com/data/pictures/6/18627426/e2ae492f43714bfa27e7adb8c3b617de_o2_featured_v2.jpg",
            text:"North Indian, South Indian",
            price:"₹150 for one",
            rating:"3.7",
            time:"20 min",
            offer:"50% OFF",
            ordersPlaced: "18275+ orders placed from here recently"
        },
        {
            id : 13,
            restaurantName : "KFC",
            link : "KFC",
            image:"https://b.zmtcdn.com/data/pictures/chains/5/90195/336196dfdb8fc00175472a785007b9ea_o2_featured_v2.jpg",
            text:"Burger, Fast Food, Biryani",
            price:"₹150 for one",
            rating:"4.0",
            time:"21 min",
            offer:"20% OFF",
            ordersPlaced: "9000+ orders placed from here recently"
        },
        {
            id : 14,
            restaurantName: "Hotel Sitara Grand",
            link: "Hotel-Sitara-Grand",
            image:"https://b.zmtcdn.com/data/pictures/chains/4/90164/8c39c049240e2fcf475708468c66219d_o2_featured_v2.jpg",
            text:"North Indian, Chinese",
            price:"₹150 for one",
            rating:"3.8",
            time:"24 min",
            offer:"50% OFF",
            ordersPlaced: "825+ orders placed from here recently"
        },
        {
            id : 15,
            restaurantName: "Mandi King Arabian Restaurant",
            link: "Mandi-King-Arabian-Restaurant",
            image:"https://b.zmtcdn.com/data/pictures/7/20031317/a97231a7c99e1ef71d546d50581807b4_o2_featured_v2.jpg",
            text:"Arabian, Seafood, Kebab",
            price:"₹150 for one",
            rating:"3.7",
            time:"22 min",
            offer:"40% OFF",
            ordersPlaced:"6300+ orders placed from here recently"
        },
        {
            id : 16,
            restaurantName: "Domino's Pizza",
            link: "Domino's-Pizza",
            image:"https://b.zmtcdn.com/data/pictures/chains/7/90237/da98167debc6a27ad8415e9f53bc7453_o2_featured_v2.jpg",
            text:"Pizza, Fast Food, Dessert",
            price:"₹150 for one",
            rating:"4.1",
            time:"30 min",
            offer:"50% OFF",
            ordersPlaced:"2850+ orders placed from here recently"
        },
        {
            id : 17,
            restaurantName: "Pista House",
            link: "Pista-House",
            image:"https://b.zmtcdn.com/data/pictures/chains/9/91999/7e3583a6e7d8f650fe326263f289b90a_o2_featured_v2.jpg",
            text:"Biryani, Mughlai, North Indian",
            price:"₹200 for one",
            rating:"4.1",
            time:"35 min",
            offer:"50% OFF",
            ordersPlaced:"9600+ orders placed from here recently"
        },
        {
            id : 18,
            restaurantName: "McDonald's",
            link: "McDonald's",
            image:"https://b.zmtcdn.com/data/pictures/chains/2/97262/0f9874bafb6e24669a80018b02b2bbfe_o2_featured_v2.jpg",
            text:"Burger, Fast Food, Beverages",
            price:"₹200 for one",
            rating:"4.1",
            time:"40 min",
            offer:"30% OFF",
            ordersPlaced:"10300+ orders placed from here recently"
        },
        {
            id : 19,
            restaurantName : "Pizza Hut",
            link : "Pizza-Hut",
            image:"https://b.zmtcdn.com/data/pictures/chains/4/90384/c8e3d85b773066868ec333d6f17782cb_o2_featured_v2.jpg",
            text:"Pizza, Fast Food, Dessert",
            price:"₹200 for one",
            rating:"3.5",
            time:"26 min",
            offer:"20% OFF",
            ordersPlaced: "4350+ orders placed from here recently"
        },
        {
            id : 20,
            restaurantName : "Creame Stone",
            link: "Creame-Stone",
            image:"https://b.zmtcdn.com/data/pictures/chains/6/90706/906bd33d5b8279af4a640f19d5ace967_o2_featured_v2.jpg",
            text:"Ice Cream, Desserts",
            price:"₹200 for one",
            rating:"4.3",
            time:"25 min",
            offer:"30% OFF",
            ordersPlaced:"15800+ orders placed from here recently"
        },
        {
            id : 21,
            restaurantName : "Burger King",
            link: "Burger-King",
            image:"https://b.zmtcdn.com/data/pictures/chains/8/18138658/9f2f843523d0e8b9ecd9ee9ee32c1c46_o2_featured_v2.jpg",
            text:"Burger, Fast Food",
            price:"₹200 for one",
            rating:"4.1",
            time:"34 min",
            offer:"20% OFF",
            ordersPlaced:"8900+ orders placed from here recently"
        }
    ]

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
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
        <div className=''>
            <div className='bg-light'>
                <div className='container' style={{padding:'35px 25px'}}>
                    <h2>Inspiration for your first order</h2>
                    <Slider {...settings} className="mt-3">
                        {
                            foodCollections.map((item) => (
                                <div key={item.id} className="card food-items bg-light" id="card">
                                    <img src={item.image} className='card-img-top' alt=''/>
                                    <div className='card-title text-center'><h5>{item.title}</h5></div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>            
            
            <div className='container mt-3' style={{ padding: '35px 25px' }}>
                <h2>Top Brands</h2>
                <Slider {...settings} className="mt-3">
                    {
                        brandCollections.map((item) => (
                            <div key={item.id} className="card brand-items p-2">
                                <img src={item.image} className='card-img-top' alt='' />
                                <div className='card-title text-center'><h5>{item.title}</h5></div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className='container mt-4 restaurants'>  
                <h2>Delivery Restaurants in Hyderabad</h2>                                  
                <div className='row'>
                {
                    Restaurants.map((r) => (  
                        <div className='col-md-4' key={r.id}>
                        <Link to={r.link}>
                                <div className='card mt-3 animate__animated animate__fadeIn'>
                                <img src={r.image} className='card-img-top' alt=''/>
                                <div className='off-time'>
                                    <span className='bg-primary text-white offer'>{r.offer}</span>
                                    <span className='time badge'>{r.time}</span>
                                </div>
                                <div className='card-body'>
                                    <div className='card-text'>
                                        <p>{r.restaurantName}</p>
                                        <span className="badge bg-success">{r.rating} <GoStar className='star-icon'/></span>
                                    </div>
                                    <div className='text-price'>
                                        <span className='text'>{r.text}</span>
                                        <span>{r.price}</span>
                                    </div>                            
                                    <div className="card-footer bg-white mt-3">
                                        <small className='text-muted'>{r.ordersPlaced}</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    ))
                }
                </div>                                       
            </div>            

        </div>
    );
}

export default Delivery