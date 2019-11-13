import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Link } from 'react-router-dom';

import { Container, Card, Button } from './styles';

export default function List({ portalSelected, portalName }) {
  const [properties, setProperties] = useState([]);
  const [modalIsOpen, toggleModal] = useState(false);
  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(20);
  const [imagesSelected, setImagesSelected] = useState([]);

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
        properties.map(
          (property, index) =>
            index < limit && (
              <Card key={property.id} portalName={portalName}>
                <h1>{formatTitle(property)}</h1>
                <Carousel
                  components={{ FooterCount }}
                  views={property.images}
                />

                <Link to={`/details/${property.id}`}>mais detalhes</Link>
              </Card>
            )
        )}

      {console.log(limit, properties.length)}

      {properties.length > 1 && limit <= properties.length && (
        <Button onClick={() => setLimit(limit + 20)}>ver mais</Button>
      )}

      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={() => toggleModal(false)}>
            <Carousel views={imagesSelected} />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
}

List.protoTypes = {
  portalSelected: PropTypes.array.isRequired,
};
