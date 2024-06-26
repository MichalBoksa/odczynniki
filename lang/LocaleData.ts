export interface LocaleData {
  // NAVIGATION
  NAV_LINKS: NavLink[];

  // HOME COMPANY INFO
  WHO_ARE_WE: string;
  OUR_PRODUCTS: string;
  COMPANY_INFO: string;

  // ABOUT US
  ABOUT_US: string;
  HISTORY: string;
  HISTORY_DESC: string;
  SPECIALIZATION: string;
  SPECIALIZATION_DESC: string;
  INNOVATIONS: string;
  INNOVATIONS_DESC: string;

  // CAREERS
  JOIN_US: string;
  JOIN_TEAM: string;
  CV: string;
  SKILLS: string;
  HR_OFFICE: string;
  HR_OFFICE_NAME: string;
  HR_OFFICE_EMAIL: string;
  HR_OFFICE_PHONE: string;
  JOB_LIST: string;
  JOB_TITLE1: string;
  JOB_DETAILS: string;
  JOB_TITLE2: string;

  // PRODUCTS
  PRODUCTS: Product[];
  MOLYBDENUM_PRODUCTS: MolybdenumProduct[];
  SELENIUM_PRODUCTS: SeleniumProduct[];
  COBALT_PRODUCTS: CobaltProduct[];
  NICKEL_PRODUCTS: NickelProduct[];
  COPPER_PRODUCTS: CopperProduct[];
  ZINC_PRODUCTS: ZincProduct[];
  MANGANESE_PRODUCTS: ManganeseProduct[];
  OTHER_PRODUCTS: OtherProduct[];

  // JOBS OFFER 1
  JOB_DESC: string;
  JOB_NAME: string;
  JOB_RESPONSIBILITIES: string;
  JOB_REQUIREMENTS: string;
  BENEFITS: string;
  APPLY: string;
  JOB_RESPONSIBILITIES_LIST: string[];
  JOB_REQUIREMENTS_LIST: string[];
  BENEFITS_LIST: string[];

  // JOBS OFFER 2
  JOB_NAME2: string;
  NICE_TO_HAVE: string;
  JOB_REQUIREMENTS_LIST2: string[];
  NICE_TO_HAVE_LIST: string[];
  BENEFITS_LIST2: string[];

  // FOOTER
  CONTACT: string;
  TEL1: string;
  TEL2: string;
  FAX: string;
  OFFICE_EMAIL: string;
  CMOC: string;
  MI: string;
 LINKS: string;
 CAREERS: string;

  // CONTACT US
  CONTACT_US: string;
  ANSWEAR_QUESTIONS: string;
  OUR_OFFICE: string;
  VISIT_US: string;
  OFFICE_ADDRESS: string;
  OPEN_HOURS: string;
  OUR_TRADE_TEAM: string;
  OUR_SETTLEMENT_TEAM: string;
  ADMINISTRATION: string;

  // CONTACT US TEAMS
  TRADE_TEAM: TradeTeamMember[];
  SETTLEMENT_TEAM: SettlementTeamMember[];

  // CERTIFICATES
  OUR_CERTIFICATES: string;
  USAGE: string;

  // COBALT
  COBALT: string;
  COBALT_DESC: string;

  // COPPER
  COPPER: string;
  COPPER_DESC: string;

  // MANGANESE
  MANGANESE: string;
  MANGANESE_DESC: string;

  // MOLYBDENUM
  MOLYBDENUM: string;
  MOLYBDENUM_DESC: string;

  // NICKEL
  NICKEL: string;
  NICKEL_DESC: string;

  // SELENIUM
  SELENIUM: string;
  SELENIUM_DESC: string;

  // ZINC
  ZINC: string;
  ZINC_DESC: string;

  // OTHER_PRODUCTS
  OUR_OTHER_PRODUCTS: string;

  // NEWS
  NEWS: string;
  READ_MORE: string;
  LATEST_NEWS: string;
  LATEST_NEWS2: string;

  // SLIDER
  SLIDER_TITLE: string;
}

export interface NavLink {
  href: string;
  key: string;
  label: string;
}

export interface Product {
  symbol: string;
  name: string;
  href: string;
}

export interface MolybdenumProduct {
  name: string;
  symbol: string;
  cas: string;
  use: string[];
}

export interface SeleniumProduct {
  name: string;
  symbol: string;
  cas: string;
  use: string[];
}

export interface CobaltProduct {
  name: string;
  symbol: string;
  cas: string;
  use: string[];
}

export interface NickelProduct {
  name: string;
  symbol: string;
  cas: string;
  use: string[];
}

export interface CopperProduct {
  name: string;
  symbol: string;
  cas: string;
  use: string[];
}

export interface ZincProduct {
  name: string;
  symbol: string;
  cas: string;
  use: string[];
}

export interface ManganeseProduct {
  name: string;
  symbol: string;
  cas: string;
  use: string[];
}

export interface OtherProduct {
  name: string;
  symbol: string;
  cas: string;
  use: string[];
}

export interface TradeTeamMember {
  name: string;
  department: string;
  market: string;
  email: string;
  mobile: string;
}

export interface SettlementTeamMember {
  name: string;
  email: string;
  mobile: string;
}
