const carsList = [
    {
        toplevel: 'Plug-in Hybrid',
        name: 'Prius Prime',
        year: 2022,
        price: '28,220',
        Starting: ' Starting MSRP',
        dontknow: '54/133' ,
        Estt: 'Est. MPG  / MPGe',
        shown: '$34,000 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/priusprime/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Truck',
        name: 'Tacoma',
        year: 2022,
        price: '$26,500',
        Starting: ' Starting MSRP',
        dontknow: '18/22' ,
        Estt: 'Est. MPG',
        shown: '$37,655 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/tacoma/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Hybrid',
        name: 'Corolla Hybrid',
        year: 2022,
        price: '23,650',
        Starting: ' Starting MSRP',
        dontknow: '53/52' ,
        Estt: 'Est. MPG',
        shown: '$24,075 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/corollahybrid/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Hybrid',
        name: 'Camry Hybrid',
        year: 2022,
        price: '$27,380',
        Starting: ' Starting MSRP',
        dontknow: '51/53' ,
        Estt: 'Est. MPG',
        shown: '$32,820 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/camryhybrid/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Hybrid',
        name: 'RAV4 Hybrid',
        year: 2021,
        price: '$28,900',
        Starting: ' Starting MSRP',
        dontknow: '41/38' ,
        Estt: 'Est. MPG',
        shown: '$35,275 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/rav4hybrid/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Plug-in Hybrid',
        name: 'RAV4 Prime',
        year: 2021,
        price: '$38,350',
        Starting: ' Starting MSRP',
        dontknow: '38/94' ,
        Estt: 'Est. MPG',
        shown: '$47,860 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/rav4prime/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Hybrid',
        name: 'Venza',
        year: 2021,
        price: '$32,670',
        Starting: ' Starting MSRP',
        dontknow: '40/37' ,
        Estt: 'Est. MPG',
        shown: '$40,000 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/venza/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Hybrid',
        name: 'Avalon Hybrid',
        year: 2022,
        price: '$37,250',
        Starting: ' Starting MSRP',
        dontknow: '43/44' ,
        Estt: 'Est. MPG',
        shown: '$40,600 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/avalonhybrid/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Hybrid',
        name: 'Highlander Hybrid',
        year: 2022,
        price: '$38,855',
        Starting: ' Starting MSRP',
        dontknow: '36/35' ,
        Estt: 'Est. MPG',
        shown: '$51,065 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/highlanderhybrid/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Fuel Cell Electric Vehicle',
        name: 'Mirai',
        year: 2021,
        price: '$49,500',
        Starting: ' Starting MSRP',
        dontknow: '67/64' ,
        Estt: 'Est. MPG',
        shown: '$66,425 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/mirai/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Hybrid',
        name: 'Sienna',
        year: 2022,
        price: '$34,560',
        Starting: ' Starting MSRP',
        dontknow: '36/36' ,
        Estt: 'Est. MPG',
        shown: '$43,525 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/sienna/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Truck',
        name: 'Tundra',
        year: 2021,
        price: '$34,025',
        Starting: ' Starting MSRP',
        dontknow: '13/17' ,
        Estt: 'Est. MPG',
        shown: '$47,655 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/tundra/base.png?bg=fff&fm=webp&q=90&w=768'
    },
    {
        toplevel: 'Hybrid',
        name: 'Prius',
        year: 2022,
        price: '24,525',
        Starting: ' Starting MSRP',
        dontknow: '54/50' ,
        Estt: 'Est. MPG',
        shown: '$33,760 as shown',
        img: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/prius/base.png?bg=fff&fm=webp&q=90&w=768'
    },
]



[
    {
      "toplevel": "Plug-in Hybrid",
      "name": "Prius Prime",
      "year": 2022,
      "price": "28,220",
      "Starting": " Starting MSRP",
      "dontknow": "54/133",
      "Estt": "Est. MPG  / MPGe",
      "shown": "$34,000 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/priusprime/base.png?bg=fff&fm=webp&q=90&w=768"
    },


    {
      "toplevel": "Truck",
      "name": "Tacoma",
      "year": 2022,
      "price": "$26,500",
      "Starting": " Starting MSRP",
      "dontknow": "18/22",
      "Estt": "Est. MPG",
      "shown": "$37,655 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/tacoma/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Hybrid",
      "name": "Corolla Hybrid",
      "year": 2022,
      "price": "23,650",
      "Starting": " Starting MSRP",
      "dontknow": "53/52",
      "Estt": "Est. MPG",
      "shown": "$24,075 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/corollahybrid/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    
    ,
    {
      "toplevel": "Hybrid",
      "name": "Camry Hybrid",
      "year": 2022,
      "price": "$27,380",
      "Starting": " Starting MSRP",
      "dontknow": "51/53",
      "Estt": "Est. MPG",
      "shown": "$32,820 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/camryhybrid/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Hybrid",
      "name": "RAV4 Hybrid",
      "year": 2021,
      "price": "$28,900",
      "Starting": " Starting MSRP",
      "dontknow": "41/38",
      "Estt": "Est. MPG",
      "shown": "$35,275 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/rav4hybrid/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    ,
    
    
    {
      "toplevel": "Plug-in Hybrid",
      "name": "RAV4 Prime",
      "year": 2021,
      "price": "$38,350",
      "Starting": " Starting MSRP",
      "dontknow": "38/94",
      "Estt": "Est. MPG",
      "shown": "$47,860 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/rav4prime/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Hybrid",
      "name": "Venza",
      "year": 2021,
      "price": "$32,670",
      "Starting": " Starting MSRP",
      "dontknow": "40/37",
      "Estt": "Est. MPG",
      "shown": "$40,000 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/venza/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Hybrid",
      "name": "Avalon Hybrid",
      "year": 2022,
      "price": "$37,250",
      "Starting": " Starting MSRP",
      "dontknow": "43/44",
      "Estt": "Est. MPG",
      "shown": "$40,600 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/avalonhybrid/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Hybrid",
      "name": "Highlander Hybrid",
      "year": 2022,
      "price": "$38,855",
      "Starting": " Starting MSRP",
      "dontknow": "36/35",
      "Estt": "Est. MPG",
      "shown": "$51,065 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/highlanderhybrid/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Fuel Cell Electric Vehicle",
      "name": "Mirai",
      "year": 2021,
      "price": "$49,500",
      "Starting": " Starting MSRP",
      "dontknow": "67/64",
      "Estt": "Est. MPG",
      "shown": "$66,425 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/mirai/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Hybrid",
      "name": "Sienna",
      "year": 2022,
      "price": "$34,560",
      "Starting": " Starting MSRP",
      "dontknow": "36/36",
      "Estt": "Est. MPG",
      "shown": "$43,525 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/sienna/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Truck",
      "name": "Tundra",
      "year": 2021,
      "price": "$34,025",
      "Starting": " Starting MSRP",
      "dontknow": "13/17",
      "Estt": "Est. MPG",
      "shown": "$47,655 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2021/tundra/base.png?bg=fff&fm=webp&q=90&w=768"
    }
    
    ,
    {
      "toplevel": "Hybrid",
      "name": "Prius",
      "year": 2022,
      "price": "24,525",
      "Starting": " Starting MSRP",
      "dontknow": "54/50",
      "Estt": "Est. MPG",
      "shown": "$33,760 as shown",
      "img": "https://www.toyota.com/imgix/content/dam/toyota/jellies/relative/2022/prius/base.png?bg=fff&fm=webp&q=90&w=768"
    }
  ]