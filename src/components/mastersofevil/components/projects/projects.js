import React from 'react';
import Project from '../project/project';
import Loader from '../utils/loader';
import Error from '../utils/error';

import './projects.scss';

class Projects extends React.Component {

    constructor() {
        super();

        this.state = {
            isLoaded: false,
            result: {},
            error: null,
            search: '',
        };

        this.updateSearch = this.updateSearch.bind(this);

    }

    async componentDidMount() {

        fetch('/json/projects.json')
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        result: result,
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

    updateSearch(event) {

        this.setState({search: event.target.value});

    }

    render() {

        const {error, isLoaded, result} = this.state;
        let listOfProjects;

        if (error) {

            console.log(error.message);

            listOfProjects = <Error />;

        } else if (!isLoaded) {

            listOfProjects = <Loader />;
        } else {
            let filteredProjects = result.projects.filter((project) => {

                let searchKey = this.state.search.toLowerCase().replace(/ /g, '');
                console.log(searchKey);

                //  Check if tags exist
                if (project.tags) {

                    let wordHit = false;

                    //  Loop through tag categories
                    for (let category in project.tags) {
                        if (project.tags.hasOwnProperty(category)) {

                            //  Loop through each tag
                            for (let i = 0; i < project.tags[category].length; i++) {

                                //  Check for match
                                if (project.tags[category][i].toLowerCase().replace(/ /g, '').indexOf(searchKey) !== -1) {
                                    wordHit = true;
                                }
                            }
                        }
                    }

                    if (wordHit) {
                        return true;
                    }

                }

                //  Match on project name
                return project.name.toLowerCase().replace(/ /g, '').indexOf(searchKey) !== -1;
            });

            listOfProjects = filteredProjects.map(project => {

                return (
                    <Project key={project.id} project={project}/>
                );
            });
        }

        return (

            <div>
                <div className="projects">

                    <div className="row">
                        <div className="column small-12 large-6 large-offset-3 wrapper">

                            <input type="text" value={this.state.search} onChange={this.updateSearch} placeholder="Zoek op projectnaam of tags"/>
                            <img src="img/search.svg" className="search" alt=""/>

                        </div>
                    </div>

                    <div className="row">

                        {listOfProjects}

                    </div>
                </div>
            </div>

        );

    }

}

export default Projects