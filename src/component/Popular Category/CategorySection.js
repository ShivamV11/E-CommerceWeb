/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./CategorySection.css";
import card1 from "../../Assets/Cards/cat-1.png";
import card2 from "../../Assets/Cards/cat-2.png";
import card3 from "../../Assets/Cards/cat-3.png";
import card4 from "../../Assets/Cards/cat-4.png";
import card5 from "../../Assets/Cards/cat-5.png";
import card9 from "../../Assets/Cards/cat-9.png";
import card11 from "../../Assets/Cards/cat-11.png";
import card12 from "../../Assets/Cards/cat-12.png";
import card13 from "../../Assets/Cards/cat-13.png";
import card14 from "../../Assets/Cards/cat-14.png";





const CategorySection = () => {
    const Card = (props) => (
        <div className="card">
            <img src={props.imgUrl} alt={props.alt || 'Image'} />
            <div className="card-content">
                <h6>{props.title}</h6>
                <p>{props.content}</p>
            </div>
        </div>
    );

    const CardContainer = (props) => (
        <div className="cards-container">
            {props.cards.map((card) => (
                <Card key={card.id} title={card.title} content={card.content} imgUrl={card.imgUrl} />
            ))}
        </div>
    );

    const cardsData = [
        { id: 1, title: 'Cake & Milk', content: 'Clark Kent', imgUrl: card1 },
        { id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: card2 },
        { id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: card3 },
        { id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: card4 },
        { id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: card5 },
        { id: 6, title: 'CARD 6', content: 'Cake & Milk', imgUrl: card9 },
        { id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: card11 },
        { id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: card12 },
        { id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: card13 },
        { id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: card14 },
    ];

    return (
        <div className="container-fluid section-padding">
            <div className="section-title">
                <div className="title">
                    <h3>Featured Categories</h3>
                    <ul>
                        <li className="list-inline-item nav-item">
                            <a>Cake & Milk </a>
                        </li>
                        <li className="list-inline-item nav-item">
                            <a>Coffes & Teas </a>
                        </li>
                        <li className="list-inline-item nav-item">
                            <a>Pet foods </a>
                        </li>
                        <li className="list-inline-item nav-item">
                            <a>Vegetables </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fliud">
                
                <CardContainer cards={cardsData} />
            </div>
        </div>
    );
};

export default CategorySection;
