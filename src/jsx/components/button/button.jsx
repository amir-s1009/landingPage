import './button.css';

export default function Button({text, isPrimary, width}){
    return(
        isPrimary?
        <button style={{width:width}} className="button primary-btn">{text}</button>:
        <button style={{width:width}} className="button secondary-btn">{text}</button>
    )
}