import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const QuestionDashboard = () => {
    return (
        <div> 
            <div id="floating-button-height">      
                <Link to="/questions/new"
                    className="massive floated circular ui right floated teal icon button"
                    id="button-shadow">       
                    <i className="add icon"></i>
                </Link>
            </div>
        </div>
    )

}

export default QuestionDashboard

