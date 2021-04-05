import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }
    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (

            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addEmployee}> Add Employee </button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th bgcolor="#FF8C00" className="text-center"> Employee First Name</th>
                                <th bgcolor="#FF8C00" className="text-center"> Employee Last Name</th>
                                <th bgcolor="#FF8C00" className="text-center"> Employee Email Id</th>
                                <th bgcolor="#FF8C00" className="text-center"> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr bgcolor="#F0E68C" key={employee.id}>
                                            <td bgcolor="#F0E68C"> {employee.firstName} </td>
                                            <td bgcolor="#F0E68C"> {employee.lastName}</td>
                                            <td bgcolor="#F0E68C"> {employee.emailId}</td>
                                            <td bgcolor="#F0E68C" align="center">
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>

            </div>
        )
    }
}

export default ListEmployee