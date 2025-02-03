import './header.css';

import {Logo, Button} from '../../components';
import {Navigator} from '..';

export default function Header(){
    return(
        <div className='header'>
            <Logo text='WebPro'/>
            <Navigator />
            <Button text='Sign In' isPrimary={true} width='150px'/>
        </div>
    )
}