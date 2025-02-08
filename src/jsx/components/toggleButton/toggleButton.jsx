import './toggleButton.css';

export default function ToggleButton({plan, setPlan}){

    function handleToggle(){
        if(plan === 'monthly')
            setPlan('yearly');
        else if(plan === 'yearly')
            setPlan('monthly');
    }

    return(
        <div onClick={handleToggle} className='toggleContainer'>
            <div style={{transform:plan === "monthly"?'translateX(0px)':'translateX(100%)'}} className='toggleButton'></div>
        </div>
    )
}

/*
<CSSTransition nodeRef={buttonRef} in={true} timeout={400} classNames={{enterDone:'butten-toggle-done'}}>
                <div ref={buttonRef} onClick={handleToggle} className='toggleButton'></div>
            </CSSTransition>*/