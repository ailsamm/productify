import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faPeopleArrows, faLaptopCode, faLaptopHouse, faTasks, faVideo, faMicrochip, faAd } from '@fortawesome/free-solid-svg-icons';
import './AboutPage.css';

export default class AboutPage extends Component {
    render(){
        return (
            <div className="aboutPage centeredContent">
                <div className="aboutPage__section aboutPage__section1">
                    <h2>increase productivity, any time, anywhere</h2>
                    <div className="aboutPage__useCaseItems">
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem1"><h5 className="aboutPage__useCaseItemName">Remote Work</h5><FontAwesomeIcon className="aboutPage__icon" icon={faLaptopHouse}/></div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem2"><h5 className="aboutPage__useCaseItemName">Software Development</h5><FontAwesomeIcon className="aboutPage__icon" icon={faLaptopCode}/></div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem3"><h5 className="aboutPage__useCaseItemName">HR</h5><FontAwesomeIcon className="aboutPage__icon" icon={faPeopleArrows}/></div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem4"><h5 className="aboutPage__useCaseItemName">Product Management</h5><FontAwesomeIcon className="aboutPage__icon" icon={faTasks}/></div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem5"><h5 className="aboutPage__useCaseItemName">Sales</h5><FontAwesomeIcon className="aboutPage__icon" icon={faHeadset}/></div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem6"><h5 className="aboutPage__useCaseItemName">Media</h5><FontAwesomeIcon className="aboutPage__icon" icon={faVideo}/></div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem7"><h5 className="aboutPage__useCaseItemName">IT</h5><FontAwesomeIcon className="aboutPage__icon" icon={faMicrochip}/></div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem8"><h5 className="aboutPage__useCaseItemName">Marketing</h5><FontAwesomeIcon className="aboutPage__icon" icon={faAd}/></div>
                    </div>
                </div>
            </div>
        )
    }
}