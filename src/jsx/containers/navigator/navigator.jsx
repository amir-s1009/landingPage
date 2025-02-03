import './navigator.css';

import {NavButton} from '../../components';

export default function Navigator(){
    return(
        <div>
            <NavButton text='Products' />
            <NavButton text='Pricing' />
            <NavButton text='Partners' />
            <NavButton text='Company' />
        </div>
    )
}