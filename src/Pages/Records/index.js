import React, { Component } from 'react';
import axios from 'axios';
import StaffTable from './data'
import './styles.css'

export default class Records extends Component {
    constructor(props) {
        super(props);
        this.state = { staffMembers: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/staff')
            .then(res => {
                this.setState({ staffMembers: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    staffTable() {
        return this.state.staffMembers.map((data, i) => {
            return <StaffTable obj={data} key={i} />;
        });
    }
    render() {
        return (
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Comment</td>
                                <td>Time</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.staffTable()}
                        </tbody>
                    </table>
        )
    }
}