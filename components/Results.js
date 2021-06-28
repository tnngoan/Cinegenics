import React from "react";
import ThumbNail from "../components/ThumbNail";
import FlipMove from 'react-flip-move';

export default function Results({results}) {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify center'>
      {results.map((result) => (
        <ThumbNail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}
