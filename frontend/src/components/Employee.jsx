import React from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import { getPostId } from '../api';
import UpdateEmployeeForm from './UpdateEmployeeForm';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false,
            post: {
                id: '',
                name: '',
                description: '',
            }
        };       
        getPostId(this.props.empl.post).then((req) => {
            this.setState({ post: req });
            console.log(req);
        });
    }
    empl = this.props.empl;
    render() {
        return (
            <div className='employee'>
                <IoCloseCircleSharp className="delete-icon"
                onClick={() => this.props.onDelete(this.empl.id)}/>
                <IoHammerSharp className='edit-icon' 
                onClick={() => {this.setState({
                    editForm: !this.state.editForm
                    })}
                }/>
                <h3>{this.empl.surname} {this.empl.name} {this.empl.patronymic}</h3>
                <p>{this.state.post.name}</p>
                {this.state.editForm ? <UpdateEmployeeForm empl={this.empl} /> : null}
            </div>
        )   
    }
}

export default Employee