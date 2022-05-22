import {
  faArrowTrendUp,
  faPeopleLine,
  faStar,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <div>
      <div className="business-summary">
        <div className="bs">
          <div className="bs-icon">
            <FontAwesomeIcon icon={faPeopleLine}></FontAwesomeIcon>
          </div>
          <h4 className="text-center">3k+ customers</h4>
        </div>
        <div className="bs">
          <div className="bs-icon">
            <FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>
          </div>
          <h4 className="text-center">5M+ Annual revenue</h4>
        </div>
        <div className="bs">
          <div className="bs-icon">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
          <h4 className="text-center">2.5K+ Reviews</h4>
        </div>
        <div className="bs">
          <div className="bs-icon">
            <FontAwesomeIcon icon={faTools}></FontAwesomeIcon>
          </div>
          <h4 className="text-center">200+ tools</h4>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
