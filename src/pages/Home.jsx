import React from 'react';
import requests from '../Requests';
import Main from '../components/Main';
import Row from '../components/Row';

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='2' title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row rowID='3' title='Horror' fetchURL={requests.requestHorror} />
      <Row rowID='4' title='Thriller' fetchURL={requests.requestThriller} />
      <Row rowID='5' title='Mystery' fetchURL={requests.requestMystery} />
      <Row rowID='6' title='Western' fetchURL={requests.requestWestern} />
      <Row rowID='7' title='Romance' fetchURL={requests.requestRomance} />
      <Row rowID='8' title='Fantasy' fetchURL={requests.requestFantasy} />
      <Row rowID='9' title='Science Fiction' fetchURL={requests.requestScienceFiction} />
    </div>
  );
}

export default Home;