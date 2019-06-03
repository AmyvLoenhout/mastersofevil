import React, {Component} from 'react';
import ProjectDetailList from './../project-detail-list/project-detail-list';
import Error from './../utils/error';

import './project-detail.scss';

export default class projectDetail extends Component {

    constructor() {
        super();

        this.state = {
            isLoaded: false,
            result: {},
            error: null,
        };

    }

    async componentDidMount() {

        fetch('/json/projects.json')
            .then(result => result.json())
            .then((result) => {
                    const projectId = this.props.match.params.id;
                    const project = result.projects.filter((item) => {

                        return (item.id === parseInt(projectId) ? item : null);
                    });

                    this.setState({
                        isLoaded: true,
                        result: project,
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );

    }

    render() {

        const {error, isLoaded, result} = this.state;
        let content;

        if (error) {

            content = '<div>Error: {error.message}</div>';
        } else if (!isLoaded) {

            content = 'Loading...';
        } else {

            if (result[0]) {

                content = <ProjectDetailList result={result[0]}/>;
            } else {

                content = <Error />;
            }

        }

        return (

            <div className="container">

                {content}

            </div>

        );

    }

}
