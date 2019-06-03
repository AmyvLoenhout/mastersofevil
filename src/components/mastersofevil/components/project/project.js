import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './project.scss';

export default class Project extends Component {

    render() {

        return (

            <div className="column small-12 medium-6 large-3">
                <Link to={`project/${this.props.project.id}`} className="project">
                    <img src={this.props.project.logo} className="project-img" alt={this.props.project.name}/>
                    <div className="more-info">more info</div>
                </Link>
            </div>

        );

    }

}