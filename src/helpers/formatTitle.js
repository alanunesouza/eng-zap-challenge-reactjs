const formatTitle = property => {
  let title = 'Apartamento para ';

  if (property.pricingInfos.businessType === 'SALE') {
    title += 'Venda';
  } else {
    title += 'Aluguel';
  }

  return title;
};

export default formatTitle;
