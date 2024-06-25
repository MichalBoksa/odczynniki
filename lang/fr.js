//HOME COMPANY INFO 
export const COMPANY_INFO = "Nous sommes une entreprise produisant des composés chimiques dédiés aux entreprises les appliquant à des industries telles que la production de verre, les additifs pour prémélanges alimentaires, les engrais, le traitement de l'eau, les pigments, les catalyseurs, la galvanoplastie et les applications chimiques générales. Nous renforçons constamment notre position de leader en tant qu'entreprise chimique produisant des sels métalliques sur le marché mondial. Nous y parvenons en renforçant les relations commerciales à long terme.";

//PRODUCTS
export const PRODUCTS = [
  {
    symbol: 'Zn',
    name: 'Zinc',
    href: '/products/zinc',
  },
  {
    symbol: 'Mn',
    name: 'Manganèse',
    href: '/products/manganese',
  },
  {
    symbol: 'Cu',
    name: 'Cuivre',
    href: '/products/copper',
  },
  {
    symbol: 'Mo',
    name: 'Molybdène',
    href: '/products/molybdenum',
  },
  {
    symbol: 'Ni',
    name: 'Nickel',
    href: '/products/nickel',
  },
  {
    symbol: 'Se',
    name: 'Sélénium',
    href: '/products/selenium',
  },
  {
    symbol: 'Co',
    name: 'Cobalt',
    href: '/products/cobalt',
  },
  {
    symbol: '',
    name: 'Autres',
    href: '/products/other',
  },
  {
    symbol: '',
    name: 'Certificats',
    href: '/certificates',
  }
];

//Molybdenum products
export const MOLYBDENUM_PRODUCTS = [
  {
    name: 'Molybdate de sodium',
    symbol: 'Na₂MoO₄',
    cas: '7631-95-0',
    use: ['additif alimentaire pour animaux', 'industrie des engrais', 'pigments', 'traitement de l\'eau', 'inhibiteur de corrosion', 'antigel et liquides de refroidissement pour moteurs']
  },
  {
    name: 'Heptamolybdate d\'ammonium',
    cas: '12054-85-2',
    symbol: '(NH₄)₆Mo₇O₂₄·4H₂O',
    use: ['industrie des engrais', 'catalyseur', 'inhibiteur de corrosion', 'chimie analytique']
  },
  {
    name: 'Dimolybdate d\'ammonium',
    symbol: '(NH₄)₂Mo₂O₇',
    cas: '27546-07-2',
    use: ['pigments', 'production de catalyseurs', 'retardateurs de flamme', 'agents de lutte contre les incendies']
  }
];

//Selenium products
export const SELENIUM_PRODUCTS = [
  {
    name: 'Sélénite de sodium',
    symbol: 'Na₂SeO₃',
    cas: '10102-18-8',
    use: ['additif alimentaire pour animaux', 'engrais', 'réactifs de décoloration du verre']
  },
  {
    name: 'Sélénite de zinc',
    symbol: 'ZnSeO₃',
    cas: '13597-46-1',
    use: ['additif pour le verre', 'réactifs chimiques']
  },
  {
    name: 'Prémélanges 1% - 10%',
    symbol: 'Na₂SeO₃/CaMg(CO₃)₂',
    cas: '10102-18-8',
    use: ['additif alimentaire pour animaux', 'partie des substances de construction', 'participe aux mécanismes antioxydants', 'affecte le métabolisme et l\'immunité des animaux', 'agriculture']
  }
];

//Cobalt products
export const COBALT_PRODUCTS = [
  {
    name: 'Carbonate de cobalt granulé enrobé - Co 1-5%',
    symbol: 'CoCO₃/CaMg(CO₃)₂',
    cas: '513-79-1',
    use: ['additif alimentaire', 'sa présence dans le corps animal est associée à la vitamine B12, et le rôle du cobalt est étroitement lié à la présence de cette vitamine']
  }
];
