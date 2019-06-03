import React, {Component} from 'react';

export default class ServerLink extends Component {

    render() {

        return (

            <div className="column small-12 medium-6">
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.url}</a>
            </div>

        );

    }

}
