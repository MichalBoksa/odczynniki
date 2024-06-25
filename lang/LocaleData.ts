export interface LocaleData {
    COMPANY_INFO: string;
    NAV_LINKS: NavLink[];
    PRODUCTS: Product[];
    MOLYBDENUM_PRODUCTS: MolybdenumProduct[];
    SELENIUM_PRODUCTS: SeleniumProduct[];
    COBALT_PRODUCTS: CobaltProduct[];
    NICKEL_PRODUCTS: NickelProduct[];
    COPPER_PRODUCTS: CopperProduct[];
    ZINC_PRODUCTS: ZincProduct[];
    MANGANESE_PRODUCTS: ManganeseProduct[];
    OTHER_PRODUCTS: OtherProduct[];
  }
  
  export interface NavLink {
    key: string;
    label: string;
    href: string;
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
  