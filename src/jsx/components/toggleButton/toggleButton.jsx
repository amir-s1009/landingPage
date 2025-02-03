import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './toggleButton.css';

export default function ToggleButton({plan, setPlan}){

    const buttonRef =  useRef();

    useEffect(()=>{
        buttonRef.current.style.left = plan === 'monthly'?'0px':'unset';
        buttonRef.current.style.right = plan === 'monthly'?'unset':'0px';
    }, [plan]);

    function handleToggle(){
        if(plan === 'monthly')
            setPlan('yearly');
        else if(plan === 'yearly')
            setPlan('monthly');
    }

    return(
        <div onClick={handleToggle} className='toggleContainer'>
            <div ref={buttonRef} className='toggleButton'></div>
        </div>
    )
}

/*
<CSSTransition nodeRef={buttonRef} in={true} timeout={400} classNames={{enterDone:'butten-toggle-done'}}>
                <div ref={buttonRef} onClick={handleToggle} className='toggleButton'></div>
            </CSSTransition>*/