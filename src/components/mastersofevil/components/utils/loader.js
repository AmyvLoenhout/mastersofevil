import React, {Component} from 'react';

import './loader.scss'

export default class Loader extends Component {

    render() {

        return (

            <div className="column small-12 large-6 large-offset-3">
                <div className="loader">
                    De projecten zijn nog aan het laden...
                </div>
            </div>

        );

    }

}
