import _ from 'lodash';
import "./styles.css";
import './apiHandler.js';
import  { nextGif } from './apiHandler.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

