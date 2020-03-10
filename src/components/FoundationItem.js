import React, {Component} from 'react';

class FoundationItem extends Component {
    constructor (props){
        super (props);
        this.state = {
            todos: ['Fundacja "Dbam o Zdrowie"', 'Fundacja "Dla dzieci"', 'Fundacja "Bez domu"', 'Fundacja "Lorem Ipsum 1"', 'Fundacja "Lorem Ipsum 2"', 'Fundacja "Lorem Ipsum 3"', 'Fundacja "Lorem Ipsum 4"', 'Fundacja "Lorem Ipsum 5"', 'Fundacja "Lorem Ipsum 6"'],
            currentPage: 1,
            foundationPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            currentPage: Number(e.target.id)
        });
    };


    render () {
        console.log(this.props.foundation.foundationItem[0]);
        const { todos, currentPage, foundationPerPage } = this.state;
        //pagination logic
        const indexOfLast = currentPage * foundationPerPage;
        const indexOfFirst = indexOfLast - foundationPerPage;
        const currentTodos = todos.slice(indexOfFirst, indexOfLast);
        const renderTodos = currentTodos.map((todo, i) => {
            return <li key={i}>{todo}</li>;
        });

        const pageNumber = [];
        for (let i=1; i<=Math.ceil(todos.length / foundationPerPage); i++) {
            pageNumber.push(i);
        }
        const renderPageNumber = pageNumber.map(number => {
            return (
                <li key={number} id ={number} onClick={this.handleClick}>{number}</li>
            );
        });

        return (
            <div>
                <ul>{renderTodos}</ul>
                <ul id="pageNumber">{renderPageNumber}</ul>

            </div>
        );
    };
}


export default FoundationItem;