import React from 'react'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './point.css'

export default props => {

    const renderIcons = () => {
        if (props.element.completed || props.element.actual) {
            return (
                <FontAwesomeIcon icon={ props.element.completed ? faCheck : faClock } />
            );
        } else {
            return;
        }
    };

    return(
        <div className="fade-in centralize-dot-text">
            <p className={"text-dot " + (props.element.completed ? "text-completed " : "text-uncompleted ") + (props.element.actual ? "text-actual" : "text-nactual") }>{props.element.text}</p>
            <div className={props.element.completed ? "dot-check" : props.element.actual ? "dot" : "dot-future"}>
                {renderIcons()}
            </div>
        </div>
    );
}