import exp from "constants";
import { use } from "react";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/aboutUs', key: 'aboutUs', label: 'O NAS' },
    { href: '/products', key: 'products', label: 'NASZE PRODUKTY' },
    { href: '/certificates', key: 'certificates', label: 'CERTYFIKATY' },
    { href: '/career', key: 'career', label: 'KARIERA' },
    { href: '/news', key: 'news ', label: 'AKTUALNOŚCI' },
    { href: '/contactUs', key: 'contact_us', label: 'KONTAKT' },
  ];


  //HOME COMPANY INFO 
  export const COMPANY_INFO_PL = 'Jesteśmy firmą produkującą związki chemiczne, dedykowane dla firm aplikujących je do takich branż przemysłu jak produkcja szkła, dodatki do premixów paszowych, nawozów, uzdatniania wody, pigmentów, katalizatorów, branży galwanicznej a także ogólnego zastosowania chemicznego. Cały czas umacniamy swoją pozycję wiodącej firmy chemicznej produkującej sole metali na rynku światowym. Osiągamy to dzięki umocnieniu długoterminowych relacji biznesowych';

  //PRODUCTS
  export const PRODUCTS_PL = [
    {
      symbol: 'Zn',
      name: 'Cynk',
      href: '/products/zinc',
    },

    {
      symbol: 'Mn',
      name: 'Mangan',
      href: '/products/manganese',},

    {
      symbol: 'Cu',
      name: 'Miedź',
      href: '/products/copper',}, 

    {
      symbol: 'Mo',
      name: 'Molibden',
      href: '/products/molybdenum',}, 

    {
      symbol: 'Ni',
      name: 'Nikiel',
      href: '/products/nickel',},

    {
      symbol: 'Se',
      name: 'Selen',
      href: '/products/selenium',},

     {
      symbol: 'Co',
      name: 'Kobalt',
      href: '/products/cobalt',},
      {
        symbol: '',
        name: 'Pozostałe',
        href: '/products/other',},
    ];

    //Molybdenum products
    export const MOLYBDENUM_PRODUCTS_PL = [
      {
        name: 'Sodu Molibdenian',
        symbol: 'Na₂MoO₄',
        cas: '7631-95-0',
        use:['dodatek do pasz dla zwierząt', 'przemysł nawozowy', 'pigmenty', 'uzdatnianie wody', 'inhibitor korozji', 'środek przeciw zamarzaniu i chłodziwa do silników']
      },

      {
        name: 'Amonu Heptamolibdenian',
        cas: '12054-85-2',
        symbol:'(NH₄)₆Mo₇O₂₄·4H₂O',
        use: ['przemysł nawozowy', 
          'katalizator', 
          'inhibitor korozji', 
          'chemia analityczna'
          ]
      },

      {
        name: 'Amonu Dimolibdenian ',
        symbol: '(NH₄)₂Mo₂O₇',
        cas:'27546-07-2',
        use:['pigmenty', 
          'produkcja katalizatorów', 
          'opóźniacze spalania', 
          'środki przeciwdziałające pożarom'
        ]
      },
     
    ];

    //Selenium products
    export const SELENIUM_PRODUCTS_PL = [

      {
        name: 'Sodu Selenin',
        symbol: 'Na₂SeO₃',
        cas: '10102-18-8',
        use: ['dodatek do pasz dla zwierząt', 
          'nawozy', 
          'odczynniki do odbarwiania szkła'
          ]
        },

        {
          name: 'Cynku Selenin',
          symbol: 'ZnSeO₃',
          cas: '13597-46-1',
          use: ['dodatek do szkła', 
            	'odczynniki chemiczne'
            ]
          },

          {
            name: 'Premixy 1% - 10%',
            symbol: 'Na₂SeO₃/CaMg(CO₃)₂',
            cas: '10102-18-8',
            use: ['dodatek do pasz dla zwierząt', 
              'wchodzi w skład substancji budulcowych', 
              'bierze udział w mechanizmach antyoksydacyjnych', 
              'ma wpływ na metabolizm i odporność organizmu zwierząt', 
              'rolnictwo'
              ]
            },
        ];


        //Cobalt products
        export const COBALT_PRODUCTS_PL = [
          {
            name: 'Powlekany Granulowany Węglan Kobaltu - Co 1-5% ',
            symbol: 'CoCO₃/CaMg(CO₃)₂',
            cas: '513-79-1',
            use: ['dodatek do pasz', 
            'jego występowanie w organizmie zwierząt jest związane z witaminą B12, a rola kobaltu wiąże się ściśle z występowaniem tej witaminy'
              ]
            },
          
        ];


        //Nickel products
        export const NICKEL_PRODUCTS_PL = [
          {
            name: 'Niklu Azotan',
            symbol: 'Ni(NO₃)₂',
            cas: '13138-45-9',
            use: [ 'produkcja baterii', 
              'katalizatory', 
              'odczynniki chemiczne', 
            	'galwaniczne (niklowanie)'
              ]
            },

            {
              name: 'Niklu Chlorek',
              symbol: 'NiCl₂•6H₂O',
              cas: '7791-20-0',
              use: [ 'farby', 
                'lakiery', 
                ]
              },

              {
                name: 'Niklu Siarczan',
                symbol: 'NiSO₄•6H₂O',
                cas: '10101-97-0',
                use: [ 'dodatek do produkcji biogazu', 
                  'dodatek do szkła', 
                  'pigmenty', 
                  'galwanizacja', 
                  'do produkcji baterii'
                  ]
                },
            
        ];

        //Copper products
        export const COPPER_PRODUCTS_PL = [
          
          {
            name: 'Manganu Azotan',
            symbol: 'Mn(NO₃)₂',
            cas: '10377-66-9',
            use: [ 'przemysł petrochemiczny', 
                    'nawozy', 
                  'galwaniczne'            
              ]
            },

            {
              name: 'Manganu Chlorek ',
              symbol: 'MnCl₂',
              cas: '7773-01-5',
              use: [ 'dodatek do pasz dla zwierząt', 
                'do produkcji baterii', 
                'nawozy', 
                'odczynniki chemiczne'  
                ]
              },

              {
                name: 'Manganu Octan',
                symbol: 'Mn(CH₃COO)₂•4H₂O ',
                cas: '6156-78-1',
                use: [ 'odczynniki do syntez', 
                  'dodatek do nawozów', 
                  'dodatek do pasz', 
                  'przemysł petrochemiczny'
                  ]
                },

                {
                  name: 'Manganu Siarczan',
                  symbol: 'MnSO₄•H₂O',
                  cas: '10034-96-5',
                  use: [ 'nawozy', 
                    'dodatek do pasz', 
                    'odczynniki do syntez'
                    ]
                  },
        ];


        //Zinc products
        export const ZINC_PRODUCTS_PL = [
        {
          name: 'Cynku Azotan',
          symbol: 'Zn(NO₃)₂',
          cas: '7779-88-6',
          use: ['nawozy', 
            	'odczynniki chemiczne'
            ]
        },

        {
          name: 'Cynku Chlorek',
          symbol: 'ZnCl₂',
          cas: '7646-85-7',
          use: ['ogrodnictwo', 
            'przemysł nawozowy', 
            'półprodukt, między innymi do baterii', 
            'do powlekania powierzchni metalowych'
            ]
        },

        {
          name: 'Cynku Siarczan - 7h',
          symbol: 'ZnSO₄•7H₂O',
          cas: '7446-20-0',
          use: ['nawozy']
        },
          
          {
            name: 'Cynku Siarczan - 1h',
            symbol: 'ZnSO₄•H₂O',
            cas: '7446-19-7',
            case: ['nawozy,pasze']
          },

          {
            name: 'Cynku Tlenek',
            symbol: 'ZnO',
            cas: '1314-13-2',
            use: ['dodatek do farb', 
              'dodatek do lakierów', 
              'stosowany w ceramice', 
              'do impregnacji drewna', 
              'wypełniacz gum, kauczuków, tworzyw sztucznych'
          ]
          }
        ];

        //Manganese products
        export const MANGANESE_PRODUCTS_PL = [
          {
            name: 'Manganu Azotan',
            symbol: 'Mn(NO₃)₂',
            cas: '10377-66-9',
            use: [ 'przemysł petrochemiczny', 
                    'nawozy', 
                  'galwaniczne'            
              ]
            },

            {
              name: 'Manganu Chlorek ',
              symbol: 'MnCl₂',
              cas: '7773-01-5',
              use: [ 'dodatek do pasz dla zwierząt', 
                'do produkcji baterii', 
                'nawozy', 
                'odczynniki chemiczne'  
                ]
              },

              {
                name: 'Manganu Octan',
                symbol: 'Mn(CH₃COO)₂•4H₂O ',
                cas: '6156-78-1',
                use: [ 'odczynniki do syntez', 
                  'dodatek do nawozów', 
                  'dodatek do pasz', 
                  'przemysł petrochemiczny'
                  ]
                },

                {
                  name: 'Manganu Siarczan',
                  symbol: 'MnSO₄•H₂O',
                  cas: '10034-96-5',
                  use: [ 'nawozy', 
                    'dodatek do pasz', 
                    'odczynniki do syntez'
                    ]
                  },
        ];

        //OTHER PRODUCTS
      [
        {
          name: 'Żelaza Azotan',
          symbol: 'Fe(NO₃)₃',
          cas: '10421-48-4',
          use: ['dodatek do nawozów', 
            'uzdatnianie wody', 
            'kondycjonowanie powierzchni metalowych'
            ]
        },
        
        {
          name: 'Srebra Azotan',
          symbol: 'AgNO₃',
          cas: '7761-88-8',
          use: ['przemysł: chemiczny, fotograficzny, kosmetyczny, fotochemiczny']
        },

        {
          name: 'Bezwodnik Kwasu Chromowego',
          symbol: 'CrO₃',
          cas: '1333-82-0',
          use: ['katalizatory', 
            'obróbka powierzchni (elektrogalwanizacja)', 
            ]
        },

        {
          name: 'Kwas Borowy',
          symbol: 'H₃BO₃',
          cas: '10043-35-3',
          use: ['zastosowanie w przemyśle farmaceutycznym', 
            'ma działanie grzybobójcze', 
            'jako nawóz', 
            'środek do impregnacji drewna', 
            'dodatek do farb'
          ]
        }



      ];



