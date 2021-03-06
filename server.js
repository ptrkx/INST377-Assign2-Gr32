// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('design'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.route('/index')
  .get((req, res) => {
    console.log('GET request detected');
    //test get data, don't forget "asynch(req, res)"!
    /*const data = await fetch("https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json"); //lab7
    const dataj = await data.json();*/
    // console.log("fetch request data", dataj);//lab7
  })
  .post((req, res) => {
    console.log('POST request detected');
    /*const data = await fetch("https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json");
    const dataj = await data.json();*/
    // console.log("fetch request data", dataj);
    //res.json(dataj);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
