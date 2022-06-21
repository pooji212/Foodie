import './Home.css'
import React from 'react';
import Delivery from '../Delivery/Delivery';
import DiningOut from '../DiningOut/DiningOut';
import NightLife from '../NightLife/NightLife';
import TabOptions from '../TabOptions/tabOptions';
import { useState } from 'react';

function Home()
{         
    const [activeTab, setActiveTab] = useState("Delivery");

    const getCorrectScreen = (tab) => {
        switch (tab) {
            case "Delivery":
                return <Delivery />;

            case "Dining Out":
                return <DiningOut />;

            case "Night Life":
                return <NightLife />;

            default:
                return <Delivery />;
        }
    };

    return(
        <div>              
            <div className='sticky-top bg-white'>
                <div>
                    <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
            </div>
            <div>                
                {getCorrectScreen(activeTab)}
            </div> 
        </div>
    );
}

export default Home