import React from 'react';
import { baseURL } from '../api/server';

export const Image = ({ image }) => (
  <div style={{ margin: '.0rem' }}>
    <img style={{ width: '1rem' }} src={`${baseURL}/${image}`} alt="developer profile" />
  </div>
);