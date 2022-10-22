import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // console.log(people);

  // After clicking the next/previous buttons, eventually, you will get to the end of the list of people.
  // In this case, there are only 4 people in the data array, and when you reach the end of the array and try to click next/previous,
  // you will get an error because there is no other person next in the array - there is no other index.

  // To solve this, we do this:
  // If the number is bigger than the last number of the array, then return 0.
  // If the number is less than 0, then return the last item in the array.
  const checkNumber = (number) => {
    // Last number in the array:
    if (number > people.length - 1) {
      return 0;
    }
    // If the number is less than 0, return the last item of the array
    if (number < 0) {
      return people.length - 1;
    }
    // If the number is neither of these two cases, then simply return the number
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>surprise me</button>
    </article>
  );
};

export default Review;
