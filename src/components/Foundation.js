import React, {Component} from 'react';
import Decoration from '../assets/Decoration.svg';
import FoundationItem from './FoundationItem';

const foundationList = [
    {
        id: 1,
        name: 'Fundacjom',
        des: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
        foundationItem: [
            ['Fundacja "Dbam o Zdrowie"', 'Fundacja "Dla dzieci"', 'Fundacja "Bez domu"', 'Fundacja "Lorem Ipsum 1"', 'Fundacja "Lorem Ipsum 2"', 'Fundacja "Lorem Ipsum 3"', 'Fundacja "Lorem Ipsum 4"', 'Fundacja "Lorem Ipsum 5"', 'Fundacja "Lorem Ipsum 6"'],
            ['Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', 'Cel i misja: Pomoc dzieciom z ubogich rodzin.', 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.', 'Cel i misja: Nunc ultricies, orci a faucibus feugiat, massa felis venenatis ante.', 'Cel i misja: ipsum mattis augue, a fermentum sem.', 'Cel i misja: Cras tempor dolor nec magna interdum convallis.', 'Cel i misja: Nunc a faucibus feugiat, massa felis venenatis ante.', 'Cel i misja: mattis augue, a fermentum sem.', 'Cel i misja: Cras interdum convallis.'],
            ['ubrania, jedzenie, sprzęt AGD, meble, zabawki', 'ubrania, meble, zabawki', 'ubrania, jedzenie, ciepłe koce', 'nec, gravida eget nisl', 'risus, nec iaculis erat', 'lobortis pretium urna a luctus', 'nec, gravida', 'risus, nec iaculis', 'lum urna a luctus']
        ],
    },
    {
        id: 2,
        name: 'Organizacjom pozarządowym',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tempus ipsum. Sed condimentum malesuada dapibus. Fusce pellentesque ullamcorper magna.',
        foundationItem: [
            ['Fundacja "Lorem Ipsum 1"', 'Fundacja "Lorem Ipsum 2"', 'Fundacja "Lorem Ipsum 3"', 'Fundacja "Lorem Ipsum 4"', 'Fundacja "Lorem Ipsum 5"', 'Fundacja "Lorem Ipsum 6"'],
            ['Cel i misja: Nunc ultricies, orci a faucibus feugiat, massa felis venenatis ante.', 'Cel i misja: ipsum mattis augue, a fermentum sem.', 'Cel i misja: Cras tempor dolor nec magna interdum convallis.', 'Cel i misja: Nunc a faucibus feugiat, massa felis venenatis ante.', 'Cel i misja: mattis augue, a fermentum sem.', 'Cel i misja: Cras interdum convallis.'],
            ['nec, gravida eget nisl', 'risus, nec iaculis erat', 'lobortis pretium urna a luctus', 'nec, gravida', 'risus, nec iaculis', 'lum urna a luctus']
        ],
    },
    {
        id: 3,
        name: 'Lokalnym zbiórkom',
        des: 'Integer vel velit in mi molestie finibus. Cras tempor dolor nec magna interdum convallis. Suspendisse nec est aliquet, sagittis arcu posuere, varius lacus.',
        foundationItem: [
            ['Fundacja "Lorem Ipsum 4"', 'Fundacja "Lorem Ipsum 5"', 'Fundacja "Lorem Ipsum 6"'],
            ['Cel i misja: Nunc a faucibus feugiat, massa felis venenatis ante.', 'Cel i misja: mattis augue, a fermentum sem.', 'Cel i misja: Cras interdum convallis.'],
            ['nec, gravida', 'risus, nec iaculis', 'lum urna a luctus']
        ],
    }
];


class Foundation extends Component {
    constructor (props){
        super (props);
        this.state = {
            currentFoundation: 0,
            foundations: foundationList,
//             todos: [this.state.foundations[this.state.currentFoundation].foundationItem[0]],
//             currentPage: 1,
//             foundationPerPage: 3
        };
//         this.handleClick = this.handleClick.bind(this);
    }

//     handleClick(e) {
//         this.setState({
//             currentPage: Number(e.target.id)
//         });
//     };

    handleChangePage = (i) => {
        this.setState({
            currentFoundation: (i)
        });
    };

    render () {
//     console.log(...this.state.foundations[this.state.currentFoundation].foundationItem[0]);
//         const { todos, currentPage, foundationPerPage } = this.state;
//         //pagination logic
//         const indexOfLast = currentPage * foundationPerPage;
//         const indexOfFirst = indexOfLast - foundationPerPage;
//         const currentTodos = todos.slice(indexOfFirst, indexOfLast);
//         const renderTodos = currentTodos.map((todo, i) => {
//             return <li key={i}>{todo}</li>;
//         });
//
//         const pageNumber = [];
//         for (let i=1; i<=Math.ceil(todos.length / foundationPerPage); i++) {
//             pageNumber.push(i);
//         }
//         const renderPageNumber = pageNumber.map(number => {
//             return (
//                 <li key={number} id ={number} onClick={this.handleClick}>{number}</li>
//             );
//         });

        return (
            <div>
                <h2>Komu pomagamy?</h2>
                <img src={Decoration} alt="decoration"/>
                <div>
                    {this.state.foundations.map((e, i)=> <button key={e.id} onClick={()=> this.handleChangePage(i)} >{e.name}</button>)}
                </div>
                <FoundationItem foundation={{...this.state.foundations[this.state.currentFoundation]}} />
{/*                 <p>{{...this.state.foundations[this.state.currentFoundation]}.des}</p> */}
{/*                 <p>{{...this.state.foundations[this.state.currentFoundation]}.foundationItem[0]}</p> */}
{/*                 <ul>{renderTodos}</ul> */}
{/*                 <ul id="pageNumber">{renderPageNumber}</ul> */}

            </div>
        );
    };
}

export default Foundation;