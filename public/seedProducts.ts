export interface SeedProducts {
  results: Result[]
  pagination: Pagination
  facets: Facet[]
  freeTextSearch: string
  categoryCode: string
  rangeFacets: RangeFacet[]
  baseUrl: string
}

export interface Facet {
  code: string
  priority: number
  category: boolean
  multiSelect: boolean
  visible: boolean
  values: Value[]
}

export interface Value {
  code: string
  count: number
  selected: boolean
}

export interface Pagination {
  pageSize: number
  currentPage: number
  sort: string
  numberOfPages: number
  totalNumberOfResults: number
  totalNumberOfResultsUnfiltered: number
}

export interface RangeFacet {
  code: string
  range: Range
}

export interface Range {
  min: number
  max: number
  minSelected: number
  maxSelected: number
}

export interface Result {
  code: string
  name: string
  stock: Stock
  price: Price
  images: GalleryImage[]
  categories: any[]
  pk: string
  whitePrice: Price
  articles: Article[]
  visible: boolean
  concept: Concept[]
  numbersOfPieces: number
  defaultArticle: Article
  sale: boolean
  variantSizes: VariantSize[]
  swatches: any[]
  articleCodes: string[]
  ticket: string
  searchEngineProductId: string
  dummy: boolean
  linkPdp: string
  categoryName: CategoryName
  rgbColors: string[]
  articleColorNames: string[]
  ecoTaxValue: number
  swatchesTotal: number
  showPriceMarker: boolean
  redirectToPdp: boolean
  mainCategoryCode: string
  comingSoon: boolean
  brandName: BrandName
  galleryImages: GalleryImage[]
  allArticleCodes: string[]
  allArticleImages: string[]
  allArticleBaseImages: string[]
  redPrice?: Price
  sellingAttributes?: string[]
}

export interface Article {
  code: string
  name: string
  images: GalleryImage[]
  pk: string
  whitePrice: Price
  logoPicture: GalleryImage[]
  normalPicture: GalleryImage[]
  visible: boolean
  numbersOfPieces: number
  ticket: string
  dummy: boolean
  ecoTaxValue: number
  redirectToPdp: boolean
  comingSoon: boolean
  color: Color
  rgbColor: string
  genArticle: string
  turnToSku: string
  videoId?: string
  plpVideo?: boolean
  redPrice?: Price
  percentageDiscount?: string
  campaignMedia?: CampaignMedia
  sellingAttributes?: string[]
}

export interface CampaignMedia {
  url: string
  id: string
  author: string
  type: string
}

export interface Color {
  code: string
  text: string
  filterName: string
  hybrisCode: string
}

export interface GalleryImage {
  url: string
  baseUrl: string
}

export interface Price {
  currencyIso: CurrencyISO
  value: number
  priceType: PriceType
  formattedValue: string
  type: Type
}

export type CurrencyISO = 'USD'

export type PriceType = 'BUY'

export type Type = 'RED' | 'WHITE'

export type BrandName = 'H&M'

export type CategoryName = 'Men'

export type Concept = 'H&M MAN'

export interface Stock {
  stockLevel: number
}

export interface VariantSize {
  orderFilter: number
  filterCode: string
}

// ============================ PRODUCTS ============================

export const inicialData: SeedProducts = {
  results: [
    {
      code: '0713986_group_044',
      name: 'Slim Fit Jacket',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg'
        }
      ],
      categories: [],
      pk: '9349396201473',
      whitePrice: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0713986044',
          name: 'Slim Fit Jacket',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg'
            }
          ],
          pk: '9349130158081',
          whitePrice: {
            currencyIso: 'USD',
            value: 84.99,
            priceType: 'BUY',
            formattedValue: '$ 84.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c2/05/c2054128ce396b9efe2d06a79fe302c7568eb8a4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/c2/05/c2054128ce396b9efe2d06a79fe302c7568eb8a4.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c2/05/c2054128ce396b9efe2d06a79fe302c7568eb8a4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/c2/05/c2054128ce396b9efe2d06a79fe302c7568eb8a4.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNDRfZW5fdXM7MDcxMzk4NjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '713986044249',
          turnToSku: '0713986044002',
          videoId: 'c7e9d4cd01e3a120987becd612031de26b910426',
          plpVideo: false
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0713986044',
        name: 'Slim Fit Jacket',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg'
          }
        ],
        pk: '9349130158081',
        whitePrice: {
          currencyIso: 'USD',
          value: 84.99,
          priceType: 'BUY',
          formattedValue: '$ 84.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c2/05/c2054128ce396b9efe2d06a79fe302c7568eb8a4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/c2/05/c2054128ce396b9efe2d06a79fe302c7568eb8a4.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c2/05/c2054128ce396b9efe2d06a79fe302c7568eb8a4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/c2/05/c2054128ce396b9efe2d06a79fe302c7568eb8a4.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNDRfZW5fdXM7MDcxMzk4NjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '713986044249',
        turnToSku: '0713986044002',
        videoId: 'c7e9d4cd01e3a120987becd612031de26b910426',
        plpVideo: false
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2104,
          filterCode: '52R'
        },
        {
          orderFilter: 2103,
          filterCode: '50R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2102,
          filterCode: '48R'
        },
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        }
      ],
      swatches: [],
      articleCodes: ['0713986044', '0713986050'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNDRfZW5fdXM7MDcxMzk4NjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0713986_group_044_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0713986044.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#54586D'],
      articleColorNames: ['Black', 'Blue'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_blazers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/cd/83/cd839398dddb3f9b31f34981332364b5021e48f8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/6d/b9/6db91ea4fe6c1135724901c03e58ca2842e007ce.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/09/5e/095e6f8752923acda7d74e9f5d6bb1cdacc7dae0.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/cd/83/cd839398dddb3f9b31f34981332364b5021e48f8.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/b4/ba/b4ba7c1c04bac862eb24b344b622189aaddd75d9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/0a/7b/0a7b56987b3061479dec872eb334d20fe69817e5.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/91/9d913f88c65c579355a7bff46929b025f443a3fa.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/09/5e/095e6f8752923acda7d74e9f5d6bb1cdacc7dae0.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/6d/b9/6db91ea4fe6c1135724901c03e58ca2842e007ce.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/9d/91/9d913f88c65c579355a7bff46929b025f443a3fa.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/0a/7b/0a7b56987b3061479dec872eb334d20fe69817e5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/b4/ba/b4ba7c1c04bac862eb24b344b622189aaddd75d9.jpg'
        }
      ],
      allArticleCodes: ['0713986044', '0713986050'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg',
        'https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg'
      ]
    },
    {
      code: '0714026_group_044',
      name: 'Slim Fit Suit Pants',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg'
        }
      ],
      categories: [],
      pk: '9348604723201',
      whitePrice: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0714026044',
          name: 'Slim Fit Suit Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg'
            }
          ],
          pk: '9348089905153',
          whitePrice: {
            currencyIso: 'USD',
            value: 44.99,
            priceType: 'BUY',
            formattedValue: '$ 44.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/f4/9df4368d617304853417a12fda5b9f50fb2e4fd3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/9d/f4/9df4368d617304853417a12fda5b9f50fb2e4fd3.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/f4/9df4368d617304853417a12fda5b9f50fb2e4fd3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/9d/f4/9df4368d617304853417a12fda5b9f50fb2e4fd3.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAyNl9ncm91cF8wNDRfZW5fdXM7MDcxNDAyNjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '714026044249',
          turnToSku: '0714026044001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0714026044',
        name: 'Slim Fit Suit Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg'
          }
        ],
        pk: '9348089905153',
        whitePrice: {
          currencyIso: 'USD',
          value: 44.99,
          priceType: 'BUY',
          formattedValue: '$ 44.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/f4/9df4368d617304853417a12fda5b9f50fb2e4fd3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/9d/f4/9df4368d617304853417a12fda5b9f50fb2e4fd3.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/f4/9df4368d617304853417a12fda5b9f50fb2e4fd3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/9d/f4/9df4368d617304853417a12fda5b9f50fb2e4fd3.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAyNl9ncm91cF8wNDRfZW5fdXM7MDcxNDAyNjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '714026044249',
        turnToSku: '0714026044001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2093,
          filterCode: '32R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2094,
          filterCode: '33R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2092,
          filterCode: '30R'
        }
      ],
      swatches: [],
      articleCodes: ['0714026044', '0714026047', '0714026050', '0714026052'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAyNl9ncm91cF8wNDRfZW5fdXM7MDcxNDAyNjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0714026_group_044_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0714026044.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#4F453F', '#54586D', '#383A3D'],
      articleColorNames: [
        'Black',
        'Brown/plaid',
        'Dark blue',
        'Dark gray',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 5,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_trousers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/85/97/8597cf43660ec86c0fac7ad54f2d0003d8e986cb.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/18/1f/181f7a4125b7195b22898d93125424d62d60cb7c.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/6d/72/6d72011512d615e6c1ac52a8dae1f8afc61b3087.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/85/97/8597cf43660ec86c0fac7ad54f2d0003d8e986cb.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/77/4c/774cb6a4cbb71e263bbdb362daa5bc093218c722.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/77/4c/774cb6a4cbb71e263bbdb362daa5bc093218c722.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/1f/181f7a4125b7195b22898d93125424d62d60cb7c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/6d/72/6d72011512d615e6c1ac52a8dae1f8afc61b3087.jpg'
        }
      ],
      allArticleCodes: [
        '0714026044',
        '0714026047',
        '0714026050',
        '0714026052',
        '0714026054'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/32/35/3235ea676ab6ca5838d016635f79271879f3eb37.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/9e/23/9e23b124ab9b2c6ce8cb932ba871f240b0f4a5ef.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/50/b0/50b0d283dba13334af91d11ec9de1f2f9c6766c5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg',
        'https://image.hm.com/assets/hm/32/35/3235ea676ab6ca5838d016635f79271879f3eb37.jpg',
        'https://image.hm.com/assets/hm/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg',
        'https://image.hm.com/assets/hm/9e/23/9e23b124ab9b2c6ce8cb932ba871f240b0f4a5ef.jpg',
        'https://image.hm.com/assets/hm/50/b0/50b0d283dba13334af91d11ec9de1f2f9c6766c5.jpg'
      ]
    },
    {
      code: '0713986_group_050',
      name: 'Slim Fit Jacket',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg'
        }
      ],
      categories: [],
      pk: '9408505053185',
      whitePrice: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0713986050',
          name: 'Slim Fit Jacket',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg'
            }
          ],
          pk: '9384452816897',
          whitePrice: {
            currencyIso: 'USD',
            value: 84.99,
            priceType: 'BUY',
            formattedValue: '$ 84.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/b6/6e/b66e19eb2936db9fc93bf8e6576c9c6dc0880f06.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/b6/6e/b66e19eb2936db9fc93bf8e6576c9c6dc0880f06.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/b6/6e/b66e19eb2936db9fc93bf8e6576c9c6dc0880f06.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/b6/6e/b66e19eb2936db9fc93bf8e6576c9c6dc0880f06.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNTBfZW5fdXM7MDcxMzk4NjA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Blue',
            filterName: 'Blue_0000FF',
            hybrisCode: '76'
          },
          rgbColor: '#54586D',
          genArticle: '713986050238',
          turnToSku: '0713986050002'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0713986050',
        name: 'Slim Fit Jacket',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg'
          }
        ],
        pk: '9384452816897',
        whitePrice: {
          currencyIso: 'USD',
          value: 84.99,
          priceType: 'BUY',
          formattedValue: '$ 84.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/b6/6e/b66e19eb2936db9fc93bf8e6576c9c6dc0880f06.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/b6/6e/b66e19eb2936db9fc93bf8e6576c9c6dc0880f06.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/b6/6e/b66e19eb2936db9fc93bf8e6576c9c6dc0880f06.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/b6/6e/b66e19eb2936db9fc93bf8e6576c9c6dc0880f06.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNTBfZW5fdXM7MDcxMzk4NjA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Blue',
          filterName: 'Blue_0000FF',
          hybrisCode: '76'
        },
        rgbColor: '#54586D',
        genArticle: '713986050238',
        turnToSku: '0713986050002'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2104,
          filterCode: '52R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        },
        {
          orderFilter: 2103,
          filterCode: '50R'
        },
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        }
      ],
      swatches: [],
      articleCodes: ['0713986050', '0713986044'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNTBfZW5fdXM7MDcxMzk4NjA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0713986_group_050_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0713986050.html',
      categoryName: 'Men',
      rgbColors: ['#54586D', '#272628'],
      articleColorNames: ['Blue', 'Black'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_blazers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/95/4e95c0273a69ab406f3d1031c6d41f4a1d7a672a.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4e/95/4e95c0273a69ab406f3d1031c6d41f4a1d7a672a.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/79/1879d580ef1e5fee84da0234a379cba276058a27.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/67/b8/67b83ce00b5223c7b30c78374d0c1662305947f7.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/86/30/8630d4d6ce444881e8395bdeb81164750c64afff.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/43/c1/43c195c70250e26f7635c5ffb1f3df9ab9f8c54b.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/43/c1/43c195c70250e26f7635c5ffb1f3df9ab9f8c54b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/86/30/8630d4d6ce444881e8395bdeb81164750c64afff.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/67/b8/67b83ce00b5223c7b30c78374d0c1662305947f7.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/18/79/1879d580ef1e5fee84da0234a379cba276058a27.jpg'
        }
      ],
      allArticleCodes: ['0713986050', '0713986044'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg',
        'https://image.hm.com/assets/hm/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg'
      ]
    },
    {
      code: '0714026_group_050',
      name: 'Slim Fit Suit Pants',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg'
        }
      ],
      categories: [],
      pk: '9408705167361',
      whitePrice: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0714026050',
          name: 'Slim Fit Suit Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg'
            }
          ],
          pk: '9385318907905',
          whitePrice: {
            currencyIso: 'USD',
            value: 44.99,
            priceType: 'BUY',
            formattedValue: '$ 44.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c1/91/c191107789fdf3b95308b42605809c95de71eddd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/c1/91/c191107789fdf3b95308b42605809c95de71eddd.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c1/91/c191107789fdf3b95308b42605809c95de71eddd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/c1/91/c191107789fdf3b95308b42605809c95de71eddd.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAyNl9ncm91cF8wNTBfZW5fdXM7MDcxNDAyNjA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Dark blue',
            filterName: 'Blue_0000FF',
            hybrisCode: '76'
          },
          rgbColor: '#54586D',
          genArticle: '714026050238',
          turnToSku: '0714026050002'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0714026050',
        name: 'Slim Fit Suit Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg'
          }
        ],
        pk: '9385318907905',
        whitePrice: {
          currencyIso: 'USD',
          value: 44.99,
          priceType: 'BUY',
          formattedValue: '$ 44.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c1/91/c191107789fdf3b95308b42605809c95de71eddd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/c1/91/c191107789fdf3b95308b42605809c95de71eddd.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c1/91/c191107789fdf3b95308b42605809c95de71eddd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/c1/91/c191107789fdf3b95308b42605809c95de71eddd.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAyNl9ncm91cF8wNTBfZW5fdXM7MDcxNDAyNjA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Dark blue',
          filterName: 'Blue_0000FF',
          hybrisCode: '76'
        },
        rgbColor: '#54586D',
        genArticle: '714026050238',
        turnToSku: '0714026050002'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2094,
          filterCode: '33R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2092,
          filterCode: '30R'
        },
        {
          orderFilter: 2093,
          filterCode: '32R'
        }
      ],
      swatches: [],
      articleCodes: ['0714026050', '0714026044', '0714026047', '0714026052'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAyNl9ncm91cF8wNTBfZW5fdXM7MDcxNDAyNjA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0714026_group_050_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0714026050.html',
      categoryName: 'Men',
      rgbColors: ['#54586D', '#272628', '#4F453F', '#383A3D'],
      articleColorNames: [
        'Dark blue',
        'Black',
        'Brown/plaid',
        'Dark gray',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 5,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_trousers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/0c/46/0c46534d5749d8a63e9fe834fd34b09b063324b6.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/14/20/1420059e18da28f67ccc38c5e1ba5181cb972143.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/14/20/1420059e18da28f67ccc38c5e1ba5181cb972143.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/e5/54/e55468b97118e9585af127506c30cdb7437a2720.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/6c/fc/6cfc27479b6ce191f1ee81752670705464286aca.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/0c/46/0c46534d5749d8a63e9fe834fd34b09b063324b6.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/e5/54/e55468b97118e9585af127506c30cdb7437a2720.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/6c/fc/6cfc27479b6ce191f1ee81752670705464286aca.jpg'
        }
      ],
      allArticleCodes: [
        '0714026050',
        '0714026044',
        '0714026047',
        '0714026052',
        '0714026054'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/32/35/3235ea676ab6ca5838d016635f79271879f3eb37.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/9e/23/9e23b124ab9b2c6ce8cb932ba871f240b0f4a5ef.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/50/b0/50b0d283dba13334af91d11ec9de1f2f9c6766c5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/a4/32/a43255f60a4afe35803978e791b009f025e6de44.jpg',
        'https://image.hm.com/assets/hm/4f/98/4f98ad3035582e330f5a20dd641ddfdaae7e5e4e.jpg',
        'https://image.hm.com/assets/hm/32/35/3235ea676ab6ca5838d016635f79271879f3eb37.jpg',
        'https://image.hm.com/assets/hm/9e/23/9e23b124ab9b2c6ce8cb932ba871f240b0f4a5ef.jpg',
        'https://image.hm.com/assets/hm/50/b0/50b0d283dba13334af91d11ec9de1f2f9c6766c5.jpg'
      ]
    },
    {
      code: '1074402_group_001',
      name: 'Slim Fit Cotton Twill Pants',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 24.99,
        priceType: 'BUY',
        formattedValue: '$ 24.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/75/8f/758f01016925f44055e35a931f7b54473266bd79.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/75/8f/758f01016925f44055e35a931f7b54473266bd79.jpg'
        }
      ],
      categories: [],
      pk: '9415871234049',
      whitePrice: {
        currencyIso: 'USD',
        value: 24.99,
        priceType: 'BUY',
        formattedValue: '$ 24.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1074402001',
          name: 'Slim Fit Cotton Twill Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/75/8f/758f01016925f44055e35a931f7b54473266bd79.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/75/8f/758f01016925f44055e35a931f7b54473266bd79.jpg'
            }
          ],
          pk: '9397730017281',
          whitePrice: {
            currencyIso: 'USD',
            value: 24.99,
            priceType: 'BUY',
            formattedValue: '$ 24.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/d3/15/d3153d75428c634dc0c9b1d07df9f96aa377431f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/d3/15/d3153d75428c634dc0c9b1d07df9f96aa377431f.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/d3/15/d3153d75428c634dc0c9b1d07df9f96aa377431f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/d3/15/d3153d75428c634dc0c9b1d07df9f96aa377431f.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwMl9ncm91cF8wMDFfZW5fdXM7MTA3NDQwMjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '074402001249',
          turnToSku: '1074402001012'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1074402001',
        name: 'Slim Fit Cotton Twill Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/75/8f/758f01016925f44055e35a931f7b54473266bd79.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/75/8f/758f01016925f44055e35a931f7b54473266bd79.jpg'
          }
        ],
        pk: '9397730017281',
        whitePrice: {
          currencyIso: 'USD',
          value: 24.99,
          priceType: 'BUY',
          formattedValue: '$ 24.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/d3/15/d3153d75428c634dc0c9b1d07df9f96aa377431f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/d3/15/d3153d75428c634dc0c9b1d07df9f96aa377431f.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/d3/15/d3153d75428c634dc0c9b1d07df9f96aa377431f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/d3/15/d3153d75428c634dc0c9b1d07df9f96aa377431f.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwMl9ncm91cF8wMDFfZW5fdXM7MTA3NDQwMjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '074402001249',
        turnToSku: '1074402001012'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 1443,
          filterCode: '40/32'
        },
        {
          orderFilter: 1436,
          filterCode: '38/30'
        },
        {
          orderFilter: 1426,
          filterCode: '34/32'
        },
        {
          orderFilter: 1408,
          filterCode: '31/32'
        },
        {
          orderFilter: 1402,
          filterCode: '30/32'
        },
        {
          orderFilter: 76,
          filterCode: '28'
        },
        {
          orderFilter: 1432,
          filterCode: '36/32'
        },
        {
          orderFilter: 94,
          filterCode: '34'
        },
        {
          orderFilter: 88,
          filterCode: '32'
        },
        {
          orderFilter: 1419,
          filterCode: '33/30'
        },
        {
          orderFilter: 1437,
          filterCode: '38/32'
        },
        {
          orderFilter: 1407,
          filterCode: '31/30'
        },
        {
          orderFilter: 1425,
          filterCode: '34/30'
        },
        {
          orderFilter: 1448,
          filterCode: '42/32'
        },
        {
          orderFilter: 1433,
          filterCode: '36/34'
        },
        {
          orderFilter: 1454,
          filterCode: '44/32'
        },
        {
          orderFilter: 101,
          filterCode: '36'
        },
        {
          orderFilter: 82,
          filterCode: '30'
        },
        {
          orderFilter: 1438,
          filterCode: '38/34'
        },
        {
          orderFilter: 111,
          filterCode: '40'
        },
        {
          orderFilter: 1396,
          filterCode: '29/30'
        },
        {
          orderFilter: 1401,
          filterCode: '30/30'
        },
        {
          orderFilter: 117,
          filterCode: '42'
        },
        {
          orderFilter: 1427,
          filterCode: '34/34'
        },
        {
          orderFilter: 1421,
          filterCode: '33/34'
        },
        {
          orderFilter: 1420,
          filterCode: '33/32'
        },
        {
          orderFilter: 91,
          filterCode: '33'
        },
        {
          orderFilter: 1415,
          filterCode: '32/34'
        },
        {
          orderFilter: 1414,
          filterCode: '32/32'
        },
        {
          orderFilter: 1392,
          filterCode: '28/32'
        },
        {
          orderFilter: 106,
          filterCode: '38'
        },
        {
          orderFilter: 79,
          filterCode: '29'
        },
        {
          orderFilter: 85,
          filterCode: '31'
        },
        {
          orderFilter: 1413,
          filterCode: '32/30'
        },
        {
          orderFilter: 1431,
          filterCode: '36/30'
        }
      ],
      swatches: [],
      articleCodes: ['1074402001', '1074402002', '1074402003', '1074402004'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwMl9ncm91cF8wMDFfZW5fdXM7MTA3NDQwMjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '1074402_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1074402001.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#393A45', '#383A3D', '#57564B'],
      articleColorNames: [
        'Black',
        'Navy blue',
        'Dark gray',
        'Khaki green',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 8,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_trousers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/be/a7/bea775a54309754136719ff8e274697662fd2433.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/63/b7/63b7201e31763bfd6dd3362e8b885d4af986a657.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/3d/68/3d68e43efc812ec56ecde8e28de137755613f4f2.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/be/a7/bea775a54309754136719ff8e274697662fd2433.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/72/79/7279b7c5cac94e4749d0fd7c7fc230a6504795a5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/3d/68/3d68e43efc812ec56ecde8e28de137755613f4f2.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/63/b7/63b7201e31763bfd6dd3362e8b885d4af986a657.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/72/79/7279b7c5cac94e4749d0fd7c7fc230a6504795a5.jpg'
        }
      ],
      allArticleCodes: [
        '1074402001',
        '1074402002',
        '1074402003',
        '1074402004',
        '1074402005',
        '1074402006',
        '1074402008',
        '1074402014'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/75/8f/758f01016925f44055e35a931f7b54473266bd79.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/af/0e/af0e72d9d59fa303d86f0238f0b2da3e8c665a60.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/02/04/020488877879b6c1b14c2b419a723f6351f6d044.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d8/04/d804da211fd59765ed477a77f676c79f9f4863c8.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e5/d6/e5d60951ab9b6ae368986ceec417fd86a7fa8803.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d9/b0/d9b0ef8759858d08b00213d50b2cf3d07ad51a0b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ee/be/eebe9270965f6d47cf875961ce6a73764393d5f5.jpg],origin[dam],category[men_trousers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/06/c5/06c5fdaed6759685f31373d6ae1d78d5005d0573.jpg],origin[dam],category[men_trousers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/75/8f/758f01016925f44055e35a931f7b54473266bd79.jpg',
        'https://image.hm.com/assets/hm/af/0e/af0e72d9d59fa303d86f0238f0b2da3e8c665a60.jpg',
        'https://image.hm.com/assets/hm/02/04/020488877879b6c1b14c2b419a723f6351f6d044.jpg',
        'https://image.hm.com/assets/hm/d8/04/d804da211fd59765ed477a77f676c79f9f4863c8.jpg',
        'https://image.hm.com/assets/hm/e5/d6/e5d60951ab9b6ae368986ceec417fd86a7fa8803.jpg',
        'https://image.hm.com/assets/hm/d9/b0/d9b0ef8759858d08b00213d50b2cf3d07ad51a0b.jpg',
        'https://image.hm.com/assets/hm/ee/be/eebe9270965f6d47cf875961ce6a73764393d5f5.jpg',
        'https://image.hm.com/assets/hm/06/c5/06c5fdaed6759685f31373d6ae1d78d5005d0573.jpg'
      ]
    },
    {
      code: '0839915_group_027',
      name: 'Slim Fit Suit Vest',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/83/1883aeaea422e4e7d95e3cf595481c225037878a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/18/83/1883aeaea422e4e7d95e3cf595481c225037878a.jpg'
        }
      ],
      categories: [],
      pk: '9349397282817',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0839915027',
          name: 'Slim Fit Suit Vest',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/83/1883aeaea422e4e7d95e3cf595481c225037878a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/18/83/1883aeaea422e4e7d95e3cf595481c225037878a.jpg'
            }
          ],
          pk: '9349135073281',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/31/b2/31b2e6c7dfed0e58a28e3841a40e3041f00a587c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/31/b2/31b2e6c7dfed0e58a28e3841a40e3041f00a587c.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/31/b2/31b2e6c7dfed0e58a28e3841a40e3041f00a587c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/31/b2/31b2e6c7dfed0e58a28e3841a40e3041f00a587c.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDgzOTkxNV9ncm91cF8wMjdfZW5fdXM7MDgzOTkxNTAyN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '839915027249',
          turnToSku: '0839915027002'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0839915027',
        name: 'Slim Fit Suit Vest',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/83/1883aeaea422e4e7d95e3cf595481c225037878a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/18/83/1883aeaea422e4e7d95e3cf595481c225037878a.jpg'
          }
        ],
        pk: '9349135073281',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/31/b2/31b2e6c7dfed0e58a28e3841a40e3041f00a587c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/31/b2/31b2e6c7dfed0e58a28e3841a40e3041f00a587c.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/31/b2/31b2e6c7dfed0e58a28e3841a40e3041f00a587c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/31/b2/31b2e6c7dfed0e58a28e3841a40e3041f00a587c.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDgzOTkxNV9ncm91cF8wMjdfZW5fdXM7MDgzOTkxNTAyN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '839915027249',
        turnToSku: '0839915027002'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2103,
          filterCode: '50R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2102,
          filterCode: '48R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2104,
          filterCode: '52R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        }
      ],
      swatches: [],
      articleCodes: ['0839915027', '0839915029'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDgzOTkxNV9ncm91cF8wMjdfZW5fdXM7MDgzOTkxNTAyN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0839915_group_027_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0839915027.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#454553'],
      articleColorNames: ['Black', 'Dark blue'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_blazers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/53/1e/531e2f22c5b5eeac93ddadceaed221d348bc9efa.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/21/8d/218d3c1060bcdc5c6515c9828a878499df06fc7b.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/af/e4/afe4036442818d76cad82d4943a376cf9f8bda74.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/53/1e/531e2f22c5b5eeac93ddadceaed221d348bc9efa.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/8d/218d3c1060bcdc5c6515c9828a878499df06fc7b.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c6/be/c6be7fc5b872bd07e0393973603c376d9da1e9fa.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c6/be/c6be7fc5b872bd07e0393973603c376d9da1e9fa.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/b3/f7/b3f719f39a843846d39503e7c6775ee275d107f7.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/b3/f7/b3f719f39a843846d39503e7c6775ee275d107f7.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/af/e4/afe4036442818d76cad82d4943a376cf9f8bda74.jpg'
        }
      ],
      allArticleCodes: ['0839915027', '0839915029'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/18/83/1883aeaea422e4e7d95e3cf595481c225037878a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/75/ae/75ae80947af8a89f7897626231ce3c31a6f35b79.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/18/83/1883aeaea422e4e7d95e3cf595481c225037878a.jpg',
        'https://image.hm.com/assets/hm/75/ae/75ae80947af8a89f7897626231ce3c31a6f35b79.jpg'
      ]
    },
    {
      code: '0875217_group_048',
      name: 'Overshirt',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 39.99,
        priceType: 'BUY',
        formattedValue: '$ 39.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg'
        }
      ],
      categories: [],
      pk: '9514218061825',
      whitePrice: {
        currencyIso: 'USD',
        value: 39.99,
        priceType: 'BUY',
        formattedValue: '$ 39.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0875217048',
          name: 'Overshirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg'
            }
          ],
          pk: '9479146176513',
          whitePrice: {
            currencyIso: 'USD',
            value: 39.99,
            priceType: 'BUY',
            formattedValue: '$ 39.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/69/49698e815b8711f4d647c6e9e6542389364f4361.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/49/69/49698e815b8711f4d647c6e9e6542389364f4361.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/69/49698e815b8711f4d647c6e9e6542389364f4361.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/49/69/49698e815b8711f4d647c6e9e6542389364f4361.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3NTIxN19ncm91cF8wNDhfZW5fdXM7MDg3NTIxNzA0OF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FF0000',
            text: 'Dark red/plaid',
            filterName: 'Multi_000000,Red_FF0000',
            hybrisCode: '49'
          },
          rgbColor: '#503640',
          genArticle: '875217048238',
          turnToSku: '0875217048001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0875217048',
        name: 'Overshirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg'
          }
        ],
        pk: '9479146176513',
        whitePrice: {
          currencyIso: 'USD',
          value: 39.99,
          priceType: 'BUY',
          formattedValue: '$ 39.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/69/49698e815b8711f4d647c6e9e6542389364f4361.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/49/69/49698e815b8711f4d647c6e9e6542389364f4361.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/69/49698e815b8711f4d647c6e9e6542389364f4361.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/49/69/49698e815b8711f4d647c6e9e6542389364f4361.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3NTIxN19ncm91cF8wNDhfZW5fdXM7MDg3NTIxNzA0OF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FF0000',
          text: 'Dark red/plaid',
          filterName: 'Multi_000000,Red_FF0000',
          hybrisCode: '49'
        },
        rgbColor: '#503640',
        genArticle: '875217048238',
        turnToSku: '0875217048001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        }
      ],
      swatches: [],
      articleCodes: ['0875217048', '0875217043', '0875217046', '0875217052'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3NTIxN19ncm91cF8wNDhfZW5fdXM7MDg3NTIxNzA0OF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0875217_group_048_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0875217048.html',
      categoryName: 'Men',
      rgbColors: ['#503640', '#33363A', '#987E60', '#383A43'],
      articleColorNames: [
        'Dark red/plaid',
        'Black/plaid',
        'Mustard yellow/plaid',
        'Black/white checked',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 5,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_jacketscoats_shirtjackets',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/8c/d0/8cd0888a3ec6821359d8c3973d96e2841667598e.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/67/d7/67d7ba9a255a849677531af6502185ca3f28e76d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/97/c5974bc979c0abda6ccb5e580205c1c737eebb32.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/8c/d0/8cd0888a3ec6821359d8c3973d96e2841667598e.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/67/d7/67d7ba9a255a849677531af6502185ca3f28e76d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c5/97/c5974bc979c0abda6ccb5e580205c1c737eebb32.jpg'
        }
      ],
      allArticleCodes: [
        '0875217048',
        '0875217043',
        '0875217046',
        '0875217052',
        '0875217054'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/7e/dd/7eddd2915739c10b4ec1b19e940dc03075058283.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d3/a8/d3a8402beddb224eb4615a05bf10132c455a2156.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e6/d6/e6d6388d994983e4ee4e515bbe861c73005081f6.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg',
        'https://image.hm.com/assets/hm/7e/dd/7eddd2915739c10b4ec1b19e940dc03075058283.jpg',
        'https://image.hm.com/assets/hm/d3/a8/d3a8402beddb224eb4615a05bf10132c455a2156.jpg',
        'https://image.hm.com/assets/hm/e6/d6/e6d6388d994983e4ee4e515bbe861c73005081f6.jpg',
        'https://image.hm.com/assets/hm/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg'
      ]
    },
    {
      code: '0714032_group_047',
      name: 'Skinny Fit Suit Pants',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg'
        }
      ],
      categories: [],
      pk: '9495992565761',
      whitePrice: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0714032047',
          name: 'Skinny Fit Suit Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg'
            }
          ],
          pk: '9470778736641',
          whitePrice: {
            currencyIso: 'USD',
            value: 44.99,
            priceType: 'BUY',
            formattedValue: '$ 44.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/91/9d91035b20bbbb88f8d85cb52416d3ff9fd49d21.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/9d/91/9d91035b20bbbb88f8d85cb52416d3ff9fd49d21.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/91/9d91035b20bbbb88f8d85cb52416d3ff9fd49d21.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/9d/91/9d91035b20bbbb88f8d85cb52416d3ff9fd49d21.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wNDdfZW5fdXM7MDcxNDAzMjA0N19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FF0000',
            text: 'Burgundy',
            filterName: 'Red_FF0000',
            hybrisCode: '49'
          },
          rgbColor: '#330F1A',
          genArticle: '714032047249',
          turnToSku: '0714032047002'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0714032047',
        name: 'Skinny Fit Suit Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg'
          }
        ],
        pk: '9470778736641',
        whitePrice: {
          currencyIso: 'USD',
          value: 44.99,
          priceType: 'BUY',
          formattedValue: '$ 44.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/91/9d91035b20bbbb88f8d85cb52416d3ff9fd49d21.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/9d/91/9d91035b20bbbb88f8d85cb52416d3ff9fd49d21.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/91/9d91035b20bbbb88f8d85cb52416d3ff9fd49d21.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/9d/91/9d91035b20bbbb88f8d85cb52416d3ff9fd49d21.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wNDdfZW5fdXM7MDcxNDAzMjA0N19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FF0000',
          text: 'Burgundy',
          filterName: 'Red_FF0000',
          hybrisCode: '49'
        },
        rgbColor: '#330F1A',
        genArticle: '714032047249',
        turnToSku: '0714032047002'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2093,
          filterCode: '32R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        },
        {
          orderFilter: 2094,
          filterCode: '33R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        }
      ],
      swatches: [],
      articleCodes: ['0714032047', '0714032013', '0714032024', '0714032036'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wNDdfZW5fdXM7MDcxNDAzMjA0N19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0714032_group_047_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0714032047.html',
      categoryName: 'Men',
      rgbColors: ['#330F1A', '#330F1A', '#62615E', '#383A3D'],
      articleColorNames: [
        'Burgundy',
        'Burgundy',
        'Gray',
        'Gray/plaid',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 8,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_trousers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c1/f2/c1f2007a2c0d463dcbdd330603b5c2167c504749.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/fd/ce/fdce9aa6e7be89ed53b2479b4d0bfaadae8aa0ae.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/33/ca/33ca65a7b9516f9b3448d2099c0b702184473bec.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f2/40/f240ba0f7ec8dc9e22c7a840c604d5cff46e4762.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/fd/ce/fdce9aa6e7be89ed53b2479b4d0bfaadae8aa0ae.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/5b/57/5b574aa214832a8d0e33ee9efb37ea08ccf0e1f3.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/57/5b574aa214832a8d0e33ee9efb37ea08ccf0e1f3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c1/f2/c1f2007a2c0d463dcbdd330603b5c2167c504749.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f2/40/f240ba0f7ec8dc9e22c7a840c604d5cff46e4762.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/33/ca/33ca65a7b9516f9b3448d2099c0b702184473bec.jpg'
        }
      ],
      allArticleCodes: [
        '0714032047',
        '0714032013',
        '0714032024',
        '0714032036',
        '0714032037',
        '0714032038',
        '0714032043',
        '0714032048'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/4f/4f/4f4f07846d4af0e3cbe1eb8ad64ab401bb09d94c.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/89/a5/89a5f31b9673f5cabc8cae9cf4c429153f8ced9f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/07/a0/07a0e97919758d1375a7cb4bc2c18dfdf7597719.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/8f/85/8f85540515140c3d2f464ce78d77a9bfe163472b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/63/b4/63b40ee7b2e4a89284276d0e1fa652de8fa558a1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg',
        'https://image.hm.com/assets/hm/4f/4f/4f4f07846d4af0e3cbe1eb8ad64ab401bb09d94c.jpg',
        'https://image.hm.com/assets/hm/89/a5/89a5f31b9673f5cabc8cae9cf4c429153f8ced9f.jpg',
        'https://image.hm.com/assets/hm/07/a0/07a0e97919758d1375a7cb4bc2c18dfdf7597719.jpg',
        'https://image.hm.com/assets/hm/8f/85/8f85540515140c3d2f464ce78d77a9bfe163472b.jpg',
        'https://image.hm.com/assets/hm/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg',
        'https://image.hm.com/assets/hm/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg',
        'https://image.hm.com/assets/hm/63/b4/63b40ee7b2e4a89284276d0e1fa652de8fa558a1.jpg'
      ]
    },
    {
      code: '0713995_group_028',
      name: 'Skinny Fit Jacket',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 50.99,
        priceType: 'BUY',
        formattedValue: '$ 50.99',
        type: 'RED'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg'
        }
      ],
      categories: [],
      pk: '9296472047617',
      whitePrice: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      redPrice: {
        currencyIso: 'USD',
        value: 50.99,
        priceType: 'BUY',
        formattedValue: '$ 50.99',
        type: 'RED'
      },
      articles: [
        {
          code: '0713995028',
          name: 'Skinny Fit Jacket',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg'
            }
          ],
          pk: '9295768027137',
          whitePrice: {
            currencyIso: 'USD',
            value: 84.99,
            priceType: 'BUY',
            formattedValue: '$ 84.99',
            type: 'WHITE'
          },
          redPrice: {
            currencyIso: 'USD',
            value: 50.99,
            priceType: 'BUY',
            formattedValue: '$ 50.99',
            type: 'RED'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wMjhfZW5fdXM7MDcxMzk5NTAyOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '808080',
            text: 'Gray',
            filterName: 'Gray_808080',
            hybrisCode: '07'
          },
          rgbColor: '#62615E',
          genArticle: '713995028237',
          percentageDiscount: '-40%',
          turnToSku: '0713995028001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0713995028',
        name: 'Skinny Fit Jacket',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg'
          }
        ],
        pk: '9295768027137',
        whitePrice: {
          currencyIso: 'USD',
          value: 84.99,
          priceType: 'BUY',
          formattedValue: '$ 84.99',
          type: 'WHITE'
        },
        redPrice: {
          currencyIso: 'USD',
          value: 50.99,
          priceType: 'BUY',
          formattedValue: '$ 50.99',
          type: 'RED'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wMjhfZW5fdXM7MDcxMzk5NTAyOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '808080',
          text: 'Gray',
          filterName: 'Gray_808080',
          hybrisCode: '07'
        },
        rgbColor: '#62615E',
        genArticle: '713995028237',
        percentageDiscount: '-40%',
        turnToSku: '0713995028001'
      },
      sale: true,
      variantSizes: [
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2103,
          filterCode: '50R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2104,
          filterCode: '52R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        }
      ],
      swatches: [],
      articleCodes: ['0713995028', '0713995043', '0713995045', '0713995046'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wMjhfZW5fdXM7MDcxMzk5NTAyOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0713995_group_028_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0713995028.html',
      categoryName: 'Men',
      rgbColors: ['#62615E', '#272628', '#383A3D', '#343649'],
      articleColorNames: [
        'Gray',
        'Black',
        'Gray/plaid',
        'Dark blue',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_blazers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bf/07/bf07f4408b58b09bc69dbd71b80715e2cedf0970.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/bf/07/bf07f4408b58b09bc69dbd71b80715e2cedf0970.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f7/77/f777332aa6c389a737662b2c043a76a93f33c692.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f7/77/f777332aa6c389a737662b2c043a76a93f33c692.jpg'
        }
      ],
      allArticleCodes: [
        '0713995028',
        '0713995043',
        '0713995045',
        '0713995046',
        '0713995050',
        '0713995055'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/39/f0/39f053c1df9bff06e66d79e3a972198f7ad5c86d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ad/f0/adf00140fbc69296df63a034ece4a60daa5649b7.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/c8/68/c868db5bd11c4e747aff81bdae1d21da5b6a6a23.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg',
        'https://image.hm.com/assets/hm/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg',
        'https://image.hm.com/assets/hm/39/f0/39f053c1df9bff06e66d79e3a972198f7ad5c86d.jpg',
        'https://image.hm.com/assets/hm/ad/f0/adf00140fbc69296df63a034ece4a60daa5649b7.jpg',
        'https://image.hm.com/assets/hm/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg',
        'https://image.hm.com/assets/hm/c8/68/c868db5bd11c4e747aff81bdae1d21da5b6a6a23.jpg'
      ]
    },
    {
      code: '0713995_group_043',
      name: 'Skinny Fit Jacket',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg'
        }
      ],
      categories: [],
      pk: '9349396135937',
      whitePrice: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0713995043',
          name: 'Skinny Fit Jacket',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg'
            }
          ],
          pk: '9349134385153',
          whitePrice: {
            currencyIso: 'USD',
            value: 84.99,
            priceType: 'BUY',
            formattedValue: '$ 84.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/54/0f/540f08dc3fc3af97db90da6ca5d072c6b14864de.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/54/0f/540f08dc3fc3af97db90da6ca5d072c6b14864de.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/54/0f/540f08dc3fc3af97db90da6ca5d072c6b14864de.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/54/0f/540f08dc3fc3af97db90da6ca5d072c6b14864de.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wNDNfZW5fdXM7MDcxMzk5NTA0M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '713995043249',
          turnToSku: '0713995043002',
          videoId: '292987985f955977122a95dd291979656a93b12a',
          plpVideo: false
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0713995043',
        name: 'Skinny Fit Jacket',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg'
          }
        ],
        pk: '9349134385153',
        whitePrice: {
          currencyIso: 'USD',
          value: 84.99,
          priceType: 'BUY',
          formattedValue: '$ 84.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/54/0f/540f08dc3fc3af97db90da6ca5d072c6b14864de.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/54/0f/540f08dc3fc3af97db90da6ca5d072c6b14864de.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/54/0f/540f08dc3fc3af97db90da6ca5d072c6b14864de.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/54/0f/540f08dc3fc3af97db90da6ca5d072c6b14864de.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wNDNfZW5fdXM7MDcxMzk5NTA0M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '713995043249',
        turnToSku: '0713995043002',
        videoId: '292987985f955977122a95dd291979656a93b12a',
        plpVideo: false
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        },
        {
          orderFilter: 2102,
          filterCode: '48R'
        },
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2103,
          filterCode: '50R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2104,
          filterCode: '52R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        }
      ],
      swatches: [],
      articleCodes: ['0713995043', '0713995028', '0713995045', '0713995046'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wNDNfZW5fdXM7MDcxMzk5NTA0M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0713995_group_043_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0713995043.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#62615E', '#383A3D', '#343649'],
      articleColorNames: [
        'Black',
        'Gray',
        'Gray/plaid',
        'Dark blue',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_blazers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/37/c3/37c342c8345200723f99c0552b6c136f9ddc0389.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/83/e9/83e9fd280f18eb8d687ee3a66cd9b146103cd5ff.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a2/cd/a2cdb7ce5b819e2271267fb3d2039ebc5517eb05.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c6/b4/c6b4d03e0b105c77ef2cd4330ac46a4267c7ce55.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bf/3f/bf3f9731f99f80a3e6e7cd41bcfae2ce12965d01.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/37/c3/37c342c8345200723f99c0552b6c136f9ddc0389.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/d7/05/d705129f44b70dc0d93d2ded019cf614821fba7c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/d7/05/d705129f44b70dc0d93d2ded019cf614821fba7c.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c6/b4/c6b4d03e0b105c77ef2cd4330ac46a4267c7ce55.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/bf/3f/bf3f9731f99f80a3e6e7cd41bcfae2ce12965d01.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/83/e9/83e9fd280f18eb8d687ee3a66cd9b146103cd5ff.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a2/cd/a2cdb7ce5b819e2271267fb3d2039ebc5517eb05.jpg'
        }
      ],
      allArticleCodes: [
        '0713995043',
        '0713995028',
        '0713995045',
        '0713995046',
        '0713995050',
        '0713995055'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/39/f0/39f053c1df9bff06e66d79e3a972198f7ad5c86d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ad/f0/adf00140fbc69296df63a034ece4a60daa5649b7.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/c8/68/c868db5bd11c4e747aff81bdae1d21da5b6a6a23.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg',
        'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg',
        'https://image.hm.com/assets/hm/39/f0/39f053c1df9bff06e66d79e3a972198f7ad5c86d.jpg',
        'https://image.hm.com/assets/hm/ad/f0/adf00140fbc69296df63a034ece4a60daa5649b7.jpg',
        'https://image.hm.com/assets/hm/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg',
        'https://image.hm.com/assets/hm/c8/68/c868db5bd11c4e747aff81bdae1d21da5b6a6a23.jpg'
      ]
    },
    {
      code: '0715828_group_013',
      name: 'Slim Fit Fine-knit Turtleneck Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg'
        }
      ],
      categories: [],
      pk: '9229040484353',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0715828013',
          name: 'Slim Fit Fine-knit Turtleneck Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg'
            }
          ],
          pk: '9212972728321',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/34/cd/34cd05c562b6e00ae3e353cc3e7ee1fd11c8eff1.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/34/cd/34cd05c562b6e00ae3e353cc3e7ee1fd11c8eff1.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/34/cd/34cd05c562b6e00ae3e353cc3e7ee1fd11c8eff1.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/34/cd/34cd05c562b6e00ae3e353cc3e7ee1fd11c8eff1.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wMTNfZW5fdXM7MDcxNTgyODAxM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          campaignMedia: {
            url: 'https://photorankmedia-a.akamaihd.net/media/g/a/b/gabenw4/mobile.jpg',
            id: '3742022078',
            author: 'nayab_malik11',
            type: 'CAMPAIGN'
          },
          rgbColor: '#272628',
          genArticle: '715828013238',
          turnToSku: '0715828013001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0715828013',
        name: 'Slim Fit Fine-knit Turtleneck Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg'
          }
        ],
        pk: '9212972728321',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/34/cd/34cd05c562b6e00ae3e353cc3e7ee1fd11c8eff1.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/34/cd/34cd05c562b6e00ae3e353cc3e7ee1fd11c8eff1.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/34/cd/34cd05c562b6e00ae3e353cc3e7ee1fd11c8eff1.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/34/cd/34cd05c562b6e00ae3e353cc3e7ee1fd11c8eff1.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wMTNfZW5fdXM7MDcxNTgyODAxM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        campaignMedia: {
          url: 'https://photorankmedia-a.akamaihd.net/media/g/a/b/gabenw4/mobile.jpg',
          id: '3742022078',
          author: 'nayab_malik11',
          type: 'CAMPAIGN'
        },
        rgbColor: '#272628',
        genArticle: '715828013238',
        turnToSku: '0715828013001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        }
      ],
      swatches: [],
      articleCodes: ['0715828013', '0715828011', '0715828059', '0715828060'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wMTNfZW5fdXM7MDcxNTgyODAxM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0715828_group_013_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0715828013.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#ECEBE9', '#A9A398', '#4E4031'],
      articleColorNames: [
        'Black',
        'White',
        'Taupe',
        'Brown melange',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: true,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f3/2e/f32ecb74873801a18586e050a3b5565d24627403.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f3/2e/f32ecb74873801a18586e050a3b5565d24627403.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/31/63/3163eca5a38f12d9821a1a170434f23c6a7b76b5.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/31/63/3163eca5a38f12d9821a1a170434f23c6a7b76b5.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4f/10/4f10d2320711e9c015932929bd77aeb800758415.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c7/3f/c73f6653a74fe5b70b22a9598d6bfb03e80ed76c.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/8e/a3/8ea3a8014fef2acb9eaf16a3478b49b71205a06d.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/8e/a3/8ea3a8014fef2acb9eaf16a3478b49b71205a06d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c7/3f/c73f6653a74fe5b70b22a9598d6bfb03e80ed76c.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4f/10/4f10d2320711e9c015932929bd77aeb800758415.jpg'
        }
      ],
      allArticleCodes: [
        '0715828013',
        '0715828011',
        '0715828059',
        '0715828060',
        '0715828061',
        '0715828074'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/5a/f0/5af023c621244c79271da10e230ed19917fcd8ec.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/2f/cd/2fcd1d46dae4423ba067ca1491d2a20edd1b0a99.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/0a/01/0a0120563a64158289de28e282b93bfb93ec2dcd.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg',
        'https://image.hm.com/assets/hm/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg',
        'https://image.hm.com/assets/hm/5a/f0/5af023c621244c79271da10e230ed19917fcd8ec.jpg',
        'https://image.hm.com/assets/hm/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg',
        'https://image.hm.com/assets/hm/2f/cd/2fcd1d46dae4423ba067ca1491d2a20edd1b0a99.jpg',
        'https://image.hm.com/assets/hm/0a/01/0a0120563a64158289de28e282b93bfb93ec2dcd.jpg'
      ]
    },
    {
      code: '0714032_group_038',
      name: 'Skinny Fit Suit Pants',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg'
        }
      ],
      categories: [],
      pk: '9349395611649',
      whitePrice: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0714032038',
          name: 'Skinny Fit Suit Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg'
            }
          ],
          pk: '9348626612225',
          whitePrice: {
            currencyIso: 'USD',
            value: 44.99,
            priceType: 'BUY',
            formattedValue: '$ 44.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/bf/46bfcc555fa087a988bfce7cbdc37f82ee8fb500.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/46/bf/46bfcc555fa087a988bfce7cbdc37f82ee8fb500.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/bf/46bfcc555fa087a988bfce7cbdc37f82ee8fb500.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/46/bf/46bfcc555fa087a988bfce7cbdc37f82ee8fb500.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wMzhfZW5fdXM7MDcxNDAzMjAzOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '714032038249',
          turnToSku: '0714032038001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0714032038',
        name: 'Skinny Fit Suit Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg'
          }
        ],
        pk: '9348626612225',
        whitePrice: {
          currencyIso: 'USD',
          value: 44.99,
          priceType: 'BUY',
          formattedValue: '$ 44.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/bf/46bfcc555fa087a988bfce7cbdc37f82ee8fb500.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/46/bf/46bfcc555fa087a988bfce7cbdc37f82ee8fb500.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/bf/46bfcc555fa087a988bfce7cbdc37f82ee8fb500.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/46/bf/46bfcc555fa087a988bfce7cbdc37f82ee8fb500.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wMzhfZW5fdXM7MDcxNDAzMjAzOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '714032038249',
        turnToSku: '0714032038001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2092,
          filterCode: '30R'
        },
        {
          orderFilter: 2094,
          filterCode: '33R'
        },
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        },
        {
          orderFilter: 2093,
          filterCode: '32R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        }
      ],
      swatches: [],
      articleCodes: ['0714032038', '0714032013', '0714032024', '0714032036'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wMzhfZW5fdXM7MDcxNDAzMjAzOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0714032_group_038_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0714032038.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#330F1A', '#62615E', '#383A3D'],
      articleColorNames: [
        'Black',
        'Burgundy',
        'Gray',
        'Gray/plaid',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 8,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_trousers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a4/a1/a4a159cdda0c6f19e572d2a521faf1c48b781a90.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/d1/70/d17093ca79feb38a7be6e03c00ec4aa3a9339460.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/e3/15/e315f7836bf2e7e8c504915089164cb7a0856363.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/e3/15/e315f7836bf2e7e8c504915089164cb7a0856363.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/d1/70/d17093ca79feb38a7be6e03c00ec4aa3a9339460.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a4/a1/a4a159cdda0c6f19e572d2a521faf1c48b781a90.jpg'
        }
      ],
      allArticleCodes: [
        '0714032038',
        '0714032013',
        '0714032024',
        '0714032036',
        '0714032037',
        '0714032043',
        '0714032047',
        '0714032048'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/4f/4f/4f4f07846d4af0e3cbe1eb8ad64ab401bb09d94c.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/89/a5/89a5f31b9673f5cabc8cae9cf4c429153f8ced9f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/07/a0/07a0e97919758d1375a7cb4bc2c18dfdf7597719.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/8f/85/8f85540515140c3d2f464ce78d77a9bfe163472b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/63/b4/63b40ee7b2e4a89284276d0e1fa652de8fa558a1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg',
        'https://image.hm.com/assets/hm/4f/4f/4f4f07846d4af0e3cbe1eb8ad64ab401bb09d94c.jpg',
        'https://image.hm.com/assets/hm/89/a5/89a5f31b9673f5cabc8cae9cf4c429153f8ced9f.jpg',
        'https://image.hm.com/assets/hm/07/a0/07a0e97919758d1375a7cb4bc2c18dfdf7597719.jpg',
        'https://image.hm.com/assets/hm/8f/85/8f85540515140c3d2f464ce78d77a9bfe163472b.jpg',
        'https://image.hm.com/assets/hm/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg',
        'https://image.hm.com/assets/hm/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg',
        'https://image.hm.com/assets/hm/63/b4/63b40ee7b2e4a89284276d0e1fa652de8fa558a1.jpg'
      ]
    },
    {
      code: '1074406_group_001',
      name: 'Slim Fit Pants',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 34.99,
        priceType: 'BUY',
        formattedValue: '$ 34.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg'
        }
      ],
      categories: [],
      pk: '9418502504449',
      whitePrice: {
        currencyIso: 'USD',
        value: 34.99,
        priceType: 'BUY',
        formattedValue: '$ 34.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1074406001',
          name: 'Slim Fit Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg'
            }
          ],
          pk: '9387123212289',
          whitePrice: {
            currencyIso: 'USD',
            value: 34.99,
            priceType: 'BUY',
            formattedValue: '$ 34.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/66/5b66e05ac93f017dfb3aa08b177a1904984f7e5e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/5b/66/5b66e05ac93f017dfb3aa08b177a1904984f7e5e.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/66/5b66e05ac93f017dfb3aa08b177a1904984f7e5e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/5b/66/5b66e05ac93f017dfb3aa08b177a1904984f7e5e.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwNl9ncm91cF8wMDFfZW5fdXM7MTA3NDQwNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '074406001249',
          turnToSku: '1074406001001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1074406001',
        name: 'Slim Fit Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg'
          }
        ],
        pk: '9387123212289',
        whitePrice: {
          currencyIso: 'USD',
          value: 34.99,
          priceType: 'BUY',
          formattedValue: '$ 34.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/66/5b66e05ac93f017dfb3aa08b177a1904984f7e5e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/5b/66/5b66e05ac93f017dfb3aa08b177a1904984f7e5e.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/66/5b66e05ac93f017dfb3aa08b177a1904984f7e5e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/5b/66/5b66e05ac93f017dfb3aa08b177a1904984f7e5e.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwNl9ncm91cF8wMDFfZW5fdXM7MTA3NDQwNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '074406001249',
        turnToSku: '1074406001001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 76,
          filterCode: '28'
        },
        {
          orderFilter: 94,
          filterCode: '34'
        },
        {
          orderFilter: 111,
          filterCode: '40'
        },
        {
          orderFilter: 82,
          filterCode: '30'
        },
        {
          orderFilter: 79,
          filterCode: '29'
        },
        {
          orderFilter: 106,
          filterCode: '38'
        },
        {
          orderFilter: 85,
          filterCode: '31'
        },
        {
          orderFilter: 117,
          filterCode: '42'
        },
        {
          orderFilter: 88,
          filterCode: '32'
        },
        {
          orderFilter: 101,
          filterCode: '36'
        },
        {
          orderFilter: 91,
          filterCode: '33'
        }
      ],
      swatches: [],
      articleCodes: ['1074406001', '1074406002', '1074406003', '1074406006'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwNl9ncm91cF8wMDFfZW5fdXM7MTA3NDQwNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '1074406_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1074406001.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#898D8B', '#272628', '#999997'],
      articleColorNames: [
        'Black',
        'Light gray/checked',
        'Black/plaid',
        'Light taupe/plaid',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 7,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_trousers_dressed',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/89/90/8990582e934653fcdac99db25dab7100d4cb4424.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/04/1b/041bb509aca73025d1f8d394468fc50c25c6f8c5.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/8a/b3/8ab3afd190aab0008861e07ba2f2d851a5c49ad0.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/50/58/5058c8188e4329945a3a911095839101c31065bd.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/04/1b/041bb509aca73025d1f8d394468fc50c25c6f8c5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/89/90/8990582e934653fcdac99db25dab7100d4cb4424.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/50/58/5058c8188e4329945a3a911095839101c31065bd.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/8a/b3/8ab3afd190aab0008861e07ba2f2d851a5c49ad0.jpg'
        }
      ],
      allArticleCodes: [
        '1074406001',
        '1074406002',
        '1074406003',
        '1074406006',
        '1074406015',
        '1074406017',
        '1074406025'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/56/b3/56b3d03f58c36e0a7d6e6e1f8ea0bc29bd6028b0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/43/91/4391801c82988ed67b7f7dd526ab82eeeae0c71d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/01/e7/01e76bff5e5c28f94b36e4066c47eb05a4b5ff15.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e2/21/e2218e114bdaf6547a90d0de8c7c906e6e269a6c.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/0c/99/0c99ed6af46d042416de68a2bdd8c9b5fcbeeaec.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg',
        'https://image.hm.com/assets/hm/56/b3/56b3d03f58c36e0a7d6e6e1f8ea0bc29bd6028b0.jpg',
        'https://image.hm.com/assets/hm/43/91/4391801c82988ed67b7f7dd526ab82eeeae0c71d.jpg',
        'https://image.hm.com/assets/hm/01/e7/01e76bff5e5c28f94b36e4066c47eb05a4b5ff15.jpg',
        'https://image.hm.com/assets/hm/e2/21/e2218e114bdaf6547a90d0de8c7c906e6e269a6c.jpg',
        'https://image.hm.com/assets/hm/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg',
        'https://image.hm.com/assets/hm/0c/99/0c99ed6af46d042416de68a2bdd8c9b5fcbeeaec.jpg'
      ]
    },
    {
      code: '1089881_group_009',
      name: 'Regular Fit Turtleneck Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 25.99,
        priceType: 'BUY',
        formattedValue: '$ 25.99',
        type: 'RED'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/cc/4b/cc4b20e3895fd4948780c5119ef49cbfc6af1a05.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/cc/4b/cc4b20e3895fd4948780c5119ef49cbfc6af1a05.jpg'
        }
      ],
      categories: [],
      pk: '9514616913921',
      whitePrice: {
        currencyIso: 'USD',
        value: 42.99,
        priceType: 'BUY',
        formattedValue: '$ 42.99',
        type: 'WHITE'
      },
      redPrice: {
        currencyIso: 'USD',
        value: 25.99,
        priceType: 'BUY',
        formattedValue: '$ 25.99',
        type: 'RED'
      },
      articles: [
        {
          code: '1089881009',
          name: 'Regular Fit Turtleneck Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/cc/4b/cc4b20e3895fd4948780c5119ef49cbfc6af1a05.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/cc/4b/cc4b20e3895fd4948780c5119ef49cbfc6af1a05.jpg'
            }
          ],
          pk: '9482970595329',
          whitePrice: {
            currencyIso: 'USD',
            value: 42.99,
            priceType: 'BUY',
            formattedValue: '$ 42.99',
            type: 'WHITE'
          },
          redPrice: {
            currencyIso: 'USD',
            value: 25.99,
            priceType: 'BUY',
            formattedValue: '$ 25.99',
            type: 'RED'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c0/b0/c0b0b5775ceceb1293ebb70f22f2b7de29153c69.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/c0/b0/c0b0b5775ceceb1293ebb70f22f2b7de29153c69.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c0/b0/c0b0b5775ceceb1293ebb70f22f2b7de29153c69.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/c0/b0/c0b0b5775ceceb1293ebb70f22f2b7de29153c69.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTg4MV9ncm91cF8wMDlfZW5fdXM7MTA4OTg4MTAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'F5F5DC',
            text: 'Dark beige',
            filterName: 'Beige_F5F5DC',
            hybrisCode: '14'
          },
          rgbColor: '#8C7D59',
          genArticle: '089881009238',
          percentageDiscount: '-40%',
          turnToSku: '1089881009001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1089881009',
        name: 'Regular Fit Turtleneck Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/cc/4b/cc4b20e3895fd4948780c5119ef49cbfc6af1a05.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/cc/4b/cc4b20e3895fd4948780c5119ef49cbfc6af1a05.jpg'
          }
        ],
        pk: '9482970595329',
        whitePrice: {
          currencyIso: 'USD',
          value: 42.99,
          priceType: 'BUY',
          formattedValue: '$ 42.99',
          type: 'WHITE'
        },
        redPrice: {
          currencyIso: 'USD',
          value: 25.99,
          priceType: 'BUY',
          formattedValue: '$ 25.99',
          type: 'RED'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c0/b0/c0b0b5775ceceb1293ebb70f22f2b7de29153c69.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/c0/b0/c0b0b5775ceceb1293ebb70f22f2b7de29153c69.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c0/b0/c0b0b5775ceceb1293ebb70f22f2b7de29153c69.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/c0/b0/c0b0b5775ceceb1293ebb70f22f2b7de29153c69.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTg4MV9ncm91cF8wMDlfZW5fdXM7MTA4OTg4MTAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'F5F5DC',
          text: 'Dark beige',
          filterName: 'Beige_F5F5DC',
          hybrisCode: '14'
        },
        rgbColor: '#8C7D59',
        genArticle: '089881009238',
        percentageDiscount: '-40%',
        turnToSku: '1089881009001'
      },
      sale: true,
      variantSizes: [
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        }
      ],
      swatches: [],
      articleCodes: ['1089881009', '1089881001', '1089881002'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTg4MV9ncm91cF8wMDlfZW5fdXM7MTA4OTg4MTAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '1089881_group_009_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1089881009.html',
      categoryName: 'Men',
      rgbColors: ['#8C7D59', '#272628', '#DCCAB7'],
      articleColorNames: ['Dark beige', 'Black', 'Light beige'],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/95/6c/956c5e00ec4847ae93461e5aba997a3b4a4f1d90.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/53/ba/53bafeb6ad1d8a5fc438e1a9d48bc4e9157b7cfd.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/2b/f3/2bf34bf074dd46fadf600aeb755e6c37aa36487d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/2b/f3/2bf34bf074dd46fadf600aeb755e6c37aa36487d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/92/3a/923aecd59482fd0e409ecdea86b52b68901c965f.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/95/6c/956c5e00ec4847ae93461e5aba997a3b4a4f1d90.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/53/ba/53bafeb6ad1d8a5fc438e1a9d48bc4e9157b7cfd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/e2/f4/e2f440f3ec17ecd70b616e825e0284bf5df27637.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/e2/f4/e2f440f3ec17ecd70b616e825e0284bf5df27637.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/92/3a/923aecd59482fd0e409ecdea86b52b68901c965f.jpg'
        }
      ],
      allArticleCodes: ['1089881009', '1089881001', '1089881002'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/cc/4b/cc4b20e3895fd4948780c5119ef49cbfc6af1a05.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ce/e1/cee10cd870db1419bc39b38c01a5f1847913e843.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/71/e3/71e3e07dd6a8587e8c06a4abebacc94c1805eb28.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/cc/4b/cc4b20e3895fd4948780c5119ef49cbfc6af1a05.jpg',
        'https://image.hm.com/assets/hm/ce/e1/cee10cd870db1419bc39b38c01a5f1847913e843.jpg',
        'https://image.hm.com/assets/hm/71/e3/71e3e07dd6a8587e8c06a4abebacc94c1805eb28.jpg'
      ]
    },
    {
      code: '1021446_group_003',
      name: '2-pack Slim Fit Turtlenecks',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 35.99,
        priceType: 'BUY',
        formattedValue: '$ 35.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg'
        }
      ],
      categories: [],
      pk: '9428776484865',
      whitePrice: {
        currencyIso: 'USD',
        value: 35.99,
        priceType: 'BUY',
        formattedValue: '$ 35.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1021446003',
          name: '2-pack Slim Fit Turtlenecks',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg'
            }
          ],
          pk: '9408871104513',
          whitePrice: {
            currencyIso: 'USD',
            value: 35.99,
            priceType: 'BUY',
            formattedValue: '$ 35.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAyMTQ0Nl9ncm91cF8wMDNfZW5fdXM7MTAyMTQ0NjAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FFFFFF',
            text: 'White/black',
            filterName: 'Black_000000,White_FFFFFF',
            hybrisCode: '10'
          },
          rgbColor: '#FFFFFF',
          genArticle: '021446003238',
          turnToSku: '1021446003001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1021446003',
        name: '2-pack Slim Fit Turtlenecks',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg'
          }
        ],
        pk: '9408871104513',
        whitePrice: {
          currencyIso: 'USD',
          value: 35.99,
          priceType: 'BUY',
          formattedValue: '$ 35.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAyMTQ0Nl9ncm91cF8wMDNfZW5fdXM7MTAyMTQ0NjAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FFFFFF',
          text: 'White/black',
          filterName: 'Black_000000,White_FFFFFF',
          hybrisCode: '10'
        },
        rgbColor: '#FFFFFF',
        genArticle: '021446003238',
        turnToSku: '1021446003001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        }
      ],
      swatches: [],
      articleCodes: ['1021446003', '1021446004'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAyMTQ0Nl9ncm91cF8wMDNfZW5fdXM7MTAyMTQ0NjAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '1021446_group_003_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1021446003.html',
      categoryName: 'Men',
      rgbColors: ['#FFFFFF', '#7F866F'],
      articleColorNames: ['White/black', 'Black/light khaki green'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_turtleneck',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c6/d7/c6d78b9fc92b729a660a2dc69eff4cedf04291b0.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c6/d7/c6d78b9fc92b729a660a2dc69eff4cedf04291b0.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/92/48/9248c74682e96ad56d8fb9a3614a35932ed4ed89.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/92/48/9248c74682e96ad56d8fb9a3614a35932ed4ed89.jpg'
        }
      ],
      allArticleCodes: ['1021446003', '1021446004'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/af/28/af28cb0c92ef2867d69919d5b831c27b935771da.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/bb/c6/bbc68274a6fddb8d552dd446bdfea981179a4ca6.jpg',
        'https://image.hm.com/assets/hm/af/28/af28cb0c92ef2867d69919d5b831c27b935771da.jpg'
      ]
    },
    {
      code: '1070524_group_008',
      name: 'Slim Fit Fine-knit Mock Turtleneck Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 16.99,
        priceType: 'BUY',
        formattedValue: '$ 16.99',
        type: 'RED'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/e9/30e9e16c158dfaf43d1b044f38222b25528fab23.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/30/e9/30e9e16c158dfaf43d1b044f38222b25528fab23.jpg'
        }
      ],
      categories: [],
      pk: '9448574091265',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      redPrice: {
        currencyIso: 'USD',
        value: 16.99,
        priceType: 'BUY',
        formattedValue: '$ 16.99',
        type: 'RED'
      },
      articles: [
        {
          code: '1070524008',
          name: 'Slim Fit Fine-knit Mock Turtleneck Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/e9/30e9e16c158dfaf43d1b044f38222b25528fab23.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/30/e9/30e9e16c158dfaf43d1b044f38222b25528fab23.jpg'
            }
          ],
          pk: '9426034950145',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          redPrice: {
            currencyIso: 'USD',
            value: 16.99,
            priceType: 'BUY',
            formattedValue: '$ 16.99',
            type: 'RED'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/6f/2b/6f2beaf43d6ddce8e5f4227d15e43f8f7e105b11.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/6f/2b/6f2beaf43d6ddce8e5f4227d15e43f8f7e105b11.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/6f/2b/6f2beaf43d6ddce8e5f4227d15e43f8f7e105b11.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/6f/2b/6f2beaf43d6ddce8e5f4227d15e43f8f7e105b11.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3MDUyNF9ncm91cF8wMDhfZW5fdXM7MTA3MDUyNDAwOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FFFFFF',
            text: 'Cream',
            filterName: 'White_FFFFFF',
            hybrisCode: '10'
          },
          rgbColor: '#F4EEE8',
          genArticle: '070524008238',
          percentageDiscount: '-47%',
          turnToSku: '1070524008001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1070524008',
        name: 'Slim Fit Fine-knit Mock Turtleneck Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/e9/30e9e16c158dfaf43d1b044f38222b25528fab23.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/30/e9/30e9e16c158dfaf43d1b044f38222b25528fab23.jpg'
          }
        ],
        pk: '9426034950145',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        redPrice: {
          currencyIso: 'USD',
          value: 16.99,
          priceType: 'BUY',
          formattedValue: '$ 16.99',
          type: 'RED'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/6f/2b/6f2beaf43d6ddce8e5f4227d15e43f8f7e105b11.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/6f/2b/6f2beaf43d6ddce8e5f4227d15e43f8f7e105b11.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/6f/2b/6f2beaf43d6ddce8e5f4227d15e43f8f7e105b11.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/6f/2b/6f2beaf43d6ddce8e5f4227d15e43f8f7e105b11.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3MDUyNF9ncm91cF8wMDhfZW5fdXM7MTA3MDUyNDAwOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FFFFFF',
          text: 'Cream',
          filterName: 'White_FFFFFF',
          hybrisCode: '10'
        },
        rgbColor: '#F4EEE8',
        genArticle: '070524008238',
        percentageDiscount: '-47%',
        turnToSku: '1070524008001'
      },
      sale: true,
      variantSizes: [
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        }
      ],
      swatches: [],
      articleCodes: ['1070524008', '1070524001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3MDUyNF9ncm91cF8wMDhfZW5fdXM7MTA3MDUyNDAwOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '1070524_group_008_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1070524008.html',
      categoryName: 'Men',
      rgbColors: ['#F4EEE8', '#272628'],
      articleColorNames: ['Cream', 'Black'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a9/d2/a9d2ac7554f1df9bbd64258ed0e1c956812b593b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/31/54/3154b135436cc2fda6e3f858d96182c2c85138df.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/31/54/3154b135436cc2fda6e3f858d96182c2c85138df.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a9/d2/a9d2ac7554f1df9bbd64258ed0e1c956812b593b.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/44/17/4417dc936ebcc04f35f7c58ac6a20d0d005eebe7.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/24/3e/243e9e224f5af04554143c7c48cd49f378b33d74.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/24/3e/243e9e224f5af04554143c7c48cd49f378b33d74.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/44/17/4417dc936ebcc04f35f7c58ac6a20d0d005eebe7.jpg'
        }
      ],
      allArticleCodes: ['1070524008', '1070524001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/30/e9/30e9e16c158dfaf43d1b044f38222b25528fab23.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/36/d2/36d2fb24d55a236da2c8c71bb574db90e7ed0590.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/30/e9/30e9e16c158dfaf43d1b044f38222b25528fab23.jpg',
        'https://image.hm.com/assets/hm/36/d2/36d2fb24d55a236da2c8c71bb574db90e7ed0590.jpg'
      ]
    },
    {
      code: '0713995_group_050',
      name: 'Skinny Fit Jacket',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg'
        }
      ],
      categories: [],
      pk: '9408505217025',
      whitePrice: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0713995050',
          name: 'Skinny Fit Jacket',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg'
            }
          ],
          pk: '9384461926401',
          whitePrice: {
            currencyIso: 'USD',
            value: 84.99,
            priceType: 'BUY',
            formattedValue: '$ 84.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/32/89/3289f614572084095f11d85dd07b0a20a1c80da5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/32/89/3289f614572084095f11d85dd07b0a20a1c80da5.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/32/89/3289f614572084095f11d85dd07b0a20a1c80da5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/32/89/3289f614572084095f11d85dd07b0a20a1c80da5.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wNTBfZW5fdXM7MDcxMzk5NTA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Dark blue',
            filterName: 'Blue_0000FF',
            hybrisCode: '76'
          },
          rgbColor: '#454553',
          genArticle: '713995050238',
          turnToSku: '0713995050002'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0713995050',
        name: 'Skinny Fit Jacket',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg'
          }
        ],
        pk: '9384461926401',
        whitePrice: {
          currencyIso: 'USD',
          value: 84.99,
          priceType: 'BUY',
          formattedValue: '$ 84.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/32/89/3289f614572084095f11d85dd07b0a20a1c80da5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/32/89/3289f614572084095f11d85dd07b0a20a1c80da5.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/32/89/3289f614572084095f11d85dd07b0a20a1c80da5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/32/89/3289f614572084095f11d85dd07b0a20a1c80da5.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wNTBfZW5fdXM7MDcxMzk5NTA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Dark blue',
          filterName: 'Blue_0000FF',
          hybrisCode: '76'
        },
        rgbColor: '#454553',
        genArticle: '713995050238',
        turnToSku: '0713995050002'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2103,
          filterCode: '50R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2104,
          filterCode: '52R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2102,
          filterCode: '48R'
        }
      ],
      swatches: [],
      articleCodes: ['0713995050', '0713995028', '0713995043', '0713995045'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk5NV9ncm91cF8wNTBfZW5fdXM7MDcxMzk5NTA1MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0713995_group_050_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0713995050.html',
      categoryName: 'Men',
      rgbColors: ['#454553', '#62615E', '#272628', '#383A3D'],
      articleColorNames: [
        'Dark blue',
        'Gray',
        'Black',
        'Gray/plaid',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_blazers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/04/49/04497c879e581e6415242da4b423e258ff36e021.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/d9/f2/d9f26e701a4494132a06ed8061636c150333f36d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c8/36/c836fb253cbab147b26e2e85289096db28032a42.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/58/6c/586c750973afee2dc5e1e7c5c08e0ee95fdcf4b5.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/58/6c/586c750973afee2dc5e1e7c5c08e0ee95fdcf4b5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/d1/13/d113b823a2fdb819b769659367584db8d365fcc6.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/d9/f2/d9f26e701a4494132a06ed8061636c150333f36d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/8e/cb/8ecb81418776a4faf9e295c4f6d9a4bdcdfe1ec4.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/8e/cb/8ecb81418776a4faf9e295c4f6d9a4bdcdfe1ec4.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c8/36/c836fb253cbab147b26e2e85289096db28032a42.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/d1/13/d113b823a2fdb819b769659367584db8d365fcc6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/04/49/04497c879e581e6415242da4b423e258ff36e021.jpg'
        }
      ],
      allArticleCodes: [
        '0713995050',
        '0713995028',
        '0713995043',
        '0713995045',
        '0713995046',
        '0713995055'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/39/f0/39f053c1df9bff06e66d79e3a972198f7ad5c86d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ad/f0/adf00140fbc69296df63a034ece4a60daa5649b7.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/c8/68/c868db5bd11c4e747aff81bdae1d21da5b6a6a23.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/6d/ad/6dad45119c18fe17de296ee2e2d986fc269f4ced.jpg',
        'https://image.hm.com/assets/hm/27/ab/27ab6f0afb8328ec97a6ee6822db4d8b4293f827.jpg',
        'https://image.hm.com/assets/hm/39/78/3978cc07b97de4029def49a2898ad9a9c82a07a1.jpg',
        'https://image.hm.com/assets/hm/39/f0/39f053c1df9bff06e66d79e3a972198f7ad5c86d.jpg',
        'https://image.hm.com/assets/hm/ad/f0/adf00140fbc69296df63a034ece4a60daa5649b7.jpg',
        'https://image.hm.com/assets/hm/c8/68/c868db5bd11c4e747aff81bdae1d21da5b6a6a23.jpg'
      ]
    },
    {
      code: '0782479_group_005',
      name: 'Muscle Fit Knit Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 36.99,
        priceType: 'BUY',
        formattedValue: '$ 36.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/e7/c4e7a33b9aa2ccb87f7fb91e8195867f3a83b05c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/c4/e7/c4e7a33b9aa2ccb87f7fb91e8195867f3a83b05c.jpg'
        }
      ],
      categories: [],
      pk: '9264068689921',
      whitePrice: {
        currencyIso: 'USD',
        value: 36.99,
        priceType: 'BUY',
        formattedValue: '$ 36.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0782479005',
          name: 'Muscle Fit Knit Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/e7/c4e7a33b9aa2ccb87f7fb91e8195867f3a83b05c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/c4/e7/c4e7a33b9aa2ccb87f7fb91e8195867f3a83b05c.jpg'
            }
          ],
          pk: '9248815448065',
          whitePrice: {
            currencyIso: 'USD',
            value: 36.99,
            priceType: 'BUY',
            formattedValue: '$ 36.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/a8/4c/a84cde4bae2fa55c21c668f6194ac493eedd283c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/a8/4c/a84cde4bae2fa55c21c668f6194ac493eedd283c.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/a8/4c/a84cde4bae2fa55c21c668f6194ac493eedd283c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/a8/4c/a84cde4bae2fa55c21c668f6194ac493eedd283c.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc4MjQ3OV9ncm91cF8wMDVfZW5fdXM7MDc4MjQ3OTAwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '782479005238',
          turnToSku: '0782479005001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0782479005',
        name: 'Muscle Fit Knit Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/e7/c4e7a33b9aa2ccb87f7fb91e8195867f3a83b05c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/c4/e7/c4e7a33b9aa2ccb87f7fb91e8195867f3a83b05c.jpg'
          }
        ],
        pk: '9248815448065',
        whitePrice: {
          currencyIso: 'USD',
          value: 36.99,
          priceType: 'BUY',
          formattedValue: '$ 36.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/a8/4c/a84cde4bae2fa55c21c668f6194ac493eedd283c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/a8/4c/a84cde4bae2fa55c21c668f6194ac493eedd283c.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/a8/4c/a84cde4bae2fa55c21c668f6194ac493eedd283c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/a8/4c/a84cde4bae2fa55c21c668f6194ac493eedd283c.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc4MjQ3OV9ncm91cF8wMDVfZW5fdXM7MDc4MjQ3OTAwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '782479005238',
        turnToSku: '0782479005001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        }
      ],
      swatches: [],
      articleCodes: ['0782479005', '0782479019', '0782479020'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc4MjQ3OV9ncm91cF8wMDVfZW5fdXM7MDc4MjQ3OTAwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0782479_group_005_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0782479005.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#ECEBE9', '#54585F'],
      articleColorNames: ['Black', 'White', 'Dark gray'],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bd/3d/bd3d313cc18e449a253815d1f12774fed551540d.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c0/2d/c02dd2a1bc054e86b6d5ebc62e5ae85816c751af.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c0/2d/c02dd2a1bc054e86b6d5ebc62e5ae85816c751af.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c0/38/c0383a86c2e7c3fa6dca2d361b52b40ebdfc3490.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c0/38/c0383a86c2e7c3fa6dca2d361b52b40ebdfc3490.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/bd/3d/bd3d313cc18e449a253815d1f12774fed551540d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/e0/cae02d5f57b26c49b53fa09d7d98cf5e7da67af1.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ca/e0/cae02d5f57b26c49b53fa09d7d98cf5e7da67af1.jpg'
        }
      ],
      allArticleCodes: ['0782479005', '0782479019', '0782479020'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/c4/e7/c4e7a33b9aa2ccb87f7fb91e8195867f3a83b05c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/f6/46/f6469ea0ce4c92b2766bc83a86604019be602895.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ec/49/ec497d0ba9a0ed867d6d0dc078282c7c9fdfda81.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/c4/e7/c4e7a33b9aa2ccb87f7fb91e8195867f3a83b05c.jpg',
        'https://image.hm.com/assets/hm/f6/46/f6469ea0ce4c92b2766bc83a86604019be602895.jpg',
        'https://image.hm.com/assets/hm/ec/49/ec497d0ba9a0ed867d6d0dc078282c7c9fdfda81.jpg'
      ]
    },
    {
      code: '0875217_group_054',
      name: 'Overshirt',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 39.99,
        priceType: 'BUY',
        formattedValue: '$ 39.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg'
        }
      ],
      categories: [],
      pk: '9522183798785',
      whitePrice: {
        currencyIso: 'USD',
        value: 39.99,
        priceType: 'BUY',
        formattedValue: '$ 39.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0875217054',
          name: 'Overshirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg'
            }
          ],
          pk: '9500417720321',
          whitePrice: {
            currencyIso: 'USD',
            value: 39.99,
            priceType: 'BUY',
            formattedValue: '$ 39.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/07/6a/076ae7db385da6149e73e6b6ad613699cd3ff48c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/07/6a/076ae7db385da6149e73e6b6ad613699cd3ff48c.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/07/6a/076ae7db385da6149e73e6b6ad613699cd3ff48c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/07/6a/076ae7db385da6149e73e6b6ad613699cd3ff48c.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3NTIxN19ncm91cF8wNTRfZW5fdXM7MDg3NTIxNzA1NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '875217054249',
          turnToSku: '0875217054001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0875217054',
        name: 'Overshirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg'
          }
        ],
        pk: '9500417720321',
        whitePrice: {
          currencyIso: 'USD',
          value: 39.99,
          priceType: 'BUY',
          formattedValue: '$ 39.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/07/6a/076ae7db385da6149e73e6b6ad613699cd3ff48c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/07/6a/076ae7db385da6149e73e6b6ad613699cd3ff48c.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/07/6a/076ae7db385da6149e73e6b6ad613699cd3ff48c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/07/6a/076ae7db385da6149e73e6b6ad613699cd3ff48c.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3NTIxN19ncm91cF8wNTRfZW5fdXM7MDg3NTIxNzA1NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '875217054249',
        turnToSku: '0875217054001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        }
      ],
      swatches: [],
      articleCodes: ['0875217054', '0875217043', '0875217046', '0875217048'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3NTIxN19ncm91cF8wNTRfZW5fdXM7MDg3NTIxNzA1NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0875217_group_054_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0875217054.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#33363A', '#987E60', '#503640'],
      articleColorNames: [
        'Black',
        'Black/plaid',
        'Mustard yellow/plaid',
        'Dark red/plaid',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 5,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_jacketscoats_shirtjackets',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ec/3a/ec3a99676ef85830808280ac0e2f55a5345cd4eb.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/39/fd/39fd616c4d7afa56c619d3e975f8aae7f51aacc3.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bd/c1/bdc150e9e143830fd122a0fdb0cf5cfba3af2cf1.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/bb/0a/bb0a0262f211412b0016ac6a7450af514bdeb0a4.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/6c/95/6c957413bc01d84a6b6885d49940c5c512615208.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ec/3a/ec3a99676ef85830808280ac0e2f55a5345cd4eb.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/0a/bb0a0262f211412b0016ac6a7450af514bdeb0a4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/bd/c1/bdc150e9e143830fd122a0fdb0cf5cfba3af2cf1.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/39/fd/39fd616c4d7afa56c619d3e975f8aae7f51aacc3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/6c/95/6c957413bc01d84a6b6885d49940c5c512615208.jpg'
        }
      ],
      allArticleCodes: [
        '0875217054',
        '0875217043',
        '0875217046',
        '0875217048',
        '0875217052'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/7e/dd/7eddd2915739c10b4ec1b19e940dc03075058283.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d3/a8/d3a8402beddb224eb4615a05bf10132c455a2156.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e6/d6/e6d6388d994983e4ee4e515bbe861c73005081f6.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/a7/e7/a7e770fa82160bad96118055c3d155d7d933bbaa.jpg',
        'https://image.hm.com/assets/hm/7e/dd/7eddd2915739c10b4ec1b19e940dc03075058283.jpg',
        'https://image.hm.com/assets/hm/d3/a8/d3a8402beddb224eb4615a05bf10132c455a2156.jpg',
        'https://image.hm.com/assets/hm/ff/13/ff134ad79ffbd0155eddf1b3925fc3e2b7fc96f4.jpg',
        'https://image.hm.com/assets/hm/e6/d6/e6d6388d994983e4ee4e515bbe861c73005081f6.jpg'
      ]
    },
    {
      code: '0714032_group_043',
      name: 'Skinny Fit Suit Pants',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg'
        }
      ],
      categories: [],
      pk: '9408715456513',
      whitePrice: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0714032043',
          name: 'Skinny Fit Suit Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg'
            }
          ],
          pk: '9384447868929',
          whitePrice: {
            currencyIso: 'USD',
            value: 44.99,
            priceType: 'BUY',
            formattedValue: '$ 44.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/25/40/25405d72a714d2cb9d0c0173d23070d0e0772f47.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/25/40/25405d72a714d2cb9d0c0173d23070d0e0772f47.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/25/40/25405d72a714d2cb9d0c0173d23070d0e0772f47.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/25/40/25405d72a714d2cb9d0c0173d23070d0e0772f47.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wNDNfZW5fdXM7MDcxNDAzMjA0M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Dark blue',
            filterName: 'Blue_0000FF',
            hybrisCode: '76'
          },
          rgbColor: '#454553',
          genArticle: '714032043238',
          turnToSku: '0714032043001',
          videoId: 'b6fd62524eb8fef642fad7883d00d01c4556c087',
          plpVideo: false
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0714032043',
        name: 'Skinny Fit Suit Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg'
          }
        ],
        pk: '9384447868929',
        whitePrice: {
          currencyIso: 'USD',
          value: 44.99,
          priceType: 'BUY',
          formattedValue: '$ 44.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/25/40/25405d72a714d2cb9d0c0173d23070d0e0772f47.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/25/40/25405d72a714d2cb9d0c0173d23070d0e0772f47.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/25/40/25405d72a714d2cb9d0c0173d23070d0e0772f47.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/25/40/25405d72a714d2cb9d0c0173d23070d0e0772f47.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wNDNfZW5fdXM7MDcxNDAzMjA0M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Dark blue',
          filterName: 'Blue_0000FF',
          hybrisCode: '76'
        },
        rgbColor: '#454553',
        genArticle: '714032043238',
        turnToSku: '0714032043001',
        videoId: 'b6fd62524eb8fef642fad7883d00d01c4556c087',
        plpVideo: false
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2098,
          filterCode: '40R'
        },
        {
          orderFilter: 2093,
          filterCode: '32R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2099,
          filterCode: '42R'
        },
        {
          orderFilter: 2094,
          filterCode: '33R'
        },
        {
          orderFilter: 2092,
          filterCode: '30R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        }
      ],
      swatches: [],
      articleCodes: ['0714032043', '0714032013', '0714032024', '0714032036'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNDAzMl9ncm91cF8wNDNfZW5fdXM7MDcxNDAzMjA0M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0714032_group_043_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0714032043.html',
      categoryName: 'Men',
      rgbColors: ['#454553', '#330F1A', '#62615E', '#383A3D'],
      articleColorNames: [
        'Dark blue',
        'Burgundy',
        'Gray',
        'Gray/plaid',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 8,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_trousers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/57/fc/57fc310219b81fdea99b273df836fab1a839c171.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/57/fc/57fc310219b81fdea99b273df836fab1a839c171.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/11/de/11de560ada1b476150857c074cc08a34289c1420.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/81/75/817548fc30073b262a559a5c8af2132ce3dead4f.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/db/5b/db5b2cd8838f84f0a4d00b89108f16b88c5b2a77.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/11/de/11de560ada1b476150857c074cc08a34289c1420.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f2/d6/f2d66dadcb03a4695ce61cd91b945066a3af7d5d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f2/d6/f2d66dadcb03a4695ce61cd91b945066a3af7d5d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/75/817548fc30073b262a559a5c8af2132ce3dead4f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/db/5b/db5b2cd8838f84f0a4d00b89108f16b88c5b2a77.jpg'
        }
      ],
      allArticleCodes: [
        '0714032043',
        '0714032013',
        '0714032024',
        '0714032036',
        '0714032037',
        '0714032038',
        '0714032047',
        '0714032048'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/4f/4f/4f4f07846d4af0e3cbe1eb8ad64ab401bb09d94c.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/89/a5/89a5f31b9673f5cabc8cae9cf4c429153f8ced9f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/07/a0/07a0e97919758d1375a7cb4bc2c18dfdf7597719.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/8f/85/8f85540515140c3d2f464ce78d77a9bfe163472b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/63/b4/63b40ee7b2e4a89284276d0e1fa652de8fa558a1.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/16/aa/16aa0516dca056c2abd17a08b2a608eb68904b93.jpg',
        'https://image.hm.com/assets/hm/4f/4f/4f4f07846d4af0e3cbe1eb8ad64ab401bb09d94c.jpg',
        'https://image.hm.com/assets/hm/89/a5/89a5f31b9673f5cabc8cae9cf4c429153f8ced9f.jpg',
        'https://image.hm.com/assets/hm/07/a0/07a0e97919758d1375a7cb4bc2c18dfdf7597719.jpg',
        'https://image.hm.com/assets/hm/8f/85/8f85540515140c3d2f464ce78d77a9bfe163472b.jpg',
        'https://image.hm.com/assets/hm/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg',
        'https://image.hm.com/assets/hm/06/51/06515a5d801e8b7340196d68442589674acc26f1.jpg',
        'https://image.hm.com/assets/hm/63/b4/63b40ee7b2e4a89284276d0e1fa652de8fa558a1.jpg'
      ]
    },
    {
      code: '0564358_group_012',
      name: 'Slim Fit Fine-knit Cotton Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg'
        }
      ],
      categories: [],
      pk: '9143815962625',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0564358012',
          name: 'Slim Fit Fine-knit Cotton Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg'
            }
          ],
          pk: '9138670665729',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/40/3040c7e3bc9a2f96cf1c56299fc2f89f21cd7754.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/30/40/3040c7e3bc9a2f96cf1c56299fc2f89f21cd7754.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/40/3040c7e3bc9a2f96cf1c56299fc2f89f21cd7754.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/30/40/3040c7e3bc9a2f96cf1c56299fc2f89f21cd7754.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8wMTJfZW5fdXM7MDU2NDM1ODAxMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          campaignMedia: {
            url: 'https://photorankmedia-a.akamaihd.net/media/7/w/o/7wo4of4/mobile.jpg',
            id: '3116696093',
            author: 'daiki_nagamatsu',
            type: 'CAMPAIGN'
          },
          rgbColor: '#272628',
          genArticle: '564358012238',
          turnToSku: '0564358012001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0564358012',
        name: 'Slim Fit Fine-knit Cotton Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg'
          }
        ],
        pk: '9138670665729',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/40/3040c7e3bc9a2f96cf1c56299fc2f89f21cd7754.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/30/40/3040c7e3bc9a2f96cf1c56299fc2f89f21cd7754.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/40/3040c7e3bc9a2f96cf1c56299fc2f89f21cd7754.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/30/40/3040c7e3bc9a2f96cf1c56299fc2f89f21cd7754.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8wMTJfZW5fdXM7MDU2NDM1ODAxMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        campaignMedia: {
          url: 'https://photorankmedia-a.akamaihd.net/media/7/w/o/7wo4of4/mobile.jpg',
          id: '3116696093',
          author: 'daiki_nagamatsu',
          type: 'CAMPAIGN'
        },
        rgbColor: '#272628',
        genArticle: '564358012238',
        turnToSku: '0564358012001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        }
      ],
      swatches: [],
      articleCodes: ['0564358012', '0564358080', '0564358086', '0564358088'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8wMTJfZW5fdXM7MDU2NDM1ODAxMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0564358_group_012_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0564358012.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#876F58', '#DCCAB7', '#9F9C9C'],
      articleColorNames: [
        'Black',
        'Dark beige melange',
        'Light beige',
        'Light gray melange',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: true,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bf/62/bf628fb5d5a52274d710f4e36aca0df0ad6a67fc.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/1a/a5/1aa51b35b471cadc927fef662d765731beabd259.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/8c/bc/8cbc116bc0b7d002c81c7637a99d2b0583289524.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/8c/bc/8cbc116bc0b7d002c81c7637a99d2b0583289524.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/e7/85/e78551091474b199fbfe6b36046cc427e1dc9745.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/bf/62/bf628fb5d5a52274d710f4e36aca0df0ad6a67fc.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a8/6c/a86c361d3a293b8fd83ad0b47a3c584da1f6ad06.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a8/6c/a86c361d3a293b8fd83ad0b47a3c584da1f6ad06.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/1a/a5/1aa51b35b471cadc927fef662d765731beabd259.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/e7/85/e78551091474b199fbfe6b36046cc427e1dc9745.jpg'
        }
      ],
      allArticleCodes: [
        '0564358012',
        '0564358080',
        '0564358086',
        '0564358088',
        '0564358105',
        '0564358107'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/6e/78/6e7843a8fa7305d9c7e88fe6a92fe91e321cdb94.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/37/d8/37d8186683f2dc9b89ffde6ee967de9cbb7b3f4c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d1/30/d1309378ed14a971280bfbd28541064662e56431.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg',
        'https://image.hm.com/assets/hm/6e/78/6e7843a8fa7305d9c7e88fe6a92fe91e321cdb94.jpg',
        'https://image.hm.com/assets/hm/37/d8/37d8186683f2dc9b89ffde6ee967de9cbb7b3f4c.jpg',
        'https://image.hm.com/assets/hm/d1/30/d1309378ed14a971280bfbd28541064662e56431.jpg',
        'https://image.hm.com/assets/hm/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg',
        'https://image.hm.com/assets/hm/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg'
      ]
    },
    {
      code: '1074406_group_017',
      name: 'Slim Fit Pants',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 34.99,
        priceType: 'BUY',
        formattedValue: '$ 34.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg'
        }
      ],
      categories: [],
      pk: '9453092962305',
      whitePrice: {
        currencyIso: 'USD',
        value: 34.99,
        priceType: 'BUY',
        formattedValue: '$ 34.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1074406017',
          name: 'Slim Fit Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg'
            }
          ],
          pk: '9429171699713',
          whitePrice: {
            currencyIso: 'USD',
            value: 34.99,
            priceType: 'BUY',
            formattedValue: '$ 34.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/17/be/17be818a84b0de0d311d21396dd8e1f00d41c25f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/17/be/17be818a84b0de0d311d21396dd8e1f00d41c25f.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/17/be/17be818a84b0de0d311d21396dd8e1f00d41c25f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/17/be/17be818a84b0de0d311d21396dd8e1f00d41c25f.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwNl9ncm91cF8wMTdfZW5fdXM7MTA3NDQwNjAxN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'F5F5DC',
            text: 'Light beige',
            filterName: 'Beige_F5F5DC',
            hybrisCode: '13'
          },
          rgbColor: '#B5AFA0',
          genArticle: '074406017238',
          turnToSku: '1074406017004'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1074406017',
        name: 'Slim Fit Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg'
          }
        ],
        pk: '9429171699713',
        whitePrice: {
          currencyIso: 'USD',
          value: 34.99,
          priceType: 'BUY',
          formattedValue: '$ 34.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/17/be/17be818a84b0de0d311d21396dd8e1f00d41c25f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/17/be/17be818a84b0de0d311d21396dd8e1f00d41c25f.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/17/be/17be818a84b0de0d311d21396dd8e1f00d41c25f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/17/be/17be818a84b0de0d311d21396dd8e1f00d41c25f.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwNl9ncm91cF8wMTdfZW5fdXM7MTA3NDQwNjAxN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'F5F5DC',
          text: 'Light beige',
          filterName: 'Beige_F5F5DC',
          hybrisCode: '13'
        },
        rgbColor: '#B5AFA0',
        genArticle: '074406017238',
        turnToSku: '1074406017004'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 85,
          filterCode: '31'
        },
        {
          orderFilter: 106,
          filterCode: '38'
        },
        {
          orderFilter: 76,
          filterCode: '28'
        },
        {
          orderFilter: 79,
          filterCode: '29'
        },
        {
          orderFilter: 117,
          filterCode: '42'
        },
        {
          orderFilter: 91,
          filterCode: '33'
        },
        {
          orderFilter: 101,
          filterCode: '36'
        },
        {
          orderFilter: 82,
          filterCode: '30'
        },
        {
          orderFilter: 88,
          filterCode: '32'
        },
        {
          orderFilter: 94,
          filterCode: '34'
        },
        {
          orderFilter: 111,
          filterCode: '40'
        }
      ],
      swatches: [],
      articleCodes: ['1074406017', '1074406001', '1074406002', '1074406003'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDQwNl9ncm91cF8wMTdfZW5fdXM7MTA3NDQwNjAxN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '1074406_group_017_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1074406017.html',
      categoryName: 'Men',
      rgbColors: ['#B5AFA0', '#272628', '#898D8B', '#272628'],
      articleColorNames: [
        'Light beige',
        'Black',
        'Light gray/checked',
        'Black/plaid',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 7,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_trousers_dressed',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/16/4a/164a6769338f7017d5c6fcbf32bd624924a2bd13.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4d/2c/4d2c4e88be0763025a7507df79b03231f3bfa8d9.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c0/49/c049f8a6f8bc2a4ebaace772ab20533918292cc9.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/16/4a/164a6769338f7017d5c6fcbf32bd624924a2bd13.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/2c/4d2c4e88be0763025a7507df79b03231f3bfa8d9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c0/49/c049f8a6f8bc2a4ebaace772ab20533918292cc9.jpg'
        }
      ],
      allArticleCodes: [
        '1074406017',
        '1074406001',
        '1074406002',
        '1074406003',
        '1074406006',
        '1074406015',
        '1074406025'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/56/b3/56b3d03f58c36e0a7d6e6e1f8ea0bc29bd6028b0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/43/91/4391801c82988ed67b7f7dd526ab82eeeae0c71d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/01/e7/01e76bff5e5c28f94b36e4066c47eb05a4b5ff15.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e2/21/e2218e114bdaf6547a90d0de8c7c906e6e269a6c.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/0c/99/0c99ed6af46d042416de68a2bdd8c9b5fcbeeaec.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/8b/1b/8b1bb64953035f66c5dd68c3d67f1b8dc70108b2.jpg',
        'https://image.hm.com/assets/hm/f0/23/f023dc8de56549f3a1e0725c5503162a57eea134.jpg',
        'https://image.hm.com/assets/hm/56/b3/56b3d03f58c36e0a7d6e6e1f8ea0bc29bd6028b0.jpg',
        'https://image.hm.com/assets/hm/43/91/4391801c82988ed67b7f7dd526ab82eeeae0c71d.jpg',
        'https://image.hm.com/assets/hm/01/e7/01e76bff5e5c28f94b36e4066c47eb05a4b5ff15.jpg',
        'https://image.hm.com/assets/hm/e2/21/e2218e114bdaf6547a90d0de8c7c906e6e269a6c.jpg',
        'https://image.hm.com/assets/hm/0c/99/0c99ed6af46d042416de68a2bdd8c9b5fcbeeaec.jpg'
      ]
    },
    {
      code: '0929432_group_003',
      name: 'Regular Fit Jacket',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ba/ab/baabda01cf017a2e41a5c12176a3a9bd7f287240.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/ba/ab/baabda01cf017a2e41a5c12176a3a9bd7f287240.jpg'
        }
      ],
      categories: [],
      pk: '9311874809857',
      whitePrice: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0929432003',
          name: 'Regular Fit Jacket',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ba/ab/baabda01cf017a2e41a5c12176a3a9bd7f287240.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/ba/ab/baabda01cf017a2e41a5c12176a3a9bd7f287240.jpg'
            }
          ],
          pk: '9282974089217',
          whitePrice: {
            currencyIso: 'USD',
            value: 84.99,
            priceType: 'BUY',
            formattedValue: '$ 84.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/66/2166fab0aad8a0a3f680cc310312623bf4a09efa.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/21/66/2166fab0aad8a0a3f680cc310312623bf4a09efa.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/66/2166fab0aad8a0a3f680cc310312623bf4a09efa.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/21/66/2166fab0aad8a0a3f680cc310312623bf4a09efa.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkyOTQzMl9ncm91cF8wMDNfZW5fdXM7MDkyOTQzMjAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '929432003249',
          turnToSku: '0929432003002',
          videoId: '1a46934cff14c68d0ab2a9f143b727528f624dc7',
          plpVideo: false
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0929432003',
        name: 'Regular Fit Jacket',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ba/ab/baabda01cf017a2e41a5c12176a3a9bd7f287240.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/ba/ab/baabda01cf017a2e41a5c12176a3a9bd7f287240.jpg'
          }
        ],
        pk: '9282974089217',
        whitePrice: {
          currencyIso: 'USD',
          value: 84.99,
          priceType: 'BUY',
          formattedValue: '$ 84.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/66/2166fab0aad8a0a3f680cc310312623bf4a09efa.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/21/66/2166fab0aad8a0a3f680cc310312623bf4a09efa.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/66/2166fab0aad8a0a3f680cc310312623bf4a09efa.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/21/66/2166fab0aad8a0a3f680cc310312623bf4a09efa.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkyOTQzMl9ncm91cF8wMDNfZW5fdXM7MDkyOTQzMjAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '929432003249',
        turnToSku: '0929432003002',
        videoId: '1a46934cff14c68d0ab2a9f143b727528f624dc7',
        plpVideo: false
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 2096,
          filterCode: '36R'
        },
        {
          orderFilter: 2098,
          filterCode: '40R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        },
        {
          orderFilter: 2103,
          filterCode: '50R'
        },
        {
          orderFilter: 2100,
          filterCode: '44R'
        },
        {
          orderFilter: 2102,
          filterCode: '48R'
        },
        {
          orderFilter: 2095,
          filterCode: '34R'
        },
        {
          orderFilter: 2101,
          filterCode: '46R'
        },
        {
          orderFilter: 2099,
          filterCode: '42R'
        }
      ],
      swatches: [],
      articleCodes: ['0929432003', '0929432001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkyOTQzMl9ncm91cF8wMDNfZW5fdXM7MDkyOTQzMjAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0929432_group_003_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0929432003.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#2B2C32'],
      articleColorNames: ['Black', 'Dark blue'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_blazerssuits_blazers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ed/87/ed87fdf9281c02c41d6e4c40011c19ca11a31d6b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f6/25/f62578fb26103bd97c02b71de20534519b3352fb.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/60/3e/603ee0a61db1ad36958eff2b63380befb2cb186f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/e4/7c/e47c73aef4a6a1a8e327c9d85af4c97c43cc9aca.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/64/80/64801d8032ca3ab3ffe2423f0ab3b720bbeb8362.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f0/14/f0148ed8582609b43f54f02fba4fcd71b15c34ac.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f6/25/f62578fb26103bd97c02b71de20534519b3352fb.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/60/3e/603ee0a61db1ad36958eff2b63380befb2cb186f.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/14/f0148ed8582609b43f54f02fba4fcd71b15c34ac.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/64/80/64801d8032ca3ab3ffe2423f0ab3b720bbeb8362.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/e4/7c/e47c73aef4a6a1a8e327c9d85af4c97c43cc9aca.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ed/87/ed87fdf9281c02c41d6e4c40011c19ca11a31d6b.jpg'
        }
      ],
      allArticleCodes: ['0929432003', '0929432001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/ba/ab/baabda01cf017a2e41a5c12176a3a9bd7f287240.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/9d/69/9d6939a53f3597ac46de19bf2c7b1445e757e7a0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/ba/ab/baabda01cf017a2e41a5c12176a3a9bd7f287240.jpg',
        'https://image.hm.com/assets/hm/9d/69/9d6939a53f3597ac46de19bf2c7b1445e757e7a0.jpg'
      ]
    },
    {
      code: '0656677_group_067',
      name: 'Patterned Resort Shirt',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 17.99,
        priceType: 'BUY',
        formattedValue: '$ 17.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg'
        }
      ],
      categories: [],
      pk: '9525611724801',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 17.99,
        priceType: 'BUY',
        formattedValue: '$ 17.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0656677067',
          name: 'Patterned Resort Shirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg'
            }
          ],
          pk: '9507564748801',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 17.99,
            priceType: 'BUY',
            formattedValue: '$ 17.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDY1NjY3N19ncm91cF8wNjdfZW5fdXM7MDY1NjY3NzA2N19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black/white striped',
            filterName: 'Black_000000,Multi_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '656677067249',
          turnToSku: '0656677067001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0656677067',
        name: 'Patterned Resort Shirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg'
          }
        ],
        pk: '9507564748801',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 17.99,
          priceType: 'BUY',
          formattedValue: '$ 17.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDY1NjY3N19ncm91cF8wNjdfZW5fdXM7MDY1NjY3NzA2N19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black/white striped',
          filterName: 'Black_000000,Multi_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '656677067249',
        turnToSku: '0656677067001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        }
      ],
      swatches: [],
      articleCodes: ['0656677067', '0656677063', '0656677064'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDY1NjY3N19ncm91cF8wNjdfZW5fdXM7MDY1NjY3NzA2N19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0656677_group_067_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0656677067.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#B32B34', '#727DAC'],
      articleColorNames: [
        'Black/white striped',
        'Red/palm trees',
        'Blue/palm trees'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: true,
      redirectToPdp: false,
      mainCategoryCode: 'men_shirts_shortsleeved',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/0a/e7/0ae7e9b657577fe5410c5c9dacf6e9b3688db455.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/0a/e7/0ae7e9b657577fe5410c5c9dacf6e9b3688db455.jpg'
        }
      ],
      allArticleCodes: ['0656677067', '0656677063', '0656677064'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/8e/1e/8e1e0dee4a179ac84dc388add3266c1f2bc3117a.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/a8/ca/a8ca1d5d8c85c0a3610ac84ff1423d6e210d0626.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/c5/2c/c52c830e0b9ce26e670f9a96f713763047b26cf9.jpg',
        'https://image.hm.com/assets/hm/8e/1e/8e1e0dee4a179ac84dc388add3266c1f2bc3117a.jpg',
        'https://image.hm.com/assets/hm/a8/ca/a8ca1d5d8c85c0a3610ac84ff1423d6e210d0626.jpg'
      ]
    },
    {
      code: '0715828_group_060',
      name: 'Slim Fit Fine-knit Turtleneck Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 12.99,
        priceType: 'BUY',
        formattedValue: '$ 12.99',
        type: 'RED'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg'
        }
      ],
      categories: [],
      pk: '9429797175297',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      redPrice: {
        currencyIso: 'USD',
        value: 12.99,
        priceType: 'BUY',
        formattedValue: '$ 12.99',
        type: 'RED'
      },
      articles: [
        {
          code: '0715828060',
          name: 'Slim Fit Fine-knit Turtleneck Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg'
            }
          ],
          pk: '9384459337729',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          redPrice: {
            currencyIso: 'USD',
            value: 12.99,
            priceType: 'BUY',
            formattedValue: '$ 12.99',
            type: 'RED'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/d3/b7d3ab5565f98671d9f97f1cb9c99a951dc3b1b9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/b7/d3/b7d3ab5565f98671d9f97f1cb9c99a951dc3b1b9.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/d3/b7d3ab5565f98671d9f97f1cb9c99a951dc3b1b9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/b7/d3/b7d3ab5565f98671d9f97f1cb9c99a951dc3b1b9.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wNjBfZW5fdXM7MDcxNTgyODA2MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '008000',
            text: 'Brown melange',
            filterName: 'Brown_A52A2A',
            hybrisCode: '19'
          },
          rgbColor: '#4E4031',
          genArticle: '715828060238',
          percentageDiscount: '-59%',
          turnToSku: '0715828060001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0715828060',
        name: 'Slim Fit Fine-knit Turtleneck Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg'
          }
        ],
        pk: '9384459337729',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        redPrice: {
          currencyIso: 'USD',
          value: 12.99,
          priceType: 'BUY',
          formattedValue: '$ 12.99',
          type: 'RED'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/d3/b7d3ab5565f98671d9f97f1cb9c99a951dc3b1b9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/b7/d3/b7d3ab5565f98671d9f97f1cb9c99a951dc3b1b9.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/d3/b7d3ab5565f98671d9f97f1cb9c99a951dc3b1b9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/b7/d3/b7d3ab5565f98671d9f97f1cb9c99a951dc3b1b9.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wNjBfZW5fdXM7MDcxNTgyODA2MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '008000',
          text: 'Brown melange',
          filterName: 'Brown_A52A2A',
          hybrisCode: '19'
        },
        rgbColor: '#4E4031',
        genArticle: '715828060238',
        percentageDiscount: '-59%',
        turnToSku: '0715828060001'
      },
      sale: true,
      variantSizes: [
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        }
      ],
      swatches: [],
      articleCodes: ['0715828060', '0715828011', '0715828013', '0715828059'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wNjBfZW5fdXM7MDcxNTgyODA2MF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0715828_group_060_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0715828060.html',
      categoryName: 'Men',
      rgbColors: ['#4E4031', '#ECEBE9', '#272628', '#A9A398'],
      articleColorNames: [
        'Brown melange',
        'White',
        'Black',
        'Taupe',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: true,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a1/57/a157f488b4f5e9617e00862f3d935cfaf788aa53.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a1/57/a157f488b4f5e9617e00862f3d935cfaf788aa53.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/94/cf/94cf2cdd5db11767598566060673b5c3c2d3ba83.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/72/ca/72ca336fa71367e7d89331a091ae2636e378ce78.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/72/ca/72ca336fa71367e7d89331a091ae2636e378ce78.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/94/cf/94cf2cdd5db11767598566060673b5c3c2d3ba83.jpg'
        }
      ],
      allArticleCodes: [
        '0715828060',
        '0715828011',
        '0715828013',
        '0715828059',
        '0715828061',
        '0715828074'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/5a/f0/5af023c621244c79271da10e230ed19917fcd8ec.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/2f/cd/2fcd1d46dae4423ba067ca1491d2a20edd1b0a99.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/0a/01/0a0120563a64158289de28e282b93bfb93ec2dcd.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg',
        'https://image.hm.com/assets/hm/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg',
        'https://image.hm.com/assets/hm/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg',
        'https://image.hm.com/assets/hm/5a/f0/5af023c621244c79271da10e230ed19917fcd8ec.jpg',
        'https://image.hm.com/assets/hm/2f/cd/2fcd1d46dae4423ba067ca1491d2a20edd1b0a99.jpg',
        'https://image.hm.com/assets/hm/0a/01/0a0120563a64158289de28e282b93bfb93ec2dcd.jpg'
      ]
    },
    {
      code: '0841808_group_001',
      name: 'Slim Fit Stretch Shirt',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/74/88/748812fae326b62a0a574bdde35ecad7954985bb.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/74/88/748812fae326b62a0a574bdde35ecad7954985bb.jpg'
        }
      ],
      categories: [],
      pk: '9226250387457',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0841808001',
          name: 'Slim Fit Stretch Shirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/74/88/748812fae326b62a0a574bdde35ecad7954985bb.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/74/88/748812fae326b62a0a574bdde35ecad7954985bb.jpg'
            }
          ],
          pk: '9210676314113',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/51/ad/51adfeeab6c792f79f4026de12a4eebb4b77ab7f.jpg],origin[dam],category[men_shirts_longsleeved],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/51/ad/51adfeeab6c792f79f4026de12a4eebb4b77ab7f.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/51/ad/51adfeeab6c792f79f4026de12a4eebb4b77ab7f.jpg],origin[dam],category[men_shirts_longsleeved],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/51/ad/51adfeeab6c792f79f4026de12a4eebb4b77ab7f.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg0MTgwOF9ncm91cF8wMDFfZW5fdXM7MDg0MTgwODAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FFFFFF',
            text: 'White',
            filterName: 'White_FFFFFF',
            hybrisCode: '10'
          },
          campaignMedia: {
            url: 'https://photorankmedia-a.akamaihd.net/media/e/z/p/ezptnn4/mobile.jpg',
            id: '3390321606',
            author: 'ivansedanto',
            type: 'CAMPAIGN'
          },
          rgbColor: '#FFFFFF',
          genArticle: '841808001249',
          turnToSku: '0841808001001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0841808001',
        name: 'Slim Fit Stretch Shirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/74/88/748812fae326b62a0a574bdde35ecad7954985bb.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/74/88/748812fae326b62a0a574bdde35ecad7954985bb.jpg'
          }
        ],
        pk: '9210676314113',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/51/ad/51adfeeab6c792f79f4026de12a4eebb4b77ab7f.jpg],origin[dam],category[men_shirts_longsleeved],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/51/ad/51adfeeab6c792f79f4026de12a4eebb4b77ab7f.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/51/ad/51adfeeab6c792f79f4026de12a4eebb4b77ab7f.jpg],origin[dam],category[men_shirts_longsleeved],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/51/ad/51adfeeab6c792f79f4026de12a4eebb4b77ab7f.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg0MTgwOF9ncm91cF8wMDFfZW5fdXM7MDg0MTgwODAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FFFFFF',
          text: 'White',
          filterName: 'White_FFFFFF',
          hybrisCode: '10'
        },
        campaignMedia: {
          url: 'https://photorankmedia-a.akamaihd.net/media/e/z/p/ezptnn4/mobile.jpg',
          id: '3390321606',
          author: 'ivansedanto',
          type: 'CAMPAIGN'
        },
        rgbColor: '#FFFFFF',
        genArticle: '841808001249',
        turnToSku: '0841808001001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        }
      ],
      swatches: [],
      articleCodes: ['0841808001', '0841808002', '0841808004'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg0MTgwOF9ncm91cF8wMDFfZW5fdXM7MDg0MTgwODAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0841808_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0841808001.html',
      categoryName: 'Men',
      rgbColors: ['#FFFFFF', '#272628', '#AFBFDF'],
      articleColorNames: ['White', 'Black', 'Light blue'],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_shirt_dressed_slimfit',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/38/8138a54d3dcc96aa74678ca2ce1cd13adc9b22bb.jpg],origin[dam],category[men_shirts_longsleeved],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/0e/fd/0efdc1ebf4195051508da0bf0825c646ecd77dd9.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/63/bb/63bb274f98828705cb3df193db62ea464ae074e1.jpg],origin[dam],category[men_shirts_longsleeved],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/1c/0b/1c0bd6b4613d1df346094624c406b0490b42d246.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/0e/fd/0efdc1ebf4195051508da0bf0825c646ecd77dd9.jpg],origin[dam],category[men_shirts_longsleeved],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/63/bb/63bb274f98828705cb3df193db62ea464ae074e1.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/1c/0b/1c0bd6b4613d1df346094624c406b0490b42d246.jpg],origin[dam],category[men_shirts_longsleeved],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/81/38/8138a54d3dcc96aa74678ca2ce1cd13adc9b22bb.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/45/3845d669313b837e0d65c03c9130df5efc12cdcc.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/38/45/3845d669313b837e0d65c03c9130df5efc12cdcc.jpg'
        }
      ],
      allArticleCodes: ['0841808001', '0841808002', '0841808004'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/74/88/748812fae326b62a0a574bdde35ecad7954985bb.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/43/2f/432fbc25be8adad8de58f2b9173e59429dd5e003.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ae/2a/ae2afd25d85042b056cbbf25e9cfe2b5c2ec63c5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/74/88/748812fae326b62a0a574bdde35ecad7954985bb.jpg',
        'https://image.hm.com/assets/hm/43/2f/432fbc25be8adad8de58f2b9173e59429dd5e003.jpg',
        'https://image.hm.com/assets/hm/ae/2a/ae2afd25d85042b056cbbf25e9cfe2b5c2ec63c5.jpg'
      ]
    },
    {
      code: '0715828_group_011',
      name: 'Slim Fit Fine-knit Turtleneck Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg'
        }
      ],
      categories: [],
      pk: '9217908867073',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0715828011',
          name: 'Slim Fit Fine-knit Turtleneck Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg'
            }
          ],
          pk: '9206567665665',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/fc/30fce6e05bf444e71f7893290197a2351681a44a.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/30/fc/30fce6e05bf444e71f7893290197a2351681a44a.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/fc/30fce6e05bf444e71f7893290197a2351681a44a.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/30/fc/30fce6e05bf444e71f7893290197a2351681a44a.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wMTFfZW5fdXM7MDcxNTgyODAxMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FFFFFF',
            text: 'White',
            filterName: 'White_FFFFFF',
            hybrisCode: '10'
          },
          campaignMedia: {
            url: 'https://photorankmedia-a.akamaihd.net/media/8/h/w/8hwpdv4/mobile.jpg',
            id: '3692594769',
            author: 'zouhair_ouarguini',
            type: 'CAMPAIGN'
          },
          rgbColor: '#ECEBE9',
          genArticle: '715828011238',
          turnToSku: '0715828011001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0715828011',
        name: 'Slim Fit Fine-knit Turtleneck Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg'
          }
        ],
        pk: '9206567665665',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/fc/30fce6e05bf444e71f7893290197a2351681a44a.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/30/fc/30fce6e05bf444e71f7893290197a2351681a44a.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/fc/30fce6e05bf444e71f7893290197a2351681a44a.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/30/fc/30fce6e05bf444e71f7893290197a2351681a44a.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wMTFfZW5fdXM7MDcxNTgyODAxMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FFFFFF',
          text: 'White',
          filterName: 'White_FFFFFF',
          hybrisCode: '10'
        },
        campaignMedia: {
          url: 'https://photorankmedia-a.akamaihd.net/media/8/h/w/8hwpdv4/mobile.jpg',
          id: '3692594769',
          author: 'zouhair_ouarguini',
          type: 'CAMPAIGN'
        },
        rgbColor: '#ECEBE9',
        genArticle: '715828011238',
        turnToSku: '0715828011001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        }
      ],
      swatches: [],
      articleCodes: ['0715828011', '0715828013', '0715828059', '0715828060'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxNTgyOF9ncm91cF8wMTFfZW5fdXM7MDcxNTgyODAxMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0715828_group_011_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0715828011.html',
      categoryName: 'Men',
      rgbColors: ['#ECEBE9', '#272628', '#A9A398', '#4E4031'],
      articleColorNames: [
        'White',
        'Black',
        'Taupe',
        'Brown melange',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: true,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c1/6b/c16bd46887b501aa1394b6edfeed00e370d5ef5e.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/11/85/1185c7897a14f8df90bbbf2a210d106cfb679a33.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/61/c4/61c49e83b52c5a725a6186c50d8f9881b877e38e.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c1/6b/c16bd46887b501aa1394b6edfeed00e370d5ef5e.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/ec/c4ec537a80f020a74ceeffdaa13d8529eacc5b2a.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c4/ec/c4ec537a80f020a74ceeffdaa13d8529eacc5b2a.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/2f/f5/2ff5144e13598746174318fda25eca7e04c7cf8a.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/2f/f5/2ff5144e13598746174318fda25eca7e04c7cf8a.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/11/85/1185c7897a14f8df90bbbf2a210d106cfb679a33.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/61/c4/61c49e83b52c5a725a6186c50d8f9881b877e38e.jpg'
        }
      ],
      allArticleCodes: [
        '0715828011',
        '0715828013',
        '0715828059',
        '0715828060',
        '0715828061',
        '0715828074'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg],origin[dam],category[men_cardigansjumpers_turtleneck],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/5a/f0/5af023c621244c79271da10e230ed19917fcd8ec.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/2f/cd/2fcd1d46dae4423ba067ca1491d2a20edd1b0a99.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/0a/01/0a0120563a64158289de28e282b93bfb93ec2dcd.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/2c/7c/2c7cfddfaa2e0a610000c3d5969af0568b204a86.jpg',
        'https://image.hm.com/assets/hm/56/37/56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg',
        'https://image.hm.com/assets/hm/5a/f0/5af023c621244c79271da10e230ed19917fcd8ec.jpg',
        'https://image.hm.com/assets/hm/1e/01/1e014c6067bc1fca1b2dbbe7f420788ecc0b6e40.jpg',
        'https://image.hm.com/assets/hm/2f/cd/2fcd1d46dae4423ba067ca1491d2a20edd1b0a99.jpg',
        'https://image.hm.com/assets/hm/0a/01/0a0120563a64158289de28e282b93bfb93ec2dcd.jpg'
      ]
    },
    {
      code: '1026351_group_001',
      name: 'Slim Fit Cotton Turtleneck Shirt',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 19.99,
        priceType: 'BUY',
        formattedValue: '$ 19.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/89/83/898396242549d47ec8c92fa2891cf68d2768b51d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/89/83/898396242549d47ec8c92fa2891cf68d2768b51d.jpg'
        }
      ],
      categories: [],
      pk: '9368065441793',
      whitePrice: {
        currencyIso: 'USD',
        value: 19.99,
        priceType: 'BUY',
        formattedValue: '$ 19.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1026351001',
          name: 'Slim Fit Cotton Turtleneck Shirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/89/83/898396242549d47ec8c92fa2891cf68d2768b51d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/89/83/898396242549d47ec8c92fa2891cf68d2768b51d.jpg'
            }
          ],
          pk: '9349887033345',
          whitePrice: {
            currencyIso: 'USD',
            value: 19.99,
            priceType: 'BUY',
            formattedValue: '$ 19.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e0/74/e07401e5f1c89195c511f2cd5ea87bb9c461a076.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e0/74/e07401e5f1c89195c511f2cd5ea87bb9c461a076.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e0/74/e07401e5f1c89195c511f2cd5ea87bb9c461a076.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e0/74/e07401e5f1c89195c511f2cd5ea87bb9c461a076.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAyNjM1MV9ncm91cF8wMDFfZW5fdXM7MTAyNjM1MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black',
            filterName: 'Black_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '026351001249',
          turnToSku: '1026351001001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1026351001',
        name: 'Slim Fit Cotton Turtleneck Shirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/89/83/898396242549d47ec8c92fa2891cf68d2768b51d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/89/83/898396242549d47ec8c92fa2891cf68d2768b51d.jpg'
          }
        ],
        pk: '9349887033345',
        whitePrice: {
          currencyIso: 'USD',
          value: 19.99,
          priceType: 'BUY',
          formattedValue: '$ 19.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e0/74/e07401e5f1c89195c511f2cd5ea87bb9c461a076.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e0/74/e07401e5f1c89195c511f2cd5ea87bb9c461a076.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e0/74/e07401e5f1c89195c511f2cd5ea87bb9c461a076.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e0/74/e07401e5f1c89195c511f2cd5ea87bb9c461a076.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAyNjM1MV9ncm91cF8wMDFfZW5fdXM7MTAyNjM1MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black',
          filterName: 'Black_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '026351001249',
        turnToSku: '1026351001001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        }
      ],
      swatches: [],
      articleCodes: ['1026351001', '1026351002'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAyNjM1MV9ncm91cF8wMDFfZW5fdXM7MTAyNjM1MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '1026351_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1026351001.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#FFFFFF'],
      articleColorNames: ['Black', 'White'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_turtleneck',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/68/e7/68e7ecfc459d0289370a43f2237ea08217ee03e1.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/68/e7/68e7ecfc459d0289370a43f2237ea08217ee03e1.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a1/22/a122012ec01b98daa0dcd9a98df39f924dbb7ecc.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/bc/53/bc5382a41e16033a70f7c1ca6d56f1934e27ac6f.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bc/53/bc5382a41e16033a70f7c1ca6d56f1934e27ac6f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a1/22/a122012ec01b98daa0dcd9a98df39f924dbb7ecc.jpg'
        }
      ],
      allArticleCodes: ['1026351001', '1026351002'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/89/83/898396242549d47ec8c92fa2891cf68d2768b51d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/61/a3/61a3b2b30c23766d5848ab464f4cc1f72e227db2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/89/83/898396242549d47ec8c92fa2891cf68d2768b51d.jpg',
        'https://image.hm.com/assets/hm/61/a3/61a3b2b30c23766d5848ab464f4cc1f72e227db2.jpg'
      ]
    },
    {
      code: '0564358_group_107',
      name: 'Slim Fit Fine-knit Cotton Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg'
        }
      ],
      categories: [],
      pk: '9505939554305',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0564358107',
          name: 'Slim Fit Fine-knit Cotton Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg'
            }
          ],
          pk: '9458693931009',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/d4/95/d49535f6b93c01cfa9082ed3b51289abad028ae5.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/d4/95/d49535f6b93c01cfa9082ed3b51289abad028ae5.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/d4/95/d49535f6b93c01cfa9082ed3b51289abad028ae5.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/d4/95/d49535f6b93c01cfa9082ed3b51289abad028ae5.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8xMDdfZW5fdXM7MDU2NDM1ODEwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FFFFFF',
            text: 'Cream',
            filterName: 'White_FFFFFF',
            hybrisCode: '10'
          },
          rgbColor: '#F4EEE8',
          genArticle: '564358107238',
          turnToSku: '0564358107001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0564358107',
        name: 'Slim Fit Fine-knit Cotton Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg'
          }
        ],
        pk: '9458693931009',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/d4/95/d49535f6b93c01cfa9082ed3b51289abad028ae5.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/d4/95/d49535f6b93c01cfa9082ed3b51289abad028ae5.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/d4/95/d49535f6b93c01cfa9082ed3b51289abad028ae5.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/d4/95/d49535f6b93c01cfa9082ed3b51289abad028ae5.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8xMDdfZW5fdXM7MDU2NDM1ODEwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FFFFFF',
          text: 'Cream',
          filterName: 'White_FFFFFF',
          hybrisCode: '10'
        },
        rgbColor: '#F4EEE8',
        genArticle: '564358107238',
        turnToSku: '0564358107001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        }
      ],
      swatches: [],
      articleCodes: ['0564358107', '0564358012', '0564358080', '0564358086'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8xMDdfZW5fdXM7MDU2NDM1ODEwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0564358_group_107_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0564358107.html',
      categoryName: 'Men',
      rgbColors: ['#F4EEE8', '#272628', '#876F58', '#DCCAB7'],
      articleColorNames: [
        'Cream',
        'Black',
        'Dark beige melange',
        'Light beige',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: true,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/2e/6a/2e6a82721971e322e6fb27951765e2d6dad8e0a2.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/7d/d1/7dd1b552fb6b8ac24b7080443a5fe13d391d5b95.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c9/19/c919b3a69b352fd534a23893af274f0628e89c9d.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/2e/6a/2e6a82721971e322e6fb27951765e2d6dad8e0a2.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4a/04/4a0492a7bb24e61d8df9cb9c6b5bee436601900a.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c9/19/c919b3a69b352fd534a23893af274f0628e89c9d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/7d/d1/7dd1b552fb6b8ac24b7080443a5fe13d391d5b95.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4a/04/4a0492a7bb24e61d8df9cb9c6b5bee436601900a.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ff/d3/ffd304cd9054b8f1d78c63f628861638101ebe48.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ff/d3/ffd304cd9054b8f1d78c63f628861638101ebe48.jpg'
        }
      ],
      allArticleCodes: [
        '0564358107',
        '0564358012',
        '0564358080',
        '0564358086',
        '0564358088',
        '0564358105'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/6e/78/6e7843a8fa7305d9c7e88fe6a92fe91e321cdb94.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/37/d8/37d8186683f2dc9b89ffde6ee967de9cbb7b3f4c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d1/30/d1309378ed14a971280bfbd28541064662e56431.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg',
        'https://image.hm.com/assets/hm/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg',
        'https://image.hm.com/assets/hm/6e/78/6e7843a8fa7305d9c7e88fe6a92fe91e321cdb94.jpg',
        'https://image.hm.com/assets/hm/37/d8/37d8186683f2dc9b89ffde6ee967de9cbb7b3f4c.jpg',
        'https://image.hm.com/assets/hm/d1/30/d1309378ed14a971280bfbd28541064662e56431.jpg',
        'https://image.hm.com/assets/hm/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg'
      ]
    },
    {
      code: '0564358_group_105',
      name: 'Slim Fit Fine-knit Cotton Sweater',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg'
        }
      ],
      categories: [],
      pk: '9510678364161',
      whitePrice: {
        currencyIso: 'USD',
        value: 31.99,
        priceType: 'BUY',
        formattedValue: '$ 31.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0564358105',
          name: 'Slim Fit Fine-knit Cotton Sweater',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg'
            }
          ],
          pk: '9458701336577',
          whitePrice: {
            currencyIso: 'USD',
            value: 31.99,
            priceType: 'BUY',
            formattedValue: '$ 31.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/76/33/7633ce364667abc5340604c652b865cd34c369a1.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/76/33/7633ce364667abc5340604c652b865cd34c369a1.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/76/33/7633ce364667abc5340604c652b865cd34c369a1.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/76/33/7633ce364667abc5340604c652b865cd34c369a1.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8xMDVfZW5fdXM7MDU2NDM1ODEwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Light blue',
            filterName: 'Blue_0000FF',
            hybrisCode: '72'
          },
          rgbColor: '#727DAC',
          genArticle: '564358105238',
          turnToSku: '0564358105001'
        }
      ],
      visible: false,
      concept: ['H&M MAN'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0564358105',
        name: 'Slim Fit Fine-knit Cotton Sweater',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg'
          }
        ],
        pk: '9458701336577',
        whitePrice: {
          currencyIso: 'USD',
          value: 31.99,
          priceType: 'BUY',
          formattedValue: '$ 31.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/76/33/7633ce364667abc5340604c652b865cd34c369a1.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/76/33/7633ce364667abc5340604c652b865cd34c369a1.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/76/33/7633ce364667abc5340604c652b865cd34c369a1.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/76/33/7633ce364667abc5340604c652b865cd34c369a1.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8xMDVfZW5fdXM7MDU2NDM1ODEwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Light blue',
          filterName: 'Blue_0000FF',
          hybrisCode: '72'
        },
        rgbColor: '#727DAC',
        genArticle: '564358105238',
        turnToSku: '0564358105001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        }
      ],
      swatches: [],
      articleCodes: ['0564358105', '0564358012', '0564358080', '0564358086'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU2NDM1OF9ncm91cF8xMDVfZW5fdXM7MDU2NDM1ODEwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTsyMjs',
      searchEngineProductId: '0564358_group_105_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0564358105.html',
      categoryName: 'Men',
      rgbColors: ['#727DAC', '#272628', '#876F58', '#DCCAB7'],
      articleColorNames: [
        'Light blue',
        'Black',
        'Dark beige melange',
        'Light beige',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 6,
      showPriceMarker: true,
      redirectToPdp: false,
      mainCategoryCode: 'men_cardigansjumpers_jumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/2a/7a/2a7ad7ed49a6a743272bdf81b2501b3db343a08b.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/2a/7a/2a7ad7ed49a6a743272bdf81b2501b3db343a08b.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/28/ab/28ab471fef42089068d2df159eca0b5607d7d752.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/28/ab/28ab471fef42089068d2df159eca0b5607d7d752.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/97/31/973119a739fed46b5f738fbdbec9dd8d36e0c8ca.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/97/31/973119a739fed46b5f738fbdbec9dd8d36e0c8ca.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c3/12/c312a15c024aab4940250feb1a079017cdf56f83.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c3/12/c312a15c024aab4940250feb1a079017cdf56f83.jpg'
        }
      ],
      allArticleCodes: [
        '0564358105',
        '0564358012',
        '0564358080',
        '0564358086',
        '0564358088',
        '0564358107'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/6e/78/6e7843a8fa7305d9c7e88fe6a92fe91e321cdb94.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/37/d8/37d8186683f2dc9b89ffde6ee967de9cbb7b3f4c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d1/30/d1309378ed14a971280bfbd28541064662e56431.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/db/05/db05b7ff27826bff61f5a0ea2ce096213473a97d.jpg',
        'https://image.hm.com/assets/hm/d4/3b/d43bfbf8b303a7ca2cb2b6bf60a5c52a11c9e419.jpg',
        'https://image.hm.com/assets/hm/6e/78/6e7843a8fa7305d9c7e88fe6a92fe91e321cdb94.jpg',
        'https://image.hm.com/assets/hm/37/d8/37d8186683f2dc9b89ffde6ee967de9cbb7b3f4c.jpg',
        'https://image.hm.com/assets/hm/d1/30/d1309378ed14a971280bfbd28541064662e56431.jpg',
        'https://image.hm.com/assets/hm/9b/a3/9ba384a6427231a10387edc3729c47590a07ae88.jpg'
      ]
    }
  ],
  pagination: {
    pageSize: 30,
    currentPage: 0,
    sort: 'stock',
    numberOfPages: 6,
    totalNumberOfResults: 169,
    totalNumberOfResultsUnfiltered: 0
  },
  facets: [
    {
      code: 'concepts',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'BASICS',
          count: 219,
          selected: false
        },
        {
          code: 'DENIM',
          count: 112,
          selected: false
        },
        {
          code: 'DIVIDED',
          count: 60,
          selected: false
        },
        {
          code: 'H&M MAN',
          count: 169,
          selected: true
        },
        {
          code: 'H&M Move',
          count: 248,
          selected: false
        },
        {
          code: 'MODERN CLASSIC',
          count: 15,
          selected: false
        }
      ]
    },
    {
      code: 'qualities',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'H&M Premium Selection',
          count: 10,
          selected: false
        }
      ]
    },
    {
      code: 'collection',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: '1_H&M Rabanne',
          count: 0,
          selected: false
        },
        {
          code: '2_Disney100 x H&M',
          count: 0,
          selected: false
        },
        {
          code: '2_Family Collection',
          count: 0,
          selected: false
        },
        {
          code: '2_H&M Move x Zlatan',
          count: 0,
          selected: false
        },
        {
          code: '2_Keith Haring x H&M',
          count: 0,
          selected: false
        },
        {
          code: '2_The Simpsons x H&M',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'functions',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Breathable',
          count: 0,
          selected: false
        },
        {
          code: 'Moisture wicking',
          count: 0,
          selected: false
        },
        {
          code: 'Quick dry',
          count: 0,
          selected: false
        },
        {
          code: 'Reflective details',
          count: 0,
          selected: false
        },
        {
          code: 'Thermal',
          count: 0,
          selected: false
        },
        {
          code: 'Water-repellent',
          count: 0,
          selected: false
        },
        {
          code: 'Water-resistant',
          count: 0,
          selected: false
        },
        {
          code: 'Waterproof',
          count: 0,
          selected: false
        },
        {
          code: 'Wind resistant',
          count: 0,
          selected: false
        },
        {
          code: 'Windproof',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'colors',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'beige',
          count: 29,
          selected: false
        },
        {
          code: 'black',
          count: 43,
          selected: false
        },
        {
          code: 'blue',
          count: 27,
          selected: false
        },
        {
          code: 'brown',
          count: 5,
          selected: false
        },
        {
          code: 'gold-colored',
          count: 0,
          selected: false
        },
        {
          code: 'gray',
          count: 24,
          selected: false
        },
        {
          code: 'green',
          count: 9,
          selected: false
        },
        {
          code: 'multi',
          count: 39,
          selected: false
        },
        {
          code: 'orange',
          count: 2,
          selected: false
        },
        {
          code: 'pink',
          count: 2,
          selected: false
        },
        {
          code: 'purple',
          count: 1,
          selected: false
        },
        {
          code: 'red',
          count: 6,
          selected: false
        },
        {
          code: 'silver-colored',
          count: 0,
          selected: false
        },
        {
          code: 'transparent',
          count: 0,
          selected: false
        },
        {
          code: 'turquoise',
          count: 1,
          selected: false
        },
        {
          code: 'white',
          count: 23,
          selected: false
        },
        {
          code: 'yellow',
          count: 1,
          selected: false
        }
      ]
    },
    {
      code: 'fits',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Fitted',
          count: 0,
          selected: false
        },
        {
          code: 'Loose fit',
          count: 1,
          selected: false
        },
        {
          code: 'Muscle fit',
          count: 12,
          selected: false
        },
        {
          code: 'Oversized',
          count: 0,
          selected: false
        },
        {
          code: 'Regular fit',
          count: 53,
          selected: false
        },
        {
          code: 'Relaxed fit',
          count: 23,
          selected: false
        },
        {
          code: 'Skinny fit',
          count: 15,
          selected: false
        },
        {
          code: 'Slim fit',
          count: 65,
          selected: false
        }
      ]
    },
    {
      code: 'contexts',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Beach',
          count: 0,
          selected: false
        },
        {
          code: 'Casual',
          count: 119,
          selected: false
        },
        {
          code: 'Costume Party',
          count: 0,
          selected: false
        },
        {
          code: 'Formal',
          count: 18,
          selected: false
        },
        {
          code: 'Lounge',
          count: 0,
          selected: false
        },
        {
          code: 'Office Wear',
          count: 18,
          selected: false
        },
        {
          code: 'Party',
          count: 0,
          selected: false
        },
        {
          code: 'Sport',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'productTypes',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Bag',
          count: 0,
          selected: false
        },
        {
          code: 'Belt',
          count: 0,
          selected: false
        },
        {
          code: 'Blazer',
          count: 12,
          selected: false
        },
        {
          code: 'Bow Tie',
          count: 0,
          selected: false
        },
        {
          code: 'Bracelet',
          count: 0,
          selected: false
        },
        {
          code: 'Briefs',
          count: 0,
          selected: false
        },
        {
          code: 'Cap',
          count: 0,
          selected: false
        },
        {
          code: 'Cardigan',
          count: 2,
          selected: false
        },
        {
          code: 'Coat',
          count: 0,
          selected: false
        },
        {
          code: 'Dog Wear',
          count: 0,
          selected: false
        },
        {
          code: 'Eyeglasses',
          count: 0,
          selected: false
        },
        {
          code: 'Gloves',
          count: 0,
          selected: false
        },
        {
          code: 'Hairband',
          count: 0,
          selected: false
        },
        {
          code: 'Handkerchief',
          count: 0,
          selected: false
        },
        {
          code: 'Hat',
          count: 0,
          selected: false
        },
        {
          code: 'Headband',
          count: 0,
          selected: false
        },
        {
          code: 'Hemming Tape',
          count: 0,
          selected: false
        },
        {
          code: 'Jacket',
          count: 1,
          selected: false
        },
        {
          code: 'Jeans',
          count: 0,
          selected: false
        },
        {
          code: 'Knit Sweater',
          count: 19,
          selected: false
        },
        {
          code: 'Laundry Bag',
          count: 0,
          selected: false
        },
        {
          code: 'Leggings',
          count: 0,
          selected: false
        },
        {
          code: 'Mittens',
          count: 0,
          selected: false
        },
        {
          code: 'Neck Warmer Bib',
          count: 0,
          selected: false
        },
        {
          code: 'Necklace',
          count: 0,
          selected: false
        },
        {
          code: 'Pajama Pants',
          count: 0,
          selected: false
        },
        {
          code: 'Pajama Shorts',
          count: 0,
          selected: false
        },
        {
          code: 'Pajamas',
          count: 0,
          selected: false
        },
        {
          code: 'Pants',
          count: 44,
          selected: false
        },
        {
          code: 'Patch',
          count: 0,
          selected: false
        },
        {
          code: 'Resistance Band',
          count: 0,
          selected: false
        },
        {
          code: 'Ring',
          count: 0,
          selected: false
        },
        {
          code: 'Scarf',
          count: 0,
          selected: false
        },
        {
          code: 'Shirt',
          count: 52,
          selected: false
        },
        {
          code: 'Shoes',
          count: 0,
          selected: false
        },
        {
          code: 'Shorts',
          count: 9,
          selected: false
        },
        {
          code: 'Skateboard',
          count: 0,
          selected: false
        },
        {
          code: 'Ski Goggles',
          count: 0,
          selected: false
        },
        {
          code: 'Slippers',
          count: 0,
          selected: false
        },
        {
          code: 'Smartphone Case',
          count: 0,
          selected: false
        },
        {
          code: 'Socks',
          count: 0,
          selected: false
        },
        {
          code: 'Sunglasses',
          count: 0,
          selected: false
        },
        {
          code: 'Suspenders',
          count: 0,
          selected: false
        },
        {
          code: 'Swim Shorts',
          count: 0,
          selected: false
        },
        {
          code: 'T-shirt',
          count: 5,
          selected: false
        },
        {
          code: 'Tie',
          count: 0,
          selected: false
        },
        {
          code: 'Toiletry bag',
          count: 0,
          selected: false
        },
        {
          code: 'Top',
          count: 0,
          selected: false
        },
        {
          code: 'Vest',
          count: 2,
          selected: false
        },
        {
          code: 'Water Bottle',
          count: 0,
          selected: false
        },
        {
          code: 'Yoga Mat',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'productGroups',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Bags',
          count: 0,
          selected: false
        },
        {
          code: 'Clothing Accessories',
          count: 0,
          selected: false
        },
        {
          code: 'Eyewear',
          count: 0,
          selected: false
        },
        {
          code: 'Fragrances',
          count: 0,
          selected: false
        },
        {
          code: 'Functional Wear',
          count: 0,
          selected: false
        },
        {
          code: 'Garment Care',
          count: 0,
          selected: false
        },
        {
          code: 'Hair Accessories',
          count: 0,
          selected: false
        },
        {
          code: 'Headwear',
          count: 0,
          selected: false
        },
        {
          code: 'Jewelry',
          count: 0,
          selected: false
        },
        {
          code: 'Loungewear',
          count: 0,
          selected: false
        },
        {
          code: 'Nightwear',
          count: 0,
          selected: false
        },
        {
          code: 'Outerwear',
          count: 1,
          selected: false
        },
        {
          code: 'Pet Accessories',
          count: 0,
          selected: false
        },
        {
          code: 'Rainwear',
          count: 0,
          selected: false
        },
        {
          code: 'Sport Accessories',
          count: 0,
          selected: false
        },
        {
          code: 'Sportswear',
          count: 0,
          selected: false
        },
        {
          code: 'Swimwear',
          count: 0,
          selected: false
        },
        {
          code: 'Tech Accessories',
          count: 0,
          selected: false
        },
        {
          code: 'Underwear',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'ageGroups',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'adult',
          count: 169,
          selected: false
        }
      ]
    },
    {
      code: 'customerGroups',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Man',
          count: 169,
          selected: false
        },
        {
          code: 'Woman',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'assortmentTypes',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'accessories',
          count: 0,
          selected: false
        },
        {
          code: 'accessories ',
          count: 0,
          selected: false
        },
        {
          code: 'clothing',
          count: 123,
          selected: false
        },
        {
          code: 'clothing ',
          count: 46,
          selected: false
        },
        {
          code: 'footwear',
          count: 0,
          selected: false
        },
        {
          code: 'homeware',
          count: 0,
          selected: false
        },
        {
          code: 'personal care',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'sizes',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: '101_36_5_waist',
          count: 14,
          selected: false
        },
        {
          code: '106_38_5_waist',
          count: 16,
          selected: false
        },
        {
          code: '111_40_5_waist',
          count: 12,
          selected: false
        },
        {
          code: '117_42_5_waist',
          count: 17,
          selected: false
        },
        {
          code: '1392_28/32_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1396_29/30_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '13_9_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '1401_30/30_5_waist',
          count: 5,
          selected: false
        },
        {
          code: '1402_30/32_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1403_30/34_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '1407_31/30_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1408_31/32_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1413_32/30_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1414_32/32_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1415_32/34_5_waist',
          count: 5,
          selected: false
        },
        {
          code: '1419_33/30_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1420_33/32_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1421_33/34_5_waist',
          count: 5,
          selected: false
        },
        {
          code: '1425_34/30_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1426_34/32_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1427_34/34_5_waist',
          count: 5,
          selected: false
        },
        {
          code: '1431_36/30_5_waist',
          count: 3,
          selected: false
        },
        {
          code: '1432_36/32_5_waist',
          count: 5,
          selected: false
        },
        {
          code: '1433_36/34_5_waist',
          count: 5,
          selected: false
        },
        {
          code: '1436_38/30_5_waist',
          count: 3,
          selected: false
        },
        {
          code: '1437_38/32_5_waist',
          count: 8,
          selected: false
        },
        {
          code: '1438_38/34_5_waist',
          count: 4,
          selected: false
        },
        {
          code: '1443_40/32_5_waist',
          count: 6,
          selected: false
        },
        {
          code: '1448_42/32_5_waist',
          count: 10,
          selected: false
        },
        {
          code: '1454_44/32_5_waist',
          count: 8,
          selected: false
        },
        {
          code: '14_10_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '16_12_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '17_13_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '1886_5-7_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '1894_8-10_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '1938_46-47_1_womenswear',
          count: 0,
          selected: false
        },
        {
          code: '2033_28s_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '2034_30s_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '2035_32s_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '2036_33s_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '2037_34s_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '2038_36s_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '2092_30r_3_menswear',
          count: 14,
          selected: false
        },
        {
          code: '2093_32r_3_menswear',
          count: 12,
          selected: false
        },
        {
          code: '2094_33r_3_menswear',
          count: 11,
          selected: false
        },
        {
          code: '2095_34r_3_menswear',
          count: 23,
          selected: false
        },
        {
          code: '2096_36r_3_menswear',
          count: 21,
          selected: false
        },
        {
          code: '2097_38r_3_menswear',
          count: 23,
          selected: false
        },
        {
          code: '2098_40r_3_menswear',
          count: 23,
          selected: false
        },
        {
          code: '2099_42r_3_menswear',
          count: 21,
          selected: false
        },
        {
          code: '2100_44r_3_menswear',
          count: 27,
          selected: false
        },
        {
          code: '2101_46r_3_menswear',
          count: 26,
          selected: false
        },
        {
          code: '2102_48r_3_menswear',
          count: 8,
          selected: false
        },
        {
          code: '2103_50r_3_menswear',
          count: 10,
          selected: false
        },
        {
          code: '2104_52r_3_menswear',
          count: 10,
          selected: false
        },
        {
          code: '2154_s/56_3_menswear',
          count: 0,
          selected: false
        },
        {
          code: '2158_m/58_3_menswear',
          count: 0,
          selected: false
        },
        {
          code: '2164_l/60_3_menswear',
          count: 0,
          selected: false
        },
        {
          code: '2477_22x22_1_womenswear',
          count: 0,
          selected: false
        },
        {
          code: '2522_79x10_1_womenswear',
          count: 0,
          selected: false
        },
        {
          code: '2921_29s_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '2922_31s_5_waist',
          count: 0,
          selected: false
        },
        {
          code: '363_xs_1_womenswear',
          count: 0,
          selected: false
        },
        {
          code: '363_xs_3_menswear',
          count: 73,
          selected: false
        },
        {
          code: '366_s_1_womenswear',
          count: 0,
          selected: false
        },
        {
          code: '366_s_3_menswear',
          count: 77,
          selected: false
        },
        {
          code: '369_m_1_womenswear',
          count: 0,
          selected: false
        },
        {
          code: '369_m_3_menswear',
          count: 76,
          selected: false
        },
        {
          code: '36_7.5_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '370_l_1_womenswear',
          count: 0,
          selected: false
        },
        {
          code: '370_l_3_menswear',
          count: 64,
          selected: false
        },
        {
          code: '372_xl_3_menswear',
          count: 59,
          selected: false
        },
        {
          code: '375_xxl_3_menswear',
          count: 59,
          selected: false
        },
        {
          code: '381_3xl_3_menswear',
          count: 73,
          selected: false
        },
        {
          code: '38_8.5_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '40_10.5_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '41_11.5_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '436_s/s_3_menswear',
          count: 0,
          selected: false
        },
        {
          code: '438_m/s_3_menswear',
          count: 0,
          selected: false
        },
        {
          code: '439_l/s_3_menswear',
          count: 0,
          selected: false
        },
        {
          code: '43_13.5_6_footwear',
          count: 0,
          selected: false
        },
        {
          code: '441_xl/s_3_menswear',
          count: 0,
          selected: false
        },
        {
          code: '444_xxl/s_3_menswear',
          count: 0,
          selected: false
        },
        {
          code: '76_28_5_waist',
          count: 19,
          selected: false
        },
        {
          code: '79_29_5_waist',
          count: 14,
          selected: false
        },
        {
          code: '82_30_5_waist',
          count: 14,
          selected: false
        },
        {
          code: '85_31_5_waist',
          count: 14,
          selected: false
        },
        {
          code: '88_32_5_waist',
          count: 16,
          selected: false
        },
        {
          code: '91_33_5_waist',
          count: 15,
          selected: false
        },
        {
          code: '94_34_5_waist',
          count: 15,
          selected: false
        }
      ]
    },
    {
      code: 'sale',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'false',
          count: 147,
          selected: false
        },
        {
          code: 'true',
          count: 22,
          selected: false
        }
      ]
    },
    {
      code: 'colorWithNames',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'beige_f5f5dc',
          count: 29,
          selected: false
        },
        {
          code: 'black_000000',
          count: 43,
          selected: false
        },
        {
          code: 'blue_0000ff',
          count: 27,
          selected: false
        },
        {
          code: 'brown_a52a2a',
          count: 5,
          selected: false
        },
        {
          code: 'gold-colored_ffd700',
          count: 0,
          selected: false
        },
        {
          code: 'gray_808080',
          count: 24,
          selected: false
        },
        {
          code: 'green_008000',
          count: 9,
          selected: false
        },
        {
          code: 'multi_000000',
          count: 39,
          selected: false
        },
        {
          code: 'orange_ffa500',
          count: 2,
          selected: false
        },
        {
          code: 'pink_ffc0cb',
          count: 2,
          selected: false
        },
        {
          code: 'purple_800080',
          count: 1,
          selected: false
        },
        {
          code: 'red_ff0000',
          count: 6,
          selected: false
        },
        {
          code: 'silver-colored_c0c0c0',
          count: 0,
          selected: false
        },
        {
          code: 'transparent_ffffff',
          count: 0,
          selected: false
        },
        {
          code: 'turquoise_40e0d0',
          count: 1,
          selected: false
        },
        {
          code: 'white_ffffff',
          count: 23,
          selected: false
        },
        {
          code: 'yellow_ffff00',
          count: 1,
          selected: false
        }
      ]
    },
    {
      code: 'brandNames',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'H&M',
          count: 169,
          selected: false
        }
      ]
    },
    {
      code: 'clothingStyles',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Ankle Socks',
          count: 0,
          selected: false
        },
        {
          code: 'Anorak',
          count: 0,
          selected: false
        },
        {
          code: 'Balloon Leg',
          count: 0,
          selected: false
        },
        {
          code: 'Baseball Jacket',
          count: 0,
          selected: false
        },
        {
          code: 'Biker',
          count: 0,
          selected: false
        },
        {
          code: 'Blazer',
          count: 1,
          selected: false
        },
        {
          code: 'Bomber Jacket',
          count: 0,
          selected: false
        },
        {
          code: 'Bootcut',
          count: 0,
          selected: false
        },
        {
          code: 'Boxer Shorts',
          count: 0,
          selected: false
        },
        {
          code: 'Boxers',
          count: 0,
          selected: false
        },
        {
          code: 'Car Coat',
          count: 0,
          selected: false
        },
        {
          code: 'Cargo',
          count: 0,
          selected: false
        },
        {
          code: 'Chinos',
          count: 1,
          selected: false
        },
        {
          code: 'Coach Jacket',
          count: 0,
          selected: false
        },
        {
          code: 'Crew Socks',
          count: 0,
          selected: false
        },
        {
          code: 'Cycling Shorts',
          count: 0,
          selected: false
        },
        {
          code: 'Double-breasted',
          count: 0,
          selected: false
        },
        {
          code: 'Flared',
          count: 3,
          selected: false
        },
        {
          code: 'Hooded jacket',
          count: 0,
          selected: false
        },
        {
          code: 'Hoodie',
          count: 3,
          selected: false
        },
        {
          code: 'Joggers',
          count: 2,
          selected: false
        },
        {
          code: 'Lumber Jacket',
          count: 0,
          selected: false
        },
        {
          code: 'Overalls',
          count: 0,
          selected: false
        },
        {
          code: 'Overshirt',
          count: 8,
          selected: false
        },
        {
          code: 'Parachute',
          count: 0,
          selected: false
        },
        {
          code: 'Parka',
          count: 0,
          selected: false
        },
        {
          code: 'Pea Coat',
          count: 0,
          selected: false
        },
        {
          code: 'Polo shirt',
          count: 1,
          selected: false
        },
        {
          code: 'Puffer',
          count: 0,
          selected: false
        },
        {
          code: 'Pull-on Pants',
          count: 0,
          selected: false
        },
        {
          code: 'Rugby Shirt',
          count: 0,
          selected: false
        },
        {
          code: 'Shell Jacket',
          count: 0,
          selected: false
        },
        {
          code: 'Shirt Jacket',
          count: 5,
          selected: false
        },
        {
          code: 'Single-breasted',
          count: 12,
          selected: false
        },
        {
          code: 'Slacks',
          count: 7,
          selected: false
        },
        {
          code: 'Slit',
          count: 0,
          selected: false
        },
        {
          code: 'Smocking',
          count: 0,
          selected: false
        },
        {
          code: 'Sneaker socks',
          count: 0,
          selected: false
        },
        {
          code: 'Stacked',
          count: 0,
          selected: false
        },
        {
          code: 'Straight Leg',
          count: 1,
          selected: false
        },
        {
          code: 'Suit Pants',
          count: 21,
          selected: false
        },
        {
          code: 'Sweater Vest',
          count: 1,
          selected: false
        },
        {
          code: 'Sweatpants',
          count: 1,
          selected: false
        },
        {
          code: 'Sweatshirt',
          count: 4,
          selected: false
        },
        {
          code: 'Sweatshorts',
          count: 0,
          selected: false
        },
        {
          code: 'Tank Top',
          count: 0,
          selected: false
        },
        {
          code: 'Tapered',
          count: 0,
          selected: false
        },
        {
          code: 'Track Jacket',
          count: 0,
          selected: false
        },
        {
          code: 'Track Pants',
          count: 0,
          selected: false
        },
        {
          code: 'Trashed',
          count: 0,
          selected: false
        },
        {
          code: 'Trucker Jacket',
          count: 0,
          selected: false
        },
        {
          code: 'Wide-cut',
          count: 0,
          selected: false
        },
        {
          code: 'Windbreaker',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'accessoriesStyles',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Backpack',
          count: 0,
          selected: false
        },
        {
          code: 'Balaclava',
          count: 0,
          selected: false
        },
        {
          code: 'Baseball Cap',
          count: 0,
          selected: false
        },
        {
          code: 'Belt Bag',
          count: 0,
          selected: false
        },
        {
          code: 'Braided Belt',
          count: 0,
          selected: false
        },
        {
          code: 'Bucket hat',
          count: 0,
          selected: false
        },
        {
          code: 'Cell phone bag',
          count: 0,
          selected: false
        },
        {
          code: 'Chain Bracelet',
          count: 0,
          selected: false
        },
        {
          code: 'Chain Necklace',
          count: 0,
          selected: false
        },
        {
          code: 'Crossbody Bag',
          count: 0,
          selected: false
        },
        {
          code: 'Fedora hat',
          count: 0,
          selected: false
        },
        {
          code: 'Flat Cap',
          count: 0,
          selected: false
        },
        {
          code: 'Hip Belt',
          count: 0,
          selected: false
        },
        {
          code: 'Layered Necklace',
          count: 0,
          selected: false
        },
        {
          code: 'Multi Strand Bracelet',
          count: 0,
          selected: false
        },
        {
          code: 'Pendant Necklace',
          count: 0,
          selected: false
        },
        {
          code: 'Pouch',
          count: 0,
          selected: false
        },
        {
          code: 'Roll-top backpack',
          count: 0,
          selected: false
        },
        {
          code: 'Shopper',
          count: 0,
          selected: false
        },
        {
          code: 'Shoulder Bag',
          count: 0,
          selected: false
        },
        {
          code: 'Sports bag',
          count: 0,
          selected: false
        },
        {
          code: 'Tote Bag',
          count: 0,
          selected: false
        },
        {
          code: 'Tube Scarf',
          count: 0,
          selected: false
        },
        {
          code: 'Waist Belt',
          count: 0,
          selected: false
        },
        {
          code: 'Weekend Bag',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'necklineStyles',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Crew-neck',
          count: 4,
          selected: false
        },
        {
          code: 'Mock Turtleneck',
          count: 2,
          selected: false
        },
        {
          code: 'Round Neck',
          count: 13,
          selected: false
        },
        {
          code: 'Turtleneck',
          count: 16,
          selected: false
        },
        {
          code: 'V-neck',
          count: 4,
          selected: false
        }
      ]
    },
    {
      code: 'collarStyles',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Band Collar ',
          count: 6,
          selected: false
        },
        {
          code: 'Button-down Collar',
          count: 1,
          selected: false
        },
        {
          code: 'Cutaway Collar',
          count: 3,
          selected: false
        },
        {
          code: 'High Collar',
          count: 0,
          selected: false
        },
        {
          code: 'Johnny Collar',
          count: 0,
          selected: false
        },
        {
          code: 'Notched Lapel',
          count: 13,
          selected: false
        },
        {
          code: 'Pointed Lapel',
          count: 0,
          selected: false
        },
        {
          code: 'Resort Collar',
          count: 3,
          selected: false
        },
        {
          code: 'Stand-up Collar',
          count: 5,
          selected: false
        },
        {
          code: 'Turn-down Collar',
          count: 22,
          selected: false
        }
      ]
    },
    {
      code: 'footwearStyles',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Ankle Boots',
          count: 0,
          selected: false
        },
        {
          code: 'Boots',
          count: 0,
          selected: false
        },
        {
          code: 'Chelsea Boots',
          count: 0,
          selected: false
        },
        {
          code: 'Deck Shoes',
          count: 0,
          selected: false
        },
        {
          code: 'Derby Shoes',
          count: 0,
          selected: false
        },
        {
          code: 'Driving Shoes',
          count: 0,
          selected: false
        },
        {
          code: 'Espadrilles',
          count: 0,
          selected: false
        },
        {
          code: 'Lace-up Boots',
          count: 0,
          selected: false
        },
        {
          code: 'Loafers',
          count: 0,
          selected: false
        },
        {
          code: 'Mules',
          count: 0,
          selected: false
        },
        {
          code: 'Sandals',
          count: 0,
          selected: false
        },
        {
          code: 'Slides',
          count: 0,
          selected: false
        },
        {
          code: 'Slip-on',
          count: 0,
          selected: false
        },
        {
          code: 'Sneaker Boots',
          count: 0,
          selected: false
        },
        {
          code: 'Sneakers',
          count: 0,
          selected: false
        },
        {
          code: 'Strappy Sandals',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'sleeveStyles',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Raglan Sleeve',
          count: 6,
          selected: false
        }
      ]
    },
    {
      code: 'garmentLengths',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Ankle-length',
          count: 5,
          selected: false
        },
        {
          code: 'Crop',
          count: 0,
          selected: false
        },
        {
          code: 'Extra-long legs',
          count: 0,
          selected: false
        },
        {
          code: 'Knee-length',
          count: 0,
          selected: false
        },
        {
          code: 'Long',
          count: 52,
          selected: false
        },
        {
          code: 'Regular length',
          count: 103,
          selected: false
        },
        {
          code: 'Short',
          count: 9,
          selected: false
        }
      ]
    },
    {
      code: 'sleeveLengths',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: '3/4 sleeve',
          count: 0,
          selected: false
        },
        {
          code: 'Extra-long sleeve',
          count: 0,
          selected: false
        },
        {
          code: 'Long sleeve',
          count: 82,
          selected: false
        },
        {
          code: 'Short sleeve',
          count: 20,
          selected: false
        },
        {
          code: 'Sleeveless',
          count: 3,
          selected: false
        }
      ]
    },
    {
      code: 'heelHeights',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'High heel',
          count: 0,
          selected: false
        },
        {
          code: 'Low heel',
          count: 0,
          selected: false
        },
        {
          code: 'No heel',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'waistRises',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Low waist',
          count: 0,
          selected: false
        },
        {
          code: 'Regular waist',
          count: 64,
          selected: false
        }
      ]
    },
    {
      code: 'patterns',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'argyle-patterned',
          count: 0,
          selected: false
        },
        {
          code: 'checked',
          count: 21,
          selected: false
        },
        {
          code: 'color-block',
          count: 0,
          selected: false
        },
        {
          code: 'crocodile-patterned',
          count: 0,
          selected: false
        },
        {
          code: 'dotted',
          count: 0,
          selected: false
        },
        {
          code: 'floral',
          count: 1,
          selected: false
        },
        {
          code: 'herringbone-patterned',
          count: 0,
          selected: false
        },
        {
          code: 'houndstooth',
          count: 0,
          selected: false
        },
        {
          code: 'leopard-print',
          count: 0,
          selected: false
        },
        {
          code: 'marbled',
          count: 0,
          selected: false
        },
        {
          code: 'paisley-patterned',
          count: 0,
          selected: false
        },
        {
          code: 'patterned',
          count: 9,
          selected: false
        },
        {
          code: 'pinstriped',
          count: 3,
          selected: false
        },
        {
          code: 'snakeskin-patterned',
          count: 0,
          selected: false
        },
        {
          code: 'solid-color',
          count: 118,
          selected: false
        },
        {
          code: 'striped',
          count: 12,
          selected: false
        },
        {
          code: 'tortoiseshell-patterned',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'occasions',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'christmas',
          count: 0,
          selected: false
        },
        {
          code: 'diwali',
          count: 0,
          selected: false
        },
        {
          code: 'halloween',
          count: 0,
          selected: false
        },
        {
          code: "new year's eve",
          count: 1,
          selected: false
        }
      ]
    },
    {
      code: 'trendings',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'animal pattern',
          count: 0,
          selected: false
        },
        {
          code: 'chunky',
          count: 0,
          selected: false
        },
        {
          code: 'crocheted',
          count: 0,
          selected: false
        },
        {
          code: 'embroidered',
          count: 1,
          selected: false
        },
        {
          code: 'faux fur',
          count: 0,
          selected: false
        },
        {
          code: 'floral',
          count: 1,
          selected: false
        },
        {
          code: 'fringe',
          count: 0,
          selected: false
        },
        {
          code: 'glitter',
          count: 0,
          selected: false
        },
        {
          code: 'graphic',
          count: 0,
          selected: false
        },
        {
          code: 'grunge',
          count: 0,
          selected: false
        },
        {
          code: 'holographic',
          count: 0,
          selected: false
        },
        {
          code: 'leather',
          count: 0,
          selected: false
        },
        {
          code: 'metallic',
          count: 0,
          selected: false
        },
        {
          code: 'neon',
          count: 0,
          selected: false
        },
        {
          code: 'ombre',
          count: 0,
          selected: false
        },
        {
          code: 'pastel colors',
          count: 3,
          selected: false
        },
        {
          code: 'print',
          count: 9,
          selected: false
        },
        {
          code: 'quilted',
          count: 0,
          selected: false
        },
        {
          code: 'rhinestones',
          count: 0,
          selected: false
        },
        {
          code: 'shiny',
          count: 0,
          selected: false
        },
        {
          code: 'suede',
          count: 0,
          selected: false
        },
        {
          code: 'tie-dye',
          count: 1,
          selected: false
        },
        {
          code: 'utility',
          count: 0,
          selected: false
        },
        {
          code: 'velvet',
          count: 0,
          selected: false
        },
        {
          code: 'y2k',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'licenseItems',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'aaliyah',
          count: 0,
          selected: false
        },
        {
          code: 'adventure time',
          count: 0,
          selected: false
        },
        {
          code: 'discovery channel',
          count: 0,
          selected: false
        },
        {
          code: 'felix the cat',
          count: 0,
          selected: false
        },
        {
          code: 'formula 1',
          count: 0,
          selected: false
        },
        {
          code: 'garfield',
          count: 0,
          selected: false
        },
        {
          code: 'gorillaz',
          count: 0,
          selected: false
        },
        {
          code: 'harvard university',
          count: 0,
          selected: false
        },
        {
          code: 'jaws',
          count: 0,
          selected: false
        },
        {
          code: 'joy division',
          count: 0,
          selected: false
        },
        {
          code: 'keith haring',
          count: 0,
          selected: false
        },
        {
          code: 'kodak',
          count: 0,
          selected: false
        },
        {
          code: "lay's",
          count: 0,
          selected: false
        },
        {
          code: 'led zeppelin',
          count: 0,
          selected: false
        },
        {
          code: 'looney tunes',
          count: 0,
          selected: false
        },
        {
          code: 'metallica',
          count: 0,
          selected: false
        },
        {
          code: 'mickey mouse',
          count: 0,
          selected: false
        },
        {
          code: 'mtv',
          count: 0,
          selected: false
        },
        {
          code: 'naruto',
          count: 0,
          selected: false
        },
        {
          code: 'nas',
          count: 0,
          selected: false
        },
        {
          code: 'new order',
          count: 0,
          selected: false
        },
        {
          code: 'nirvana',
          count: 0,
          selected: false
        },
        {
          code: 'pac-man',
          count: 0,
          selected: false
        },
        {
          code: 'pokémon',
          count: 0,
          selected: false
        },
        {
          code: 'pringles',
          count: 0,
          selected: false
        },
        {
          code: 'red hot chili peppers',
          count: 0,
          selected: false
        },
        {
          code: 'rick and morty',
          count: 0,
          selected: false
        },
        {
          code: 'snoopy',
          count: 0,
          selected: false
        },
        {
          code: 'south park',
          count: 0,
          selected: false
        },
        {
          code: 'spongebob squarepants',
          count: 0,
          selected: false
        },
        {
          code: 'star wars',
          count: 0,
          selected: false
        },
        {
          code: 'stranger things',
          count: 0,
          selected: false
        },
        {
          code: 'tetris',
          count: 0,
          selected: false
        },
        {
          code: 'the beatles',
          count: 0,
          selected: false
        },
        {
          code: 'the hulk',
          count: 0,
          selected: false
        },
        {
          code: 'the notorious b.i.g.',
          count: 0,
          selected: false
        },
        {
          code: 'the simpsons',
          count: 0,
          selected: false
        },
        {
          code: 'tom and jerry',
          count: 0,
          selected: false
        },
        {
          code: 'wednesday',
          count: 0,
          selected: false
        },
        {
          code: 'x-men',
          count: 0,
          selected: false
        },
        {
          code: 'yale',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'licenseCompanies',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'disney',
          count: 0,
          selected: false
        },
        {
          code: 'disney/fox',
          count: 0,
          selected: false
        },
        {
          code: 'disney/marvel',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'materials',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Bouclé',
          count: 0,
          selected: false
        },
        {
          code: 'Canvas',
          count: 0,
          selected: false
        },
        {
          code: 'Cashmere',
          count: 0,
          selected: false
        },
        {
          code: 'Corduroy',
          count: 0,
          selected: false
        },
        {
          code: 'Cotton',
          count: 60,
          selected: false
        },
        {
          code: 'Denim',
          count: 0,
          selected: false
        },
        {
          code: 'Down',
          count: 0,
          selected: false
        },
        {
          code: 'Felt',
          count: 3,
          selected: false
        },
        {
          code: 'Flannel',
          count: 8,
          selected: false
        },
        {
          code: 'Fleece',
          count: 0,
          selected: false
        },
        {
          code: 'French Terry',
          count: 0,
          selected: false
        },
        {
          code: 'Jersey',
          count: 10,
          selected: false
        },
        {
          code: 'Leather',
          count: 0,
          selected: false
        },
        {
          code: 'Linen',
          count: 21,
          selected: false
        },
        {
          code: 'Lyocell',
          count: 2,
          selected: false
        },
        {
          code: 'Merino',
          count: 0,
          selected: false
        },
        {
          code: 'Mesh',
          count: 0,
          selected: false
        },
        {
          code: 'Microfiber',
          count: 0,
          selected: false
        },
        {
          code: 'Mohair',
          count: 0,
          selected: false
        },
        {
          code: 'Oxford',
          count: 1,
          selected: false
        },
        {
          code: 'PU Fabric',
          count: 0,
          selected: false
        },
        {
          code: 'Poplin',
          count: 8,
          selected: false
        },
        {
          code: 'Satin',
          count: 0,
          selected: false
        },
        {
          code: 'Seersucker',
          count: 0,
          selected: false
        },
        {
          code: 'Silk',
          count: 0,
          selected: false
        },
        {
          code: 'Teddy',
          count: 0,
          selected: false
        },
        {
          code: 'Terry cloth',
          count: 1,
          selected: false
        },
        {
          code: 'Twill',
          count: 26,
          selected: false
        },
        {
          code: 'Velour',
          count: 0,
          selected: false
        },
        {
          code: 'Velvet',
          count: 0,
          selected: false
        },
        {
          code: 'Wool',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'features',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'adjustable waist',
          count: 0,
          selected: false
        },
        {
          code: 'convertible',
          count: 0,
          selected: false
        },
        {
          code: 'lightweight',
          count: 0,
          selected: false
        },
        {
          code: 'lined',
          count: 0,
          selected: false
        },
        {
          code: 'non-slip protection',
          count: 0,
          selected: false
        },
        {
          code: 'packable',
          count: 0,
          selected: false
        },
        {
          code: 'padded',
          count: 0,
          selected: false
        },
        {
          code: 'sealed seams',
          count: 0,
          selected: false
        },
        {
          code: 'seamless',
          count: 0,
          selected: false
        },
        {
          code: 'touchscreen-compatible',
          count: 0,
          selected: false
        },
        {
          code: 'with pocket',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'colourShades',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Amber',
          count: 0,
          selected: false
        },
        {
          code: 'Aquamarine',
          count: 0,
          selected: false
        },
        {
          code: 'Baby blue',
          count: 3,
          selected: false
        },
        {
          code: 'Baby pink',
          count: 0,
          selected: false
        },
        {
          code: 'Blue gray',
          count: 0,
          selected: false
        },
        {
          code: 'Bright blue',
          count: 4,
          selected: false
        },
        {
          code: 'Bright green',
          count: 1,
          selected: false
        },
        {
          code: 'Bright pink',
          count: 0,
          selected: false
        },
        {
          code: 'Bright red',
          count: 0,
          selected: false
        },
        {
          code: 'Bright yellow',
          count: 0,
          selected: false
        },
        {
          code: 'Burgundy',
          count: 0,
          selected: false
        },
        {
          code: 'Burnt orange',
          count: 0,
          selected: false
        },
        {
          code: 'Charcoal',
          count: 32,
          selected: false
        },
        {
          code: 'Cobalt blue',
          count: 4,
          selected: false
        },
        {
          code: 'Copper',
          count: 0,
          selected: false
        },
        {
          code: 'Cream',
          count: 2,
          selected: false
        },
        {
          code: 'Cyan',
          count: 0,
          selected: false
        },
        {
          code: 'Dark blue',
          count: 9,
          selected: false
        },
        {
          code: 'Dark gray',
          count: 4,
          selected: false
        },
        {
          code: 'Dark green',
          count: 0,
          selected: false
        },
        {
          code: 'Dark maroon',
          count: 0,
          selected: false
        },
        {
          code: 'Dark purple',
          count: 0,
          selected: false
        },
        {
          code: 'Dark red',
          count: 0,
          selected: false
        },
        {
          code: 'Dusty blue',
          count: 2,
          selected: false
        },
        {
          code: 'Dusty pink',
          count: 0,
          selected: false
        },
        {
          code: 'Dusty rose',
          count: 0,
          selected: false
        },
        {
          code: 'Ecru',
          count: 10,
          selected: false
        },
        {
          code: 'Emerald green',
          count: 0,
          selected: false
        },
        {
          code: 'Fuchsia',
          count: 0,
          selected: false
        },
        {
          code: 'Gray silver',
          count: 2,
          selected: false
        },
        {
          code: 'Gray white',
          count: 4,
          selected: false
        },
        {
          code: 'Hot pink',
          count: 0,
          selected: false
        },
        {
          code: 'Indigo',
          count: 4,
          selected: false
        },
        {
          code: 'Ivory',
          count: 4,
          selected: false
        },
        {
          code: 'Khaki green',
          count: 5,
          selected: false
        },
        {
          code: 'Lavender',
          count: 0,
          selected: false
        },
        {
          code: 'Lemon',
          count: 0,
          selected: false
        },
        {
          code: 'Light blue',
          count: 3,
          selected: false
        },
        {
          code: 'Light green',
          count: 1,
          selected: false
        },
        {
          code: 'Light pink',
          count: 0,
          selected: false
        },
        {
          code: 'Light purple',
          count: 0,
          selected: false
        },
        {
          code: 'Light red',
          count: 0,
          selected: false
        },
        {
          code: 'Light yellow',
          count: 0,
          selected: false
        },
        {
          code: 'Lilac',
          count: 0,
          selected: false
        },
        {
          code: 'Lime',
          count: 1,
          selected: false
        },
        {
          code: 'Mahogany',
          count: 0,
          selected: false
        },
        {
          code: 'Mauve',
          count: 0,
          selected: false
        },
        {
          code: 'Mint',
          count: 0,
          selected: false
        },
        {
          code: 'Mustard',
          count: 0,
          selected: false
        },
        {
          code: 'Navy blue',
          count: 8,
          selected: false
        },
        {
          code: 'Neon pink',
          count: 0,
          selected: false
        },
        {
          code: 'Olive',
          count: 0,
          selected: false
        },
        {
          code: 'Pastel blue',
          count: 2,
          selected: false
        },
        {
          code: 'Pastel green',
          count: 0,
          selected: false
        },
        {
          code: 'Pastel pink',
          count: 0,
          selected: false
        },
        {
          code: 'Pastel purple',
          count: 0,
          selected: false
        },
        {
          code: 'Pastel yellow',
          count: 0,
          selected: false
        },
        {
          code: 'Peach',
          count: 1,
          selected: false
        },
        {
          code: 'Plum',
          count: 0,
          selected: false
        },
        {
          code: 'Rose',
          count: 0,
          selected: false
        },
        {
          code: 'Royal blue',
          count: 4,
          selected: false
        },
        {
          code: 'Ruby red',
          count: 0,
          selected: false
        },
        {
          code: 'Rust',
          count: 0,
          selected: false
        },
        {
          code: 'Salmon',
          count: 0,
          selected: false
        },
        {
          code: 'Sea green',
          count: 0,
          selected: false
        },
        {
          code: 'Sky blue',
          count: 0,
          selected: false
        },
        {
          code: 'Stone',
          count: 6,
          selected: false
        },
        {
          code: 'Taupe',
          count: 8,
          selected: false
        },
        {
          code: 'Teal',
          count: 0,
          selected: false
        },
        {
          code: 'Terracotta',
          count: 0,
          selected: false
        },
        {
          code: 'Violet',
          count: 0,
          selected: false
        },
        {
          code: 'Wheat',
          count: 8,
          selected: false
        },
        {
          code: 'White gray',
          count: 4,
          selected: false
        },
        {
          code: 'Yellow gold',
          count: 0,
          selected: false
        }
      ]
    },
    {
      code: 'seasonality',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'autumn',
          count: 7,
          selected: false
        },
        {
          code: 'spring',
          count: 1,
          selected: false
        },
        {
          code: 'summer',
          count: 12,
          selected: false
        },
        {
          code: 'winter',
          count: 5,
          selected: false
        }
      ]
    },
    {
      code: 'allCategories',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'men_all',
          count: 169,
          selected: false
        }
      ]
    }
  ],
  freeTextSearch: '',
  categoryCode: 'men_all',
  rangeFacets: [
    {
      code: 'priceRange',
      range: {
        min: 6.99,
        max: 99,
        minSelected: 6.99,
        maxSelected: 99
      }
    }
  ],
  baseUrl: 'https://www2.hm.com'
}
