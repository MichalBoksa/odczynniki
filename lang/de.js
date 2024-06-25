//HOME COMPANY INFO 
export const COMPANY_INFO = 'Wir sind ein Unternehmen, das chemische Verbindungen herstellt, die für Unternehmen bestimmt sind, die sie in Branchen wie Glasproduktion, Futtermittelzusatzstoffe, Düngemittel, Wasseraufbereitung, Pigmente, Katalysatoren, Galvanik und allgemeine chemische Anwendungen einsetzen. Wir stärken ständig unsere Position als führendes Chemieunternehmen, das Metallsalze auf dem Weltmarkt produziert. Dies erreichen wir durch die Stärkung langfristiger Geschäftsbeziehungen.';

//PRODUCTS
export const PRODUCTS = [
  {
    symbol: 'Zn',
    name: 'Zink',
    href: '/products/zinc',
  },
  {
    symbol: 'Mn',
    name: 'Mangan',
    href: '/products/manganese',
  },
  {
    symbol: 'Cu',
    name: 'Kupfer',
    href: '/products/copper',
  },
  {
    symbol: 'Mo',
    name: 'Molybdän',
    href: '/products/molybdenum',
  },
  {
    symbol: 'Ni',
    name: 'Nickel',
    href: '/products/nickel',
  },
  {
    symbol: 'Se',
    name: 'Selen',
    href: '/products/selenium',
  },
  {
    symbol: 'Co',
    name: 'Kobalt',
    href: '/products/cobalt',
  },
  {
    symbol: '',
    name: 'Andere',
    href: '/products/other',
  },
  {
    symbol: '',
    name: 'Zertifikate',
    href: '/certificates',
  }
];

//Molybdenum products
export const MOLYBDENUM_PRODUCTS = [
  {
    name: 'Natriummolybdat',
    symbol: 'Na₂MoO₄',
    cas: '7631-95-0',
    use: ['Zusatzstoff für Tierfutter', 'Düngemittelindustrie', 'Pigmente', 'Wasseraufbereitung', 'Korrosionsinhibitor', 'Frostschutzmittel und Motorkühlmittel']
  },
  {
    name: 'Ammoniumheptamolybdat',
    cas: '12054-85-2',
    symbol: '(NH₄)₆Mo₇O₂₄·4H₂O',
    use: ['Düngemittelindustrie', 'Katalysator', 'Korrosionsinhibitor', 'Analytische Chemie']
  },
  {
    name: 'Ammoniumdimolybdat',
    symbol: '(NH₄)₂Mo₂O₇',
    cas: '27546-07-2',
    use: ['Pigmente', 'Katalysatorproduktion', 'Flammschutzmittel', 'Feuerlöschmittel']
  }
];

//Selenium products
export const SELENIUM_PRODUCTS = [
  {
    name: 'Natriumselenit',
    symbol: 'Na₂SeO₃',
    cas: '10102-18-8',
    use: ['Zusatzstoff für Tierfutter', 'Düngemittel', 'Glasentfärbungsreagenzien']
  },
  {
    name: 'Zinkselenit',
    symbol: 'ZnSeO₃',
    cas: '13597-46-1',
    use: ['Glaszusatz', 'Chemische Reagenzien']
  },
  {
    name: 'Premixe 1% - 10%',
    symbol: 'Na₂SeO₃/CaMg(CO₃)₂',
    cas: '10102-18-8',
    use: ['Zusatzstoff für Tierfutter', 'Bestandteil von Baumaterialien', 'Beteiligt an antioxidativen Mechanismen', 'Beeinflusst den Stoffwechsel und die Immunität von Tieren', 'Landwirtschaft']
  }
];

//Cobalt products
export const COBALT_PRODUCTS = [
  {
    name: 'Beschichtetes granuliertes Kobaltkarbonat - Co 1-5%',
    symbol: 'CoCO₃/CaMg(CO₃)₂',
    cas: '513-79-1',
    use: ['Futtermittelzusatzstoff', 'Seine Anwesenheit im Körper von Tieren steht in Verbindung mit Vitamin B12, und die Rolle von Kobalt hängt eng mit dem Vorhandensein dieses Vitamins zusammen']
  }
];
