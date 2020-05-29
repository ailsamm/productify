import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faPeopleArrows, faLaptopCode, faLaptopHouse, faTasks, faVideo, faMicrochip, faAd } from '@fortawesome/free-solid-svg-icons';
import './AboutPage.css';

export default class AboutPage extends Component {
    render(){
        return (
            <div className="aboutPage centeredContent">
                <div className="aboutPage__section aboutPage__section1">
                    <h2 className="aboutPage__sectionHeader">increase productivity, any time, anywhere</h2>
                    <div className="aboutPage__useCaseItems">
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem1">
                            <h5 className="aboutPage__useCaseItemName">Remote Work <FontAwesomeIcon className="aboutPage__icon" icon={faLaptopHouse}/></h5>
                        </div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem2">
                            <h5 className="aboutPage__useCaseItemName">Software Development <FontAwesomeIcon className="aboutPage__icon" icon={faLaptopCode}/></h5>
                        </div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem3">
                            <h5 className="aboutPage__useCaseItemName">HR <FontAwesomeIcon className="aboutPage__icon" icon={faPeopleArrows}/></h5>
                        </div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem4">
                            <h5 className="aboutPage__useCaseItemName">Product Management <FontAwesomeIcon className="aboutPage__icon" icon={faTasks}/></h5>
                        </div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem5">
                            <h5 className="aboutPage__useCaseItemName">Sales <FontAwesomeIcon className="aboutPage__icon" icon={faHeadset}/></h5>
                        </div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem6">
                            <h5 className="aboutPage__useCaseItemName">Media <FontAwesomeIcon className="aboutPage__icon" icon={faVideo}/></h5>
                        </div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem7">
                            <h5 className="aboutPage__useCaseItemName">IT <FontAwesomeIcon className="aboutPage__icon" icon={faMicrochip}/></h5>
                        </div>
                        <div className="aboutPage__useCaseItem aboutPage__useCaseItem8">
                            <h5 className="aboutPage__useCaseItemName">Marketing <FontAwesomeIcon className="aboutPage__icon" icon={faAd}/></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}