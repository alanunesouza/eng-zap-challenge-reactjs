import React, { useEffect, useState } from 'react';
import PropTypes, { object } from 'prop-types';
import Carousel from 'react-images';
import { Link } from 'react-router-dom';

import { Container, Card, Button } from './styles';
import formatTitle from '~/helpers/formatTitle';

export default function List({ portalSelected, portalName }) {
  const [properties, setProperties] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const propertiesFormatted = [...portalSelected];
    propertiesFormatted.forEach(property => {
      const newImages = [];
      property.images.forEach(image => {
        newImages.push(image.src ? image : { src: image });
      });
      property.images = newImages;
    });

    setProperties(propertiesFormatted);
  }, [portalSelected]);

  const FooterCount = () => <div />;

  return (
    <Container>
      {properties !== [] &&
        properties.map(
          (property, index) =>
            index < limit && (
              <Card key={property.id} portalName={portalName}>
                <h1>{formatTitle(property)}</h1>

                <Carousel
                  components={{ FooterCount }}
                  views={property.images}
                />

                <Link
                  to={{
                    pathname: '/details',
                    state: { property },
                  }}
                >
                  mais detalhes
                </Link>
              </Card>
            )
        )}

      {properties.length > 1 && limit <= properties.length && (
        <Button onClick={() => setLimit(limit + 20)}>ver mais</Button>
      )}
    </Container>
  );
}

List.propTypes = {
  portalSelected: PropTypes.arrayOf(object).isRequired,
  portalName: PropTypes.string.isRequired,
};
