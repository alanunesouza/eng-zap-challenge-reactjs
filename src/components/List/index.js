import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-images';

import { Container, Card, Content, Image } from './styles';

export default function List({ portalSelected, portalName }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const propertiesFormatted = [...portalSelected];
    propertiesFormatted.forEach(property => {
      const newImages = [];
      property.images.forEach(image => {
        newImages.push({ src: image });
      });
      property.images = newImages;
    });

    setProperties(propertiesFormatted);
  }, [portalSelected]);

  const formatTitle = property => {
    let title = 'Apartamento para ';

    if (property.pricingInfos.businessType === 'SALE') {
      title += 'Venda';
    } else {
      title += 'Aluguel';
    }

    return title;
  };

  const FooterCount = () => <div />;

  return (
    <Container>
      {properties !== [] &&
        properties.map((property, index) => (
          <Card key={property.id} portalName={portalName}>
            <h1>{formatTitle(property)}</h1>
            <Carousel components={{ FooterCount }} views={property.images} />
            <a>mais detalhes</a>
            {/* {property.images.map(image => (
                    <Image>
                      <img src={image} alt={image} />
                    </Image>
                  ))}
                </Carousel> */}
            {/* <Content>
              <h1>{formatTitle(property)}</h1>

              <span>Deta</span>

              {render}

              {property.bedrooms >= 1 && (
                <span>
                  {property.bedrooms}
                  {property.bedrooms > 1 ? ' vagas' : ' vaga'}
                </span>
              )}

              {property.parkingSpaces >= 1 && (
                <span>
                  {property.parkingSpaces}
                  {property.parkingSpaces > 1 ? ' vagas' : ' vaga'}
                </span>
              )}

            </Content> */}
          </Card>
        ))}
    </Container>
  );
}

List.protoTypes = {
  portalSelected: PropTypes.array.isRequired,
};
