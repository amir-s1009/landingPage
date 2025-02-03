import './priceCards.css';

import {PriceCard} from '../../components';

export default function PriceCards({data}){
    return(
        <div className='priceCards'>
            {
                data.map((data, index) => {
                    return <PriceCard key={index} period={data.period} type={data.type} price={data.price} slug={data.slug} features={data.features} isPrimary={data.type === 'Business'}/>
                })
            }
        </div>
    )
}