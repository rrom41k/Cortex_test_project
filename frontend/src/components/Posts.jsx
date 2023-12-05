import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    render (){
        if (this.props.posts.length > 0){
            return (
            <div>
                <h2>Должности</h2>
                {this.props.posts.map((post) => (
                    <Post onDelete={this.props.onDelete} key={post.id} post={post}/>
                ))}
            </div>)
        }
        else {
            return (
                <div className='post'>
                    <h2>Должности</h2>
                    <h3>Должностей нет</h3>
                </div>)
        }
    }
}

export default Posts