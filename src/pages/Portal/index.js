import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Portal() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function loadProperties() {
      const url =
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json';

      const response = await api.get(url);

      setProperties(response.data);
    }

    loadProperties();
  }, []);

  return (
    <Container>
      {console.log(properties)}
      <text>teste</text>
    </Container>
  );
}
