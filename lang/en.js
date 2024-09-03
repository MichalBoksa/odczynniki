//COMPANY INFO

// NAVIGATION
export const NAV_LINKS = [
  { href: '/aboutUs', key: 'aboutUs', label: 'ABOUT US' },
  { href: '/products', key: 'products', label: 'OUR PRODUCTS' },
  { href: '/careers', key: 'careers', label: 'CAREERS' },
  { href: '/news', key: 'news', label: 'NEWS' },
  { href: '/contactUs', key: 'contact_us', label: 'CONTACT' },
  { href: '/euFunds', key: 'euFunds', label: 'EU FUNDS' },
];

//HOME COMPANY INFO 
export const WHO_ARE_WE = 'Who are we?';
export const OUR_PRODUCTS = 'Our products';

export const COMPANY_INFO = 'We are a company producing chemical compounds dedicated to companies applying them to such industries as glass production, feed premix additives, fertilizers, water treatment, pigments, catalysts, electroplating, and general chemical applications. We are constantly strengthening our position as a leading chemical company producing metal salts in the global market. We achieve this by strengthening long-term business relationships.';

//ABOUT US
export const ABOUT_US = 'Who we are';
export const HISTORY = 'Our history';
export const HISTORY_DESC = 'The company "Centrum Metal Odczynniki Chemiczne - Midas Investment Sp. z o.o." Spółka Komandytowa, abbreviated as CMOCMI, was established in 2005 and represented the development of the founders previous business activity - international trade in chemical products. Based on market knowledge and trade experience, the company founders decided to start production activities, creating a solid foundation for the functioning and development of the company.';
export const SPECIALIZATION = 'This is our specialty';
export const SPECIALIZATION_DESC = 'The main activity of CMOCMI is the production of inorganic chemicals, especially compounds (metal salts) of molybdenum, selenium, copper, manganese, zinc, cobalt, and nickel. CMOCMI is the only producer of sodium molybdate and ammonium heptamolybdate in Poland and a leading producer in Europe. The company also engages in international trade of specialized chemical compounds. CMOCMI is ISO 9001 and 14001, GMP+ certified, enabling it to supply products to the most demanding customers from various industrial sectors and producers of feed and food articles.';
export const INNOVATIONS = 'Innovation and sustainable development - key pillars';
export const INNOVATIONS_DESC = 'The company currently possesses modern technical and technological facilities for producing chemical compounds with customer-desired parameters. For many years, CMOCMI has cooperated with leading national research units, higher education institutions, and the Polish Academy of Sciences. Due to the limited supply of raw materials containing molybdenum, selenium, and other metals listed as critical and deficient, CMOCMI specializes in sourcing these raw materials from waste or low-quality primary sources. Innovative hydrometallurgical processes allow the company to obtain high-purity products, building its competitive position and fitting into the philosophy of the Circular Economy.';
export const REGISTRATION_DETAILS = 'Registration Details';
export const VAT = 'NIP';
export const REGON = 'REGON';
export const KRS = 'KRS';
export const COURT_REGISTER = 'District Court for the Capital City of Warsaw in Warsaw, 13th Commercial Division of the National Court Register';
export const ABOUT_US_LIST = [
    {
        href: '/registrationDetails',
        label: 'Registration details'
      },
    {
      href: '/aboutUs',
      label: 'Who we are'
    },
    {
      href: '/certificates',
      label: 'Certificates'
    },
    {
      href: '/organizations',
      label: 'Organizations'
    },
    {
      href: '/businessPartners',
      label: 'Business partners'
    },
  
  ];

  export const ORGANIZATIONS = 'Organizations we belong to';
  export const BUSINESS_PARTNERS = 'Our business partners';
  export const COMPANY_NAME = 'Company name';
  export const COMPANY_HEADQUARTERS = 'Company headquarters';
  export const PRODUCTION_PLANT = 'Production plant and correspondence address';
  export const REGISTRATION_DETAILS_OFFICE_ADDRESS = '05-090 Falenty, Opackiego 46A/11';


//CAREERS
export const JOIN_US = 'Join our team';
export const JOIN_TEAM = 'Join the CMOCMI team - a leading producer of inorganic chemicals in Europe. We are looking for individuals passionate about chemistry, ready to work in a dynamic environment, and willing to develop with us. We offer the opportunity to work with a qualified team, modern technical facilities, and stable employment conditions. Apply today and shape the future of the chemical industry with us.';
export const CV = 'We are waiting for your CV!';
export const SKILLS = 'Do you have unique skills and are looking for a place where your talents will be appreciated and developed? If so, you are in the right place! Our company is dynamically developing and always looking for talented individuals to join our team.';
export const HR_OFFICE = 'Our HR office';
export const HR_OFFICE_NAME = 'Agnieszka Tęcza';
export const HR_OFFICE_EMAIL = 'atecza@odczynniki.com.pl';
export const HR_OFFICE_PHONE = '+48 517 522 439';
export const JOB_LIST = 'Currently, we are looking for individuals for the following positions:';
export const JOB_TITLE1 = 'Employee for the Accounting and Financial Department in a production company';
export const JOB_DETAILS = 'See details';
export const JOB_TITLE2 = 'Chemical process operator';

//PRODUCTS
export const PRODUCTS = [

    {
        symbol: 'Mo',
        name: 'Molybdenum',
        href: '/products/molybdenum',
    },

    {
        symbol: 'Se',
        name: 'Selenium',
        href: '/products/selenium',
    },

    {
        symbol: 'Cu',
        name: 'Copper',
        href: '/products/copper',
    },

    {
        symbol: 'Mn',
        name: 'Manganese',
        href: '/products/manganese',
    },

  {
      symbol: 'Zn',
      name: 'Zinc',
      href: '/products/zinc',
  },



  {
      symbol: 'Ni',
      name: 'Nickel',
      href: '/products/nickel',
  },

  {
      symbol: 'Co',
      name: 'Cobalt',
      href: '/products/cobalt',
  },
  {
      symbol: '',
      name: 'Other',
      href: '/products/other',
  },

];

//Molybdenum products
export const MOLYBDENUM_PRODUCTS = [
  {
      name: 'Sodium Molybdate',
      symbol: 'Na₂MoO₄',
      cas: '7631-95-0',
      use: ['animal feed additive', 'fertilizer industry', 'pigments', 'water treatment', 'corrosion inhibitor', 'antifreeze and engine coolants']
  },
  {
      name: 'Ammonium Heptamolybdate',
      cas: '12054-85-2',
      symbol: '(NH₄)₆Mo₇O₂₄·4H₂O',
      use: ['fertilizer industry', 'catalyst', 'corrosion inhibitor', 'analytical chemistry']
  },
  {
      name: 'Ammonium Dimolybdate',
      symbol: '(NH₄)₂Mo₂O₇',
      cas: '27546-07-2',
      use: ['pigments', 'catalyst production', 'flame retardants', 'firefighting agents']
  },
];

//Selenium products
export const SELENIUM_PRODUCTS = [
  {
      name: 'Sodium Selenite',
      symbol: 'Na₂SeO₃',
      cas: '10102-18-8',
      use: ['animal feed additive', 'fertilizers', 'glass decolorizing reagents']
  },
  {
      name: 'Zinc Selenite',
      symbol: 'ZnSeO₃',
      cas: '13597-46-1',
      use: ['glass additive', 'chemical reagents']
  },
  {
      name: 'Premixes 1% - 10%',
      symbol: 'Na₂SeO₃/CaMg(CO₃)₂',
      cas: '10102-18-8',
      use: ['animal feed additive', 'part of building substances', 'participates in antioxidant mechanisms', 'affects animal metabolism and immunity', 'agriculture']
  },
];

//Cobalt products
export const COBALT_PRODUCTS = [
  {
      name: 'Coated Granulated Cobalt Carbonate - Co 1-5%',
      symbol: 'CoCO₃/CaMg(CO₃)₂',
      cas: '513-79-1',
      use: ['feed additive', 'its presence in the animal body is associated with vitamin B12, and the role of cobalt is closely related to the presence of this vitamin']
  },
];

//Nickel products
export const NICKEL_PRODUCTS = [
  {
      name: 'Nickel Nitrate',
      symbol: 'Ni(NO₃)₂',
      cas: '13138-45-9',
      use: ['battery production', 'catalysts', 'chemical reagents', 'electroplating (nickel plating)']
  },
  {
      name: 'Nickel Chloride',
      symbol: 'NiCl₂•6H₂O',
      cas: '7791-20-0',
      use: ['paints', 'varnishes']
  },
  {
      name: 'Nickel Sulfate',
      symbol: 'NiSO₄•6H₂O',
      cas: '10101-97-0',
      use: ['biogas production additive', 'glass additive', 'pigments', 'electroplating', 'battery production']
  },
];

//Copper products
export const COPPER_PRODUCTS = [
  {
      name: 'Copper Nitrate',
      symbol: 'Cu(NO₃)₂',
      cas: '3251-23-8',
      use: ['fertilizers', 'catalysts', 'electroplating', 'pigments', 'non-metallic surface treatment']
  },
  {
      name: 'Copper Chloride',
      symbol: 'CuCl₂',
      cas: '7447-39-4',
      use: ['chemical industry', 'fertilizers', 'analytical reagents', 'catalyst in organic chemistry']
  },
  {
      name: 'Copper Sulfate',
      symbol: 'CuSO₄•5H₂O',
      cas: '7758-99-8',
      use: ['fertilizer and pesticide additive', 'feed additive', 'bactericidal agent', 'absorbent production', 'electroplating', 'pigments']
  },
  {
      name: 'Copper Acetate',
      symbol: 'Cu(CH₃COO)₂•H₂O',
      cas: '6046-93-1',
      use: ['laboratory applications', 'pigments']
  },
  {
      name: 'Copper Carbonate',
      symbol: 'CuCO₃•Cu(OH)₂',
      cas: '12069-69-1',
      use: ['synthesis reagents', 'fertilizer additive']
  },
  {
      name: "Copper Hydroxide",
      symbol: 'Cu(OH)₂',
      cas: '20427-59-2',
      use: ['fertilizers', 'electroplating: coatings/inks', 'ceramics', 'water treatment', 'catalysts', 'construction chemicals']
  }
];

//Zinc products
export const ZINC_PRODUCTS = [
  {
      name: 'Zinc Nitrate',
      symbol: 'Zn(NO₃)₂',
      cas: '7779-88-6',
      use: ['fertilizers', 'chemical reagents']
  },
  {
      name: 'Zinc Chloride',
      symbol: 'ZnCl₂',
      cas: '7646-85-7',
      use: ['horticulture', 'fertilizer industry', 'intermediate product, including for batteries', 'metal surface coating']
  },
  {
      name: 'Zinc Sulfate - 7h',
      symbol: 'ZnSO₄•7H₂O',
      cas: '7446-20-0',
      use: ['fertilizers']
  },
  {
      name: 'Zinc Sulfate - 1h',
      symbol: 'ZnSO₄•H₂O',
      cas: '7446-19-7',
      use: ['fertilizers', 'feed']
  },
  {
      name: 'Zinc Oxide',
      symbol: 'ZnO',
      cas: '1314-13-2',
      use: ['paint additive', 'varnish additive', 'ceramics', 'wood impregnation', 'filler for rubbers, elastomers, plastics']
  },
];

//Manganese products
export const MANGANESE_PRODUCTS = [
  {
      name: 'Manganese Nitrate',
      symbol: 'Mn(NO₃)₂',
      cas: '10377-66-9',
      use: ['petrochemical industry', 'fertilizers', 'electroplating']
  },
  {
      name: 'Manganese Chloride',
      symbol: 'MnCl₂',
      cas: '7773-01-5',
      use: ['animal feed additive', 'battery production', 'fertilizers', 'chemical reagents']
  },
  {
      name: 'Manganese Acetate',
      symbol: 'Mn(CH₃COO)₂•4H₂O',
      cas: '6156-78-1',
      use: ['synthesis reagents', 'fertilizer additive', 'animal feed additive', 'petrochemical industry']
  },
  {
      name: 'Manganese Sulfate',
      symbol: 'MnSO₄•H₂O',
      cas: '10034-96-5',
      use: ['fertilizers', 'animal feed additive', 'synthesis reagents']
  },
];

//OTHER PRODUCTS
export const OTHER_PRODUCTS = [
  {
      name: 'Iron Nitrate',
      symbol: 'Fe(NO₃)₃',
      cas: '10421-48-4',
      use: ['fertilizer additive', 'water treatment', 'metal surface conditioning']
  },
  {
      name: 'Silver Nitrate',
      symbol: 'AgNO₃',
      cas: '7761-88-8',
      use: ['chemical, photographic, cosmetic, photochemical industry']
  },
  {
      name: 'Chromic Acid Anhydride',
      symbol: 'CrO₃',
      cas: '1333-82-0',
      use: ['catalysts', 'surface treatment (electroplating)']
  },
  {
      name: 'Boric Acid',
      symbol: 'H₃BO₃',
      cas: '10043-35-3',
      use: ['pharmaceutical industry', 'fungicidal agent', 'fertilizer', 'wood impregnation agent', 'paint additive']
  }
];

//JOBS OFFER1
export const JOB_DESC = 'Job offer description';
export const JOB_NAME = 'Chemical process operator';
export const JOB_RESPONSIBILITIES = 'Responsibilities:';
export const JOB_REQUIREMENTS = 'Requirements:';
export const BENEFITS = 'We provide:';
export const APPLY = 'Apply now!';
export const JOB_RESPONSIBILITIES_LIST = [
  'Secondary/vocational education (mechanical, chemical)',
  'Operation of devices and installations for the production of chemical compounds',
  'Monitoring, verifying, and correcting the work of all operated devices',
  'Physical work in the production hall'
];
export const JOB_REQUIREMENTS_LIST = [
  'Secondary/vocational education (mechanical, chemical)',
  'Willingness to work in a three-shift system',
  'Experience in a similar position - an additional advantage',
  'Forklift license - an additional advantage',
  'Commitment, responsibility, teamwork skills'
];
export const BENEFITS_LIST = [
  'Employment contract',
  'Stable employment conditions',
  'Opportunities for professional and personal development',
  'Additional medical care for employees and their families',
  'Good working atmosphere',
  'Co-financing for the MultiSport card'
];

//JOBS OFFER2
export const JOB_NAME2 = 'Employee for the Accounting and Financial Department in a production company';
export const NICE_TO_HAVE = 'Nice to have:';
export const JOB_REQUIREMENTS_LIST2 = [
  'Higher education: Finance and Management, Accounting, Financial Controlling',
  '2-3 years of experience in accounting, controlling',
  'Cooperation with banks and other financial institutions, tax authorities',
  'Monitoring and supervising financial flows, managing financial liquidity, providing management financial information',
  'Preparing financial documentation, including reports and analyses, budgets, updates, invoice verification and processing',
  'Computer skills, including good knowledge of MS Office package, Comarch ERP XL/Comarch ERP Optima system',
  'Intermediate English proficiency',
  'Analytical thinking, openness, teamwork skills, responsibility'
];
export const NICE_TO_HAVE_LIST = [
  'Experience in working in production and trading companies',
  'Experience in handling HR and payroll matters'
];
export const BENEFITS_LIST2 = [
  'Employment contract',
  'Stable employment conditions',
  'Opportunities for professional and personal development',
  'Additional medical care for employees and their families',
  'Good working atmosphere',
  'Co-financing for the MultiSport card'
];

//FOOTER
export const CONTACT = 'Contact';
export const CONTACT_FACTORY = 'Contact - Production Plant';
export const TEL1 = 'tel.+48 81 746 20 11';
export const TEL2 = '+48 81 746 36 82';
export const FAX = 'fax: +48 81 458 39 88';
export const OFFICE_EMAIL = 'inf@odczynniki.com.pl';
export const CMOC = 'Centrum Metal Odczynniki Chemiczne';
export const MI = 'MIDAS Investment';
export const LINKS = 'Useful links';
export const CAREERS = 'Careers';
export const EU_FUNDS = 'European Funds';


//CONTACT US
export const CONTACT_US = 'Contact us';
export const ANSWEAR_QUESTIONS = 'We are happy to answer your questions';
export const OUR_OFFICE = 'Our office';
export const VISIT_US = 'Visit us';
export const OFFICE_ADDRESS = '20-234 Lublin, ul. Metalurgiczna 15 E, 17 D';
export const OPEN_HOURS = 'Open Monday - Friday from 7:00 to 15:00';
export const OUR_TRADE_TEAM = 'Our sales team';
export const OUR_SETTLEMENT_TEAM = 'Operational Services Department';
export const ADMINISTRATION = 'Management and Administration Office';
export const HR_EMPLOYEE = 'HR Employee';


//CONTACT US TEAMS

// TRADE TEAM
export const TRADE_TEAM_EN = [
    {
        name: "Małgorzata Wilczewski",
        department: "Sales",
        market: "Germany, Austria, Switzerland",
        email: "mwilczewski@odczynniki.com.pl",
        mobile: " +49 178 676 0903"
    },
    {
        name: "Aleksandra Simon",
        department: "Sales",
        market: "Benelux countries, France, Czech Republic, England",
        email: "asimon@odczynniki.com.pl",
        mobile: "+48 508 218 947"
    },
    {
        name: "Anna Mróz",
        department: "Sales",
        market: "Spain, Benelux countries, England, Italy",
        email: "amroz@odczynniki.com.pl",
        mobile: "+48 508 218 900"
    },
    {
        name: "Nairy Chaglasyan",
        department: "Sales",
        market: "Spain, Portugal",
        email: "nchaglasyan@odczynniki.com.pl",
        mobile: "+34 639 314 391"
    },
    {
        name: "Agnieszka Piątkowska",
        department: "Sales",
        market: "Ukraine",
        email: "apiatkowska@odczynniki.com.pl",
        mobile: "+48 885 785 007"
    },
    {
        name: "Renata Krawczyńska",
        department: "Sales",
        market: "Poland",
        email: "rkrawczynska@odczynniki.com.pl",
        mobile: "+48 885 785 077"
    },
    {
        name: "Waldemar Piątkowski",
        department: "Purchasing, sales, logistics",
        market: "Poland",
        email: "wpiatkowski@odczynniki.com.pl",
        mobile: "+48 508 218 838"
    },
    {
        name: "Piotr Topolski",
        department: "Purchasing",
        market: "All locations",
        email: "ptopolski@odczynniki.com.pl",
        mobile: "+48 885 785 011"
    }
];

// Francuski
export const TRADE_TEAM = [
    {
        name: "Małgorzata Wilczewski",
        department: "Sales",
        market: "Germany, Austria, Switzerland",
        email: "mwilczewski@odczynniki.com.pl",
        mobile: "+49 178 676 0903"
    },
    {
        name: "Aleksandra Simon",
        department: "Sales",
        market: "Benelux countries, France, Czech Republic, England",
        email: "asimon@odczynniki.com.pl",
        mobile: "+48 508 218 947"
    },
    {
        name: "Anna Mróz",
        department: "Sales",
        market: "Spain, Benelux countries, England, Italy",
        email: "amroz@odczynniki.com.pl",
        mobile: "+48 508 218 900"
    },
    {
        name: "Nairy Chaglasyan",
        department: "Sales",
        market: "Spain, Portugal",
        email: "nchaglasyan@odczynniki.com.pl",
        mobile: "+34 639 314 391"
    },
    {
        name: "Agnieszka Piątkowska",
        department: "Sales",
        market: "Ukraine",
        email: "apiatkowska@odczynniki.com.pl",
        mobile: "+48 885 785 007"
    },
    {
        name: "Renata Krawczyńska",
        department: "Sales",
        market: "Poland",
        email: "rkrawczynska@odczynniki.com.pl",
        mobile: "+48 885 785 077"
    },
    {
        name: "Waldemar Piątkowski",
        department: "Purchasing, sales, logistics",
        market: "Poland",
        email: "wpiatkowski@odczynniki.com.pl",
        mobile: "+48 508 218 838"
    },
    {
        name: "Piotr Topolski",
        department: "Purchasing",
        market: "All locations",
        email: "ptopolski@odczynniki.com.pl",
        mobile: "+48 885 785 011"
    }
];

//CERTIFICATES
export const OUR_CERTIFICATES = 'Our certificates'

export const USAGE ='Usage:';

//COBALT
export const COBALT = 'Cobalt';
export const COBALT_DESC = 'A chemical element in the group of transition metals, commonly found in nature. Minerals have a very low cobalt content, and cobalt is always associated with other metals. Used in the metallurgical, ceramic, chemical, battery, and animal husbandry industries.';

//COPPER
export const COPPER = 'Copper';
export const COPPER_DESC = 'A chemical element from the group of transition metals with a reddish-brown color. It is corrosion-resistant, durable, ductile, effectively conducts electricity and heat, and easily forms alloys. Copper is used, among others, in agriculture, water treatment, animal feed, but also in pigments and ceramics, glass, electroplating, and catalysts.';

//MANGANESE
export const MANGANESE = 'Manganese';
export const MANGANESE_DESC = 'A silvery-gray element with a bluish sheen, belonging to the group of transition metals. It is used in steel production, including stainless steel. It is also added to aluminum alloys, improving its corrosion resistance. In addition to metallurgy, manganese is added to fuels, cement, glass, paints, fertilizers.';

//MOLYBDENUM
export const MOLYBDENUM = 'Molybdenum';
export const MOLYBDENUM_DESC = 'A chemical element from the group of transition metals. Pure molybdenum is silvery-white, very hard, and has one of the highest melting points of any element. It is primarily used in metallurgy, mainly in steel production, as pigments, fertilizers, and in the chemical industry as catalysts.';

//NICKEL
export const NICKEL = 'Nickel';
export const NICKEL_DESC = 'It is a white-silver metal with a slight golden hue. Nickel belongs to the group of transition metals. Nickel is primarily used as an alloying additive to steel. In this way, heat-resistant, acid-resistant, and stainless steel are produced. Nickel is also used to make heating elements and electronic components.';

//SELENIUM
export const SELENIUM = 'Selenium';
export const SELENIUM_DESC = 'A chemical element in the group of non-metals, which has three allotropic forms: the α form is known as gray or metallic selenium, silver-gray in color, brittle; the β form (red selenium) is a red amorphous solid; the γ form is a glassy, grayish-pink solid. Mainly used in agriculture and as an additive to animal feed, and also in glass production and electroplating.';

//ZINC
export const ZINC = 'Zinc';
export const ZINC_DESC ='A bluish-gray chemical element, a transition metal from the group of zinc elements. Zinc and its alloys are used for galvanizing flat steel products to protect against corrosion, as an alloying additive in brass production.';

//OTHER_PRODUCTS
export const OUR_OTHER_PRODUCTS = 'Our other products';
    
//NEWS
export const NEWS = 'News';
export const READ_MORE = 'Read more';
export const LATEST_NEWS = 'Latest news';
export const LATEST_NEWS2 = 'Recent news';

// SLIDER
export const SLIDER_TITLE = 'INNOVATION IS OUR WAY TO SUCCESS';

//COOKIES CONSNET
export const COOKIES_CONSENT = 'This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.';
export const COOKIES_CONSENT_ACCEPT = 'Accept';

//PAGINATION
export const PREVIOUS = 'Previous';
export const NEXT = 'Next';

