import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import { Container, Card } from './styles';

export default function List({ portalSelected }) {
  return (
    <Container>
      {portalSelected !== [] &&
        portalSelected.map(property => (
          <Card key={property.id}>
            <img src={property.images[0]} />
            {/* <Carousel centerMode>
              {property.images.map(image => (
                <div>
                  <img src={image} alt={image} />
                </div>
              ))}
            </Carousel> */}
            {/* <Content>
              <h1>{property.pricingInfos.price}</h1>
            </Content> */}
          </Card>
        ))}
    </Container>
  );
}

List.protoTypes = {
  portalSelected: PropTypes.array.isRequired,
};
