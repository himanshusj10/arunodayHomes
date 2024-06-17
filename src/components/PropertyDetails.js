import React from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../data';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  return (
    <div className="property-details">
      <h1>{property.name}</h1>
      <img src={property.imageUrl} alt={property.name} />
      <p>{property.location}</p>
      <p>{property.price}</p>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetails;
