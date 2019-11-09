import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Portal() {
  const [properties, setProperties] = useState([]);

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
      let response = await api.get(url);

      response = response.data.filter(property => {
        const { usableAreas } = property;
        const { price, monthlyCondoFee } = property.pricingInfos;
        const { location } = property.address.geoLocation;
        const squareMeter = price / usableAreas;

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

        return location.lon !== 0 && location.lat !== 0;
      });

      console.log(grupoZap, vivaReal);

      setProperties(response);
    }

    loadProperties();
  }, []);

  return (
    <Container>
      <text>teste</text>
    </Container>
  );
}
