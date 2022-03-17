import React, {Component} from "react";


class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }
    
    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }
    
    ajoutTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }


    supprTodo(item){
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }


    actifbutton(){
        const tache = 'Pas fait';
    
    }

    renderTodo() {
        return this.state.items.map((item) =>{
            return(
                <div className="list-group-item" key={item}>
                    {item} <button className="btn btn-danger" onClick={this.supprTodo.bind(this, item) }>Delete</button>
                    <button className="btn btn-danger" onClick={this.actifbutton.bind(this)}>{tache}</button>
                </div>
            );
        } );
    }


    
    render() {
        return(
            <div>
                <h1 align="center">Todo-List</h1>
                <form className="form-row align-items-center">
                    <input value={this.state.userInput} type="text" placeholder="Chose à faire" onChange={this.onChange.bind(this)} className="form-control mb-2"/>
                    <button onClick={this.ajoutTodo.bind(this)} className="btn btn-primary">C'est parti</button>
                </form>
                <div className="list-group">{this.renderTodo()}</div>
            </div>
        );
    }
}

export default TodoList;