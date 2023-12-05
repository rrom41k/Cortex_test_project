import React from 'react';
import Header from './components/Header'
import Employees from './components/Employees';
import Posts from './components/Posts'
import CreatePostForm from './components/CreatePostForm';
import CreateEmployeeForm from './components/CreateEmployeeForm';
import { getPosts, updatePost, deletePost, createPost,
getEmployee, createEmployee, updateEmployee, deleteEmployee} from './api'; // Подставьте правильный путь


class App extends React.Component {
    constructor(props){
        super(props)

        getPosts().then((req) => {
            // Обрабатываем полученные данные
            this.setState({posts: req});
            console.log(req)
        })
        
        getEmployee().then((req) => {
            // Обрабатываем полученные данные
            this.setState({employees: req});
            console.log(req)
        })

        this.state = {
            posts: [],
            employees: []
        }
        this.addPost = this.addPost.bind(this)
        this.deletePostWeb = this.deletePostWeb.bind(this)
        this.addEmployee = this.addEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }
    render() {
        return (
        <div className='name'>
            <Header title="Список сотрудников и должностей"/>
            <main>
                <div className="table-container">
                    <div className="column">
                        <Employees employees={this.state.employees} 
                        onDelete={this.deleteEmployee} />
                    </div>
                    <div className="column">
                        <Posts posts={this.state.posts} 
                        onDelete={this.deletePostWeb} />
                    </div>
                </div>
            </main>
            <aside>
                <h2>Добавить сотрудника</h2>
                <CreateEmployeeForm />
                <h2>Добавить должность</h2>
                <CreatePostForm onAddPost={this.addPost} />
            </aside>
        </div>
        );
    }

    addPost(post) {
        createPost(post).then((createdPost) => {
            if (createdPost) {
            // Обновление состояния posts после успешного создания поста
            getPosts().then((updatedPosts) => {
                this.setState({ posts: updatedPosts });
            });
            }
        });
    }

    deletePostWeb(id) {
        deletePost(id)
        console.log(this.state.posts)
    }

    addEmployee(employee) {
        const id = this.state.employees.length + 1
        this.setState({ employees: [...this.state.employees, {id, ...employee}]})
        console.log(this.state.employees)
    }

    deleteEmployee(id) {
        console.log(id)
        deleteEmployee(id)
        this.setState({ employees: this.state.employees.filter((employee) => employee.id !== id)})
        console.log(this.state.employees)
    }
}

export default App