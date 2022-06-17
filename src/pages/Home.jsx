import React from 'react';
import requests from '../Requests';
import Main from '../components/Main';
import Row from '../components/Row';

const Home = () => {
  return (
    <div>
      <Main />
      <Row title='Popular' fetchURL={requests.requestPopular} />
      <Row title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row title='Horror' fetchURL={requests.requestHorror} />
      <Row title='Thriller' fetchURL={requests.requestThriller} />
      <Row title='Mystery' fetchURL={requests.requestMystery} />
      <Row title='Western' fetchURL={requests.requestWestern} />
      <Row title='Romance' fetchURL={requests.requestRomance} />
      <Row title='Fantasy' fetchURL={requests.requestFantasy} />
      <Row title='Science Fiction' fetchURL={requests.requestScienceFiction} />
    </div>
  );
}

export default Home;