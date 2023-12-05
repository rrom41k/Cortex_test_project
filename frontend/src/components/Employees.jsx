import React from 'react';
import Employee from './Employee';
import { getPosts } from '../api';

class Employees extends React.Component {
    render() {
        if (this.props.employees.length > 0){
            return (
            <div>
                <h2>Сотрудники</h2>
                {this.props.employees.map((empl) => (
                    <Employee onDelete={this.props.onDelete} key={empl.id} empl={empl}/>
                ))}
            </div>)
        }
        else {
            return (
                <div className='employee'>
                    <h2>Сотрудники</h2>
                    <h3>Сотрудники нет</h3>
                </div>)
        }
    }
}

export default Employees