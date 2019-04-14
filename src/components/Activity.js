import React, {Component} from 'react';
import ActivityNavbar from "../layout/ActivityNavbar";

class Activity extends Component {
    render() {
        return (
            <div>
            <ActivityNavbar/>
            <div className="container">
                <h3 className="text-black col-sm-12 text-center pt-5 ">(7+7) [(1/7) +7]</h3>
                <h3 className="text-info col-sm-12 text-center">= 100</h3>
            </div>
            </div>
        );
    }
}

export default Activity;