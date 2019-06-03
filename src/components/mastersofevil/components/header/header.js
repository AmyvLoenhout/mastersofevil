import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

export default class Header extends Component {

    render() {

        return (

            <div>
                <header className="spacing">
                    <div class="image">
                        <Link to={`/`}><img src='/img/logo.svg' alt='masters-of-evil'/></Link>
                    </div>
                </header>
            </div>

        );

    }

}