import './priceCard.css';

import {Button} from '..';
import { useEffect, useState } from 'react';

export default function PriceCard({period, type, price, slug, features, isPrimary}){

    const [opacity, setOpacity] = useState(0);

    useEffect(()=>{
        setOpacity(1);

        //return ()=> setOpacity(0);
    }, [])

    return(
        isPrimary?
        <div style={{opacity}} className='card primary-card'>
            
            <h2 className='type'>{type}</h2>
            {
                price === 0?
                <h3 className='price'>Free</h3>:
                <div className='priceContainer'><h3 className='price'>${price}</h3><span>/{period === 1?'month':'year'}</span></div>
            }
            <p className='slug'>{slug}</p>
            <div style={{backgroundColor:"whitesmoke"}} className='splitter'></div>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}/>)
            }
            <Button isPrimary={false} text={type === 'Business'?'Contact Us':'start 7 day free trial'} />
        </div>
        :
        <div style={{opacity}} className='card secondary-card'>
            
            <h2 className='type'>{type}</h2>
            {
                price === 0?
                <h3 className='price'>Free</h3>:
                <div className='priceContainer'><h3 className='price'>${price}</h3><span>/{period === 1?'month':'year'}</span></div>
            }
            <p className='slug' style={{color:"grey"}}>{slug}</p>
            <div style={{backgroundColor:"lightgrey"}} className='splitter'></div>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}/>)
            }
            <Button isPrimary={true} text={type === 'Bussiness'?'Contact Us':'start 7 day free trial'} />
        </div>
    )
}

function Feature({feature}){
    return(
        <p className='feature'>{feature}</p>
    )
}