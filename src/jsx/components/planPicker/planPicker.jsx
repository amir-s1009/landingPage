import './planPicker.css';

import {ToggleButton} from '..';

export default function PlanPicker({plan, setPlan}){
    return(
        <div className='pickerContainer'>
            <span style={{color:`${plan === 'monthly'?'violet':'black'}`}}>Monthly Plan</span>
            <ToggleButton plan={plan} setPlan={setPlan} />
            <span style={{color:`${plan === 'monthly'?'black':'violet'}`}}>Yearly Plan</span>
        </div>
    )
}