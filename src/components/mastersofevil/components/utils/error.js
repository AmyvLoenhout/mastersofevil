import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './error.scss';

export default class Error extends Component {

    render() {
        console.log(this.props);
        return (

            <div className="error">
                <div className="row">
                    <div className="small-12 large-6 large-offset-3">
                        <h1>404</h1>
                        <p>Helaas, deze pagina bestaat (nog) niet!</p>
                        <Link to={`/`} className="back-btn">TERUG NAAR HOME</Link>
                    </div>
                </div>
            </div>

        );

    }

}
