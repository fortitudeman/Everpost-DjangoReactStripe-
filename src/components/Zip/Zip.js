import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import './Zip.css';

class Zip extends Component {
    constructor (props) {
        super(props);
        this.state = { country: '' };
    }

    selectCountry (val) {
        this.setState({ country: val });
    }

    render () {
        const { country } = this.state;
        return (
            <div className="form-group country-selector">
                <label htmlFor="country">Country or region</label>
                <table className="zip-table">
                    <tbody>
                        <tr>
                            <td>
                                <CountryDropdown
                                    value={country}
                                    onChange={(val) => this.selectCountry(val)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" name="zip" className="zip" placeholder="ZIP"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                
            </div>
        );
    }
}

export default Zip;