import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import WhatIsGoingOn from "./WhatIsGoingOn";
import AboutUs from "./AboutUs";
import Foundation from "./Foundation";
import Contact from "./Contact";

// const foundationList = [
//     {
//         id: 1,
//         name: 'Fundacjom',
//         des: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
//         foundationItem: [
//             ['Fundacja "Dbam o Zdrowie"', 'Fundacja "Dla dzieci"', 'Fundacja "Bez domu"'],
//             ['Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', 'Cel i misja: Pomoc dzieciom z ubogich rodzin.', 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.'],
//             ['ubrania, jedzenie, sprzęt AGD, meble, zabawki', 'ubrania, meble, zabawki', 'ubrania, jedzenie, ciepłe koce']
//         ],
//     },
//     {
//         id: 2,
//         name: 'Organizacjom pozarządowym',
//         des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tempus ipsum. Sed condimentum malesuada dapibus. Fusce pellentesque ullamcorper magna.',
//         foundationItem: [
//             ['Fundacja "Lorem Ipsum 1"', 'Fundacja "Lorem Ipsum 2"', 'Fundacja "Lorem Ipsum 3"'],
//             ['Cel i misja: Nunc ultricies, orci a faucibus feugiat, massa felis venenatis ante.', 'Cel i misja: ipsum mattis augue, a fermentum sem.', 'Cel i misja: Cras tempor dolor nec magna interdum convallis.'],
//             ['nec, gravida eget nisl', 'risus, nec iaculis erat', 'lobortis pretium urna a luctus']
//         ],
//     },
//     {
//         id: 3,
//         name: 'Lokalnym zbiórkom',
//         des: 'Integer vel velit in mi molestie finibus. Cras tempor dolor nec magna interdum convallis. Suspendisse nec est aliquet, sagittis arcu posuere, varius lacus.',
//         foundationItem: [
//             ['Fundacja "Lorem Ipsum 4"', 'Fundacja "Lorem Ipsum 5"', 'Fundacja "Lorem Ipsum 6"'],
//             ['Cel i misja: Nunc a faucibus feugiat, massa felis venenatis ante.', 'Cel i misja: mattis augue, a fermentum sem.', 'Cel i misja: Cras interdum convallis.'],
//             ['nec, gravida', 'risus, nec iaculis', 'lum urna a luctus']
//         ],
//     }
// ];

const Home = () => {
    // const [foundations, setFoundations] = useState(foundationList);
    // const [currentPage, setCurrentPage] = useState(0);
    //


    return (
        <div>
            <HomeHeader title="Start" dark={true} id="start"/>
            <HomeThreeColumns />
            <WhatIsGoingOn title="whatIsGoingOn" dark={true} id="whatIsGoingOn"/>
            <AboutUs title="aboutUs" dark={true} id="aboutUs"/>
            <Foundation title="Foundation" dark={true} id="foundation"/>
                <Contact title="Start" dark={true} id="start"/>


        </div>
    );
};

export default Home;