import React, { Component } from 'react';
import firebase from '../../firebase';

class Schoollist extends Component {

    state = {
        listOfSchools: []
    }

    componentDidMount() {
        const schoolsRef = firebase.database().ref('v100dev').child('registered_schools/2019-2020');
        schoolsRef.on('child_added', snapshot => {
            let school = snapshot.val();
            this.setState((prevState) => {
                return {
                    listOfSchools: [...prevState.listOfSchools, school]
                }
            })
        });
    }


    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-4 mt-5">
                    <h4>Registered Schools 2019-2020</h4>
                    <ul className="list-group">
                        {this.state.listOfSchools.map( school => <li className="list-group-item" key={school.name}>{school.name}</li>)}
                    </ul>
                </div>
                <div className="col-md-4 mt-5">
                    <h4>Paid Users</h4>
                </div>
            </div>
        );
    }
}

export default Schoollist;