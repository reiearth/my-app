import React from 'react';


export default function Results({ results }) {
  return (
  <div>
   {results.map((result) => (
     <h1 key={result.key}>{result.title}</h1>
   ))}
  </div>
  );
}
