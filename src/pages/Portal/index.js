import React, { useEffect, useState } from 'react';
import api from '../../services/api';

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
  const [portalName, setPortalName] = useState([]);
  const [zapProperties, setZapProperties] = useState([]);
  const [vivaRealProperties, setVivaRealProperties] = useState([]);

  useEffect(() => {
    const boundingBox = location => {
      const { lon, lat } = location;
      const minlon = -46.693419;
      const minlat = -23.568704;
      const maxlon = -46.641146;
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
      const response = await api.get(url);

      response.data.forEach(property => {
        const { usableAreas } = property;
        const { price, monthlyCondoFee } = property.pricingInfos;
        const { location } = property.address.geoLocation;
        const squareMeter = price / usableAreas;

        if (location.lon === 0 && location.lat === 0) return;

        if (property.pricingInfos.businessType === 'SALE') {
          let minPriceForSquareMeter = 3500;

          if (boundingBox(location)) {
            minPriceForSquareMeter -= (minPriceForSquareMeter / 100) * 10;
          }

          if (usableAreas !== 0 && !(squareMeter <= minPriceForSquareMeter)) {
            grupoZap.push(property);
          }
        } else if (
          monthlyCondoFee &&
          JSON.parse(monthlyCondoFee) !== 0 &&
          Number.isInteger(JSON.parse(monthlyCondoFee))
        ) {
          let maxCondoFee = (price / 100) * 30;

          if (boundingBox(location)) {
            maxCondoFee = (maxCondoFee / 100) * 50 + 1;
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

  return (
    <Container>
      <Title>Escolha o portal que mais combina com o que você procura</Title>
      <PortalButtonContainer>
        {portals.map(portal => (
          <PortalButton
            key={portal.name}
            portal={portal}
            onClick={() => {
              if (portal.name === 'vivareal') {
                setPortalSelected(vivaRealProperties);
                setPortalName('vivareal');
              } else {
                setPortalSelected(zapProperties);
                setPortalName('grupozap');
              }
            }}
          >
            <img src={portal.logo} alt={portal.alt} />
          </PortalButton>
        ))}
      </PortalButtonContainer>

      <List portalSelected={portalSelected} portalName={portalName} />
    </Container>
  );
}
