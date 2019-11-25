import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeCard from '../employee/EmployeeCard'

class LocationWithEmployees extends Component {
    state = {
        locationList: {},
        employees: []
    }

    componentDidMount() {
        //got here now make call to get employee with animal
        LocationManager.getWithEmployees(this.props.match.params.locationId)
            .then((APIResult) => {
                this.setState({
                    locationList: APIResult,
                    employees: APIResult.employees,
                })
            })
    }

    render() {
        return (
            <div className="card">
                <p>Location: {this.state.locationList.name}</p>
                {this.state.employees.map(employee =>
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        {...this.props}
                    />
                )}
            </div>
        )
    }
}

export default LocationWithEmployees;