import './planContainer.css';

import {PlanPicker} from '../../components';
import {PriceCards} from '..';
import { useCallback, useState } from 'react';

import {plans} from '../../../data/plans';

export default function PlanContainer(){

    const [plan, setPlan] = useState("monthly"); // monthly or yearly

    function filterPlans(){
        if(plan === 'monthly')
            return plans.filter(plan => plan.period === 1);
        else if(plan === 'yearly')
            return plans.filter(plan => plan.period === 12);

    }

    const filterPlansCallback = useCallback(() => filterPlans(), [plan, plans]);

    return(
        <div className='planContainer'>
            <PlanPicker plan={plan} setPlan={setPlan} />
            <PriceCards data={filterPlansCallback()} />
        </div>
    )
}