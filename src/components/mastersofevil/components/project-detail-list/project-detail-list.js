import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ServerLink from './server-link';
import Tag from './tag';

export default class ProjectDetailList extends Component {

    renderTags(tags) {

        return tags.map((tag, i) => {
            return (<Tag key={i} tag={tag}/>);
        });

    }

    renderUrls(urls) {

        return urls.map((url, i) => {
            return (<ServerLink key={i} url={url}/>);
        });

    }

    render() {

        return (

            <div className="row">
                <div className="column small-12 medium-4">
                    <img src={`/${this.props.result.logo}`} className="project-img" alt={this.props.result.name}/>
                </div>

                <div className="column small-12 medium-7 medium-offset-1">
                    <div className="info">
                        <h1>{this.props.result.name}</h1>
                        <h3 className="bold">Servernaam</h3>
                        <p>vps{this.props.result.server}</p>
                        <h3 className="bold">URLs</h3>
                        <div className="row">{this.renderUrls(this.props.result.urls)}</div>
                        <Link to={`/`} className="back">terug</Link>
                    </div>
                </div>

                <div className="column small-12">
                    <div className="tags">
                        <h3 className="bold">TAGS</h3>
                        <h3>Front-End</h3>
                        <div className="tags">
                            {this.renderTags(this.props.result.tags.frontend)}
                        </div>
                        <h3>Back-End</h3>
                        {this.renderTags(this.props.result.tags.backend)}
                    </div>
                </div>
            </div>

        );

    }

}
