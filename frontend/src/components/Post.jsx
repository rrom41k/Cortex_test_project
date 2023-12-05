import React from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import UpdatePostForm from './UpdatePostForm'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    post = this.props.post
    render (){
        return (
            <div className='post'>
                <IoCloseCircleSharp className="delete-icon"
                onClick={() => this.props.onDelete(this.post.id)}/>
                <IoHammerSharp className='edit-icon'
                onClick={() => {this.setState({
                    editForm: !this.state.editForm
                })}}/>
                <h3>{this.post.name}</h3>
                <p>{this.post.description}</p>
                {this.state.editForm ? <UpdatePostForm post={this.post} /> : null}
            </div>
        )   
    }
}

export default Post