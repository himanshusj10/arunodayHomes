import React from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data';

const PropertyList = () => (
  <div>
    <h1>Properties</h1>
    <ul>
      {properties.map(property => (
        <li key={property.id}>
          <Link to={`/property/${property.id}`}>
            <img src={property.imageUrl} alt={property.name} />
            <h2>{property.name}</h2>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default PropertyList;
