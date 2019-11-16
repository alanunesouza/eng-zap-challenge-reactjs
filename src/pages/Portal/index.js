import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import mockProperties from '~/mocks/properties';
import {
  Container,
  Title,
  PortalButton,
  PortalButtonContainer,
} from './styles';
import List from '~/components/List';

export default function Portal() {
  const [portals] = useState([
    {
      name: 'vivareal',
      alt: 'logo_vivareal',
      logo: 'https://www.vivareal.com.br/anunciar-imoveis/img/vivareal.svg',
      data: [],
    },
    {
      name: 'grupozap',
      alt: 'logo_grupozap',
      logo: 'https://cjs.zapcorp.com.br/Content/img/logotipo_novo_zap.png',
    },
  ]);
  const [portalSelected, setPortalSelected] = useState([]);
  const [portalName, setPortalName] = useState('');
  const [zapProperties, setZapProperties] = useState([]);
  const [vivaRealProperties, setVivaRealProperties] = useState([]);

  useEffect(() => {
    const boundingBox = location => {
      const { lon, lat } = location;
      const minlon = -46.693419;
      const maxlon = -46.641146;
      const minlat = -23.568704;
      const maxlat = -23.546686;

      if (lon >= minlon && lon <= maxlon && lat >= minlat && lat <= maxlat) {
        return true;
      }

      return false;
    };

    async function loadProperties() {
      const url =
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json';
      const grupoZap = [];
      const vivaReal = [];
      const response = await api.get(url).catch(() => {
        return {
          data: mockProperties,
        };
      });

      response.data.forEach(property => {
        const { usableAreas } = property;
        const { price, monthlyCondoFee } = property.pricingInfos;
        const { location } = property.address.geoLocation;

        if (location.lon === 0 && location.lat === 0) return;

        if (property.pricingInfos.businessType === 'SALE') {
          if (usableAreas <= 0) return;

          let squareMeter = price / usableAreas;
          const minPriceForSquareMeter = 3500;

          if (boundingBox(location)) {
            const newPrice = price - (price / 100) * 10;
            squareMeter = newPrice / usableAreas;
          }

          if (squareMeter > minPriceForSquareMeter) {
            grupoZap.push(property);
          }
        } else if (
          JSON.parse(monthlyCondoFee) > 0 &&
          Number.isInteger(JSON.parse(monthlyCondoFee))
        ) {
          let maxCondoFee = (price / 100) * 30;

          if (boundingBox(location)) {
            maxCondoFee = (maxCondoFee / 100) * 50;
          }

          if (JSON.parse(monthlyCondoFee) < maxCondoFee) {
            vivaReal.push(property);
          }
        }
      });

      setZapProperties(grupoZap);
      setVivaRealProperties(vivaReal);
    }

    loadProperties();
  }, []);

  const setProperty = selectPortal => {
    if (selectPortal === 'vivareal') {
      setPortalSelected(vivaRealProperties);
      setPortalName('vivareal');
    } else {
      setPortalSelected(zapProperties);
      setPortalName('grupozap');
    }
  };

  return (
    <Container>
      <Title>Escolha o portal que mais combina com o que você procura</Title>

      <PortalButtonContainer>
        {portals.map(portal => (
          <PortalButton
            key={portal.name}
            portal={portal}
            onClick={() => setProperty(portal.name)}
            selected={portal.name === portalName}
            portalName={portalName}
          >
            <img src={portal.logo} alt={portal.alt} />
          </PortalButton>
        ))}
      </PortalButtonContainer>

      <List portalSelected={portalSelected} portalName={portalName} />
    </Container>
  );
}
