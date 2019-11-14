import React, { useState, useEffect } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { FaSearchPlus, FaShower, FaCar } from 'react-icons/fa';
import { IoIosBed } from 'react-icons/io';

import { Container, Card, Content, FooterImages } from './styles';

export default function PortalDetails({ location }) {
  const [property] = useState(location.state.property);
  const [modalIsOpen, toggleModal] = useState(false);

  useEffect(() => {
    console.log(property);
  }, [property]);

  const FooterCount = () => (
    <FooterImages onClick={() => toggleModal(true)}>
      <FaSearchPlus />
      <span>ampliar</span>
    </FooterImages>
  );

  return (
    <Container>
      <Card>
        <Carousel components={{ FooterCount }} views={property.images} />

        <h1>Detalhes do imóvel</h1>

        <Content>
          {property.bedrooms >= 1 && (
            <span>
              <IoIosBed />
              {property.bedrooms}
              {property.bedrooms > 1 ? ' vagas' : ' vaga'}
            </span>
          )}

          {property.bathrooms >= 1 && (
            <span>
              <FaShower />
              {property.bathrooms}
              {property.bathrooms > 1 ? ' vagas' : ' vaga'}
            </span>
          )}

          <span>{property.usableAreas} m²</span>

          {property.parkingSpaces >= 1 && (
            <span>
              <FaCar />
              {property.parkingSpaces}
              {property.parkingSpaces > 1 ? ' vagas' : ' vaga'}
            </span>
          )}
        </Content>
      </Card>

      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={() => toggleModal(false)}>
            <Carousel views={property.images} />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
}
