import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />,
  document.getElementById('root'));
// https://swapi.co/

/*fetch('https://swapi.co/api/people/1')// get promise
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((body) => {
    console.table(body);
  })*/



/*const getResource = async (url) => {
  console.log('starwo start')
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch` + `${res.status}`)
  }
  console.log(res);
  const body = await res.json();
  return body;
};

getResource('https://swapi.co/api/people/1цмц/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.log(err);
  });*/
