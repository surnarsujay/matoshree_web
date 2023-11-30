import React, { useState, useEffect } from "react";
import "../css/Slider.css";
import data from "../data";
import Card from 'react-bootstrap/Card';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 90000);


    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (

    <Card style={{ marginTop: '20px',background:"whitesmoke" }}>
    <Card.Body>
    <section className="section">
      <div className="title" >
        <h2>Our Leaders</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
            <GrPrevious/>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        <GrNext/>

        </button>
      </div>
    </section>
    </Card.Body>
  </Card>

  );
};

export default Slider;
