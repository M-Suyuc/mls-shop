export interface SeedProducts {
  results: Result[]
  pagination: Pagination
  facets: Facet[]
  freeTextSearch: string
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
  sellingAttributes?: SellingAttribute[]
  whitePrice: Price
  articles: Article[]
  visible: boolean
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
  concept?: string[]
  redPrice?: Price
}

export interface Article {
  code: string
  name: string
  images: GalleryImage[]
  pk: string
  sellingAttributes?: SellingAttribute[]
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
  turnToSku: string
  genArticle?: string
  campaignMedia?: CampaignMedia
  flexiPLPLayout?: FlexiPLPLayout
  redPrice?: Price
  percentageDiscount?: string
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

export interface FlexiPLPLayout {
  type: string
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

export type SellingAttribute = 'New Arrival'

export type BrandName = 'H&M'

export type CategoryName =
  | 'Ladies'
  | 'Women'
  | 'Divided'
  | 'Men'
  | 'Baby'
  | 'Kids'
  | 'H&M HOME'
  | 'Beauty'
  | 'Sport'
  | 'Outlet'
  | 'SALE'

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
      code: '1222716_group_001',
      name: 'Double-breasted Wool Cardigan',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 169,
        priceType: 'BUY',
        formattedValue: '$ 169.00',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/53/89/538945ba5f4c845a055f6239f4d148c291655592.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/53/89/538945ba5f4c845a055f6239f4d148c291655592.jpg'
        }
      ],
      categories: [],
      pk: '9526448128001',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 169,
        priceType: 'BUY',
        formattedValue: '$ 169.00',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1222716001',
          name: 'Double-breasted Wool Cardigan',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/53/89/538945ba5f4c845a055f6239f4d148c291655592.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/53/89/538945ba5f4c845a055f6239f4d148c291655592.jpg'
            }
          ],
          pk: '9508953751553',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 169,
            priceType: 'BUY',
            formattedValue: '$ 169.00',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/23/d7/23d78bfab5308c01f7e922123901b4905ad237a8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/23/d7/23d78bfab5308c01f7e922123901b4905ad237a8.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/23/d7/23d78bfab5308c01f7e922123901b4905ad237a8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/23/d7/23d78bfab5308c01f7e922123901b4905ad237a8.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIyMjcxNl9ncm91cF8wMDFfZW5fdXM7MTIyMjcxNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'A52A2A',
            text: 'Taupe melange',
            filterName: 'Beige_F5F5DC,Gray_808080',
            hybrisCode: '16'
          },
          rgbColor: '#9D8E7F',
          turnToSku: '1222716001002'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1222716001',
        name: 'Double-breasted Wool Cardigan',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/53/89/538945ba5f4c845a055f6239f4d148c291655592.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/53/89/538945ba5f4c845a055f6239f4d148c291655592.jpg'
          }
        ],
        pk: '9508953751553',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 169,
          priceType: 'BUY',
          formattedValue: '$ 169.00',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/23/d7/23d78bfab5308c01f7e922123901b4905ad237a8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/23/d7/23d78bfab5308c01f7e922123901b4905ad237a8.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/23/d7/23d78bfab5308c01f7e922123901b4905ad237a8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/23/d7/23d78bfab5308c01f7e922123901b4905ad237a8.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIyMjcxNl9ncm91cF8wMDFfZW5fdXM7MTIyMjcxNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'A52A2A',
          text: 'Taupe melange',
          filterName: 'Beige_F5F5DC,Gray_808080',
          hybrisCode: '16'
        },
        rgbColor: '#9D8E7F',
        turnToSku: '1222716001002'
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
          orderFilter: 366,
          filterCode: 'S'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        }
      ],
      swatches: [],
      articleCodes: ['1222716001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIyMjcxNl9ncm91cF8wMDFfZW5fdXM7MTIyMjcxNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1222716_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1222716001.html',
      categoryName: 'Ladies',
      rgbColors: ['#9D8E7F'],
      articleColorNames: ['Taupe melange'],
      ecoTaxValue: 0,
      swatchesTotal: 1,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_premium_selection_cardigansjumpers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/af/47/af4706d308456b231c1fa50edf008e5e7ef1076f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/af/47/af4706d308456b231c1fa50edf008e5e7ef1076f.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/b4/f9/b4f95f7b0a9dcee594f416890e9c02b14c13c3c6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ce/97/ce97f1f4d1e6f51e077e5ac561e65741a2dab0b2.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/24/1b/241b250650e08f6cfb3b7046e3664f88a8fdb992.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/24/1b/241b250650e08f6cfb3b7046e3664f88a8fdb992.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ce/97/ce97f1f4d1e6f51e077e5ac561e65741a2dab0b2.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/b4/f9/b4f95f7b0a9dcee594f416890e9c02b14c13c3c6.jpg'
        }
      ],
      allArticleCodes: ['1222716001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/53/89/538945ba5f4c845a055f6239f4d148c291655592.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/53/89/538945ba5f4c845a055f6239f4d148c291655592.jpg'
      ]
    },
    {
      code: '1130226_group_001',
      name: 'Slim Fit Cotton Polo Shirt',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/b2/9db28f739657ad7db4cab117e25c9a66a2c043d6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/9d/b2/9db28f739657ad7db4cab117e25c9a66a2c043d6.jpg'
        }
      ],
      categories: [],
      pk: '9457999216641',
      whitePrice: {
        currencyIso: 'USD',
        value: 19.99,
        priceType: 'BUY',
        formattedValue: '$ 19.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1130226001',
          name: 'Slim Fit Cotton Polo Shirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/b2/9db28f739657ad7db4cab117e25c9a66a2c043d6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/9d/b2/9db28f739657ad7db4cab117e25c9a66a2c043d6.jpg'
            }
          ],
          pk: '9441893515265',
          whitePrice: {
            currencyIso: 'USD',
            value: 19.99,
            priceType: 'BUY',
            formattedValue: '$ 19.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e7/a2/e7a284a9ee85a6f1ab554fbf97145c585183da00.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e7/a2/e7a284a9ee85a6f1ab554fbf97145c585183da00.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e7/a2/e7a284a9ee85a6f1ab554fbf97145c585183da00.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e7/a2/e7a284a9ee85a6f1ab554fbf97145c585183da00.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEzMDIyNl9ncm91cF8wMDFfZW5fdXM7MTEzMDIyNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FFFFFF',
            text: 'White',
            filterName: 'Multi_000000,White_FFFFFF',
            hybrisCode: '10'
          },
          rgbColor: '#FFFFFF',
          genArticle: '130226001238',
          turnToSku: '1130226001001'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1130226001',
        name: 'Slim Fit Cotton Polo Shirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/9d/b2/9db28f739657ad7db4cab117e25c9a66a2c043d6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/9d/b2/9db28f739657ad7db4cab117e25c9a66a2c043d6.jpg'
          }
        ],
        pk: '9441893515265',
        whitePrice: {
          currencyIso: 'USD',
          value: 19.99,
          priceType: 'BUY',
          formattedValue: '$ 19.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e7/a2/e7a284a9ee85a6f1ab554fbf97145c585183da00.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e7/a2/e7a284a9ee85a6f1ab554fbf97145c585183da00.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e7/a2/e7a284a9ee85a6f1ab554fbf97145c585183da00.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e7/a2/e7a284a9ee85a6f1ab554fbf97145c585183da00.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEzMDIyNl9ncm91cF8wMDFfZW5fdXM7MTEzMDIyNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FFFFFF',
          text: 'White',
          filterName: 'Multi_000000,White_FFFFFF',
          hybrisCode: '10'
        },
        rgbColor: '#FFFFFF',
        genArticle: '130226001238',
        turnToSku: '1130226001001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 370,
          filterCode: 'L'
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
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        }
      ],
      swatches: [],
      articleCodes: ['1130226001', '1130226002', '1130226009', '1130226010'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEzMDIyNl9ncm91cF8wMDFfZW5fdXM7MTEzMDIyNjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1130226_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1130226001.html',
      categoryName: 'Men',
      rgbColors: ['#FFFFFF', '#393A45', '#403835', '#F2D499'],
      articleColorNames: ['White', 'Navy blue', 'Dark brown', 'Yellow'],
      ecoTaxValue: 0,
      swatchesTotal: 4,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'MEN_TSHIRTSTANKS_POLO',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c6/71/c67135aca0e9414fbde2bbac7ff3f932f6eabfb6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/07/d6/07d6b2483b1fa1c561dc523d0236758f5279b23e.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/07/d6/07d6b2483b1fa1c561dc523d0236758f5279b23e.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/6b/c1/6bc1c447be08284248ca357c5a8b31284ab8252c.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/6b/c1/6bc1c447be08284248ca357c5a8b31284ab8252c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/e8/b3/e8b3a4347ea21ab3fec57ace3ace78f24fac003c.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/e8/b3/e8b3a4347ea21ab3fec57ace3ace78f24fac003c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c6/71/c67135aca0e9414fbde2bbac7ff3f932f6eabfb6.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/6d/4e6d73362475589ee7bffeafd2fdb418b8ecf866.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4e/6d/4e6d73362475589ee7bffeafd2fdb418b8ecf866.jpg'
        }
      ],
      allArticleCodes: ['1130226001', '1130226002', '1130226009', '1130226010'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/9d/b2/9db28f739657ad7db4cab117e25c9a66a2c043d6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e6/4a/e64a9727d09cad00687f739a9dac8507971acd88.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/c7/09/c709e7906a79ed8df968e7115802cdff12a3a269.jpg],origin[dam],category[MEN_TSHIRTSTANKS_POLO],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/aa/09/aa092d80bac09d5556831b36dc956e75e29e6945.jpg],origin[dam],category[MEN_TSHIRTSTANKS_POLO],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/9d/b2/9db28f739657ad7db4cab117e25c9a66a2c043d6.jpg',
        'https://image.hm.com/assets/hm/e6/4a/e64a9727d09cad00687f739a9dac8507971acd88.jpg',
        'https://image.hm.com/assets/hm/c7/09/c709e7906a79ed8df968e7115802cdff12a3a269.jpg',
        'https://image.hm.com/assets/hm/aa/09/aa092d80bac09d5556831b36dc956e75e29e6945.jpg'
      ]
    },
    {
      code: '1215834_group_003',
      name: 'Wide-leg Pants',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg'
        }
      ],
      categories: [],
      pk: '9526631563265',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1215834003',
          name: 'Wide-leg Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg'
            }
          ],
          pk: '9505947910145',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 44.99,
            priceType: 'BUY',
            formattedValue: '$ 44.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/40/4c/404c99aa13156eb48e6f1fea7ca480121b248039.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/40/4c/404c99aa13156eb48e6f1fea7ca480121b248039.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/40/4c/404c99aa13156eb48e6f1fea7ca480121b248039.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/40/4c/404c99aa13156eb48e6f1fea7ca480121b248039.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTgzNF9ncm91cF8wMDNfZW5fdXM7MTIxNTgzNDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Cream/blue patterned',
            filterName: 'Blue_0000FF,Multi_000000',
            hybrisCode: '76'
          },
          rgbColor: '#2D3244',
          genArticle: '215834003249',
          turnToSku: '1215834003002'
        }
      ],
      visible: false,
      concept: ['MODERN CLASSIC'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1215834003',
        name: 'Wide-leg Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg'
          }
        ],
        pk: '9505947910145',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 44.99,
          priceType: 'BUY',
          formattedValue: '$ 44.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/40/4c/404c99aa13156eb48e6f1fea7ca480121b248039.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/40/4c/404c99aa13156eb48e6f1fea7ca480121b248039.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/40/4c/404c99aa13156eb48e6f1fea7ca480121b248039.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/40/4c/404c99aa13156eb48e6f1fea7ca480121b248039.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTgzNF9ncm91cF8wMDNfZW5fdXM7MTIxNTgzNDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Cream/blue patterned',
          filterName: 'Blue_0000FF,Multi_000000',
          hybrisCode: '76'
        },
        rgbColor: '#2D3244',
        genArticle: '215834003249',
        turnToSku: '1215834003002'
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
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        }
      ],
      swatches: [],
      articleCodes: ['1215834003', '1215834002'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTgzNF9ncm91cF8wMDNfZW5fdXM7MTIxNTgzNDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1215834_group_003_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1215834003.html',
      categoryName: 'Ladies',
      rgbColors: ['#2D3244', '#2B2D34'],
      articleColorNames: ['Cream/blue patterned', 'Navy blue/striped'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_trousers_wideleg',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/63/426313a880759e163bf82fe5fb0286ea8b0d3b4e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/75/00/750055c7b018826df4b1da2c83ecf9cc084d8c55.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/75/00/750055c7b018826df4b1da2c83ecf9cc084d8c55.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/42/63/426313a880759e163bf82fe5fb0286ea8b0d3b4e.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/1b/b2/1bb2c22d68d28bcf9873906be27a78dcb3e53f77.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/1b/b2/1bb2c22d68d28bcf9873906be27a78dcb3e53f77.jpg'
        }
      ],
      allArticleCodes: ['1215834003', '1215834002'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg',
        'https://image.hm.com/assets/hm/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg'
      ]
    },
    {
      code: '1213053_group_001',
      name: 'Loose-fit Shirt',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 45.99,
        priceType: 'BUY',
        formattedValue: '$ 45.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/c4/30c4eae6f41c6005952fc79e5cd1006efda0a2c0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/30/c4/30c4eae6f41c6005952fc79e5cd1006efda0a2c0.jpg'
        }
      ],
      categories: [],
      pk: '9526449209345',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 45.99,
        priceType: 'BUY',
        formattedValue: '$ 45.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1213053001',
          name: 'Loose-fit Shirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/c4/30c4eae6f41c6005952fc79e5cd1006efda0a2c0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/30/c4/30c4eae6f41c6005952fc79e5cd1006efda0a2c0.jpg'
            }
          ],
          pk: '9505951711233',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 45.99,
            priceType: 'BUY',
            formattedValue: '$ 45.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/91/9c/919c4b9b760e0015402d6ffbc43763430529e3d4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/91/9c/919c4b9b760e0015402d6ffbc43763430529e3d4.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/91/9c/919c4b9b760e0015402d6ffbc43763430529e3d4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/91/9c/919c4b9b760e0015402d6ffbc43763430529e3d4.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMzA1M19ncm91cF8wMDFfZW5fdXM7MTIxMzA1MzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'F5F5DC',
            text: 'Cream/blue patterned',
            filterName: 'Blue_0000FF,Multi_000000',
            hybrisCode: '12'
          },
          rgbColor: '#DFD8C9',
          genArticle: '213053001249',
          turnToSku: '1213053001002'
        }
      ],
      visible: false,
      concept: ['MODERN CLASSIC'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1213053001',
        name: 'Loose-fit Shirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/30/c4/30c4eae6f41c6005952fc79e5cd1006efda0a2c0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/30/c4/30c4eae6f41c6005952fc79e5cd1006efda0a2c0.jpg'
          }
        ],
        pk: '9505951711233',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 45.99,
          priceType: 'BUY',
          formattedValue: '$ 45.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/91/9c/919c4b9b760e0015402d6ffbc43763430529e3d4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/91/9c/919c4b9b760e0015402d6ffbc43763430529e3d4.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/91/9c/919c4b9b760e0015402d6ffbc43763430529e3d4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/91/9c/919c4b9b760e0015402d6ffbc43763430529e3d4.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMzA1M19ncm91cF8wMDFfZW5fdXM7MTIxMzA1MzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'F5F5DC',
          text: 'Cream/blue patterned',
          filterName: 'Blue_0000FF,Multi_000000',
          hybrisCode: '12'
        },
        rgbColor: '#DFD8C9',
        genArticle: '213053001249',
        turnToSku: '1213053001002'
      },
      sale: false,
      variantSizes: [
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
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        }
      ],
      swatches: [],
      articleCodes: ['1213053001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMzA1M19ncm91cF8wMDFfZW5fdXM7MTIxMzA1MzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1213053_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1213053001.html',
      categoryName: 'Ladies',
      rgbColors: ['#DFD8C9'],
      articleColorNames: ['Cream/blue patterned'],
      ecoTaxValue: 0,
      swatchesTotal: 1,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_shirtsblouses_shirts',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/74/f3/74f3ab008c9906fd99cd1337bb55fc57a5f986d9.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/71/77/7177d0523c1d7a31ea2564037b1febd289288875.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/71/77/7177d0523c1d7a31ea2564037b1febd289288875.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/74/f3/74f3ab008c9906fd99cd1337bb55fc57a5f986d9.jpg'
        }
      ],
      allArticleCodes: ['1213053001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/30/c4/30c4eae6f41c6005952fc79e5cd1006efda0a2c0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/30/c4/30c4eae6f41c6005952fc79e5cd1006efda0a2c0.jpg'
      ]
    },
    {
      code: '0751471_group_001',
      name: 'Slacks',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/14/19/141961c59bc644f446a992018fb010550b005fa1.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/14/19/141961c59bc644f446a992018fb010550b005fa1.jpg'
        }
      ],
      categories: [],
      pk: '9206631890945',
      whitePrice: {
        currencyIso: 'USD',
        value: 19.99,
        priceType: 'BUY',
        formattedValue: '$ 19.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0751471001',
          name: 'Slacks',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/14/19/141961c59bc644f446a992018fb010550b005fa1.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/14/19/141961c59bc644f446a992018fb010550b005fa1.jpg'
            }
          ],
          pk: '9192588345345',
          whitePrice: {
            currencyIso: 'USD',
            value: 19.99,
            priceType: 'BUY',
            formattedValue: '$ 19.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e9/d7/e9d77cc00ab3de665142b3c1fc1912bcc21ff2f7.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e9/d7/e9d77cc00ab3de665142b3c1fc1912bcc21ff2f7.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e9/d7/e9d77cc00ab3de665142b3c1fc1912bcc21ff2f7.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e9/d7/e9d77cc00ab3de665142b3c1fc1912bcc21ff2f7.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc1MTQ3MV9ncm91cF8wMDFfZW5fdXM7MDc1MTQ3MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
            url: 'https://photorankmedia-a.akamaihd.net/media/e/s/c/esctfr4/mobile.jpg',
            id: '3538548432',
            author: 'maikooe',
            type: 'CAMPAIGN'
          },
          rgbColor: '#272628',
          genArticle: '751471001249',
          turnToSku: '0751471001001'
        }
      ],
      visible: false,
      concept: ['EVERYDAY FASHION'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0751471001',
        name: 'Slacks',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/14/19/141961c59bc644f446a992018fb010550b005fa1.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/14/19/141961c59bc644f446a992018fb010550b005fa1.jpg'
          }
        ],
        pk: '9192588345345',
        whitePrice: {
          currencyIso: 'USD',
          value: 19.99,
          priceType: 'BUY',
          formattedValue: '$ 19.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e9/d7/e9d77cc00ab3de665142b3c1fc1912bcc21ff2f7.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e9/d7/e9d77cc00ab3de665142b3c1fc1912bcc21ff2f7.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e9/d7/e9d77cc00ab3de665142b3c1fc1912bcc21ff2f7.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e9/d7/e9d77cc00ab3de665142b3c1fc1912bcc21ff2f7.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc1MTQ3MV9ncm91cF8wMDFfZW5fdXM7MDc1MTQ3MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          url: 'https://photorankmedia-a.akamaihd.net/media/e/s/c/esctfr4/mobile.jpg',
          id: '3538548432',
          author: 'maikooe',
          type: 'CAMPAIGN'
        },
        rgbColor: '#272628',
        genArticle: '751471001249',
        turnToSku: '0751471001001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 54,
          filterCode: '20'
        },
        {
          orderFilter: 10,
          filterCode: '6'
        },
        {
          orderFilter: 20,
          filterCode: '16'
        },
        {
          orderFilter: 12,
          filterCode: '8'
        },
        {
          orderFilter: 70,
          filterCode: '26'
        },
        {
          orderFilter: 16,
          filterCode: '12'
        },
        {
          orderFilter: 14,
          filterCode: '10'
        },
        {
          orderFilter: 22,
          filterCode: '18'
        },
        {
          orderFilter: 59,
          filterCode: '22'
        },
        {
          orderFilter: 8,
          filterCode: '4'
        },
        {
          orderFilter: 65,
          filterCode: '24'
        },
        {
          orderFilter: 4,
          filterCode: '0'
        },
        {
          orderFilter: 6,
          filterCode: '2'
        },
        {
          orderFilter: 18,
          filterCode: '14'
        }
      ],
      swatches: [],
      articleCodes: ['0751471001', '0751471093', '0751471094', '0751471102'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc1MTQ3MV9ncm91cF8wMDFfZW5fdXM7MDc1MTQ3MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0751471_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0751471001.html',
      categoryName: 'Ladies',
      rgbColors: ['#272628', '#B1A895', '#DFD8C9', '#3C404C'],
      articleColorNames: [
        'Black',
        'Beige',
        'Light beige/plaid',
        'Navy',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 8,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_trousers_chinosslacks',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/2e/73/2e73655387b835f47fe980af77bfd8dca55d79b7.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/d7/48/d7482037fe776072e4f8e2e9e967d3457a1a259d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/d7/48/d7482037fe776072e4f8e2e9e967d3457a1a259d.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/2e/73/2e73655387b835f47fe980af77bfd8dca55d79b7.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/57/b3/57b330bfd8a16c1b18d44e0d84294addf2d9d307.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/57/b3/57b330bfd8a16c1b18d44e0d84294addf2d9d307.jpg'
        }
      ],
      allArticleCodes: [
        '0751471001',
        '0751471093',
        '0751471094',
        '0751471102',
        '0751471114',
        '0751471117',
        '0751471122',
        '0751471123'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/14/19/141961c59bc644f446a992018fb010550b005fa1.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/9e/3d/9e3d43992e6100204918f115dccb4c48bb35a4ee.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/73/59/735923823cfab259aced736653e37e82f911c6bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/bc/32/bc32043d4f83c49ee5def8d70e2b596e06ccc338.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/66/0c/660c5df183f2f4292accb4d61bcd0ca6fa90c3db.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/67/6f/676f21b1e0b649bfa04335e95f879f34099787fb.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/db/91/db91d6e760886485827b697ded2c4e928700c410.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/0a/0f/0a0f41d7c2fe2d906dd44803fbfecb36b4cbf62f.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/14/19/141961c59bc644f446a992018fb010550b005fa1.jpg',
        'https://image.hm.com/assets/hm/9e/3d/9e3d43992e6100204918f115dccb4c48bb35a4ee.jpg',
        'https://image.hm.com/assets/hm/73/59/735923823cfab259aced736653e37e82f911c6bc.jpg',
        'https://image.hm.com/assets/hm/bc/32/bc32043d4f83c49ee5def8d70e2b596e06ccc338.jpg',
        'https://image.hm.com/assets/hm/66/0c/660c5df183f2f4292accb4d61bcd0ca6fa90c3db.jpg',
        'https://image.hm.com/assets/hm/67/6f/676f21b1e0b649bfa04335e95f879f34099787fb.jpg',
        'https://image.hm.com/assets/hm/db/91/db91d6e760886485827b697ded2c4e928700c410.jpg',
        'https://image.hm.com/assets/hm/0a/0f/0a0f41d7c2fe2d906dd44803fbfecb36b4cbf62f.jpg'
      ]
    },
    {
      code: '0970819_group_001',
      name: 'Loose Fit Hoodie',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg'
        }
      ],
      categories: [],
      pk: '9329227137025',
      whitePrice: {
        currencyIso: 'USD',
        value: 24.99,
        priceType: 'BUY',
        formattedValue: '$ 24.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0970819001',
          name: 'Loose Fit Hoodie',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg'
            }
          ],
          pk: '9311568691201',
          whitePrice: {
            currencyIso: 'USD',
            value: 24.99,
            priceType: 'BUY',
            formattedValue: '$ 24.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/5c/70/5c70becbd00a13c32a9fcdcdcb8b92f7fb326324.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/5c/70/5c70becbd00a13c32a9fcdcdcb8b92f7fb326324.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/5c/70/5c70becbd00a13c32a9fcdcdcb8b92f7fb326324.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/5c/70/5c70becbd00a13c32a9fcdcdcb8b92f7fb326324.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxOV9ncm91cF8wMDFfZW5fdXM7MDk3MDgxOTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          genArticle: '970819001249',
          turnToSku: '0970819001001'
        }
      ],
      visible: false,
      concept: ['BASICS'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0970819001',
        name: 'Loose Fit Hoodie',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg'
          }
        ],
        pk: '9311568691201',
        whitePrice: {
          currencyIso: 'USD',
          value: 24.99,
          priceType: 'BUY',
          formattedValue: '$ 24.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/5c/70/5c70becbd00a13c32a9fcdcdcb8b92f7fb326324.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/5c/70/5c70becbd00a13c32a9fcdcdcb8b92f7fb326324.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/5c/70/5c70becbd00a13c32a9fcdcdcb8b92f7fb326324.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/5c/70/5c70becbd00a13c32a9fcdcdcb8b92f7fb326324.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxOV9ncm91cF8wMDFfZW5fdXM7MDk3MDgxOTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        genArticle: '970819001249',
        turnToSku: '0970819001001'
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
          orderFilter: 366,
          filterCode: 'S'
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
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 369,
          filterCode: 'M'
        }
      ],
      swatches: [],
      articleCodes: ['0970819001', '0970819002', '0970819007', '0970819023'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxOV9ncm91cF8wMDFfZW5fdXM7MDk3MDgxOTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0970819_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0970819001.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#FFFFFF', '#AFAFAF', '#CCCBC7'],
      articleColorNames: [
        'Black',
        'White',
        'Light gray melange',
        'Stone-gray',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 17,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_hoodiessweatshirts_hoodies',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/0d/f1/0df14dd14c2e4513d32cb1e0dd44505d0c4c20a3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/7d/7c/7d7c335a346c7fc1f1c33d17fc99dc10fae43853.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/60/d8/60d83a8786b6f2aa5c1d07257f526db35ea0bec2.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/60/d8/60d83a8786b6f2aa5c1d07257f526db35ea0bec2.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/7d/7c/7d7c335a346c7fc1f1c33d17fc99dc10fae43853.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/e1/21/e1213aed3000f30788fb54f8a63d7f9e5656a147.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/aa/f7/aaf7b13251e5b747ee56a193fe983850fa9f43a1.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/aa/f7/aaf7b13251e5b747ee56a193fe983850fa9f43a1.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/e1/21/e1213aed3000f30788fb54f8a63d7f9e5656a147.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/0d/f1/0df14dd14c2e4513d32cb1e0dd44505d0c4c20a3.jpg'
        }
      ],
      allArticleCodes: [
        '0970819001',
        '0970819002',
        '0970819007',
        '0970819023',
        '0970819039',
        '0970819041',
        '0970819053',
        '0970819060',
        '0970819064',
        '0970819065',
        '0970819066',
        '0970819069',
        '0970819070',
        '0970819071',
        '0970819072',
        '0970819073',
        '0970819076'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/b9/57/b957776336839555e5514cc8eeb4695914d365b9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/5a/43/5a43ad521a825f92f7ceb87b6ec2ec96ec8ba3e6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/42/ff/42ffc9b4916fd994d09200a00be2fb8f939e9704.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/c1/e2/c1e2fc11bd9fbbbc4a2534df25d06997abcb537d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/2c/a7/2ca7150cf3765789d4c2709c8742ad68090239f1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ce/27/ce2716018b0d31062b76b65dac1e544d74b6ed70.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/97/bb/97bb318fe333ad845bdaf8c95e7155476c70e569.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/55/30/5530abf24deea9fe44e3c051394441fc40b042ee.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/c4/98/c498bdde71a0ae2dcc98138c514caf50b28d1e72.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/3a/77/3a772d9676510da81684b66f18cc231b8561d654.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/af/0c/af0cec95dd7a0eb62062e24ab49da3b3197baba4.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/01/e2/01e21ec02e51cbc1cf63887b8f369cc44baca717.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/29/f4/29f4e9b7adbdf939f10e1fb15e1cb3c2a00a29f6.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/07/60/076068cb20cdb4e3aa98bb653f1078ded0f0fc49.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e5/79/e579c2599e3da6e0289ef7f7ea17c92b1cf58ecc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/78/a9/78a964f79a3f3f89005fc467ad06a1a89ff92cdc.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg',
        'https://image.hm.com/assets/hm/b9/57/b957776336839555e5514cc8eeb4695914d365b9.jpg',
        'https://image.hm.com/assets/hm/5a/43/5a43ad521a825f92f7ceb87b6ec2ec96ec8ba3e6.jpg',
        'https://image.hm.com/assets/hm/42/ff/42ffc9b4916fd994d09200a00be2fb8f939e9704.jpg',
        'https://image.hm.com/assets/hm/c1/e2/c1e2fc11bd9fbbbc4a2534df25d06997abcb537d.jpg',
        'https://image.hm.com/assets/hm/2c/a7/2ca7150cf3765789d4c2709c8742ad68090239f1.jpg',
        'https://image.hm.com/assets/hm/ce/27/ce2716018b0d31062b76b65dac1e544d74b6ed70.jpg',
        'https://image.hm.com/assets/hm/97/bb/97bb318fe333ad845bdaf8c95e7155476c70e569.jpg',
        'https://image.hm.com/assets/hm/55/30/5530abf24deea9fe44e3c051394441fc40b042ee.jpg',
        'https://image.hm.com/assets/hm/c4/98/c498bdde71a0ae2dcc98138c514caf50b28d1e72.jpg',
        'https://image.hm.com/assets/hm/3a/77/3a772d9676510da81684b66f18cc231b8561d654.jpg',
        'https://image.hm.com/assets/hm/af/0c/af0cec95dd7a0eb62062e24ab49da3b3197baba4.jpg',
        'https://image.hm.com/assets/hm/01/e2/01e21ec02e51cbc1cf63887b8f369cc44baca717.jpg',
        'https://image.hm.com/assets/hm/29/f4/29f4e9b7adbdf939f10e1fb15e1cb3c2a00a29f6.jpg',
        'https://image.hm.com/assets/hm/07/60/076068cb20cdb4e3aa98bb653f1078ded0f0fc49.jpg',
        'https://image.hm.com/assets/hm/e5/79/e579c2599e3da6e0289ef7f7ea17c92b1cf58ecc.jpg',
        'https://image.hm.com/assets/hm/78/a9/78a964f79a3f3f89005fc467ad06a1a89ff92cdc.jpg'
      ]
    },
    {
      code: '1215834_group_002',
      name: 'Wide-leg Pants',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg'
        }
      ],
      categories: [],
      pk: '9526912548865',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1215834002',
          name: 'Wide-leg Pants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg'
            }
          ],
          pk: '9505950793729',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 44.99,
            priceType: 'BUY',
            formattedValue: '$ 44.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/ca/eecabe24937bb0eb8d7a8ab86a7a6018f96377f9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/ee/ca/eecabe24937bb0eb8d7a8ab86a7a6018f96377f9.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/ca/eecabe24937bb0eb8d7a8ab86a7a6018f96377f9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/ee/ca/eecabe24937bb0eb8d7a8ab86a7a6018f96377f9.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTgzNF9ncm91cF8wMDJfZW5fdXM7MTIxNTgzNDAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Navy blue/striped',
            filterName: 'Blue_0000FF,Multi_000000',
            hybrisCode: '76'
          },
          rgbColor: '#2B2D34',
          genArticle: '215834002249',
          turnToSku: '1215834002002'
        }
      ],
      visible: false,
      concept: ['MODERN CLASSIC'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1215834002',
        name: 'Wide-leg Pants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg'
          }
        ],
        pk: '9505950793729',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 44.99,
          priceType: 'BUY',
          formattedValue: '$ 44.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/ca/eecabe24937bb0eb8d7a8ab86a7a6018f96377f9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/ee/ca/eecabe24937bb0eb8d7a8ab86a7a6018f96377f9.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/ca/eecabe24937bb0eb8d7a8ab86a7a6018f96377f9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/ee/ca/eecabe24937bb0eb8d7a8ab86a7a6018f96377f9.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTgzNF9ncm91cF8wMDJfZW5fdXM7MTIxNTgzNDAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Navy blue/striped',
          filterName: 'Blue_0000FF,Multi_000000',
          hybrisCode: '76'
        },
        rgbColor: '#2B2D34',
        genArticle: '215834002249',
        turnToSku: '1215834002002'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 369,
          filterCode: 'M'
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
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        }
      ],
      swatches: [],
      articleCodes: ['1215834002', '1215834003'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTgzNF9ncm91cF8wMDJfZW5fdXM7MTIxNTgzNDAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1215834_group_002_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1215834002.html',
      categoryName: 'Ladies',
      rgbColors: ['#2B2D34', '#2D3244'],
      articleColorNames: ['Navy blue/striped', 'Cream/blue patterned'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_trousers_wideleg',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/3d/72/3d726ca3faf3e8fa87868a9b4f0792c79ca1500b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/0f/c1/0fc19836416fc5cf18bec88b00f9ea36591db49b.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/0f/c1/0fc19836416fc5cf18bec88b00f9ea36591db49b.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/fd/0c/fd0c0d569967c2f881689e03b18318630fda99e0.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/fd/0c/fd0c0d569967c2f881689e03b18318630fda99e0.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/3d/72/3d726ca3faf3e8fa87868a9b4f0792c79ca1500b.jpg'
        }
      ],
      allArticleCodes: ['1215834002', '1215834003'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/6b/8c/6b8cb665bfed469483f5cc56f95edde835e5064c.jpg',
        'https://image.hm.com/assets/hm/11/59/1159bf3dd7493c945948b93b0fd4349645bc9b9e.jpg'
      ]
    },
    {
      code: '1211811_group_004',
      name: 'Single-breasted Coat',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 54.99,
        priceType: 'BUY',
        formattedValue: '$ 54.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg'
        }
      ],
      categories: [],
      pk: '9524363132929',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 54.99,
        priceType: 'BUY',
        formattedValue: '$ 54.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1211811004',
          name: 'Single-breasted Coat',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg'
            }
          ],
          pk: '9494556049409',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 54.99,
            priceType: 'BUY',
            formattedValue: '$ 54.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/a1/1b/a11bef30055884cb7e30523c618ddebf8816e0f5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/a1/1b/a11bef30055884cb7e30523c618ddebf8816e0f5.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/a1/1b/a11bef30055884cb7e30523c618ddebf8816e0f5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/a1/1b/a11bef30055884cb7e30523c618ddebf8816e0f5.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMTgxMV9ncm91cF8wMDRfZW5fdXM7MTIxMTgxMTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'F5F5DC',
            text: 'Cream',
            filterName: 'Beige_F5F5DC,White_FFFFFF',
            hybrisCode: '12'
          },
          rgbColor: '#DCD6C7',
          genArticle: '211811004249',
          turnToSku: '1211811004002',
          flexiPLPLayout: {
            type: 'NA'
          }
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1211811004',
        name: 'Single-breasted Coat',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg'
          }
        ],
        pk: '9494556049409',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 54.99,
          priceType: 'BUY',
          formattedValue: '$ 54.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/a1/1b/a11bef30055884cb7e30523c618ddebf8816e0f5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/a1/1b/a11bef30055884cb7e30523c618ddebf8816e0f5.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/a1/1b/a11bef30055884cb7e30523c618ddebf8816e0f5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/a1/1b/a11bef30055884cb7e30523c618ddebf8816e0f5.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMTgxMV9ncm91cF8wMDRfZW5fdXM7MTIxMTgxMTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'F5F5DC',
          text: 'Cream',
          filterName: 'Beige_F5F5DC,White_FFFFFF',
          hybrisCode: '12'
        },
        rgbColor: '#DCD6C7',
        genArticle: '211811004249',
        turnToSku: '1211811004002',
        flexiPLPLayout: {
          type: 'NA'
        }
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
          orderFilter: 375,
          filterCode: 'XXL'
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
          orderFilter: 363,
          filterCode: 'XS'
        }
      ],
      swatches: [],
      articleCodes: ['1211811004', '1211811005'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMTgxMV9ncm91cF8wMDRfZW5fdXM7MTIxMTgxMTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1211811_group_004_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1211811004.html',
      categoryName: 'Ladies',
      rgbColors: ['#DCD6C7', '#878D99'],
      articleColorNames: ['Cream', 'Light gray melange'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_jacketscoats_coats',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/5d/425d59e77297567b0f62a33c71a8b912951b1365.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/d5/06/d50695ed0df67f6494b7b58ad9645b976b105451.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f3/ee/f3eef257273c5133a71797a3a6dd63ab8c8cb870.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c0/7f/c07f8a156286fa7042d97b488cd0ef74ea4ebc73.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/59/4a/594ae792c574f858b100b78c3396d7ceb1fc9d90.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f3/ee/f3eef257273c5133a71797a3a6dd63ab8c8cb870.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/d5/06/d50695ed0df67f6494b7b58ad9645b976b105451.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/42/5d/425d59e77297567b0f62a33c71a8b912951b1365.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c0/7f/c07f8a156286fa7042d97b488cd0ef74ea4ebc73.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/59/4a/594ae792c574f858b100b78c3396d7ceb1fc9d90.jpg'
        }
      ],
      allArticleCodes: ['1211811004', '1211811005'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg',
        'https://image.hm.com/assets/hm/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg'
      ]
    },
    {
      code: '1212951_group_001',
      name: 'Oversized Shirt',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/b7/8bb79ab09625035ac64273254ada7dabeeed9808.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/8b/b7/8bb79ab09625035ac64273254ada7dabeeed9808.jpg'
        }
      ],
      categories: [],
      pk: '9527568367617',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 39.99,
        priceType: 'BUY',
        formattedValue: '$ 39.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1212951001',
          name: 'Oversized Shirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/b7/8bb79ab09625035ac64273254ada7dabeeed9808.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/8b/b7/8bb79ab09625035ac64273254ada7dabeeed9808.jpg'
            }
          ],
          pk: '9506304950273',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 39.99,
            priceType: 'BUY',
            formattedValue: '$ 39.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/e5/8be5b2a55e4214f573ed8c41e4d7ebfd859321e5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/8b/e5/8be5b2a55e4214f573ed8c41e4d7ebfd859321e5.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/e5/8be5b2a55e4214f573ed8c41e4d7ebfd859321e5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/8b/e5/8be5b2a55e4214f573ed8c41e4d7ebfd859321e5.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMjk1MV9ncm91cF8wMDFfZW5fdXM7MTIxMjk1MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Navy blue/striped',
            filterName: 'Blue_0000FF,Multi_000000',
            hybrisCode: '76'
          },
          rgbColor: '#2B2D34',
          genArticle: '212951001249',
          turnToSku: '1212951001002'
        }
      ],
      visible: false,
      concept: ['MODERN CLASSIC'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1212951001',
        name: 'Oversized Shirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/b7/8bb79ab09625035ac64273254ada7dabeeed9808.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/8b/b7/8bb79ab09625035ac64273254ada7dabeeed9808.jpg'
          }
        ],
        pk: '9506304950273',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 39.99,
          priceType: 'BUY',
          formattedValue: '$ 39.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/e5/8be5b2a55e4214f573ed8c41e4d7ebfd859321e5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/8b/e5/8be5b2a55e4214f573ed8c41e4d7ebfd859321e5.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/8b/e5/8be5b2a55e4214f573ed8c41e4d7ebfd859321e5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/8b/e5/8be5b2a55e4214f573ed8c41e4d7ebfd859321e5.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMjk1MV9ncm91cF8wMDFfZW5fdXM7MTIxMjk1MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Navy blue/striped',
          filterName: 'Blue_0000FF,Multi_000000',
          hybrisCode: '76'
        },
        rgbColor: '#2B2D34',
        genArticle: '212951001249',
        turnToSku: '1212951001002'
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
          orderFilter: 366,
          filterCode: 'S'
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
      articleCodes: ['1212951001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMjk1MV9ncm91cF8wMDFfZW5fdXM7MTIxMjk1MTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1212951_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1212951001.html',
      categoryName: 'Ladies',
      rgbColors: ['#2B2D34'],
      articleColorNames: ['Navy blue/striped'],
      ecoTaxValue: 0,
      swatchesTotal: 1,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_shirtsblouses_shirts',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/7f/fc/7ffc5a7f34c4bbb94c4479c4783308ceb4c99455.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/68/a8/68a893d7cc2ecdfff53c9d279334f02d2f8efba0.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/68/a8/68a893d7cc2ecdfff53c9d279334f02d2f8efba0.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c5/32/c53280fe4be7a53512b35ce3d826a8032a4df165.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/32/c53280fe4be7a53512b35ce3d826a8032a4df165.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/7f/fc/7ffc5a7f34c4bbb94c4479c4783308ceb4c99455.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/cc/71/cc7124319ebe491cea1b76a1b7ba54e8f9425145.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/cc/71/cc7124319ebe491cea1b76a1b7ba54e8f9425145.jpg'
        }
      ],
      allArticleCodes: ['1212951001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/8b/b7/8bb79ab09625035ac64273254ada7dabeeed9808.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/8b/b7/8bb79ab09625035ac64273254ada7dabeeed9808.jpg'
      ]
    },
    {
      code: '1199249_group_001',
      name: 'Wide-leg Joggers',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 14.99,
        priceType: 'BUY',
        formattedValue: '$ 14.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg'
        }
      ],
      categories: [],
      pk: '9522530713601',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 14.99,
        priceType: 'BUY',
        formattedValue: '$ 14.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1199249001',
          name: 'Wide-leg Joggers',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg'
            }
          ],
          pk: '9513011150849',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 14.99,
            priceType: 'BUY',
            formattedValue: '$ 14.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/39/3839a229a293beaa0e23a49d865f8cfe39c84bdf.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/38/39/3839a229a293beaa0e23a49d865f8cfe39c84bdf.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/39/3839a229a293beaa0e23a49d865f8cfe39c84bdf.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/38/39/3839a229a293beaa0e23a49d865f8cfe39c84bdf.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE5OTI0OV9ncm91cF8wMDFfZW5fdXM7MTE5OTI0OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          genArticle: '199249001249',
          turnToSku: '1199249001001'
        }
      ],
      visible: false,
      concept: ['BASICS,DIVIDED'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1199249001',
        name: 'Wide-leg Joggers',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg'
          }
        ],
        pk: '9513011150849',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 14.99,
          priceType: 'BUY',
          formattedValue: '$ 14.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/39/3839a229a293beaa0e23a49d865f8cfe39c84bdf.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/38/39/3839a229a293beaa0e23a49d865f8cfe39c84bdf.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/39/3839a229a293beaa0e23a49d865f8cfe39c84bdf.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/38/39/3839a229a293beaa0e23a49d865f8cfe39c84bdf.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE5OTI0OV9ncm91cF8wMDFfZW5fdXM7MTE5OTI0OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        genArticle: '199249001249',
        turnToSku: '1199249001001'
      },
      sale: false,
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
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 357,
          filterCode: 'XXS'
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
          orderFilter: 381,
          filterCode: '3XL'
        },
        {
          orderFilter: 384,
          filterCode: '4XL'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        }
      ],
      swatches: [],
      articleCodes: ['1199249001', '1199249002', '1199249006'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE5OTI0OV9ncm91cF8wMDFfZW5fdXM7MTE5OTI0OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1199249_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1199249001.html',
      categoryName: 'Ladies',
      rgbColors: ['#272628', '#A5A5A5', '#9F978F'],
      articleColorNames: ['Black', 'Light gray melange', 'Light taupe'],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_basics_trousersleggings',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ab/ef/abefc5ebdfcfb5b8c3dffe6d5787dde213586247.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ab/ef/abefc5ebdfcfb5b8c3dffe6d5787dde213586247.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/aa/82/aa826a16a24b875198462a031195370f606b67cb.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4a/58/4a58a146226be0485911317cf9082378942cee00.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4a/58/4a58a146226be0485911317cf9082378942cee00.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/aa/82/aa826a16a24b875198462a031195370f606b67cb.jpg'
        }
      ],
      allArticleCodes: ['1199249001', '1199249002', '1199249006'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/95/30/9530002a9f05f2719cfc245213cf468344528d35.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/4c/ac/4cac5098511986c0d0686ba2a068b43dca73a240.jpg],origin[dam],category[ladies_basics_trousersleggings],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg',
        'https://image.hm.com/assets/hm/95/30/9530002a9f05f2719cfc245213cf468344528d35.jpg',
        'https://image.hm.com/assets/hm/4c/ac/4cac5098511986c0d0686ba2a068b43dca73a240.jpg'
      ]
    },
    {
      code: '1161620_group_001',
      name: 'Puffer Jacket',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 15.99,
        priceType: 'BUY',
        formattedValue: '$ 15.99',
        type: 'RED'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/41/4941963aed918fe665ae0cb3de7352f47d48c37b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[3]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/49/41/4941963aed918fe665ae0cb3de7352f47d48c37b.jpg'
        }
      ],
      categories: [],
      pk: '9502541971457',
      whitePrice: {
        currencyIso: 'USD',
        value: 49.99,
        priceType: 'BUY',
        formattedValue: '$ 49.99',
        type: 'WHITE'
      },
      redPrice: {
        currencyIso: 'USD',
        value: 15.99,
        priceType: 'BUY',
        formattedValue: '$ 15.99',
        type: 'RED'
      },
      articles: [
        {
          code: '1161620001',
          name: 'Puffer Jacket',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/41/4941963aed918fe665ae0cb3de7352f47d48c37b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[3]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/49/41/4941963aed918fe665ae0cb3de7352f47d48c37b.jpg'
            }
          ],
          pk: '9456108109825',
          whitePrice: {
            currencyIso: 'USD',
            value: 49.99,
            priceType: 'BUY',
            formattedValue: '$ 49.99',
            type: 'WHITE'
          },
          redPrice: {
            currencyIso: 'USD',
            value: 15.99,
            priceType: 'BUY',
            formattedValue: '$ 15.99',
            type: 'RED'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/bf/df/bfdf90bb7ed85dbe6108520e438f077365efce02.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/bf/df/bfdf90bb7ed85dbe6108520e438f077365efce02.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/bf/df/bfdf90bb7ed85dbe6108520e438f077365efce02.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/bf/df/bfdf90bb7ed85dbe6108520e438f077365efce02.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE2MTYyMF9ncm91cF8wMDFfZW5fdXM7MTE2MTYyMDAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          genArticle: '161620001238',
          percentageDiscount: '-68%',
          turnToSku: '1161620001001'
        }
      ],
      visible: false,
      concept: ['DIVIDED'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1161620001',
        name: 'Puffer Jacket',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/41/4941963aed918fe665ae0cb3de7352f47d48c37b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[3]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/49/41/4941963aed918fe665ae0cb3de7352f47d48c37b.jpg'
          }
        ],
        pk: '9456108109825',
        whitePrice: {
          currencyIso: 'USD',
          value: 49.99,
          priceType: 'BUY',
          formattedValue: '$ 49.99',
          type: 'WHITE'
        },
        redPrice: {
          currencyIso: 'USD',
          value: 15.99,
          priceType: 'BUY',
          formattedValue: '$ 15.99',
          type: 'RED'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/bf/df/bfdf90bb7ed85dbe6108520e438f077365efce02.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/bf/df/bfdf90bb7ed85dbe6108520e438f077365efce02.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/bf/df/bfdf90bb7ed85dbe6108520e438f077365efce02.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/bf/df/bfdf90bb7ed85dbe6108520e438f077365efce02.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE2MTYyMF9ncm91cF8wMDFfZW5fdXM7MTE2MTYyMDAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        genArticle: '161620001238',
        percentageDiscount: '-68%',
        turnToSku: '1161620001001'
      },
      sale: true,
      variantSizes: [
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 357,
          filterCode: 'XXS'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
        }
      ],
      swatches: [],
      articleCodes: ['1161620001', '1161620004'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE2MTYyMF9ncm91cF8wMDFfZW5fdXM7MTE2MTYyMDAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1161620_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1161620001.html',
      categoryName: 'Ladies',
      rgbColors: ['#272628', '#999A9E'],
      articleColorNames: ['Black', 'Light gray'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_jacketscoats_jackets',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4f/ce/4fce9a8b98b595fa280d4a07cdc23edc6a23f99f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/7c/c6/7cc6a3b6df9340a859e0f59ee7da3b17079c9af7.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/42/7e42e821887c16c37442d3bc6578ba1b97ccf613.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/1e/af/1eaf79ef28ded5675a78f33b5abce21b13452891.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/1e/af/1eaf79ef28ded5675a78f33b5abce21b13452891.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[3]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4f/ce/4fce9a8b98b595fa280d4a07cdc23edc6a23f99f.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/7c/c6/7cc6a3b6df9340a859e0f59ee7da3b17079c9af7.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/7e/42/7e42e821887c16c37442d3bc6578ba1b97ccf613.jpg'
        }
      ],
      allArticleCodes: ['1161620001', '1161620004'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/49/41/4941963aed918fe665ae0cb3de7352f47d48c37b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[3]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d1/88/d188fc9ad30f5f5b94d173fa1fa24ed71c2bc447.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/49/41/4941963aed918fe665ae0cb3de7352f47d48c37b.jpg',
        'https://image.hm.com/assets/hm/d1/88/d188fc9ad30f5f5b94d173fa1fa24ed71c2bc447.jpg'
      ]
    },
    {
      code: '1214266_group_001',
      name: 'Raw-edged Denim Skirt',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bc/5e/bc5e3a88fda82839134855b339c38e9a12624c6c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/bc/5e/bc5e3a88fda82839134855b339c38e9a12624c6c.jpg'
        }
      ],
      categories: [],
      pk: '9527745019905',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 39.99,
        priceType: 'BUY',
        formattedValue: '$ 39.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1214266001',
          name: 'Raw-edged Denim Skirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/bc/5e/bc5e3a88fda82839134855b339c38e9a12624c6c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/bc/5e/bc5e3a88fda82839134855b339c38e9a12624c6c.jpg'
            }
          ],
          pk: '9507325181953',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 39.99,
            priceType: 'BUY',
            formattedValue: '$ 39.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/c1/f0c127b8a1428e9f29fe9179aa801060a978562e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/f0/c1/f0c127b8a1428e9f29fe9179aa801060a978562e.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/c1/f0c127b8a1428e9f29fe9179aa801060a978562e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/f0/c1/f0c127b8a1428e9f29fe9179aa801060a978562e.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNDI2Nl9ncm91cF8wMDFfZW5fdXM7MTIxNDI2NjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'F5F5DC',
            text: 'Light beige',
            filterName: 'Beige_F5F5DC',
            hybrisCode: '12'
          },
          rgbColor: '#DFD8C9',
          genArticle: '214266001249',
          turnToSku: '1214266001001'
        }
      ],
      visible: false,
      concept: ['DIVIDED'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1214266001',
        name: 'Raw-edged Denim Skirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/bc/5e/bc5e3a88fda82839134855b339c38e9a12624c6c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/bc/5e/bc5e3a88fda82839134855b339c38e9a12624c6c.jpg'
          }
        ],
        pk: '9507325181953',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 39.99,
          priceType: 'BUY',
          formattedValue: '$ 39.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/c1/f0c127b8a1428e9f29fe9179aa801060a978562e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/f0/c1/f0c127b8a1428e9f29fe9179aa801060a978562e.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/c1/f0c127b8a1428e9f29fe9179aa801060a978562e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/f0/c1/f0c127b8a1428e9f29fe9179aa801060a978562e.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNDI2Nl9ncm91cF8wMDFfZW5fdXM7MTIxNDI2NjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'F5F5DC',
          text: 'Light beige',
          filterName: 'Beige_F5F5DC',
          hybrisCode: '12'
        },
        rgbColor: '#DFD8C9',
        genArticle: '214266001249',
        turnToSku: '1214266001001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 14,
          filterCode: '10'
        },
        {
          orderFilter: 22,
          filterCode: '18'
        },
        {
          orderFilter: 16,
          filterCode: '12'
        },
        {
          orderFilter: 20,
          filterCode: '16'
        },
        {
          orderFilter: 8,
          filterCode: '4'
        },
        {
          orderFilter: 12,
          filterCode: '8'
        },
        {
          orderFilter: 18,
          filterCode: '14'
        },
        {
          orderFilter: 54,
          filterCode: '20'
        },
        {
          orderFilter: 4,
          filterCode: '0'
        },
        {
          orderFilter: 10,
          filterCode: '6'
        },
        {
          orderFilter: 6,
          filterCode: '2'
        }
      ],
      swatches: [],
      articleCodes: ['1214266001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNDI2Nl9ncm91cF8wMDFfZW5fdXM7MTIxNDI2NjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1214266_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1214266001.html',
      categoryName: 'Ladies',
      rgbColors: ['#DFD8C9'],
      articleColorNames: ['Light beige'],
      ecoTaxValue: 0,
      swatchesTotal: 1,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'Ladies_skirts_denim',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/9b/ca9b1f496053a26222af89c234fb3d2baf1dadc2.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/06/b2/06b27db9246461af46bf17d47d4ba6b1e39033b8.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/10/89/1089c617ad08ca4d96eca742fdc26b4b01ca2664.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/84/ff/84ff73d640fb2414c0eaf0a2b8f3b9d85de141d3.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/06/b2/06b27db9246461af46bf17d47d4ba6b1e39033b8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/10/89/1089c617ad08ca4d96eca742fdc26b4b01ca2664.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/84/ff/84ff73d640fb2414c0eaf0a2b8f3b9d85de141d3.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ca/9b/ca9b1f496053a26222af89c234fb3d2baf1dadc2.jpg'
        }
      ],
      allArticleCodes: ['1214266001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/bc/5e/bc5e3a88fda82839134855b339c38e9a12624c6c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/bc/5e/bc5e3a88fda82839134855b339c38e9a12624c6c.jpg'
      ]
    },
    {
      code: '1045459_group_027',
      name: 'Wide High Jeans',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 29.99,
        priceType: 'BUY',
        formattedValue: '$ 29.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/44/c4440a74d523532fa873c5a91b7008a7a2667c2d.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/c4/44/c4440a74d523532fa873c5a91b7008a7a2667c2d.jpg'
        }
      ],
      categories: [],
      pk: '9520491986945',
      whitePrice: {
        currencyIso: 'USD',
        value: 29.99,
        priceType: 'BUY',
        formattedValue: '$ 29.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1045459027',
          name: 'Wide High Jeans',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/44/c4440a74d523532fa873c5a91b7008a7a2667c2d.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/c4/44/c4440a74d523532fa873c5a91b7008a7a2667c2d.jpg'
            }
          ],
          pk: '9502151409665',
          whitePrice: {
            currencyIso: 'USD',
            value: 29.99,
            priceType: 'BUY',
            formattedValue: '$ 29.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/97/01/970111430d50faae1d938075dd659e66e9c76db3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/97/01/970111430d50faae1d938075dd659e66e9c76db3.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/97/01/970111430d50faae1d938075dd659e66e9c76db3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/97/01/970111430d50faae1d938075dd659e66e9c76db3.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA0NTQ1OV9ncm91cF8wMjdfZW5fdXM7MTA0NTQ1OTAyN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Denim blue',
            filterName: 'Blue_0000FF',
            hybrisCode: '75'
          },
          rgbColor: '#79829D',
          genArticle: '045459027249',
          turnToSku: '1045459027001'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1045459027',
        name: 'Wide High Jeans',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/44/c4440a74d523532fa873c5a91b7008a7a2667c2d.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/c4/44/c4440a74d523532fa873c5a91b7008a7a2667c2d.jpg'
          }
        ],
        pk: '9502151409665',
        whitePrice: {
          currencyIso: 'USD',
          value: 29.99,
          priceType: 'BUY',
          formattedValue: '$ 29.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/97/01/970111430d50faae1d938075dd659e66e9c76db3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/97/01/970111430d50faae1d938075dd659e66e9c76db3.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/97/01/970111430d50faae1d938075dd659e66e9c76db3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/97/01/970111430d50faae1d938075dd659e66e9c76db3.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA0NTQ1OV9ncm91cF8wMjdfZW5fdXM7MTA0NTQ1OTAyN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Denim blue',
          filterName: 'Blue_0000FF',
          hybrisCode: '75'
        },
        rgbColor: '#79829D',
        genArticle: '045459027249',
        turnToSku: '1045459027001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 4,
          filterCode: '0'
        },
        {
          orderFilter: 8,
          filterCode: '4'
        },
        {
          orderFilter: 10,
          filterCode: '6'
        },
        {
          orderFilter: 6,
          filterCode: '2'
        },
        {
          orderFilter: 20,
          filterCode: '16'
        },
        {
          orderFilter: 12,
          filterCode: '8'
        },
        {
          orderFilter: 16,
          filterCode: '12'
        },
        {
          orderFilter: 14,
          filterCode: '10'
        },
        {
          orderFilter: 18,
          filterCode: '14'
        },
        {
          orderFilter: 22,
          filterCode: '18'
        }
      ],
      swatches: [],
      articleCodes: ['1045459027', '1045459021', '1045459024', '1045459026'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA0NTQ1OV9ncm91cF8wMjdfZW5fdXM7MTA0NTQ1OTAyN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1045459_group_027_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1045459027.html',
      categoryName: 'Ladies',
      rgbColors: ['#79829D', '#79829D', '#79829D', '#4C5164'],
      articleColorNames: [
        'Denim blue',
        'Denim blue',
        'Denim blue',
        'Denim blue',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 5,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_jeans',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f2/24/f2246b7c02169e654ed8f287a7eb86434c8ed765.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f2/24/f2246b7c02169e654ed8f287a7eb86434c8ed765.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a8/7f/a87fc1303aec6fe44bb53e0fe36152609c5f9094.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/cb/e0/cbe06ddf733a80c623683b36d4ed01cc6f7993e1.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/79/95/7995be6935559f7b88ee7f4f279ae5025a18cc91.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a8/7f/a87fc1303aec6fe44bb53e0fe36152609c5f9094.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/cb/e0/cbe06ddf733a80c623683b36d4ed01cc6f7993e1.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/79/95/7995be6935559f7b88ee7f4f279ae5025a18cc91.jpg'
        }
      ],
      allArticleCodes: [
        '1045459027',
        '1045459021',
        '1045459024',
        '1045459026',
        '1045459028'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/c4/44/c4440a74d523532fa873c5a91b7008a7a2667c2d.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/94/3e/943e13dd2c67f1f212a8b4c0bbf6b8b168a24b34.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/64/9b/649b29e72af82e9757f31825c2c474b5c89d119c.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/da/a7/daa7d4cdb13f00540ec5f73afc05791a9023016c.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/8b/24/8b244fc8b3a63ae087e75f4f41cab301c5a6865a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/c4/44/c4440a74d523532fa873c5a91b7008a7a2667c2d.jpg',
        'https://image.hm.com/assets/hm/94/3e/943e13dd2c67f1f212a8b4c0bbf6b8b168a24b34.jpg',
        'https://image.hm.com/assets/hm/64/9b/649b29e72af82e9757f31825c2c474b5c89d119c.jpg',
        'https://image.hm.com/assets/hm/da/a7/daa7d4cdb13f00540ec5f73afc05791a9023016c.jpg',
        'https://image.hm.com/assets/hm/8b/24/8b244fc8b3a63ae087e75f4f41cab301c5a6865a.jpg'
      ]
    },
    {
      code: '1136205_group_011',
      name: 'Straight High Jeans',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg'
        }
      ],
      categories: [],
      pk: '9524327350273',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 44.99,
        priceType: 'BUY',
        formattedValue: '$ 44.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1136205011',
          name: 'Straight High Jeans',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg'
            }
          ],
          pk: '9497970311169',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 44.99,
            priceType: 'BUY',
            formattedValue: '$ 44.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEzNjIwNV9ncm91cF8wMTFfZW5fdXM7MTEzNjIwNTAxMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Medium denim blue',
            filterName: 'Blue_0000FF',
            hybrisCode: '75'
          },
          rgbColor: '#79829D',
          genArticle: '136205011249',
          turnToSku: '1136205011001'
        }
      ],
      visible: false,
      concept: ['EVERYDAY FASHION'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1136205011',
        name: 'Straight High Jeans',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg'
          }
        ],
        pk: '9497970311169',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 44.99,
          priceType: 'BUY',
          formattedValue: '$ 44.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEzNjIwNV9ncm91cF8wMTFfZW5fdXM7MTEzNjIwNTAxMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Medium denim blue',
          filterName: 'Blue_0000FF',
          hybrisCode: '75'
        },
        rgbColor: '#79829D',
        genArticle: '136205011249',
        turnToSku: '1136205011001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 22,
          filterCode: '18'
        },
        {
          orderFilter: 14,
          filterCode: '10'
        },
        {
          orderFilter: 10,
          filterCode: '6'
        },
        {
          orderFilter: 6,
          filterCode: '2'
        },
        {
          orderFilter: 16,
          filterCode: '12'
        },
        {
          orderFilter: 12,
          filterCode: '8'
        },
        {
          orderFilter: 18,
          filterCode: '14'
        },
        {
          orderFilter: 54,
          filterCode: '20'
        },
        {
          orderFilter: 8,
          filterCode: '4'
        },
        {
          orderFilter: 4,
          filterCode: '0'
        },
        {
          orderFilter: 20,
          filterCode: '16'
        }
      ],
      swatches: [],
      articleCodes: ['1136205011', '1136205004', '1136205010'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEzNjIwNV9ncm91cF8wMTFfZW5fdXM7MTEzNjIwNTAxMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1136205_group_011_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1136205011.html',
      categoryName: 'Ladies',
      rgbColors: ['#79829D', '#79829D', '#494A4F'],
      articleColorNames: ['Medium denim blue', 'Denim blue', 'Black'],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_jeans_straight',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/95/ed/95edefb0793a9151a24b1ad36c0e6c1777c61d02.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/95/ed/95edefb0793a9151a24b1ad36c0e6c1777c61d02.jpg'
        }
      ],
      allArticleCodes: ['1136205011', '1136205004', '1136205010'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d1/00/d100fac597aa3c55b0a0d369851054ddfa99c98b.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/66/57/6657cf3d08645dff9a4c7aa6df488940a0d425a9.jpg],origin[dam],category[ladies_divided_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/46/fe/46fe394b26d3007c8b9fe7de88e960cfa34515dd.jpg',
        'https://image.hm.com/assets/hm/d1/00/d100fac597aa3c55b0a0d369851054ddfa99c98b.jpg',
        'https://image.hm.com/assets/hm/66/57/6657cf3d08645dff9a4c7aa6df488940a0d425a9.jpg'
      ]
    },
    {
      code: '1202819_group_001',
      name: 'Double-breasted Coat',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/7c/4e/7c4e7e4ccf1f94a4d2e4698200ec857d36424d07.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/7c/4e/7c4e7e4ccf1f94a4d2e4698200ec857d36424d07.jpg'
        }
      ],
      categories: [],
      pk: '9524539654145',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 84.99,
        priceType: 'BUY',
        formattedValue: '$ 84.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1202819001',
          name: 'Double-breasted Coat',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/7c/4e/7c4e7e4ccf1f94a4d2e4698200ec857d36424d07.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/7c/4e/7c4e7e4ccf1f94a4d2e4698200ec857d36424d07.jpg'
            }
          ],
          pk: '9504426983425',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 84.99,
            priceType: 'BUY',
            formattedValue: '$ 84.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e2/c7/e2c75d7bf7abc6e662e92f64ddcb35c72536fc48.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e2/c7/e2c75d7bf7abc6e662e92f64ddcb35c72536fc48.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e2/c7/e2c75d7bf7abc6e662e92f64ddcb35c72536fc48.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e2/c7/e2c75d7bf7abc6e662e92f64ddcb35c72536fc48.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIwMjgxOV9ncm91cF8wMDFfZW5fdXM7MTIwMjgxOTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          turnToSku: '1202819001002',
          flexiPLPLayout: {
            type: 'BIG_PORTRAIT'
          }
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1202819001',
        name: 'Double-breasted Coat',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/7c/4e/7c4e7e4ccf1f94a4d2e4698200ec857d36424d07.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/7c/4e/7c4e7e4ccf1f94a4d2e4698200ec857d36424d07.jpg'
          }
        ],
        pk: '9504426983425',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 84.99,
          priceType: 'BUY',
          formattedValue: '$ 84.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e2/c7/e2c75d7bf7abc6e662e92f64ddcb35c72536fc48.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e2/c7/e2c75d7bf7abc6e662e92f64ddcb35c72536fc48.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e2/c7/e2c75d7bf7abc6e662e92f64ddcb35c72536fc48.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e2/c7/e2c75d7bf7abc6e662e92f64ddcb35c72536fc48.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIwMjgxOV9ncm91cF8wMDFfZW5fdXM7MTIwMjgxOTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        turnToSku: '1202819001002',
        flexiPLPLayout: {
          type: 'BIG_PORTRAIT'
        }
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 366,
          filterCode: 'S'
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
          orderFilter: 375,
          filterCode: 'XXL'
        }
      ],
      swatches: [],
      articleCodes: ['1202819001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIwMjgxOV9ncm91cF8wMDFfZW5fdXM7MTIwMjgxOTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1202819_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1202819001.html',
      categoryName: 'Ladies',
      rgbColors: ['#272628'],
      articleColorNames: ['Black'],
      ecoTaxValue: 0,
      swatchesTotal: 1,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_jacketscoats_coats',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/50/55/5055f8848d7536ed4393007f18e59b53ff2004ba.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/dd/7d/dd7dad61fe786faf439334822c312d48b950b71f.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/fd/6d/fd6d33436206bf3235db5100118234e7c24e2035.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/0d/e7/0de7dc0502dd49d3b4a1deac4d79aa7db7931ea4.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/dd/7d/dd7dad61fe786faf439334822c312d48b950b71f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/bb/c7/bbc7f2e06e6a12b36477e34c4a8f0954f2c082dc.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/58/c1/58c117333dc76768e6fd0fd601794b13c5852612.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/58/c1/58c117333dc76768e6fd0fd601794b13c5852612.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/0d/e7/0de7dc0502dd49d3b4a1deac4d79aa7db7931ea4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/fd/6d/fd6d33436206bf3235db5100118234e7c24e2035.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/c7/bbc7f2e06e6a12b36477e34c4a8f0954f2c082dc.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/50/55/5055f8848d7536ed4393007f18e59b53ff2004ba.jpg'
        }
      ],
      allArticleCodes: ['1202819001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/7c/4e/7c4e7e4ccf1f94a4d2e4698200ec857d36424d07.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/7c/4e/7c4e7e4ccf1f94a4d2e4698200ec857d36424d07.jpg'
      ]
    },
    {
      code: '1057813_group_022',
      name: '2-piece Hoodie and Leggings set',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 29.99,
        priceType: 'BUY',
        formattedValue: '$ 29.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg'
        }
      ],
      categories: [],
      pk: '9522544181249',
      whitePrice: {
        currencyIso: 'USD',
        value: 29.99,
        priceType: 'BUY',
        formattedValue: '$ 29.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1057813022',
          name: '2-piece Hoodie and Leggings set',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg'
            }
          ],
          pk: '9501217554433',
          whitePrice: {
            currencyIso: 'USD',
            value: 29.99,
            priceType: 'BUY',
            formattedValue: '$ 29.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA1NzgxM19ncm91cF8wMjJfZW5fdXM7MTA1NzgxMzAyMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FFC0CB',
            text: 'Pink',
            filterName: 'Pink_FFC0CB',
            hybrisCode: '55'
          },
          rgbColor: '#DB87B0',
          turnToSku: '1057813022009'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1057813022',
        name: '2-piece Hoodie and Leggings set',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg'
          }
        ],
        pk: '9501217554433',
        whitePrice: {
          currencyIso: 'USD',
          value: 29.99,
          priceType: 'BUY',
          formattedValue: '$ 29.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA1NzgxM19ncm91cF8wMjJfZW5fdXM7MTA1NzgxMzAyMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FFC0CB',
          text: 'Pink',
          filterName: 'Pink_FFC0CB',
          hybrisCode: '55'
        },
        rgbColor: '#DB87B0',
        turnToSku: '1057813022009'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 3150,
          filterCode: '4T (3-4Y)'
        },
        {
          orderFilter: 3153,
          filterCode: '6X (6-7Y)'
        },
        {
          orderFilter: 3156,
          filterCode: '10 (9-10Y)'
        },
        {
          orderFilter: 3154,
          filterCode: '7 (7-8Y)'
        },
        {
          orderFilter: 3151,
          filterCode: '5T (4-5Y)'
        },
        {
          orderFilter: 3155,
          filterCode: '8 (8-9Y)'
        },
        {
          orderFilter: 3152,
          filterCode: '6 (5-6Y)'
        },
        {
          orderFilter: 3149,
          filterCode: '3T (2-3Y)'
        }
      ],
      swatches: [],
      articleCodes: ['1057813022'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA1NzgxM19ncm91cF8wMjJfZW5fdXM7MTA1NzgxMzAyMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1057813_group_022_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1057813022.html',
      categoryName: 'Kids',
      rgbColors: ['#DB87B0'],
      articleColorNames: ['Pink'],
      ecoTaxValue: 0,
      swatchesTotal: 1,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'kids_girls_clothing_jumperssweatshirts_hoodies',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ad/c1/adc107b32c25e0e3c4110c4131865ece3a83ac15.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ad/c1/adc107b32c25e0e3c4110c4131865ece3a83ac15.jpg'
        }
      ],
      allArticleCodes: ['1057813022'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg],origin[dam],category[kids_girls_clothing_jumperssweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/b7/98/b798688a4af880f8b216ed4675e5c7b805bc42f7.jpg'
      ]
    },
    {
      code: '1211811_group_005',
      name: 'Single-breasted Coat',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 54.99,
        priceType: 'BUY',
        formattedValue: '$ 54.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg'
        }
      ],
      categories: [],
      pk: '9524327743489',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 54.99,
        priceType: 'BUY',
        formattedValue: '$ 54.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1211811005',
          name: 'Single-breasted Coat',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg'
            }
          ],
          pk: '9494015442945',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 54.99,
            priceType: 'BUY',
            formattedValue: '$ 54.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/f6/96/f696db0b601451290e09322a2301e2d27bd17531.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/f6/96/f696db0b601451290e09322a2301e2d27bd17531.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/f6/96/f696db0b601451290e09322a2301e2d27bd17531.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/f6/96/f696db0b601451290e09322a2301e2d27bd17531.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMTgxMV9ncm91cF8wMDVfZW5fdXM7MTIxMTgxMTAwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '808080',
            text: 'Light gray melange',
            filterName: 'Gray_808080',
            hybrisCode: '07'
          },
          rgbColor: '#878D99',
          genArticle: '211811005249',
          turnToSku: '1211811005002'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1211811005',
        name: 'Single-breasted Coat',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg'
          }
        ],
        pk: '9494015442945',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 54.99,
          priceType: 'BUY',
          formattedValue: '$ 54.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/f6/96/f696db0b601451290e09322a2301e2d27bd17531.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/f6/96/f696db0b601451290e09322a2301e2d27bd17531.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/f6/96/f696db0b601451290e09322a2301e2d27bd17531.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/f6/96/f696db0b601451290e09322a2301e2d27bd17531.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMTgxMV9ncm91cF8wMDVfZW5fdXM7MTIxMTgxMTAwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '808080',
          text: 'Light gray melange',
          filterName: 'Gray_808080',
          hybrisCode: '07'
        },
        rgbColor: '#878D99',
        genArticle: '211811005249',
        turnToSku: '1211811005002'
      },
      sale: false,
      variantSizes: [
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
        }
      ],
      swatches: [],
      articleCodes: ['1211811005', '1211811004'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxMTgxMV9ncm91cF8wMDVfZW5fdXM7MTIxMTgxMTAwNV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1211811_group_005_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1211811005.html',
      categoryName: 'Ladies',
      rgbColors: ['#878D99', '#DCD6C7'],
      articleColorNames: ['Light gray melange', 'Cream'],
      ecoTaxValue: 0,
      swatchesTotal: 2,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_jacketscoats_coats',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/2d/b5/2db527934767675f12e0f4d7c7a8ee2911c62198.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/b7/01/b7013b88c31ea06d29356df1b8f8257359cc9e47.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/01/b7013b88c31ea06d29356df1b8f8257359cc9e47.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/2d/b5/2db527934767675f12e0f4d7c7a8ee2911c62198.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/34/21341bd2b6583670838419c627f1f9f240ae812a.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/08/78/0878b4118cc1fb4a1b01dde9069d7d04a103e821.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/08/78/0878b4118cc1fb4a1b01dde9069d7d04a103e821.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/21/34/21341bd2b6583670838419c627f1f9f240ae812a.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/06/01/0601fed7201ec7f124825f58066896cec48b87b3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/06/01/0601fed7201ec7f124825f58066896cec48b87b3.jpg'
        }
      ],
      allArticleCodes: ['1211811005', '1211811004'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg],origin[dam],category[ladies_jacketscoats_coats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/ee/44/ee44278b7cd95c9dd84b4951865b5132c6852963.jpg',
        'https://image.hm.com/assets/hm/ff/cb/ffcbfd2b323703b9ff2f0401769e1b69911ea551.jpg'
      ]
    },
    {
      code: '0975845_group_001',
      name: 'High Waist Joggers',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/5c/b9/5cb922f69fc1fd8abf18fd0930e765ef4d5bc95b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/5c/b9/5cb922f69fc1fd8abf18fd0930e765ef4d5bc95b.jpg'
        }
      ],
      categories: [],
      pk: '9331172147201',
      whitePrice: {
        currencyIso: 'USD',
        value: 24.99,
        priceType: 'BUY',
        formattedValue: '$ 24.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0975845001',
          name: 'High Waist Joggers',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/5c/b9/5cb922f69fc1fd8abf18fd0930e765ef4d5bc95b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/5c/b9/5cb922f69fc1fd8abf18fd0930e765ef4d5bc95b.jpg'
            }
          ],
          pk: '9317996429313',
          whitePrice: {
            currencyIso: 'USD',
            value: 24.99,
            priceType: 'BUY',
            formattedValue: '$ 24.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/da/3f/da3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/da/3f/da3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/da/3f/da3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/da/3f/da3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3NTg0NV9ncm91cF8wMDFfZW5fdXM7MDk3NTg0NTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          genArticle: '975845001249',
          turnToSku: '0975845001001'
        }
      ],
      visible: false,
      concept: ['BASICS,DIVIDED'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0975845001',
        name: 'High Waist Joggers',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/5c/b9/5cb922f69fc1fd8abf18fd0930e765ef4d5bc95b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/5c/b9/5cb922f69fc1fd8abf18fd0930e765ef4d5bc95b.jpg'
          }
        ],
        pk: '9317996429313',
        whitePrice: {
          currencyIso: 'USD',
          value: 24.99,
          priceType: 'BUY',
          formattedValue: '$ 24.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/da/3f/da3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/da/3f/da3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/da/3f/da3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/da/3f/da3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3NTg0NV9ncm91cF8wMDFfZW5fdXM7MDk3NTg0NTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        genArticle: '975845001249',
        turnToSku: '0975845001001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        },
        {
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 357,
          filterCode: 'XXS'
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
          orderFilter: 375,
          filterCode: 'XXL'
        }
      ],
      swatches: [],
      articleCodes: ['0975845001', '0975845002', '0975845009', '0975845031'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3NTg0NV9ncm91cF8wMDFfZW5fdXM7MDk3NTg0NTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0975845_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0975845001.html',
      categoryName: 'Ladies',
      rgbColors: ['#272628', '#C8C8C8', '#515359', '#ECEDEC'],
      articleColorNames: [
        'Black',
        'Light gray melange',
        'Dark gray',
        'White',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 8,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_basics_trousersleggings',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/97/3c/973c6775a615b643a6c369385be675e613daad24.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4e/d5/4ed58d09b31513d8b855bb0cb42baf98524f53fd.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/74/cc/74cc00943a6442f6ca984e26c65bcc62512d31a5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/74/cc/74cc00943a6442f6ca984e26c65bcc62512d31a5.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/d5/4ed58d09b31513d8b855bb0cb42baf98524f53fd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/97/3c/973c6775a615b643a6c369385be675e613daad24.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/3c/dc/3cdc9b1bffcda1935a67553fe57d150327ec4dad.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/79/21/7921e6c4805ab9cd5cb4540b5d69f95a725dc266.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/79/21/7921e6c4805ab9cd5cb4540b5d69f95a725dc266.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/3c/dc/3cdc9b1bffcda1935a67553fe57d150327ec4dad.jpg'
        }
      ],
      allArticleCodes: [
        '0975845001',
        '0975845002',
        '0975845009',
        '0975845031',
        '0975845055',
        '0975845058',
        '0975845071',
        '0975845075'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/5c/b9/5cb922f69fc1fd8abf18fd0930e765ef4d5bc95b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/45/2b/452bb91f18c8e49496dad840655f49e23456745b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/98/91/989136a169533343666d08926b19092ff03bb4cb.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/fb/a3/fba3963861e9fb96a2f0965c72371b2f455ad890.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/76/6a/766a9e7b9409c5bf6d02e4eaded3afc2d12c5498.jpg],origin[dam],category[ladies_basics_trousersleggings],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/74/ad/74add67a7f327f36d20810ad1b11aecc307bafc2.jpg],origin[dam],category[ladies_basics_trousersleggings],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/da/25/da25a8f4d5d9bdf7016200e4f766710f0cad0e6a.jpg],origin[dam],category[ladies_basics_trousersleggings],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ff/2c/ff2ce4ad10e1567370abb3fafa1cdf166c007db9.jpg],origin[dam],category[ladies_basics_trousersleggings],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/5c/b9/5cb922f69fc1fd8abf18fd0930e765ef4d5bc95b.jpg',
        'https://image.hm.com/assets/hm/45/2b/452bb91f18c8e49496dad840655f49e23456745b.jpg',
        'https://image.hm.com/assets/hm/98/91/989136a169533343666d08926b19092ff03bb4cb.jpg',
        'https://image.hm.com/assets/hm/fb/a3/fba3963861e9fb96a2f0965c72371b2f455ad890.jpg',
        'https://image.hm.com/assets/hm/76/6a/766a9e7b9409c5bf6d02e4eaded3afc2d12c5498.jpg',
        'https://image.hm.com/assets/hm/74/ad/74add67a7f327f36d20810ad1b11aecc307bafc2.jpg',
        'https://image.hm.com/assets/hm/da/25/da25a8f4d5d9bdf7016200e4f766710f0cad0e6a.jpg',
        'https://image.hm.com/assets/hm/ff/2c/ff2ce4ad10e1567370abb3fafa1cdf166c007db9.jpg'
      ]
    },
    {
      code: '0985159_group_001',
      name: 'Skinny Jeans',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 29.99,
        priceType: 'BUY',
        formattedValue: '$ 29.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/90/e1/90e1cab87c4ece683f80f4db1d93ba574396d311.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/90/e1/90e1cab87c4ece683f80f4db1d93ba574396d311.jpg'
        }
      ],
      categories: [],
      pk: '9325368803329',
      whitePrice: {
        currencyIso: 'USD',
        value: 29.99,
        priceType: 'BUY',
        formattedValue: '$ 29.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0985159001',
          name: 'Skinny Jeans',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/90/e1/90e1cab87c4ece683f80f4db1d93ba574396d311.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/90/e1/90e1cab87c4ece683f80f4db1d93ba574396d311.jpg'
            }
          ],
          pk: '9305094160385',
          whitePrice: {
            currencyIso: 'USD',
            value: 29.99,
            priceType: 'BUY',
            formattedValue: '$ 29.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/0d/f8/0df859b342c47516b9843f9a1141ec8aabcdfddd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/0d/f8/0df859b342c47516b9843f9a1141ec8aabcdfddd.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/0d/f8/0df859b342c47516b9843f9a1141ec8aabcdfddd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/0d/f8/0df859b342c47516b9843f9a1141ec8aabcdfddd.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4NTE1OV9ncm91cF8wMDFfZW5fdXM7MDk4NTE1OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          genArticle: '985159001249',
          turnToSku: '0985159001013'
        }
      ],
      visible: false,
      concept: ['DENIM'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0985159001',
        name: 'Skinny Jeans',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/90/e1/90e1cab87c4ece683f80f4db1d93ba574396d311.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/90/e1/90e1cab87c4ece683f80f4db1d93ba574396d311.jpg'
          }
        ],
        pk: '9305094160385',
        whitePrice: {
          currencyIso: 'USD',
          value: 29.99,
          priceType: 'BUY',
          formattedValue: '$ 29.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/0d/f8/0df859b342c47516b9843f9a1141ec8aabcdfddd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/0d/f8/0df859b342c47516b9843f9a1141ec8aabcdfddd.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/0d/f8/0df859b342c47516b9843f9a1141ec8aabcdfddd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/0d/f8/0df859b342c47516b9843f9a1141ec8aabcdfddd.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4NTE1OV9ncm91cF8wMDFfZW5fdXM7MDk4NTE1OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        genArticle: '985159001249',
        turnToSku: '0985159001013'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 1431,
          filterCode: '36/30'
        },
        {
          orderFilter: 1413,
          filterCode: '32/30'
        },
        {
          orderFilter: 1437,
          filterCode: '38/32'
        },
        {
          orderFilter: 91,
          filterCode: '33'
        },
        {
          orderFilter: 1425,
          filterCode: '34/30'
        },
        {
          orderFilter: 1433,
          filterCode: '36/34'
        },
        {
          orderFilter: 1403,
          filterCode: '30/34'
        },
        {
          orderFilter: 1408,
          filterCode: '31/32'
        },
        {
          orderFilter: 1438,
          filterCode: '38/34'
        },
        {
          orderFilter: 82,
          filterCode: '30'
        },
        {
          orderFilter: 101,
          filterCode: '36'
        },
        {
          orderFilter: 1401,
          filterCode: '30/30'
        },
        {
          orderFilter: 79,
          filterCode: '29'
        },
        {
          orderFilter: 1419,
          filterCode: '33/30'
        },
        {
          orderFilter: 1402,
          filterCode: '30/32'
        },
        {
          orderFilter: 1415,
          filterCode: '32/34'
        },
        {
          orderFilter: 88,
          filterCode: '32'
        },
        {
          orderFilter: 1427,
          filterCode: '34/34'
        },
        {
          orderFilter: 85,
          filterCode: '31'
        },
        {
          orderFilter: 94,
          filterCode: '34'
        },
        {
          orderFilter: 1426,
          filterCode: '34/32'
        },
        {
          orderFilter: 1432,
          filterCode: '36/32'
        },
        {
          orderFilter: 106,
          filterCode: '38'
        },
        {
          orderFilter: 76,
          filterCode: '28'
        }
      ],
      swatches: [],
      articleCodes: ['0985159001', '0985159004', '0985159008'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4NTE1OV9ncm91cF8wMDFfZW5fdXM7MDk4NTE1OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0985159_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0985159001.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#8898AC', '#494A4F'],
      articleColorNames: ['Black', 'Light denim blue', 'Dark gray'],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_jeans_skinny',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/9e/1b/9e1b12e8f624b890dd3733ecbc7c3071287b3de1.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4d/15/4d159d2d217bd6764e9ff2fa30faa1f766e413eb.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/80/38802c9b9c00c4e2a8f89fe491a2ea97829d73a4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/3d/55/3d559214ab2ae6bb6d4898d080b03854a05d916e.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/3d/55/3d559214ab2ae6bb6d4898d080b03854a05d916e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/38/80/38802c9b9c00c4e2a8f89fe491a2ea97829d73a4.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/15/4d159d2d217bd6764e9ff2fa30faa1f766e413eb.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/9e/1b/9e1b12e8f624b890dd3733ecbc7c3071287b3de1.jpg'
        }
      ],
      allArticleCodes: ['0985159001', '0985159004', '0985159008'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/90/e1/90e1cab87c4ece683f80f4db1d93ba574396d311.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/72/b4/72b40452a268600f3a9d73f94bb310b5e6614cd6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/86/f7/86f7b1e25d225723055ab84afd366dd7258165ce.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/90/e1/90e1cab87c4ece683f80f4db1d93ba574396d311.jpg',
        'https://image.hm.com/assets/hm/72/b4/72b40452a268600f3a9d73f94bb310b5e6614cd6.jpg',
        'https://image.hm.com/assets/hm/86/f7/86f7b1e25d225723055ab84afd366dd7258165ce.jpg'
      ]
    },
    {
      code: '1089753_group_039',
      name: 'Sweatshirt',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 9.99,
        priceType: 'BUY',
        formattedValue: '$ 9.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg'
        }
      ],
      categories: [],
      pk: '9519655583745',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 9.99,
        priceType: 'BUY',
        formattedValue: '$ 9.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1089753039',
          name: 'Sweatshirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg'
            }
          ],
          pk: '9513146843137',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 9.99,
            priceType: 'BUY',
            formattedValue: '$ 9.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTc1M19ncm91cF8wMzlfZW5fdXM7MTA4OTc1MzAzOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: 'FFFFFF',
            text: 'Cream/hearts',
            filterName: 'Multi_000000,White_FFFFFF',
            hybrisCode: '11'
          },
          rgbColor: '#E9E2D6',
          genArticle: '089753039249',
          turnToSku: '1089753039005'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1089753039',
        name: 'Sweatshirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg'
          }
        ],
        pk: '9513146843137',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 9.99,
          priceType: 'BUY',
          formattedValue: '$ 9.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTc1M19ncm91cF8wMzlfZW5fdXM7MTA4OTc1MzAzOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: 'FFFFFF',
          text: 'Cream/hearts',
          filterName: 'Multi_000000,White_FFFFFF',
          hybrisCode: '11'
        },
        rgbColor: '#E9E2D6',
        genArticle: '089753039249',
        turnToSku: '1089753039005'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 3150,
          filterCode: '4T (3-4Y)'
        },
        {
          orderFilter: 3145,
          filterCode: '9M (6-9M)'
        },
        {
          orderFilter: 3149,
          filterCode: '3T (2-3Y)'
        },
        {
          orderFilter: 3148,
          filterCode: '2T (1½-2Y)'
        },
        {
          orderFilter: 3147,
          filterCode: '18M (12-18M)'
        },
        {
          orderFilter: 3146,
          filterCode: '12M (9-12M)'
        },
        {
          orderFilter: 3144,
          filterCode: '6M (4-6M)'
        }
      ],
      swatches: [],
      articleCodes: ['1089753039', '1089753031', '1089753042', '1089753045'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTc1M19ncm91cF8wMzlfZW5fdXM7MTA4OTc1MzAzOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1089753_group_039_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1089753039.html',
      categoryName: 'Kids',
      rgbColors: ['#E9E2D6', '#ECCAC5', '#BEBEBE', '#D5B8AC'],
      articleColorNames: [
        'Cream/hearts',
        'Light pink/rabbit',
        'Light gray/flowers',
        'Dusty pink/leopard'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 4,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode:
        'kids_baby_girl_clothing_jumperssweatshirts_sweatshirts',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f6/05/f6057844dc7073b3b5c11dd28847868adc8597c1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f6/05/f6057844dc7073b3b5c11dd28847868adc8597c1.jpg'
        }
      ],
      allArticleCodes: ['1089753039', '1089753031', '1089753042', '1089753045'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/cc/0d/cc0d5a0a4673444914dcffad5d4c12f0a3371811.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/43/d3/43d398a9fa8b230eaabcad83d0a0257641d1da48.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/02/f9/02f95e1c8280e9ed0d773c68daf8ece84321dc16.jpg],origin[dam],category[kids_baby_girl_clothing_jumperssweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/41/fa/41fa133744879f090b0f24d6907c2d7dad89e2d1.jpg',
        'https://image.hm.com/assets/hm/cc/0d/cc0d5a0a4673444914dcffad5d4c12f0a3371811.jpg',
        'https://image.hm.com/assets/hm/43/d3/43d398a9fa8b230eaabcad83d0a0257641d1da48.jpg',
        'https://image.hm.com/assets/hm/02/f9/02f95e1c8280e9ed0d773c68daf8ece84321dc16.jpg'
      ]
    },
    {
      code: '0970818_group_051',
      name: 'Loose Fit Sweatshirt',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 14.99,
        priceType: 'BUY',
        formattedValue: '$ 14.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/84/b0/84b01ab0b5609c16bf02b48c43589c683aa59595.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/84/b0/84b01ab0b5609c16bf02b48c43589c683aa59595.jpg'
        }
      ],
      categories: [],
      pk: '9487276965889',
      whitePrice: {
        currencyIso: 'USD',
        value: 14.99,
        priceType: 'BUY',
        formattedValue: '$ 14.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0970818051',
          name: 'Loose Fit Sweatshirt',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/84/b0/84b01ab0b5609c16bf02b48c43589c683aa59595.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/84/b0/84b01ab0b5609c16bf02b48c43589c683aa59595.jpg'
            }
          ],
          pk: '9434005241857',
          whitePrice: {
            currencyIso: 'USD',
            value: 14.99,
            priceType: 'BUY',
            formattedValue: '$ 14.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/6a/3e/6a3e8294ae3aaaea5166f2d605d5e3aea7ca7d71.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/6a/3e/6a3e8294ae3aaaea5166f2d605d5e3aea7ca7d71.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/6a/3e/6a3e8294ae3aaaea5166f2d605d5e3aea7ca7d71.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/6a/3e/6a3e8294ae3aaaea5166f2d605d5e3aea7ca7d71.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxOF9ncm91cF8wNTFfZW5fdXM7MDk3MDgxODA1MV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '808080',
            text: 'Light gray melange',
            filterName: 'Gray_808080',
            hybrisCode: '06'
          },
          rgbColor: '#C8C8C8',
          genArticle: '970818051238',
          turnToSku: '0970818051001'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0970818051',
        name: 'Loose Fit Sweatshirt',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/84/b0/84b01ab0b5609c16bf02b48c43589c683aa59595.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/84/b0/84b01ab0b5609c16bf02b48c43589c683aa59595.jpg'
          }
        ],
        pk: '9434005241857',
        whitePrice: {
          currencyIso: 'USD',
          value: 14.99,
          priceType: 'BUY',
          formattedValue: '$ 14.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/6a/3e/6a3e8294ae3aaaea5166f2d605d5e3aea7ca7d71.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/6a/3e/6a3e8294ae3aaaea5166f2d605d5e3aea7ca7d71.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/6a/3e/6a3e8294ae3aaaea5166f2d605d5e3aea7ca7d71.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/6a/3e/6a3e8294ae3aaaea5166f2d605d5e3aea7ca7d71.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxOF9ncm91cF8wNTFfZW5fdXM7MDk3MDgxODA1MV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '808080',
          text: 'Light gray melange',
          filterName: 'Gray_808080',
          hybrisCode: '06'
        },
        rgbColor: '#C8C8C8',
        genArticle: '970818051238',
        turnToSku: '0970818051001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
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
        }
      ],
      swatches: [],
      articleCodes: ['0970818051', '0970818001', '0970818003', '0970818040'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxOF9ncm91cF8wNTFfZW5fdXM7MDk3MDgxODA1MV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0970818_group_051_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0970818051.html',
      categoryName: 'Men',
      rgbColors: ['#C8C8C8', '#272628', '#FFFFFF', '#E4E2DC'],
      articleColorNames: [
        'Light gray melange',
        'Black',
        'White',
        'Light taupe',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 16,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_hoodiessweatshirts_sweatshirts',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f4/58/f4588a483cad8a9cbefd580ced436f8caa3f3ef8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f4/58/f4588a483cad8a9cbefd580ced436f8caa3f3ef8.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/62/96/6296f16ebfc41e76dcf3c1c1f78dacf625789082.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/7d/29/7d2910ce5af48b4139f9f50568cdbe9f45146e68.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f3/6f/f36fc16692b1f7c8e9180ac6cdc1c5109f44b8ba.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/9b/ac/9bac968000d20d4c21321d9636bdd186af9eb03f.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/7d/29/7d2910ce5af48b4139f9f50568cdbe9f45146e68.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/62/96/6296f16ebfc41e76dcf3c1c1f78dacf625789082.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/9b/ac/9bac968000d20d4c21321d9636bdd186af9eb03f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f3/6f/f36fc16692b1f7c8e9180ac6cdc1c5109f44b8ba.jpg'
        }
      ],
      allArticleCodes: [
        '0970818051',
        '0970818001',
        '0970818003',
        '0970818040',
        '0970818046',
        '0970818053',
        '0970818058',
        '0970818062',
        '0970818064',
        '0970818065',
        '0970818067',
        '0970818068',
        '0970818069',
        '0970818070',
        '0970818076',
        '0970818077'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/84/b0/84b01ab0b5609c16bf02b48c43589c683aa59595.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/78/92/7892f6d0a9e9281545de3c119930b4e0e95691a3.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/4b/2e/4b2ee17f173568af296d1771d17026475737204d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/1e/38/1e38a1df81f7f7c589f03292cff69e058477526c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/6c/3d/6c3dd4381ed49f80354b50eedd8306a876798859.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/32/31/323152f0c5d8effc3bed87f353c381c5580d3576.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/c9/94/c994c27f68b47f65c7146a0bdce0562af4b7ba93.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/99/a6/99a61edf831a0b4cfcd47549219a30f7ea2251e0.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e4/5c/e45cf502c83b0a79af07da2c1298076bf2fbeb86.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/30/3b/303b85d60eb5e0836e0f2756ff207fc0b59c0c41.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/f1/c5/f1c5ec2ee630e52e4a6e08f9e95ac7b504f2cf80.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/fb/f4/fbf4b6d2915850ae355b2c8276522a259f4873dc.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/6c/08/6c089ec6ca3f7ecad8465c02571da71e61032531.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/52/bc/52bcadebd6bebe1d2c2228655f3f061be195d457.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/cf/a4/cfa4061f86dcd0c86f17f3f2bdd0b2cc9c4f2627.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/2f/37/2f37c736a003d881046ec574e052945c504e5e5f.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/84/b0/84b01ab0b5609c16bf02b48c43589c683aa59595.jpg',
        'https://image.hm.com/assets/hm/78/92/7892f6d0a9e9281545de3c119930b4e0e95691a3.jpg',
        'https://image.hm.com/assets/hm/4b/2e/4b2ee17f173568af296d1771d17026475737204d.jpg',
        'https://image.hm.com/assets/hm/1e/38/1e38a1df81f7f7c589f03292cff69e058477526c.jpg',
        'https://image.hm.com/assets/hm/6c/3d/6c3dd4381ed49f80354b50eedd8306a876798859.jpg',
        'https://image.hm.com/assets/hm/32/31/323152f0c5d8effc3bed87f353c381c5580d3576.jpg',
        'https://image.hm.com/assets/hm/c9/94/c994c27f68b47f65c7146a0bdce0562af4b7ba93.jpg',
        'https://image.hm.com/assets/hm/99/a6/99a61edf831a0b4cfcd47549219a30f7ea2251e0.jpg',
        'https://image.hm.com/assets/hm/e4/5c/e45cf502c83b0a79af07da2c1298076bf2fbeb86.jpg',
        'https://image.hm.com/assets/hm/30/3b/303b85d60eb5e0836e0f2756ff207fc0b59c0c41.jpg',
        'https://image.hm.com/assets/hm/f1/c5/f1c5ec2ee630e52e4a6e08f9e95ac7b504f2cf80.jpg',
        'https://image.hm.com/assets/hm/fb/f4/fbf4b6d2915850ae355b2c8276522a259f4873dc.jpg',
        'https://image.hm.com/assets/hm/6c/08/6c089ec6ca3f7ecad8465c02571da71e61032531.jpg',
        'https://image.hm.com/assets/hm/52/bc/52bcadebd6bebe1d2c2228655f3f061be195d457.jpg',
        'https://image.hm.com/assets/hm/cf/a4/cfa4061f86dcd0c86f17f3f2bdd0b2cc9c4f2627.jpg',
        'https://image.hm.com/assets/hm/2f/37/2f37c736a003d881046ec574e052945c504e5e5f.jpg'
      ]
    },
    {
      code: '1230735_group_001',
      name: 'Cardigan',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 37.99,
        priceType: 'BUY',
        formattedValue: '$ 37.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/1d/71/1d71ca711d038517614824b509c968a273d2d3fc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/1d/71/1d71ca711d038517614824b509c968a273d2d3fc.jpg'
        }
      ],
      categories: [],
      pk: '9524267745281',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 37.99,
        priceType: 'BUY',
        formattedValue: '$ 37.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1230735001',
          name: 'Cardigan',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/1d/71/1d71ca711d038517614824b509c968a273d2d3fc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/1d/71/1d71ca711d038517614824b509c968a273d2d3fc.jpg'
            }
          ],
          pk: '9517812187137',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 37.99,
            priceType: 'BUY',
            formattedValue: '$ 37.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ea/87/ea87823d8e6b74c387100645fd976615a31f2d6e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/ea/87/ea87823d8e6b74c387100645fd976615a31f2d6e.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ea/87/ea87823d8e6b74c387100645fd976615a31f2d6e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/ea/87/ea87823d8e6b74c387100645fd976615a31f2d6e.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIzMDczNV9ncm91cF8wMDFfZW5fdXM7MTIzMDczNTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '808080',
            text: 'Dark gray melange',
            filterName: 'Gray_808080',
            hybrisCode: '08'
          },
          rgbColor: '#6E6E6E',
          genArticle: '230735001249',
          turnToSku: '1230735001002'
        }
      ],
      visible: false,
      concept: ['EVERYDAY FASHION'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1230735001',
        name: 'Cardigan',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/1d/71/1d71ca711d038517614824b509c968a273d2d3fc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/1d/71/1d71ca711d038517614824b509c968a273d2d3fc.jpg'
          }
        ],
        pk: '9517812187137',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 37.99,
          priceType: 'BUY',
          formattedValue: '$ 37.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ea/87/ea87823d8e6b74c387100645fd976615a31f2d6e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/ea/87/ea87823d8e6b74c387100645fd976615a31f2d6e.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ea/87/ea87823d8e6b74c387100645fd976615a31f2d6e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/ea/87/ea87823d8e6b74c387100645fd976615a31f2d6e.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIzMDczNV9ncm91cF8wMDFfZW5fdXM7MTIzMDczNTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '808080',
          text: 'Dark gray melange',
          filterName: 'Gray_808080',
          hybrisCode: '08'
        },
        rgbColor: '#6E6E6E',
        genArticle: '230735001249',
        turnToSku: '1230735001002'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 369,
          filterCode: 'M'
        },
        {
          orderFilter: 375,
          filterCode: 'XXL'
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
          orderFilter: 370,
          filterCode: 'L'
        },
        {
          orderFilter: 372,
          filterCode: 'XL'
        }
      ],
      swatches: [],
      articleCodes: ['1230735001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIzMDczNV9ncm91cF8wMDFfZW5fdXM7MTIzMDczNTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1230735_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1230735001.html',
      categoryName: 'Ladies',
      rgbColors: ['#6E6E6E'],
      articleColorNames: ['Dark gray melange'],
      ecoTaxValue: 0,
      swatchesTotal: 1,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_cardigansjumpers_cardigans',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/51/27/51272bd37808cdea038acf182e19c602f92aa345.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/58/23/5823b882d2237c4d3bbdb78f2b56c63836503bc2.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/67/10/67106f8ea4f9af6e0e0d84eafa1208422db719a4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/51/27/51272bd37808cdea038acf182e19c602f92aa345.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/58/23/5823b882d2237c4d3bbdb78f2b56c63836503bc2.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/67/10/67106f8ea4f9af6e0e0d84eafa1208422db719a4.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/39/5b391ea7721a4c0933ee41a5bf00953683ba0345.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/5b/39/5b391ea7721a4c0933ee41a5bf00953683ba0345.jpg'
        }
      ],
      allArticleCodes: ['1230735001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/1d/71/1d71ca711d038517614824b509c968a273d2d3fc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/1d/71/1d71ca711d038517614824b509c968a273d2d3fc.jpg'
      ]
    },
    {
      code: '1194323_group_003',
      name: 'Textured-knit Cardigan',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 64.99,
        priceType: 'BUY',
        formattedValue: '$ 64.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/b3/bbb3bfeab97fdd228d6f35d4c9f9c0a9841b4052.jpg],origin[dam],category[ladies_cardigansjumpers_cardigans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/bb/b3/bbb3bfeab97fdd228d6f35d4c9f9c0a9841b4052.jpg'
        }
      ],
      categories: [],
      pk: '9526908551169',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 64.99,
        priceType: 'BUY',
        formattedValue: '$ 64.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1194323003',
          name: 'Textured-knit Cardigan',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/b3/bbb3bfeab97fdd228d6f35d4c9f9c0a9841b4052.jpg],origin[dam],category[ladies_cardigansjumpers_cardigans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/bb/b3/bbb3bfeab97fdd228d6f35d4c9f9c0a9841b4052.jpg'
            }
          ],
          pk: '9511281983489',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 64.99,
            priceType: 'BUY',
            formattedValue: '$ 64.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/d0/c2/d0c2a3b93239ef50c6bf9dd25747c72f2538758c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/d0/c2/d0c2a3b93239ef50c6bf9dd25747c72f2538758c.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/d0/c2/d0c2a3b93239ef50c6bf9dd25747c72f2538758c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/d0/c2/d0c2a3b93239ef50c6bf9dd25747c72f2538758c.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE5NDMyM19ncm91cF8wMDNfZW5fdXM7MTE5NDMyMzAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Light blue',
            filterName: 'Blue_0000FF',
            hybrisCode: '74'
          },
          rgbColor: '#9FA8B6',
          turnToSku: '1194323003002'
        }
      ],
      visible: false,
      concept: ['MODERN CLASSIC'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1194323003',
        name: 'Textured-knit Cardigan',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/b3/bbb3bfeab97fdd228d6f35d4c9f9c0a9841b4052.jpg],origin[dam],category[ladies_cardigansjumpers_cardigans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/bb/b3/bbb3bfeab97fdd228d6f35d4c9f9c0a9841b4052.jpg'
          }
        ],
        pk: '9511281983489',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 64.99,
          priceType: 'BUY',
          formattedValue: '$ 64.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/d0/c2/d0c2a3b93239ef50c6bf9dd25747c72f2538758c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/d0/c2/d0c2a3b93239ef50c6bf9dd25747c72f2538758c.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/d0/c2/d0c2a3b93239ef50c6bf9dd25747c72f2538758c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/d0/c2/d0c2a3b93239ef50c6bf9dd25747c72f2538758c.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE5NDMyM19ncm91cF8wMDNfZW5fdXM7MTE5NDMyMzAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Light blue',
          filterName: 'Blue_0000FF',
          hybrisCode: '74'
        },
        rgbColor: '#9FA8B6',
        turnToSku: '1194323003002'
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
          orderFilter: 375,
          filterCode: 'XXL'
        }
      ],
      swatches: [],
      articleCodes: ['1194323003', '1194323001', '1194323002'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTE5NDMyM19ncm91cF8wMDNfZW5fdXM7MTE5NDMyMzAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1194323_group_003_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1194323003.html',
      categoryName: 'Ladies',
      rgbColors: ['#9FA8B6', '#272628', '#EEEDE4'],
      articleColorNames: ['Light blue', 'Black', 'Cream'],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_cardigansjumpers_cardigans',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/1b/211b3b9c300e2b8c96c7453f41ea5ddae50aa668.jpg],origin[dam],category[ladies_cardigansjumpers_cardigans],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c4/33/c4330624da7fc59f8418ca4e36f9744775528981.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/33/c4330624da7fc59f8418ca4e36f9744775528981.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/21/1b/211b3b9c300e2b8c96c7453f41ea5ddae50aa668.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/b0/0f/b00f23cfe65fd5382aa679cd74f670db7605d433.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/b0/0f/b00f23cfe65fd5382aa679cd74f670db7605d433.jpg'
        }
      ],
      allArticleCodes: ['1194323003', '1194323001', '1194323002'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/bb/b3/bbb3bfeab97fdd228d6f35d4c9f9c0a9841b4052.jpg],origin[dam],category[ladies_cardigansjumpers_cardigans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/5a/f9/5af9167bed56ec7215036494f28a49ecd5b96cad.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/01/c6/01c6a297c2614212c201065370f64b327fba4a14.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/bb/b3/bbb3bfeab97fdd228d6f35d4c9f9c0a9841b4052.jpg',
        'https://image.hm.com/assets/hm/5a/f9/5af9167bed56ec7215036494f28a49ecd5b96cad.jpg',
        'https://image.hm.com/assets/hm/01/c6/01c6a297c2614212c201065370f64b327fba4a14.jpg'
      ]
    },
    {
      code: '0970817_group_001',
      name: 'Regular Fit Sweatpants',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/af/d5/afd57792e516a0d45851c91d099fbf0c7d8b3f72.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/af/d5/afd57792e516a0d45851c91d099fbf0c7d8b3f72.jpg'
        }
      ],
      categories: [],
      pk: '9326153596929',
      whitePrice: {
        currencyIso: 'USD',
        value: 19.99,
        priceType: 'BUY',
        formattedValue: '$ 19.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0970817001',
          name: 'Regular Fit Sweatpants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/af/d5/afd57792e516a0d45851c91d099fbf0c7d8b3f72.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/af/d5/afd57792e516a0d45851c91d099fbf0c7d8b3f72.jpg'
            }
          ],
          pk: '9311082643457',
          whitePrice: {
            currencyIso: 'USD',
            value: 19.99,
            priceType: 'BUY',
            formattedValue: '$ 19.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/00/bf/00bf55b049672c0ebcb6a9681dca34db1f96848d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/00/bf/00bf55b049672c0ebcb6a9681dca34db1f96848d.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/00/bf/00bf55b049672c0ebcb6a9681dca34db1f96848d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/00/bf/00bf55b049672c0ebcb6a9681dca34db1f96848d.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxN19ncm91cF8wMDFfZW5fdXM7MDk3MDgxNzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          genArticle: '970817001249',
          turnToSku: '0970817001001'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0970817001',
        name: 'Regular Fit Sweatpants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/af/d5/afd57792e516a0d45851c91d099fbf0c7d8b3f72.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/af/d5/afd57792e516a0d45851c91d099fbf0c7d8b3f72.jpg'
          }
        ],
        pk: '9311082643457',
        whitePrice: {
          currencyIso: 'USD',
          value: 19.99,
          priceType: 'BUY',
          formattedValue: '$ 19.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/00/bf/00bf55b049672c0ebcb6a9681dca34db1f96848d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/00/bf/00bf55b049672c0ebcb6a9681dca34db1f96848d.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/00/bf/00bf55b049672c0ebcb6a9681dca34db1f96848d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/00/bf/00bf55b049672c0ebcb6a9681dca34db1f96848d.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxN19ncm91cF8wMDFfZW5fdXM7MDk3MDgxNzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        genArticle: '970817001249',
        turnToSku: '0970817001001'
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
          orderFilter: 375,
          filterCode: 'XXL'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
        }
      ],
      swatches: [],
      articleCodes: ['0970817001', '0970817024', '0970817025', '0970817026'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxN19ncm91cF8wMDFfZW5fdXM7MDk3MDgxNzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0970817_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0970817001.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#C0BBAD', '#E4E2DC', '#858C94'],
      articleColorNames: [
        'Black',
        'Cream',
        'Light taupe',
        'Gray',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 10,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_trousers_joggers',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/6c/ca6caff384b4dd7232ae9a1743ffa6ce85082e1d.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/ca/6c/ca6caff384b4dd7232ae9a1743ffa6ce85082e1d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/60/3b/603b217ba072c9a7346db2706d6f402c03cafda1.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/60/3b/603b217ba072c9a7346db2706d6f402c03cafda1.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/95/6e/956e2fb439aefaa8488d985900dc2b4ca32b0622.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/95/6e/956e2fb439aefaa8488d985900dc2b4ca32b0622.jpg'
        }
      ],
      allArticleCodes: [
        '0970817001',
        '0970817024',
        '0970817025',
        '0970817026',
        '0970817034',
        '0970817037',
        '0970817038',
        '0970817039',
        '0970817040',
        '0970817042'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/af/d5/afd57792e516a0d45851c91d099fbf0c7d8b3f72.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/86/71/86711898a77da2dc0647c34518c904553946bdcb.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d5/83/d583f74848ec60c27e0996924a7e6c3c99c01baf.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/7e/0a/7e0a34928f3c902c5d0d422cf8fd26359c26822f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/79/a8/79a844634a944dc20a3fca820426c5e4bacfce19.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/9d/6f/9d6f1bc5ceffc912c71cce00389db440ba45c247.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/73/76/73769c1a405fb20e5b551134e7b8ec3877677614.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/14/03/140345d4917179906ac5be4a59ca84f8b6d3e292.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/1d/68/1d686e0fe28985a78a6e15627c26485e088e79be.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/ac/20/ac209aca738fe29ee524b5050f6ce24c3adb074a.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/af/d5/afd57792e516a0d45851c91d099fbf0c7d8b3f72.jpg',
        'https://image.hm.com/assets/hm/86/71/86711898a77da2dc0647c34518c904553946bdcb.jpg',
        'https://image.hm.com/assets/hm/d5/83/d583f74848ec60c27e0996924a7e6c3c99c01baf.jpg',
        'https://image.hm.com/assets/hm/7e/0a/7e0a34928f3c902c5d0d422cf8fd26359c26822f.jpg',
        'https://image.hm.com/assets/hm/79/a8/79a844634a944dc20a3fca820426c5e4bacfce19.jpg',
        'https://image.hm.com/assets/hm/9d/6f/9d6f1bc5ceffc912c71cce00389db440ba45c247.jpg',
        'https://image.hm.com/assets/hm/73/76/73769c1a405fb20e5b551134e7b8ec3877677614.jpg',
        'https://image.hm.com/assets/hm/14/03/140345d4917179906ac5be4a59ca84f8b6d3e292.jpg',
        'https://image.hm.com/assets/hm/1d/68/1d686e0fe28985a78a6e15627c26485e088e79be.jpg',
        'https://image.hm.com/assets/hm/ac/20/ac209aca738fe29ee524b5050f6ce24c3adb074a.jpg'
      ]
    },
    {
      code: '0738873_group_019',
      name: '3-pack Joggers',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 29.99,
        priceType: 'BUY',
        formattedValue: '$ 29.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/78/07/780706f9ffae71cf036c4c4b5bece363a82d9324.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/78/07/780706f9ffae71cf036c4c4b5bece363a82d9324.jpg'
        }
      ],
      categories: [],
      pk: '9278966628353',
      whitePrice: {
        currencyIso: 'USD',
        value: 29.99,
        priceType: 'BUY',
        formattedValue: '$ 29.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0738873019',
          name: '3-pack Joggers',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/78/07/780706f9ffae71cf036c4c4b5bece363a82d9324.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/78/07/780706f9ffae71cf036c4c4b5bece363a82d9324.jpg'
            }
          ],
          pk: '9274427506689',
          whitePrice: {
            currencyIso: 'USD',
            value: 29.99,
            priceType: 'BUY',
            formattedValue: '$ 29.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/14/b8/14b8e7c9d6e526620b07e42ba609d36bf0392161.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/14/b8/14b8e7c9d6e526620b07e42ba609d36bf0392161.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/14/b8/14b8e7c9d6e526620b07e42ba609d36bf0392161.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/14/b8/14b8e7c9d6e526620b07e42ba609d36bf0392161.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDczODg3M19ncm91cF8wMTlfZW5fdXM7MDczODg3MzAxOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '0000FF',
            text: 'Navy blue/light gray melange',
            filterName: 'Black_000000,Blue_0000FF,Gray_808080',
            hybrisCode: '76'
          },
          rgbColor: '#2D3244',
          genArticle: '738873019249',
          turnToSku: '0738873019008'
        }
      ],
      visible: false,
      concept: ['BASICS'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0738873019',
        name: '3-pack Joggers',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/78/07/780706f9ffae71cf036c4c4b5bece363a82d9324.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/78/07/780706f9ffae71cf036c4c4b5bece363a82d9324.jpg'
          }
        ],
        pk: '9274427506689',
        whitePrice: {
          currencyIso: 'USD',
          value: 29.99,
          priceType: 'BUY',
          formattedValue: '$ 29.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/14/b8/14b8e7c9d6e526620b07e42ba609d36bf0392161.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/14/b8/14b8e7c9d6e526620b07e42ba609d36bf0392161.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/14/b8/14b8e7c9d6e526620b07e42ba609d36bf0392161.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/14/b8/14b8e7c9d6e526620b07e42ba609d36bf0392161.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDczODg3M19ncm91cF8wMTlfZW5fdXM7MDczODg3MzAxOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '0000FF',
          text: 'Navy blue/light gray melange',
          filterName: 'Black_000000,Blue_0000FF,Gray_808080',
          hybrisCode: '76'
        },
        rgbColor: '#2D3244',
        genArticle: '738873019249',
        turnToSku: '0738873019008'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 3155,
          filterCode: '8 (8-9Y)'
        },
        {
          orderFilter: 3148,
          filterCode: '2T (1½-2Y)'
        },
        {
          orderFilter: 3150,
          filterCode: '4T (3-4Y)'
        },
        {
          orderFilter: 3149,
          filterCode: '3T (2-3Y)'
        },
        {
          orderFilter: 3156,
          filterCode: '10 (9-10Y)'
        },
        {
          orderFilter: 3154,
          filterCode: '7 (7-8Y)'
        },
        {
          orderFilter: 3153,
          filterCode: '6X (6-7Y)'
        },
        {
          orderFilter: 3151,
          filterCode: '5T (4-5Y)'
        },
        {
          orderFilter: 3152,
          filterCode: '6 (5-6Y)'
        }
      ],
      swatches: [],
      articleCodes: ['0738873019', '0738873040', '0738873048'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDczODg3M19ncm91cF8wMTlfZW5fdXM7MDczODg3MzAxOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0738873_group_019_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0738873019.html',
      categoryName: 'Kids',
      rgbColors: ['#2D3244', '#272628', '#737373'],
      articleColorNames: [
        'Navy blue/light gray melange',
        'Black',
        'Gray/dark gray'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'kids_boys_clothing_trousersjeans_joggerssweatpants',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/41/eb/41eb6baa092f5c8dd3f0f29e3eed9eb731202923.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/41/eb/41eb6baa092f5c8dd3f0f29e3eed9eb731202923.jpg'
        }
      ],
      allArticleCodes: ['0738873019', '0738873040', '0738873048'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/78/07/780706f9ffae71cf036c4c4b5bece363a82d9324.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/4a/cb/4acb444ba1b372301030215d6849c52cfe98ef36.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/73/82/7382a5d14be04d01d043aac9ef7b06e349a36b0a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/78/07/780706f9ffae71cf036c4c4b5bece363a82d9324.jpg',
        'https://image.hm.com/assets/hm/4a/cb/4acb444ba1b372301030215d6849c52cfe98ef36.jpg',
        'https://image.hm.com/assets/hm/73/82/7382a5d14be04d01d043aac9ef7b06e349a36b0a.jpg'
      ]
    },
    {
      code: '0970816_group_009',
      name: '2-pack Regular Fit Sweatpants',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg'
        }
      ],
      categories: [],
      pk: '9426442223617',
      whitePrice: {
        currencyIso: 'USD',
        value: 39.99,
        priceType: 'BUY',
        formattedValue: '$ 39.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0970816009',
          name: '2-pack Regular Fit Sweatpants',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg'
            }
          ],
          pk: '9406866292737',
          whitePrice: {
            currencyIso: 'USD',
            value: 39.99,
            priceType: 'BUY',
            formattedValue: '$ 39.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxNl9ncm91cF8wMDlfZW5fdXM7MDk3MDgxNjAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Black/gray melange',
            filterName: 'Black_000000,Gray_808080',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          genArticle: '970816009238',
          turnToSku: '0970816009001'
        }
      ],
      visible: false,
      concept: ['BASICS'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0970816009',
        name: '2-pack Regular Fit Sweatpants',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg'
          }
        ],
        pk: '9406866292737',
        whitePrice: {
          currencyIso: 'USD',
          value: 39.99,
          priceType: 'BUY',
          formattedValue: '$ 39.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxNl9ncm91cF8wMDlfZW5fdXM7MDk3MDgxNjAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Black/gray melange',
          filterName: 'Black_000000,Gray_808080',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        genArticle: '970816009238',
        turnToSku: '0970816009001'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 375,
          filterCode: 'XXL'
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
          orderFilter: 363,
          filterCode: 'XS'
        },
        {
          orderFilter: 381,
          filterCode: '3XL'
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
      articleCodes: ['0970816009', '0970816010', '0970816015'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3MDgxNl9ncm91cF8wMDlfZW5fdXM7MDk3MDgxNjAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0970816_group_009_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0970816009.html',
      categoryName: 'Men',
      rgbColors: ['#272628', '#3F3838', '#7E8EA6'],
      articleColorNames: [
        'Black/gray melange',
        'Dark brown/light blue',
        'Light blue/beige'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 3,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'men_trousers_trousers_regular_all',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/15/65/15652e1978ad364a9cd499d12e9f38bd790010ee.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a2/e4/a2e48a104f780d59551268b1aeef3e695b881590.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a2/e4/a2e48a104f780d59551268b1aeef3e695b881590.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/15/65/15652e1978ad364a9cd499d12e9f38bd790010ee.jpg'
        }
      ],
      allArticleCodes: ['0970816009', '0970816010', '0970816015'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/e4/79/e47938cee48d832f25428e7ea5f444ef1e6a2009.jpg],origin[dam],category[men_trousers_trousers_regular_all],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/72/38/72380c2145e7d197149409b391a7705d6accd8b9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/7e/08/7e082946dd5b3c681ee82e0ea1eeb45eb8937122.jpg',
        'https://image.hm.com/assets/hm/e4/79/e47938cee48d832f25428e7ea5f444ef1e6a2009.jpg',
        'https://image.hm.com/assets/hm/72/38/72380c2145e7d197149409b391a7705d6accd8b9.jpg'
      ]
    },
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
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/8f/7b/8f7bf81b12b7ca4b826056844bd333d74525a4f6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/8f/7b/8f7bf81b12b7ca4b826056844bd333d74525a4f6.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/8f/7b/8f7bf81b12b7ca4b826056844bd333d74525a4f6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/8f/7b/8f7bf81b12b7ca4b826056844bd333d74525a4f6.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNDRfZW5fdXM7MDcxMzk4NjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          turnToSku: '0713986044002'
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
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/8f/7b/8f7bf81b12b7ca4b826056844bd333d74525a4f6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/8f/7b/8f7bf81b12b7ca4b826056844bd333d74525a4f6.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/8f/7b/8f7bf81b12b7ca4b826056844bd333d74525a4f6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/8f/7b/8f7bf81b12b7ca4b826056844bd333d74525a4f6.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNDRfZW5fdXM7MDcxMzk4NjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        turnToSku: '0713986044002'
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
          orderFilter: 2096,
          filterCode: '36R'
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
          orderFilter: 2104,
          filterCode: '52R'
        },
        {
          orderFilter: 2097,
          filterCode: '38R'
        }
      ],
      swatches: [],
      articleCodes: ['0713986044', '0713986050'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDcxMzk4Nl9ncm91cF8wNDRfZW5fdXM7MDcxMzk4NjA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/09/5e/095e6f8752923acda7d74e9f5d6bb1cdacc7dae0.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/f5/bc/f5bcb84c13b7dafc5374d5226657c94c38ed461d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/25/40/2540ef247e2e1a6e75e4b77d5ccef5feb031676d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/6d/b9/6db91ea4fe6c1135724901c03e58ca2842e007ce.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/a1/ce/a1ce2277456f1ac19970e995964067b0c6a44b62.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/1d/c3/1dc30a0aab17890fe3092866a6251d86c44652ed.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/f5/bc/f5bcb84c13b7dafc5374d5226657c94c38ed461d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/09/5e/095e6f8752923acda7d74e9f5d6bb1cdacc7dae0.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/1d/c3/1dc30a0aab17890fe3092866a6251d86c44652ed.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/25/40/2540ef247e2e1a6e75e4b77d5ccef5feb031676d.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/6d/b9/6db91ea4fe6c1135724901c03e58ca2842e007ce.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/a1/ce/a1ce2277456f1ac19970e995964067b0c6a44b62.jpg'
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
      code: '0743530_group_002',
      name: 'Extra-soft Joggers',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 12.99,
        priceType: 'BUY',
        formattedValue: '$ 12.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/6c/bb6cb380ee0abb2171ab280429ae81dc8642e9c0.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/bb/6c/bb6cb380ee0abb2171ab280429ae81dc8642e9c0.jpg'
        }
      ],
      categories: [],
      pk: '9197166493697',
      whitePrice: {
        currencyIso: 'USD',
        value: 12.99,
        priceType: 'BUY',
        formattedValue: '$ 12.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '0743530002',
          name: 'Extra-soft Joggers',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/6c/bb6cb380ee0abb2171ab280429ae81dc8642e9c0.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/bb/6c/bb6cb380ee0abb2171ab280429ae81dc8642e9c0.jpg'
            }
          ],
          pk: '9172280999937',
          whitePrice: {
            currencyIso: 'USD',
            value: 12.99,
            priceType: 'BUY',
            formattedValue: '$ 12.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/34/ca3473eb5e778cb4deb2ab299e23431ba530c68d.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/ca/34/ca3473eb5e778cb4deb2ab299e23431ba530c68d.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/34/ca3473eb5e778cb4deb2ab299e23431ba530c68d.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/ca/34/ca3473eb5e778cb4deb2ab299e23431ba530c68d.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc0MzUzMF9ncm91cF8wMDJfZW5fdXM7MDc0MzUzMDAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '808080',
            text: 'Light gray melange',
            filterName: 'Gray_808080',
            hybrisCode: '07'
          },
          rgbColor: '#AAAAAA',
          genArticle: '743530002249',
          turnToSku: '0743530002008'
        }
      ],
      visible: false,
      concept: ['BASICS'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '0743530002',
        name: 'Extra-soft Joggers',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/6c/bb6cb380ee0abb2171ab280429ae81dc8642e9c0.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/bb/6c/bb6cb380ee0abb2171ab280429ae81dc8642e9c0.jpg'
          }
        ],
        pk: '9172280999937',
        whitePrice: {
          currencyIso: 'USD',
          value: 12.99,
          priceType: 'BUY',
          formattedValue: '$ 12.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/34/ca3473eb5e778cb4deb2ab299e23431ba530c68d.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/ca/34/ca3473eb5e778cb4deb2ab299e23431ba530c68d.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/34/ca3473eb5e778cb4deb2ab299e23431ba530c68d.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/ca/34/ca3473eb5e778cb4deb2ab299e23431ba530c68d.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc0MzUzMF9ncm91cF8wMDJfZW5fdXM7MDc0MzUzMDAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '808080',
          text: 'Light gray melange',
          filterName: 'Gray_808080',
          hybrisCode: '07'
        },
        rgbColor: '#AAAAAA',
        genArticle: '743530002249',
        turnToSku: '0743530002008'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 3156,
          filterCode: '10 (9-10Y)'
        },
        {
          orderFilter: 3151,
          filterCode: '5T (4-5Y)'
        },
        {
          orderFilter: 3155,
          filterCode: '8 (8-9Y)'
        },
        {
          orderFilter: 3149,
          filterCode: '3T (2-3Y)'
        },
        {
          orderFilter: 3148,
          filterCode: '2T (1½-2Y)'
        },
        {
          orderFilter: 3153,
          filterCode: '6X (6-7Y)'
        },
        {
          orderFilter: 3150,
          filterCode: '4T (3-4Y)'
        },
        {
          orderFilter: 3152,
          filterCode: '6 (5-6Y)'
        },
        {
          orderFilter: 3154,
          filterCode: '7 (7-8Y)'
        }
      ],
      swatches: [],
      articleCodes: ['0743530002', '0743530003', '0743530004', '0743530088'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDc0MzUzMF9ncm91cF8wMDJfZW5fdXM7MDc0MzUzMDAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '0743530_group_002_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.0743530002.html',
      categoryName: 'Kids',
      rgbColors: ['#AAAAAA', '#2D3244', '#272628', '#374083'],
      articleColorNames: [
        'Light gray melange',
        'Dark blue',
        'Black',
        'Cobalt blue',
        'dc',
        'dc',
        'dc'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 7,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'kids_boys_clothing_trousersjeans_joggerssweatpants',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/28/b7/28b7613dc5a0cee224be4b0fcd31af953bd40c5d.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/08/12/081274d45f9d0ac9c7fdbaa97ecb8483cbf175d1.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/08/12/081274d45f9d0ac9c7fdbaa97ecb8483cbf175d1.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/28/b7/28b7613dc5a0cee224be4b0fcd31af953bd40c5d.jpg'
        }
      ],
      allArticleCodes: [
        '0743530002',
        '0743530003',
        '0743530004',
        '0743530088',
        '0743530103',
        '0743530109',
        '0743530110'
      ],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/bb/6c/bb6cb380ee0abb2171ab280429ae81dc8642e9c0.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/2c/1a/2c1a1ba34606617befd42e31b2552d3654683836.jpg],origin[dam],category[kids_boy8y_trousers_pullon],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/89/44/8944fa67a9d317425e18b7718bfaf0df00f5e811.jpg],origin[dam],category[kids_boy8y_trousers_pullon],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/5e/ec/5eec703eb5e421b42d6783f8414f760e4254a54d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/8e/7d/8e7ddc7344328c145bc93d7a6943781644f13617.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/73/42/7342ec4dc1c84085330083728f0821ce224bd926.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/3d/84/3d84dfffb0a0e58641b963bb0a336b435ab8dc52.jpg],origin[dam],category[kids_boys_clothing_trousersjeans_joggerssweatpants],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/bb/6c/bb6cb380ee0abb2171ab280429ae81dc8642e9c0.jpg',
        'https://image.hm.com/assets/hm/2c/1a/2c1a1ba34606617befd42e31b2552d3654683836.jpg',
        'https://image.hm.com/assets/hm/89/44/8944fa67a9d317425e18b7718bfaf0df00f5e811.jpg',
        'https://image.hm.com/assets/hm/5e/ec/5eec703eb5e421b42d6783f8414f760e4254a54d.jpg',
        'https://image.hm.com/assets/hm/8e/7d/8e7ddc7344328c145bc93d7a6943781644f13617.jpg',
        'https://image.hm.com/assets/hm/73/42/7342ec4dc1c84085330083728f0821ce224bd926.jpg',
        'https://image.hm.com/assets/hm/3d/84/3d84dfffb0a0e58641b963bb0a336b435ab8dc52.jpg'
      ]
    },
    {
      code: '1207692_group_001',
      name: 'Tie-belt Shirt Dress',
      stock: {
        stockLevel: 1
      },
      price: {
        currencyIso: 'USD',
        value: 57.99,
        priceType: 'BUY',
        formattedValue: '$ 57.99',
        type: 'WHITE'
      },
      images: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/72/07/720740139a3f9de9db9fcb131f6d87ebf59369bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/72/07/720740139a3f9de9db9fcb131f6d87ebf59369bc.jpg'
        }
      ],
      categories: [],
      pk: '9523866697729',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 57.99,
        priceType: 'BUY',
        formattedValue: '$ 57.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1207692001',
          name: 'Tie-belt Shirt Dress',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/72/07/720740139a3f9de9db9fcb131f6d87ebf59369bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/72/07/720740139a3f9de9db9fcb131f6d87ebf59369bc.jpg'
            }
          ],
          pk: '9502160912385',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 57.99,
            priceType: 'BUY',
            formattedValue: '$ 57.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e1/9a/e19a725ec7f93bc530742bd21597c5c96e211924.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e1/9a/e19a725ec7f93bc530742bd21597c5c96e211924.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/e1/9a/e19a725ec7f93bc530742bd21597c5c96e211924.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/e1/9a/e19a725ec7f93bc530742bd21597c5c96e211924.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIwNzY5Ml9ncm91cF8wMDFfZW5fdXM7MTIwNzY5MjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
          genArticle: '207692001238',
          turnToSku: '1207692001002'
        }
      ],
      visible: false,
      concept: ['MODERN CLASSIC'],
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1207692001',
        name: 'Tie-belt Shirt Dress',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/72/07/720740139a3f9de9db9fcb131f6d87ebf59369bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/72/07/720740139a3f9de9db9fcb131f6d87ebf59369bc.jpg'
          }
        ],
        pk: '9502160912385',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 57.99,
          priceType: 'BUY',
          formattedValue: '$ 57.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e1/9a/e19a725ec7f93bc530742bd21597c5c96e211924.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e1/9a/e19a725ec7f93bc530742bd21597c5c96e211924.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/e1/9a/e19a725ec7f93bc530742bd21597c5c96e211924.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/e1/9a/e19a725ec7f93bc530742bd21597c5c96e211924.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIwNzY5Ml9ncm91cF8wMDFfZW5fdXM7MTIwNzY5MjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
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
        genArticle: '207692001238',
        turnToSku: '1207692001002'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 366,
          filterCode: 'S'
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
          orderFilter: 370,
          filterCode: 'L'
        }
      ],
      swatches: [],
      articleCodes: ['1207692001', '1207692002', '1207692003', '1207692004'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIwNzY5Ml9ncm91cF8wMDFfZW5fdXM7MTIwNzY5MjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1207692_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1207692001.html',
      categoryName: 'Ladies',
      rgbColors: ['#272628', '#272628', '#272628', '#EEEDE4'],
      articleColorNames: [
        'Black',
        'Black/white patterned',
        'Black/striped',
        'Cream'
      ],
      ecoTaxValue: 0,
      swatchesTotal: 4,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_dresses_mididresses',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/0b/5f/0b5f65c55c672dd6200bd9de2da0a6bef9f018dd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/b7/59/b75905acb1dd6d526a65244afcb34dd63f45dd26.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/59/b75905acb1dd6d526a65244afcb34dd63f45dd26.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/0b/5f/0b5f65c55c672dd6200bd9de2da0a6bef9f018dd.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/2f/4b2fb1eca55079b0c4828a365f2d43c6b9db9fc1.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/4b/2f/4b2fb1eca55079b0c4828a365f2d43c6b9db9fc1.jpg'
        },
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/9f/ef/9fef1182cb8cd9f5d66ab5c252582866ec02da10.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/9f/ef/9fef1182cb8cd9f5d66ab5c252582866ec02da10.jpg'
        }
      ],
      allArticleCodes: ['1207692001', '1207692002', '1207692003', '1207692004'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/72/07/720740139a3f9de9db9fcb131f6d87ebf59369bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/8e/c8/8ec80b40833be6f011e091b776f1edb59a351741.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/95/1d/951dca088fa984242c775a8829d94cd8d92746f1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
        'https://lp2.hm.com/hmgoepprod?set=source[/d4/85/d48594e716ae2378b7f950b4636c66d316204dcd.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/72/07/720740139a3f9de9db9fcb131f6d87ebf59369bc.jpg',
        'https://image.hm.com/assets/hm/8e/c8/8ec80b40833be6f011e091b776f1edb59a351741.jpg',
        'https://image.hm.com/assets/hm/95/1d/951dca088fa984242c775a8829d94cd8d92746f1.jpg',
        'https://image.hm.com/assets/hm/d4/85/d48594e716ae2378b7f950b4636c66d316204dcd.jpg'
      ]
    },
    {
      code: '1215658_group_001',
      name: 'Non-padded Embroidered Balconette Bra',
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
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
          baseUrl:
            'https://image.hm.com/assets/hm/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg'
        }
      ],
      categories: [],
      pk: '9525672247297',
      sellingAttributes: ['New Arrival'],
      whitePrice: {
        currencyIso: 'USD',
        value: 34.99,
        priceType: 'BUY',
        formattedValue: '$ 34.99',
        type: 'WHITE'
      },
      articles: [
        {
          code: '1215658001',
          name: 'Non-padded Embroidered Balconette Bra',
          images: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
              baseUrl:
                'https://image.hm.com/assets/hm/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg'
            }
          ],
          pk: '9501218734081',
          sellingAttributes: ['New Arrival'],
          whitePrice: {
            currencyIso: 'USD',
            value: 34.99,
            priceType: 'BUY',
            formattedValue: '$ 34.99',
            type: 'WHITE'
          },
          logoPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg'
            }
          ],
          normalPicture: [
            {
              url: 'https://lp2.hm.com/hmgoepprod?set=source[/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
              baseUrl:
                'https://image.hm.com/assets/hm/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg'
            }
          ],
          visible: false,
          numbersOfPieces: 0,
          ticket:
            'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTY1OF9ncm91cF8wMDFfZW5fdXM7MTIxNTY1ODAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
          dummy: false,
          ecoTaxValue: 0,
          redirectToPdp: false,
          comingSoon: false,
          color: {
            code: '000000',
            text: 'Light beige/black',
            filterName: 'Beige_F5F5DC,Black_000000,Multi_000000',
            hybrisCode: '09'
          },
          rgbColor: '#272628',
          turnToSku: '1215658001005'
        }
      ],
      visible: false,
      numbersOfPieces: 0,
      defaultArticle: {
        code: '1215658001',
        name: 'Non-padded Embroidered Balconette Bra',
        images: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
            baseUrl:
              'https://image.hm.com/assets/hm/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg'
          }
        ],
        pk: '9501218734081',
        sellingAttributes: ['New Arrival'],
        whitePrice: {
          currencyIso: 'USD',
          value: 34.99,
          priceType: 'BUY',
          formattedValue: '$ 34.99',
          type: 'WHITE'
        },
        logoPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg'
          }
        ],
        normalPicture: [
          {
            url: 'https://lp2.hm.com/hmgoepprod?set=source[/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
            baseUrl:
              'https://image.hm.com/assets/hm/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg'
          }
        ],
        visible: false,
        numbersOfPieces: 0,
        ticket:
          'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTY1OF9ncm91cF8wMDFfZW5fdXM7MTIxNTY1ODAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
        dummy: false,
        ecoTaxValue: 0,
        redirectToPdp: false,
        comingSoon: false,
        color: {
          code: '000000',
          text: 'Light beige/black',
          filterName: 'Beige_F5F5DC,Black_000000,Multi_000000',
          hybrisCode: '09'
        },
        rgbColor: '#272628',
        turnToSku: '1215658001005'
      },
      sale: false,
      variantSizes: [
        {
          orderFilter: 1592,
          filterCode: '32B'
        },
        {
          orderFilter: 1595,
          filterCode: '38B'
        },
        {
          orderFilter: 1618,
          filterCode: '34D'
        },
        {
          orderFilter: 1584,
          filterCode: '34A'
        },
        {
          orderFilter: 1619,
          filterCode: '36D'
        },
        {
          orderFilter: 1594,
          filterCode: '36B'
        },
        {
          orderFilter: 1606,
          filterCode: '38C'
        },
        {
          orderFilter: 1593,
          filterCode: '34B'
        },
        {
          orderFilter: 1604,
          filterCode: '34C'
        },
        {
          orderFilter: 1585,
          filterCode: '36A'
        },
        {
          orderFilter: 1605,
          filterCode: '36C'
        }
      ],
      swatches: [],
      articleCodes: ['1215658001'],
      ticket:
        'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTIxNTY1OF9ncm91cF8wMDFfZW5fdXM7MTIxNTY1ODAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTs4NTs',
      searchEngineProductId: '1215658_group_001_en_us',
      dummy: false,
      linkPdp: '/en_us/productpage.1215658001.html',
      categoryName: 'Ladies',
      rgbColors: ['#272628'],
      articleColorNames: ['Light beige/black'],
      ecoTaxValue: 0,
      swatchesTotal: 1,
      showPriceMarker: false,
      redirectToPdp: false,
      mainCategoryCode: 'ladies_lingerie_bras_balconette',
      comingSoon: false,
      brandName: 'H&M',
      galleryImages: [
        {
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/c2/96/c29613d426547f83d215d5d548157b1c7a3ccd3d.jpg],origin[dam],category[],type[DESCRIPTIVEDETAIL],res[m],hmver[2]&call=url[file:/product/main]',
          baseUrl:
            'https://image.hm.com/assets/hm/c2/96/c29613d426547f83d215d5d548157b1c7a3ccd3d.jpg'
        }
      ],
      allArticleCodes: ['1215658001'],
      allArticleImages: [
        'https://lp2.hm.com/hmgoepprod?set=source[/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]'
      ],
      allArticleBaseImages: [
        'https://image.hm.com/assets/hm/94/dd/94ddf60c7b3e10d7760f9f8579aedd63d9a420bc.jpg'
      ]
    }
  ],
  pagination: {
    pageSize: 30,
    currentPage: 0,
    sort: 'stock',
    numberOfPages: 334,
    totalNumberOfResults: 10000,
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
          code: 'BABY EXCLUSIVE',
          count: 167,
          selected: false
        },
        {
          code: 'BASICS',
          count: 1138,
          selected: false
        },
        {
          code: 'DENIM',
          count: 317,
          selected: false
        },
        {
          code: 'DIVIDED',
          count: 2163,
          selected: false
        },
        {
          code: 'EVERYDAY FASHION',
          count: 1358,
          selected: false
        },
        {
          code: 'H&M BEAUTY',
          count: 660,
          selected: false
        },
        {
          code: 'H&M EDITION',
          count: 188,
          selected: false
        },
        {
          code: 'H&M MAN',
          count: 177,
          selected: false
        },
        {
          code: 'H&M Move',
          count: 519,
          selected: false
        },
        {
          code: 'H&M+',
          count: 324,
          selected: false
        },
        {
          code: 'KIDS EXCLUSIVE',
          count: 134,
          selected: false
        },
        {
          code: 'MAMA',
          count: 323,
          selected: false
        },
        {
          code: 'MODERN CLASSIC',
          count: 452,
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
          count: 312,
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
          code: '2_Circular Design Story',
          count: 1,
          selected: false
        },
        {
          code: '2_Disney100 x H&M',
          count: 7,
          selected: false
        },
        {
          code: '2_Eva Cremers x H&M',
          count: 3,
          selected: false
        },
        {
          code: '2_Family Collection',
          count: 3,
          selected: false
        },
        {
          code: '2_H&M HOME FOR THE LOVE OF ART',
          count: 2,
          selected: false
        },
        {
          code: '2_H&M Move x Zlatan',
          count: 27,
          selected: false
        },
        {
          code: '2_H&M Studio Collection',
          count: 22,
          selected: false
        },
        {
          code: '2_H&M x Eva Chen',
          count: 2,
          selected: false
        },
        {
          code: '2_H&M x Lakwena',
          count: 13,
          selected: false
        },
        {
          code: '2_H&M x Original Squishmallows™',
          count: 10,
          selected: false
        },
        {
          code: '2_H&M x Sophie la girafe',
          count: 8,
          selected: false
        },
        {
          code: '2_Hôtel Hennes Merch',
          count: 2,
          selected: false
        },
        {
          code: '2_Innovation Re-Enchantment Story Kids',
          count: 1,
          selected: false
        },
        {
          code: '2_Keith Haring x H&M',
          count: 1,
          selected: false
        },
        {
          code: '2_Metaverse design story',
          count: 1,
          selected: false
        },
        {
          code: '2_Netflix x H&M',
          count: 1,
          selected: false
        },
        {
          code: '2_No Fear x H&M',
          count: 4,
          selected: false
        },
        {
          code: '2_Save the Children',
          count: 9,
          selected: false
        },
        {
          code: '2_Sibling',
          count: 1,
          selected: false
        },
        {
          code: '2_Smiley® x H&M',
          count: 3,
          selected: false
        },
        {
          code: '2_The Simpsons x H&M',
          count: 1,
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
          code: 'Blackout',
          count: 3,
          selected: false
        },
        {
          code: 'Breathable',
          count: 57,
          selected: false
        },
        {
          code: 'Moisture wicking',
          count: 366,
          selected: false
        },
        {
          code: 'Polarized',
          count: 2,
          selected: false
        },
        {
          code: 'Quick dry',
          count: 124,
          selected: false
        },
        {
          code: 'Reflective details',
          count: 75,
          selected: false
        },
        {
          code: 'Thermal',
          count: 48,
          selected: false
        },
        {
          code: 'Water-repellent',
          count: 145,
          selected: false
        },
        {
          code: 'Water-resistant',
          count: 6,
          selected: false
        },
        {
          code: 'Waterproof',
          count: 49,
          selected: false
        },
        {
          code: 'Wind resistant',
          count: 13,
          selected: false
        },
        {
          code: 'Windproof',
          count: 104,
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
          count: 2298,
          selected: false
        },
        {
          code: 'black',
          count: 4067,
          selected: false
        },
        {
          code: 'blue',
          count: 2238,
          selected: false
        },
        {
          code: 'bronze',
          count: 9,
          selected: false
        },
        {
          code: 'brown',
          count: 525,
          selected: false
        },
        {
          code: 'gold-colored',
          count: 193,
          selected: false
        },
        {
          code: 'gray',
          count: 1892,
          selected: false
        },
        {
          code: 'green',
          count: 1420,
          selected: false
        },
        {
          code: 'multi',
          count: 4842,
          selected: false
        },
        {
          code: 'orange',
          count: 313,
          selected: false
        },
        {
          code: 'pink',
          count: 1383,
          selected: false
        },
        {
          code: 'purple',
          count: 475,
          selected: false
        },
        {
          code: 'red',
          count: 665,
          selected: false
        },
        {
          code: 'silver-colored',
          count: 239,
          selected: false
        },
        {
          code: 'transparent',
          count: 74,
          selected: false
        },
        {
          code: 'turquoise',
          count: 243,
          selected: false
        },
        {
          code: 'white',
          count: 2784,
          selected: false
        },
        {
          code: 'yellow',
          count: 342,
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
          count: 1300,
          selected: false
        },
        {
          code: 'Loose fit',
          count: 1489,
          selected: false
        },
        {
          code: 'Muscle fit',
          count: 31,
          selected: false
        },
        {
          code: 'Oversized',
          count: 486,
          selected: false
        },
        {
          code: 'Regular fit',
          count: 3299,
          selected: false
        },
        {
          code: 'Relaxed fit',
          count: 507,
          selected: false
        },
        {
          code: 'Skinny fit',
          count: 244,
          selected: false
        },
        {
          code: 'Slim fit',
          count: 1386,
          selected: false
        },
        {
          code: 'Super skinny fit',
          count: 13,
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
          count: 794,
          selected: false
        },
        {
          code: 'Casual',
          count: 5152,
          selected: false
        },
        {
          code: 'Costume Party',
          count: 98,
          selected: false
        },
        {
          code: 'Formal',
          count: 345,
          selected: false
        },
        {
          code: 'Lounge',
          count: 136,
          selected: false
        },
        {
          code: 'Office Wear',
          count: 265,
          selected: false
        },
        {
          code: 'Party',
          count: 633,
          selected: false
        },
        {
          code: 'School',
          count: 47,
          selected: false
        },
        {
          code: 'Sport',
          count: 617,
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
          code: 'Applicator',
          count: 4,
          selected: false
        },
        {
          code: 'Apron',
          count: 6,
          selected: false
        },
        {
          code: 'Arm Warmers',
          count: 8,
          selected: false
        },
        {
          code: 'Artificial Nails',
          count: 12,
          selected: false
        },
        {
          code: 'Baby Bib',
          count: 5,
          selected: false
        },
        {
          code: 'Baby Mat',
          count: 6,
          selected: false
        },
        {
          code: 'Baby Mobile',
          count: 4,
          selected: false
        },
        {
          code: 'Baby Scarf',
          count: 2,
          selected: false
        },
        {
          code: 'Bag',
          count: 149,
          selected: false
        },
        {
          code: 'Baking Dish',
          count: 2,
          selected: false
        },
        {
          code: 'Base Coat',
          count: 2,
          selected: false
        },
        {
          code: 'Basket',
          count: 98,
          selected: false
        },
        {
          code: 'Bath Fizzer',
          count: 8,
          selected: false
        },
        {
          code: 'Bath Mat',
          count: 29,
          selected: false
        },
        {
          code: 'Bath Salts',
          count: 1,
          selected: false
        },
        {
          code: 'Bath Sponge',
          count: 2,
          selected: false
        },
        {
          code: 'Bathrobe',
          count: 32,
          selected: false
        },
        {
          code: 'Beads',
          count: 1,
          selected: false
        },
        {
          code: 'Bedskirt',
          count: 22,
          selected: false
        },
        {
          code: 'Bedspread',
          count: 25,
          selected: false
        },
        {
          code: 'Belt',
          count: 42,
          selected: false
        },
        {
          code: 'Beret',
          count: 6,
          selected: false
        },
        {
          code: 'Bikini Top',
          count: 205,
          selected: false
        },
        {
          code: 'Bikini bottoms',
          count: 235,
          selected: false
        },
        {
          code: 'Blazer',
          count: 140,
          selected: false
        },
        {
          code: 'Bloomers',
          count: 8,
          selected: false
        },
        {
          code: 'Blouse',
          count: 214,
          selected: false
        },
        {
          code: 'Blush',
          count: 24,
          selected: false
        },
        {
          code: 'Body Brush',
          count: 1,
          selected: false
        },
        {
          code: 'Body Jewelry',
          count: 6,
          selected: false
        },
        {
          code: 'Body Lotion',
          count: 1,
          selected: false
        },
        {
          code: 'Body Serum',
          count: 1,
          selected: false
        },
        {
          code: 'Bodysuit',
          count: 304,
          selected: false
        },
        {
          code: 'Bolero',
          count: 9,
          selected: false
        },
        {
          code: 'Book Stand',
          count: 2,
          selected: false
        },
        {
          code: 'Bookend',
          count: 2,
          selected: false
        },
        {
          code: 'Bottle',
          count: 2,
          selected: false
        },
        {
          code: 'Bow Tie',
          count: 4,
          selected: false
        },
        {
          code: 'Bowl',
          count: 44,
          selected: false
        },
        {
          code: 'Bowl Cover',
          count: 2,
          selected: false
        },
        {
          code: 'Box',
          count: 26,
          selected: false
        },
        {
          code: 'Bra',
          count: 201,
          selected: false
        },
        {
          code: 'Bracelet',
          count: 21,
          selected: false
        },
        {
          code: 'Briefs',
          count: 360,
          selected: false
        },
        {
          code: 'Bronzer',
          count: 11,
          selected: false
        },
        {
          code: 'Bubble Bath',
          count: 6,
          selected: false
        },
        {
          code: 'Bustier',
          count: 16,
          selected: false
        },
        {
          code: 'Butter Dish',
          count: 1,
          selected: false
        },
        {
          code: 'Cabinet',
          count: 1,
          selected: false
        },
        {
          code: 'Caftan',
          count: 11,
          selected: false
        },
        {
          code: 'Cake Server',
          count: 2,
          selected: false
        },
        {
          code: 'Cake Stand',
          count: 6,
          selected: false
        },
        {
          code: 'Candle',
          count: 64,
          selected: false
        },
        {
          code: 'Candlestick',
          count: 53,
          selected: false
        },
        {
          code: 'Cap',
          count: 109,
          selected: false
        },
        {
          code: 'Carafe',
          count: 4,
          selected: false
        },
        {
          code: 'Cardigan',
          count: 158,
          selected: false
        },
        {
          code: 'Ceiling Light',
          count: 5,
          selected: false
        },
        {
          code: 'Chafe Prevention',
          count: 1,
          selected: false
        },
        {
          code: 'Chair',
          count: 4,
          selected: false
        },
        {
          code: 'Changing Pad',
          count: 4,
          selected: false
        },
        {
          code: 'Changing Pad Cover',
          count: 1,
          selected: false
        },
        {
          code: 'Cheese knife',
          count: 3,
          selected: false
        },
        {
          code: 'Christmas Stocking',
          count: 4,
          selected: false
        },
        {
          code: 'Clothing Tape',
          count: 1,
          selected: false
        },
        {
          code: 'Coaster',
          count: 11,
          selected: false
        },
        {
          code: 'Coat',
          count: 54,
          selected: false
        },
        {
          code: 'Concealer',
          count: 17,
          selected: false
        },
        {
          code: 'Cookie Cutter',
          count: 1,
          selected: false
        },
        {
          code: 'Cooler Bag',
          count: 3,
          selected: false
        },
        {
          code: 'Corset',
          count: 1,
          selected: false
        },
        {
          code: 'Costume',
          count: 63,
          selected: false
        },
        {
          code: 'Costume Party Accessories',
          count: 15,
          selected: false
        },
        {
          code: 'Cotton Swabs',
          count: 2,
          selected: false
        },
        {
          code: 'Cup',
          count: 8,
          selected: false
        },
        {
          code: 'Curtain',
          count: 44,
          selected: false
        },
        {
          code: 'Curtain Hook',
          count: 1,
          selected: false
        },
        {
          code: 'Cushion Cover',
          count: 136,
          selected: false
        },
        {
          code: 'Cuticle Pusher',
          count: 1,
          selected: false
        },
        {
          code: 'Cuticle Trimmer',
          count: 1,
          selected: false
        },
        {
          code: 'Cutlery',
          count: 6,
          selected: false
        },
        {
          code: 'Cutting Board',
          count: 5,
          selected: false
        },
        {
          code: 'Decoration',
          count: 35,
          selected: false
        },
        {
          code: 'Decorative Cushion',
          count: 5,
          selected: false
        },
        {
          code: 'Dish',
          count: 6,
          selected: false
        },
        {
          code: 'Dog Wear',
          count: 19,
          selected: false
        },
        {
          code: 'Dome',
          count: 1,
          selected: false
        },
        {
          code: 'Dotting Tool',
          count: 1,
          selected: false
        },
        {
          code: 'Dress',
          count: 1544,
          selected: false
        },
        {
          code: 'Dresser',
          count: 1,
          selected: false
        },
        {
          code: 'Drink stirrer',
          count: 2,
          selected: false
        },
        {
          code: 'Duvet',
          count: 1,
          selected: false
        },
        {
          code: 'Duvet Cover Set',
          count: 158,
          selected: false
        },
        {
          code: 'Ear muffs',
          count: 2,
          selected: false
        },
        {
          code: 'Earphone Case',
          count: 2,
          selected: false
        },
        {
          code: 'Earrings',
          count: 48,
          selected: false
        },
        {
          code: 'Egg cup',
          count: 3,
          selected: false
        },
        {
          code: 'Exfoliating Mitt',
          count: 1,
          selected: false
        },
        {
          code: 'Exfoliator',
          count: 1,
          selected: false
        },
        {
          code: 'Eye Mask',
          count: 3,
          selected: false
        },
        {
          code: 'Eyebrow Mascara',
          count: 3,
          selected: false
        },
        {
          code: 'Eyebrow Wax',
          count: 1,
          selected: false
        },
        {
          code: 'Eyebrow gel',
          count: 1,
          selected: false
        },
        {
          code: 'Eyebrow pencil',
          count: 26,
          selected: false
        },
        {
          code: 'Eyebrow razor',
          count: 1,
          selected: false
        },
        {
          code: 'Eyeglass Chain',
          count: 4,
          selected: false
        },
        {
          code: 'Eyeglasses',
          count: 6,
          selected: false
        },
        {
          code: 'Eyelash Applicator',
          count: 1,
          selected: false
        },
        {
          code: 'Eyelash Curlers',
          count: 3,
          selected: false
        },
        {
          code: 'Eyeliner',
          count: 21,
          selected: false
        },
        {
          code: 'Eyeliner Pencil',
          count: 5,
          selected: false
        },
        {
          code: 'Eyeshadow',
          count: 51,
          selected: false
        },
        {
          code: 'Facial Cleansing Brush',
          count: 1,
          selected: false
        },
        {
          code: 'Facial Cleansing Pad',
          count: 2,
          selected: false
        },
        {
          code: 'Facial Cleansing Sponge',
          count: 2,
          selected: false
        },
        {
          code: 'False Eyelash Adhesive',
          count: 1,
          selected: false
        },
        {
          code: 'False Eyelashes',
          count: 6,
          selected: false
        },
        {
          code: 'Foot Strap',
          count: 1,
          selected: false
        },
        {
          code: 'Fork',
          count: 7,
          selected: false
        },
        {
          code: 'Foundation',
          count: 27,
          selected: false
        },
        {
          code: 'Frame',
          count: 13,
          selected: false
        },
        {
          code: 'Garland',
          count: 14,
          selected: false
        },
        {
          code: 'Garment Bag',
          count: 1,
          selected: false
        },
        {
          code: 'Garter Belt',
          count: 7,
          selected: false
        },
        {
          code: 'Gift Bag',
          count: 1,
          selected: false
        },
        {
          code: 'Gift Ribbon',
          count: 3,
          selected: false
        },
        {
          code: 'Glass',
          count: 10,
          selected: false
        },
        {
          code: 'Gloves',
          count: 41,
          selected: false
        },
        {
          code: 'Hair Claw',
          count: 12,
          selected: false
        },
        {
          code: 'Hair Clips',
          count: 16,
          selected: false
        },
        {
          code: 'Hair Elastic',
          count: 29,
          selected: false
        },
        {
          code: 'Hair Sectioning Clips',
          count: 5,
          selected: false
        },
        {
          code: 'Hairband',
          count: 25,
          selected: false
        },
        {
          code: 'Hairbrush',
          count: 6,
          selected: false
        },
        {
          code: 'Hand Cream',
          count: 1,
          selected: false
        },
        {
          code: 'Handkerchief',
          count: 3,
          selected: false
        },
        {
          code: 'Hanger',
          count: 20,
          selected: false
        },
        {
          code: 'Harness Belt',
          count: 1,
          selected: false
        },
        {
          code: 'Hat',
          count: 245,
          selected: false
        },
        {
          code: 'Headband',
          count: 16,
          selected: false
        },
        {
          code: 'Hood',
          count: 2,
          selected: false
        },
        {
          code: 'Hook',
          count: 17,
          selected: false
        },
        {
          code: 'Inner Cushion',
          count: 2,
          selected: false
        },
        {
          code: 'Jacket',
          count: 373,
          selected: false
        },
        {
          code: 'Jar',
          count: 6,
          selected: false
        },
        {
          code: 'Jeans',
          count: 580,
          selected: false
        },
        {
          code: 'Jewelry Stand',
          count: 2,
          selected: false
        },
        {
          code: 'Jug',
          count: 1,
          selected: false
        },
        {
          code: 'Jumpsuit',
          count: 54,
          selected: false
        },
        {
          code: 'Key Ring',
          count: 2,
          selected: false
        },
        {
          code: 'Knife',
          count: 4,
          selected: false
        },
        {
          code: 'Knit Sweater',
          count: 484,
          selected: false
        },
        {
          code: 'Knob',
          count: 15,
          selected: false
        },
        {
          code: 'Lamp Shade',
          count: 5,
          selected: false
        },
        {
          code: 'Lantern',
          count: 7,
          selected: false
        },
        {
          code: 'Laptop Case',
          count: 2,
          selected: false
        },
        {
          code: 'Laundry Bag',
          count: 1,
          selected: false
        },
        {
          code: 'Laundry Basket',
          count: 17,
          selected: false
        },
        {
          code: 'Leg Warmers',
          count: 3,
          selected: false
        },
        {
          code: 'Leggings',
          count: 422,
          selected: false
        },
        {
          code: 'Lip Balm',
          count: 3,
          selected: false
        },
        {
          code: 'Lip Color',
          count: 1,
          selected: false
        },
        {
          code: 'Lip Gloss',
          count: 23,
          selected: false
        },
        {
          code: 'Lip Pencil',
          count: 16,
          selected: false
        },
        {
          code: 'Lipstick',
          count: 68,
          selected: false
        },
        {
          code: 'Magazine Rack',
          count: 1,
          selected: false
        },
        {
          code: 'Makeup Bag',
          count: 15,
          selected: false
        },
        {
          code: 'Makeup Brush',
          count: 30,
          selected: false
        },
        {
          code: 'Makeup Brush Holder',
          count: 3,
          selected: false
        },
        {
          code: 'Makeup Headband',
          count: 11,
          selected: false
        },
        {
          code: 'Makeup Highlighter',
          count: 13,
          selected: false
        },
        {
          code: 'Makeup Mirror',
          count: 3,
          selected: false
        },
        {
          code: 'Makeup Pencil Sharpener',
          count: 2,
          selected: false
        },
        {
          code: 'Makeup Sponge',
          count: 8,
          selected: false
        },
        {
          code: 'Marker Pen',
          count: 1,
          selected: false
        },
        {
          code: 'Mascara',
          count: 8,
          selected: false
        },
        {
          code: 'Massage Stone',
          count: 2,
          selected: false
        },
        {
          code: 'Massage Tool',
          count: 5,
          selected: false
        },
        {
          code: 'Measuring Cup',
          count: 1,
          selected: false
        },
        {
          code: 'Mirror',
          count: 18,
          selected: false
        },
        {
          code: 'Mittens',
          count: 33,
          selected: false
        },
        {
          code: 'Mortar',
          count: 1,
          selected: false
        },
        {
          code: 'Mug',
          count: 17,
          selected: false
        },
        {
          code: 'Music Box',
          count: 2,
          selected: false
        },
        {
          code: 'Musical Toy',
          count: 1,
          selected: false
        },
        {
          code: 'Nail Art Brush',
          count: 1,
          selected: false
        },
        {
          code: 'Nail Buffer',
          count: 3,
          selected: false
        },
        {
          code: 'Nail Clipper',
          count: 2,
          selected: false
        },
        {
          code: 'Nail Decorations',
          count: 1,
          selected: false
        },
        {
          code: 'Nail File',
          count: 3,
          selected: false
        },
        {
          code: 'Nail Polish',
          count: 171,
          selected: false
        },
        {
          code: 'Napkin',
          count: 16,
          selected: false
        },
        {
          code: 'Napkin Holder',
          count: 1,
          selected: false
        },
        {
          code: 'Napkin Ring',
          count: 14,
          selected: false
        },
        {
          code: 'Neck Warmer Bib',
          count: 8,
          selected: false
        },
        {
          code: 'Necklace',
          count: 68,
          selected: false
        },
        {
          code: 'Nightgown',
          count: 7,
          selected: false
        },
        {
          code: 'Nightshirt',
          count: 5,
          selected: false
        },
        {
          code: 'Nipple covers',
          count: 3,
          selected: false
        },
        {
          code: 'Overall',
          count: 14,
          selected: false
        },
        {
          code: 'Pajama Jumpsuit',
          count: 44,
          selected: false
        },
        {
          code: 'Pajama Pants',
          count: 9,
          selected: false
        },
        {
          code: 'Pajama Shorts',
          count: 1,
          selected: false
        },
        {
          code: 'Pajama Tank Top',
          count: 1,
          selected: false
        },
        {
          code: 'Pajama Top',
          count: 1,
          selected: false
        },
        {
          code: 'Pajamas',
          count: 129,
          selected: false
        },
        {
          code: 'Pants',
          count: 1258,
          selected: false
        },
        {
          code: 'Paper Towel Holder',
          count: 3,
          selected: false
        },
        {
          code: 'Patch',
          count: 10,
          selected: false
        },
        {
          code: 'Pedestal',
          count: 3,
          selected: false
        },
        {
          code: 'Pencil Case',
          count: 2,
          selected: false
        },
        {
          code: 'Phone Jewelry',
          count: 1,
          selected: false
        },
        {
          code: 'Pillow',
          count: 1,
          selected: false
        },
        {
          code: 'Pillowcase',
          count: 81,
          selected: false
        },
        {
          code: 'Place Card Holder',
          count: 1,
          selected: false
        },
        {
          code: 'Placemat',
          count: 19,
          selected: false
        },
        {
          code: 'Plant Pot',
          count: 45,
          selected: false
        },
        {
          code: 'Plant Saucer',
          count: 7,
          selected: false
        },
        {
          code: 'Plate',
          count: 46,
          selected: false
        },
        {
          code: 'Play Kitchen',
          count: 1,
          selected: false
        },
        {
          code: 'Pompom',
          count: 1,
          selected: false
        },
        {
          code: 'Poncho',
          count: 1,
          selected: false
        },
        {
          code: 'Poster',
          count: 2,
          selected: false
        },
        {
          code: 'Pot Holder',
          count: 1,
          selected: false
        },
        {
          code: 'Powder',
          count: 6,
          selected: false
        },
        {
          code: 'Pram Suit',
          count: 13,
          selected: false
        },
        {
          code: 'Rattle',
          count: 9,
          selected: false
        },
        {
          code: 'Razor',
          count: 5,
          selected: false
        },
        {
          code: 'Razor Blade',
          count: 1,
          selected: false
        },
        {
          code: 'Razor Case',
          count: 1,
          selected: false
        },
        {
          code: 'Resistance Band',
          count: 2,
          selected: false
        },
        {
          code: 'Ring',
          count: 33,
          selected: false
        },
        {
          code: 'Roller',
          count: 10,
          selected: false
        },
        {
          code: 'Romper',
          count: 9,
          selected: false
        },
        {
          code: 'Room Fragrance',
          count: 14,
          selected: false
        },
        {
          code: 'Rug',
          count: 68,
          selected: false
        },
        {
          code: 'Salt and Pepper Set',
          count: 1,
          selected: false
        },
        {
          code: 'Sarong',
          count: 7,
          selected: false
        },
        {
          code: 'Scarf',
          count: 53,
          selected: false
        },
        {
          code: 'Scissors',
          count: 1,
          selected: false
        },
        {
          code: 'Sconce',
          count: 2,
          selected: false
        },
        {
          code: 'Sculpture',
          count: 4,
          selected: false
        },
        {
          code: 'Seat Cushion',
          count: 8,
          selected: false
        },
        {
          code: 'Seat Pad',
          count: 7,
          selected: false
        },
        {
          code: 'Servers',
          count: 4,
          selected: false
        },
        {
          code: 'Serving Board',
          count: 1,
          selected: false
        },
        {
          code: 'Shaker Bottle',
          count: 1,
          selected: false
        },
        {
          code: 'Shaving Gel',
          count: 1,
          selected: false
        },
        {
          code: 'Sheet',
          count: 51,
          selected: false
        },
        {
          code: 'Shelf',
          count: 2,
          selected: false
        },
        {
          code: 'Shirt',
          count: 1379,
          selected: false
        },
        {
          code: 'Shoelaces',
          count: 1,
          selected: false
        },
        {
          code: 'Shoes',
          count: 496,
          selected: false
        },
        {
          code: 'Shorts',
          count: 878,
          selected: false
        },
        {
          code: 'Shower Cap',
          count: 1,
          selected: false
        },
        {
          code: 'Shower Curtain',
          count: 16,
          selected: false
        },
        {
          code: 'Shower Curtain Rings',
          count: 3,
          selected: false
        },
        {
          code: 'Shower Gel',
          count: 1,
          selected: false
        },
        {
          code: 'Skateboard',
          count: 2,
          selected: false
        },
        {
          code: 'Ski Goggles',
          count: 2,
          selected: false
        },
        {
          code: 'Skirt',
          count: 265,
          selected: false
        },
        {
          code: 'Sleeping Bag',
          count: 4,
          selected: false
        },
        {
          code: 'Slip',
          count: 4,
          selected: false
        },
        {
          code: 'Slipper Socks',
          count: 2,
          selected: false
        },
        {
          code: 'Slippers',
          count: 48,
          selected: false
        },
        {
          code: 'Smartphone Case',
          count: 5,
          selected: false
        },
        {
          code: 'Snuggle Blanket',
          count: 4,
          selected: false
        },
        {
          code: 'Soap Dish',
          count: 1,
          selected: false
        },
        {
          code: 'Soap Dispenser',
          count: 16,
          selected: false
        },
        {
          code: 'Socks',
          count: 272,
          selected: false
        },
        {
          code: 'Soft Toy',
          count: 41,
          selected: false
        },
        {
          code: 'Spoon',
          count: 12,
          selected: false
        },
        {
          code: 'Stool',
          count: 1,
          selected: false
        },
        {
          code: 'Storage Box',
          count: 10,
          selected: false
        },
        {
          code: 'Storage Caddy',
          count: 6,
          selected: false
        },
        {
          code: 'Sun Visor',
          count: 6,
          selected: false
        },
        {
          code: 'Sunglasses',
          count: 96,
          selected: false
        },
        {
          code: 'Suspenders',
          count: 1,
          selected: false
        },
        {
          code: 'Sweet Jar',
          count: 1,
          selected: false
        },
        {
          code: 'Swim Shorts',
          count: 119,
          selected: false
        },
        {
          code: 'Swim Skirt',
          count: 3,
          selected: false
        },
        {
          code: 'Swim Top',
          count: 25,
          selected: false
        },
        {
          code: 'Swimsuit',
          count: 92,
          selected: false
        },
        {
          code: 'T-shirt',
          count: 705,
          selected: false
        },
        {
          code: 'Table',
          count: 12,
          selected: false
        },
        {
          code: 'Table Ornament',
          count: 2,
          selected: false
        },
        {
          code: 'Table Runner',
          count: 5,
          selected: false
        },
        {
          code: 'Table lamp',
          count: 14,
          selected: false
        },
        {
          code: 'Tablecloth',
          count: 36,
          selected: false
        },
        {
          code: 'Tealight Holder',
          count: 17,
          selected: false
        },
        {
          code: 'Teapot',
          count: 1,
          selected: false
        },
        {
          code: 'Throw',
          count: 52,
          selected: false
        },
        {
          code: 'Tie',
          count: 7,
          selected: false
        },
        {
          code: 'Tieback',
          count: 1,
          selected: false
        },
        {
          code: 'Tights',
          count: 69,
          selected: false
        },
        {
          code: 'Toiletry bag',
          count: 22,
          selected: false
        },
        {
          code: 'Toothbrush Holder',
          count: 14,
          selected: false
        },
        {
          code: 'Top',
          count: 1244,
          selected: false
        },
        {
          code: 'Top Coat',
          count: 6,
          selected: false
        },
        {
          code: 'Towel',
          count: 104,
          selected: false
        },
        {
          code: 'Tray',
          count: 23,
          selected: false
        },
        {
          code: 'Trivet',
          count: 1,
          selected: false
        },
        {
          code: 'Tunic',
          count: 10,
          selected: false
        },
        {
          code: 'Tweezer',
          count: 1,
          selected: false
        },
        {
          code: 'Umbrella',
          count: 5,
          selected: false
        },
        {
          code: 'Vase',
          count: 91,
          selected: false
        },
        {
          code: 'Vest',
          count: 68,
          selected: false
        },
        {
          code: 'Waistband Extender',
          count: 1,
          selected: false
        },
        {
          code: 'Wall Decor',
          count: 9,
          selected: false
        },
        {
          code: 'Wall Hanging',
          count: 4,
          selected: false
        },
        {
          code: 'Wall Lamp',
          count: 3,
          selected: false
        },
        {
          code: 'Wall Storage',
          count: 3,
          selected: false
        },
        {
          code: 'Wardrobe Freshener',
          count: 1,
          selected: false
        },
        {
          code: 'Water Bottle',
          count: 9,
          selected: false
        },
        {
          code: 'Watering Can',
          count: 2,
          selected: false
        },
        {
          code: 'Yoga Mat',
          count: 1,
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
          code: 'Baby Gear',
          count: 43,
          selected: false
        },
        {
          code: 'Bags',
          count: 193,
          selected: false
        },
        {
          code: 'Baking',
          count: 6,
          selected: false
        },
        {
          code: 'Bath',
          count: 19,
          selected: false
        },
        {
          code: 'Bathroom Accessories',
          count: 31,
          selected: false
        },
        {
          code: 'Body Care',
          count: 8,
          selected: false
        },
        {
          code: 'Clothing Accessories',
          count: 68,
          selected: false
        },
        {
          code: 'Cooking',
          count: 30,
          selected: false
        },
        {
          code: 'Decoration',
          count: 451,
          selected: false
        },
        {
          code: 'Eyebrow Styling',
          count: 32,
          selected: false
        },
        {
          code: 'Eyewear',
          count: 108,
          selected: false
        },
        {
          code: 'Facial Skincare',
          count: 12,
          selected: false
        },
        {
          code: 'Fragrances',
          count: 14,
          selected: false
        },
        {
          code: 'Functional Wear',
          count: 632,
          selected: false
        },
        {
          code: 'Furniture',
          count: 26,
          selected: false
        },
        {
          code: 'Gardening Tools',
          count: 2,
          selected: false
        },
        {
          code: 'Garment Care',
          count: 14,
          selected: false
        },
        {
          code: 'Hair Accessories',
          count: 91,
          selected: false
        },
        {
          code: 'Hair Care',
          count: 13,
          selected: false
        },
        {
          code: 'Hair Removal',
          count: 8,
          selected: false
        },
        {
          code: 'Hair Styling Tools',
          count: 1,
          selected: false
        },
        {
          code: 'Headwear',
          count: 339,
          selected: false
        },
        {
          code: 'Hygiene',
          count: 2,
          selected: false
        },
        {
          code: 'Jewelry',
          count: 175,
          selected: false
        },
        {
          code: 'Kitchen Utensils',
          count: 9,
          selected: false
        },
        {
          code: 'Lighting',
          count: 27,
          selected: false
        },
        {
          code: 'Loungewear',
          count: 146,
          selected: false
        },
        {
          code: 'Makeup',
          count: 332,
          selected: false
        },
        {
          code: 'Makeup Tools',
          count: 54,
          selected: false
        },
        {
          code: 'Nail Care',
          count: 200,
          selected: false
        },
        {
          code: 'Nightwear',
          count: 218,
          selected: false
        },
        {
          code: 'Nursing',
          count: 110,
          selected: false
        },
        {
          code: 'Outerwear',
          count: 832,
          selected: false
        },
        {
          code: 'Pet Accessories',
          count: 19,
          selected: false
        },
        {
          code: 'Play',
          count: 56,
          selected: false
        },
        {
          code: 'Pregnancy',
          count: 255,
          selected: false
        },
        {
          code: 'Rainwear',
          count: 15,
          selected: false
        },
        {
          code: 'Rugs',
          count: 111,
          selected: false
        },
        {
          code: 'Shower',
          count: 4,
          selected: false
        },
        {
          code: 'Skincare Tools',
          count: 21,
          selected: false
        },
        {
          code: 'Sport Accessories',
          count: 40,
          selected: false
        },
        {
          code: 'Sportswear',
          count: 570,
          selected: false
        },
        {
          code: 'Stationery',
          count: 8,
          selected: false
        },
        {
          code: 'Storage',
          count: 218,
          selected: false
        },
        {
          code: 'Swimwear',
          count: 666,
          selected: false
        },
        {
          code: 'Tableware',
          count: 293,
          selected: false
        },
        {
          code: 'Tech Accessories',
          count: 9,
          selected: false
        },
        {
          code: 'Textiles',
          count: 790,
          selected: false
        },
        {
          code: 'Travel Accessories',
          count: 3,
          selected: false
        },
        {
          code: 'Underwear',
          count: 980,
          selected: false
        },
        {
          code: 'Wall Decorations',
          count: 33,
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
          count: 9363,
          selected: false
        },
        {
          code: 'baby',
          count: 1470,
          selected: false
        },
        {
          code: 'newborn',
          count: 830,
          selected: false
        },
        {
          code: 'older child',
          count: 1170,
          selected: false
        },
        {
          code: 'younger child',
          count: 2503,
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
          code: 'Boy',
          count: 2964,
          selected: false
        },
        {
          code: 'Girl',
          count: 3381,
          selected: false
        },
        {
          code: 'Man',
          count: 2263,
          selected: false
        },
        {
          code: 'Woman',
          count: 7288,
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
          count: 687,
          selected: false
        },
        {
          code: 'accessories ',
          count: 111,
          selected: false
        },
        {
          code: 'clothing',
          count: 4057,
          selected: false
        },
        {
          code: 'clothing ',
          count: 4914,
          selected: false
        },
        {
          code: 'footwear',
          count: 365,
          selected: false
        },
        {
          code: 'homeware',
          count: 1686,
          selected: false
        },
        {
          code: 'personal care',
          count: 633,
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
          code: '1007_79x118_8_homewear',
          count: 4,
          selected: false
        },
        {
          code: '101_36_5_waist',
          count: 115,
          selected: false
        },
        {
          code: '106_38_5_waist',
          count: 100,
          selected: false
        },
        {
          code: '10_6_1_womenswear',
          count: 491,
          selected: false
        },
        {
          code: '10_6_6_footwear',
          count: 145,
          selected: false
        },
        {
          code: '10_6_7_kidsfootwear',
          count: 129,
          selected: false
        },
        {
          code: '111_40_5_waist',
          count: 104,
          selected: false
        },
        {
          code: '117_42_5_waist',
          count: 119,
          selected: false
        },
        {
          code: '11_7_6_footwear',
          count: 145,
          selected: false
        },
        {
          code: '11_7_7_kidsfootwear',
          count: 46,
          selected: false
        },
        {
          code: '12_8_1_womenswear',
          count: 434,
          selected: false
        },
        {
          code: '12_8_6_footwear',
          count: 138,
          selected: false
        },
        {
          code: '12_8_7_kidsfootwear',
          count: 98,
          selected: false
        },
        {
          code: '1315_kids_8_homewear',
          count: 9,
          selected: false
        },
        {
          code: '1317_twin_8_homewear',
          count: 88,
          selected: false
        },
        {
          code: '1319_full_8_homewear',
          count: 23,
          selected: false
        },
        {
          code: '1320_queen_8_homewear',
          count: 90,
          selected: false
        },
        {
          code: '1321_king_8_homewear',
          count: 135,
          selected: false
        },
        {
          code: '1392_28/32_5_waist',
          count: 72,
          selected: false
        },
        {
          code: '1396_29/30_5_waist',
          count: 45,
          selected: false
        },
        {
          code: '13_9_6_footwear',
          count: 315,
          selected: false
        },
        {
          code: '13_9_7_kidsfootwear',
          count: 68,
          selected: false
        },
        {
          code: '1401_30/30_5_waist',
          count: 57,
          selected: false
        },
        {
          code: '1402_30/32_5_waist',
          count: 83,
          selected: false
        },
        {
          code: '1403_30/34_5_waist',
          count: 19,
          selected: false
        },
        {
          code: '1407_31/30_5_waist',
          count: 44,
          selected: false
        },
        {
          code: '1408_31/32_5_waist',
          count: 69,
          selected: false
        },
        {
          code: '1413_32/30_5_waist',
          count: 56,
          selected: false
        },
        {
          code: '1414_32/32_5_waist',
          count: 64,
          selected: false
        },
        {
          code: '1415_32/34_5_waist',
          count: 55,
          selected: false
        },
        {
          code: '1419_33/30_5_waist',
          count: 40,
          selected: false
        },
        {
          code: '1420_33/32_5_waist',
          count: 60,
          selected: false
        },
        {
          code: '1421_33/34_5_waist',
          count: 33,
          selected: false
        },
        {
          code: '1425_34/30_5_waist',
          count: 48,
          selected: false
        },
        {
          code: '1426_34/32_5_waist',
          count: 57,
          selected: false
        },
        {
          code: '1427_34/34_5_waist',
          count: 47,
          selected: false
        },
        {
          code: '1431_36/30_5_waist',
          count: 21,
          selected: false
        },
        {
          code: '1432_36/32_5_waist',
          count: 59,
          selected: false
        },
        {
          code: '1433_36/34_5_waist',
          count: 48,
          selected: false
        },
        {
          code: '1436_38/30_5_waist',
          count: 14,
          selected: false
        },
        {
          code: '1437_38/32_5_waist',
          count: 62,
          selected: false
        },
        {
          code: '1438_38/34_5_waist',
          count: 29,
          selected: false
        },
        {
          code: '1443_40/32_5_waist',
          count: 51,
          selected: false
        },
        {
          code: '1448_42/32_5_waist',
          count: 55,
          selected: false
        },
        {
          code: '1454_44/32_5_waist',
          count: 37,
          selected: false
        },
        {
          code: '14_10_1_womenswear',
          count: 431,
          selected: false
        },
        {
          code: '14_10_6_footwear',
          count: 310,
          selected: false
        },
        {
          code: '14_10_7_kidsfootwear',
          count: 49,
          selected: false
        },
        {
          code: '1530_d4_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '1532_d14_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '1533_d15_8_homewear',
          count: 18,
          selected: false
        },
        {
          code: '1543_d39_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '1546_d43_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '1548_d51_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '1549_d55_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '1554_d75_8_homewear',
          count: 5,
          selected: false
        },
        {
          code: '1583_32a_2_bras',
          count: 15,
          selected: false
        },
        {
          code: '1584_34a_2_bras',
          count: 72,
          selected: false
        },
        {
          code: '1585_36a_2_bras',
          count: 54,
          selected: false
        },
        {
          code: '1592_32b_2_bras',
          count: 39,
          selected: false
        },
        {
          code: '1593_34b_2_bras',
          count: 75,
          selected: false
        },
        {
          code: '1594_36b_2_bras',
          count: 61,
          selected: false
        },
        {
          code: '1595_38b_2_bras',
          count: 70,
          selected: false
        },
        {
          code: '15_11_6_footwear',
          count: 164,
          selected: false
        },
        {
          code: '15_11_7_kidsfootwear',
          count: 57,
          selected: false
        },
        {
          code: '1601_30c_2_bras',
          count: 2,
          selected: false
        },
        {
          code: '1602_32c_2_bras',
          count: 20,
          selected: false
        },
        {
          code: '1604_34c_2_bras',
          count: 56,
          selected: false
        },
        {
          code: '1605_36c_2_bras',
          count: 53,
          selected: false
        },
        {
          code: '1606_38c_2_bras',
          count: 65,
          selected: false
        },
        {
          code: '1617_32d_2_bras',
          count: 18,
          selected: false
        },
        {
          code: '1618_34d_2_bras',
          count: 57,
          selected: false
        },
        {
          code: '1619_36d_2_bras',
          count: 51,
          selected: false
        },
        {
          code: '1620_38d_2_bras',
          count: 45,
          selected: false
        },
        {
          code: '1621_40d_2_bras',
          count: 14,
          selected: false
        },
        {
          code: '1622_42d_2_bras',
          count: 17,
          selected: false
        },
        {
          code: '1628_32dd_2_bras',
          count: 4,
          selected: false
        },
        {
          code: '1629_34dd_2_bras',
          count: 18,
          selected: false
        },
        {
          code: '1630_36dd_2_bras',
          count: 17,
          selected: false
        },
        {
          code: '1631_38dd_2_bras',
          count: 26,
          selected: false
        },
        {
          code: '1632_40dd_2_bras',
          count: 15,
          selected: false
        },
        {
          code: '1662_32f_2_bras',
          count: 6,
          selected: false
        },
        {
          code: '1663_34f_2_bras',
          count: 6,
          selected: false
        },
        {
          code: '1664_36f_2_bras',
          count: 15,
          selected: false
        },
        {
          code: '1665_38f_2_bras',
          count: 17,
          selected: false
        },
        {
          code: '16_12_1_womenswear',
          count: 370,
          selected: false
        },
        {
          code: '16_12_6_footwear',
          count: 143,
          selected: false
        },
        {
          code: '16_12_7_kidsfootwear',
          count: 106,
          selected: false
        },
        {
          code: '17_13_6_footwear',
          count: 63,
          selected: false
        },
        {
          code: '17_13_7_kidsfootwear',
          count: 43,
          selected: false
        },
        {
          code: '1871_0-1_7_kidsfootwear',
          count: 7,
          selected: false
        },
        {
          code: '1886_5-7_6_footwear',
          count: 31,
          selected: false
        },
        {
          code: '1894_8-10_6_footwear',
          count: 35,
          selected: false
        },
        {
          code: '18_14_1_womenswear',
          count: 395,
          selected: false
        },
        {
          code: '1915_25-26_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '1929_35-36_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '1938_46-47_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '194_104_4_kidswear',
          count: 6,
          selected: false
        },
        {
          code: '200_110_4_kidswear',
          count: 6,
          selected: false
        },
        {
          code: '2033_28s_5_waist',
          count: 2,
          selected: false
        },
        {
          code: '2034_30s_5_waist',
          count: 2,
          selected: false
        },
        {
          code: '2035_32s_5_waist',
          count: 2,
          selected: false
        },
        {
          code: '2036_33s_5_waist',
          count: 2,
          selected: false
        },
        {
          code: '2037_34s_5_waist',
          count: 2,
          selected: false
        },
        {
          code: '2038_36s_5_waist',
          count: 2,
          selected: false
        },
        {
          code: '206_116_4_kidswear',
          count: 6,
          selected: false
        },
        {
          code: '2092_30r_3_menswear',
          count: 20,
          selected: false
        },
        {
          code: '2093_32r_3_menswear',
          count: 16,
          selected: false
        },
        {
          code: '2094_33r_3_menswear',
          count: 17,
          selected: false
        },
        {
          code: '2095_34r_3_menswear',
          count: 36,
          selected: false
        },
        {
          code: '2096_36r_3_menswear',
          count: 34,
          selected: false
        },
        {
          code: '2097_38r_3_menswear',
          count: 31,
          selected: false
        },
        {
          code: '2098_40r_3_menswear',
          count: 29,
          selected: false
        },
        {
          code: '2099_42r_3_menswear',
          count: 33,
          selected: false
        },
        {
          code: '20_16_1_womenswear',
          count: 396,
          selected: false
        },
        {
          code: '2100_44r_3_menswear',
          count: 40,
          selected: false
        },
        {
          code: '2101_46r_3_menswear',
          count: 37,
          selected: false
        },
        {
          code: '2102_48r_3_menswear',
          count: 9,
          selected: false
        },
        {
          code: '2103_50r_3_menswear',
          count: 10,
          selected: false
        },
        {
          code: '2104_52r_3_menswear',
          count: 13,
          selected: false
        },
        {
          code: '212_122_4_kidswear',
          count: 6,
          selected: false
        },
        {
          code: '2149_s/54_1_womenswear',
          count: 20,
          selected: false
        },
        {
          code: '2154_s/56_3_menswear',
          count: 18,
          selected: false
        },
        {
          code: '2155_m/56_1_womenswear',
          count: 21,
          selected: false
        },
        {
          code: '2158_m/58_3_menswear',
          count: 13,
          selected: false
        },
        {
          code: '2159_l/58_1_womenswear',
          count: 16,
          selected: false
        },
        {
          code: '2164_l/60_3_menswear',
          count: 12,
          selected: false
        },
        {
          code: '218_128_4_kidswear',
          count: 6,
          selected: false
        },
        {
          code: '224_134_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '22_18_1_womenswear',
          count: 515,
          selected: false
        },
        {
          code: '230_140_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '236_146_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '2382_6x8_8_homewear',
          count: 5,
          selected: false
        },
        {
          code: '2410_7x7_4_kidswear',
          count: 2,
          selected: false
        },
        {
          code: '242_152_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '2465_59x51_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '2477_22x22_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '248_158_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '2509_67x94_8_homewear',
          count: 4,
          selected: false
        },
        {
          code: '2512_18x13_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '2529_75x12_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '254_164_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '2607_<0-1m (<0-1m)_4_kidswear',
          count: 60,
          selected: false
        },
        {
          code: '260_170_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '2614_12-18m (18m)_4_kidswear',
          count: 11,
          selected: false
        },
        {
          code: '2615_1½-2y (2t)_4_kidswear',
          count: 18,
          selected: false
        },
        {
          code: '2616_2-3y (3t)_4_kidswear',
          count: 17,
          selected: false
        },
        {
          code: '2617_3-4y (4t)_4_kidswear',
          count: 14,
          selected: false
        },
        {
          code: '2618_4-5y (5t)_4_kidswear',
          count: 6,
          selected: false
        },
        {
          code: '2619_5-6y (6)_4_kidswear',
          count: 4,
          selected: false
        },
        {
          code: '2621_6-7y (6x)_4_kidswear',
          count: 8,
          selected: false
        },
        {
          code: '2625_8-9y (8)_4_kidswear',
          count: 14,
          selected: false
        },
        {
          code: '2627_9-10y (10)_4_kidswear',
          count: 17,
          selected: false
        },
        {
          code: '2629_10-11y (12)_4_kidswear',
          count: 6,
          selected: false
        },
        {
          code: '2631_11-12y (14)_4_kidswear',
          count: 7,
          selected: false
        },
        {
          code: '2633_12-13y (16)_4_kidswear',
          count: 6,
          selected: false
        },
        {
          code: '2635_13-14y (18)_4_kidswear',
          count: 8,
          selected: false
        },
        {
          code: '2637_14y+ (20)_4_kidswear',
          count: 2,
          selected: false
        },
        {
          code: '2667_55x98_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '2670_d71_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '2680_37x46_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '2685_28x118_8_homewear',
          count: 4,
          selected: false
        },
        {
          code: '2690_d47_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '2699_39x51_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '2700_55x51_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '27_1.5_7_kidsfootwear',
          count: 92,
          selected: false
        },
        {
          code: '2877_51x118_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '28_2.5_7_kidsfootwear',
          count: 165,
          selected: false
        },
        {
          code: '2901_98x98_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '2921_29s_5_waist',
          count: 2,
          selected: false
        },
        {
          code: '2922_31s_5_waist',
          count: 2,
          selected: false
        },
        {
          code: '2957_110x98_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '2958_118x118_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '29_3.5_7_kidsfootwear',
          count: 49,
          selected: false
        },
        {
          code: '2_000_7_kidsfootwear',
          count: 44,
          selected: false
        },
        {
          code: '3003_22x9_8_homewear',
          count: 5,
          selected: false
        },
        {
          code: '3006_baby_8_homewear',
          count: 8,
          selected: false
        },
        {
          code: '3013_12.5-13.5_7_kidsfootwear',
          count: 18,
          selected: false
        },
        {
          code: '3048_standard_8_homewear',
          count: 45,
          selected: false
        },
        {
          code: '3099_28x98_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '3100_98x118_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '3141_pm (0-1m)_4_kidswear',
          count: 453,
          selected: false
        },
        {
          code: '3142_nb (1-2m)_4_kidswear',
          count: 422,
          selected: false
        },
        {
          code: '3143_3m (2-4m)_4_kidswear',
          count: 434,
          selected: false
        },
        {
          code: '3144_6m (4-6m)_4_kidswear',
          count: 796,
          selected: false
        },
        {
          code: '3145_9m (6-9m)_4_kidswear',
          count: 724,
          selected: false
        },
        {
          code: '3146_12m (9-12m)_4_kidswear',
          count: 544,
          selected: false
        },
        {
          code: '3147_18m (12-18m)_4_kidswear',
          count: 517,
          selected: false
        },
        {
          code: '3148_2t (1½-2y)_4_kidswear',
          count: 1528,
          selected: false
        },
        {
          code: '3149_3t (2-3y)_4_kidswear',
          count: 816,
          selected: false
        },
        {
          code: '3150_4t (3-4y)_4_kidswear',
          count: 915,
          selected: false
        },
        {
          code: '3151_5t (4-5y)_4_kidswear',
          count: 385,
          selected: false
        },
        {
          code: '3152_6 (5-6y)_4_kidswear',
          count: 403,
          selected: false
        },
        {
          code: '3153_6x (6-7y)_4_kidswear',
          count: 424,
          selected: false
        },
        {
          code: '3154_7 (7-8y)_4_kidswear',
          count: 448,
          selected: false
        },
        {
          code: '3155_8 (8-9y)_4_kidswear',
          count: 770,
          selected: false
        },
        {
          code: '3156_10 (9-10y)_4_kidswear',
          count: 858,
          selected: false
        },
        {
          code: '3157_12 (10-11y)_4_kidswear',
          count: 232,
          selected: false
        },
        {
          code: '3158_14 (11-12y)_4_kidswear',
          count: 261,
          selected: false
        },
        {
          code: '3159_16 (12-13y)_4_kidswear',
          count: 282,
          selected: false
        },
        {
          code: '3160_18 (13-14y)_4_kidswear',
          count: 278,
          selected: false
        },
        {
          code: '3161_20 (14y+)_4_kidswear',
          count: 614,
          selected: false
        },
        {
          code: '3175_4t/6 (3-6y)_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '3176_6x/7 (6-8y)_4_kidswear',
          count: 724,
          selected: false
        },
        {
          code: '3180_pm-6m (0-6m)_4_kidswear',
          count: 1,
          selected: false
        },
        {
          code: '3182_6x/10 (6-10y)_4_kidswear',
          count: 19,
          selected: false
        },
        {
          code: '3184_3-6m (2-6m)_4_kidswear',
          count: 128,
          selected: false
        },
        {
          code: '3185_9-12m (6-12m)_4_kidswear',
          count: 123,
          selected: false
        },
        {
          code: '3186_18m/2t (1-2y)_4_kidswear',
          count: 108,
          selected: false
        },
        {
          code: '3187_3/4t (2-4y)_4_kidswear',
          count: 676,
          selected: false
        },
        {
          code: '3188_5t/6 (4-6y)_4_kidswear',
          count: 711,
          selected: false
        },
        {
          code: '3189_8/10 (8-10y)_4_kidswear',
          count: 1137,
          selected: false
        },
        {
          code: '3190_12/14 (10-12y)_4_kidswear',
          count: 324,
          selected: false
        },
        {
          code: '3191_16/18 (12-14y)_4_kidswear',
          count: 319,
          selected: false
        },
        {
          code: '3193_2/4t (1½-4y)_4_kidswear',
          count: 15,
          selected: false
        },
        {
          code: '3194_5t/7 (4-8y)_4_kidswear',
          count: 16,
          selected: false
        },
        {
          code: '3195_8/14 (8-12y)_4_kidswear',
          count: 28,
          selected: false
        },
        {
          code: '3196_16/20 (12-14y+)_4_kidswear',
          count: 26,
          selected: false
        },
        {
          code: '3197_2t/6 (1½-6y)_4_kidswear',
          count: 24,
          selected: false
        },
        {
          code: '3200_4t/7 (3-8y)_4_kidswear',
          count: 2,
          selected: false
        },
        {
          code: '3201_4t/10 (3-10y)_4_kidswear',
          count: 1,
          selected: false
        },
        {
          code: '3202_5t/10 (6-10y)_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '3203_8/20 (8-14y+)_4_kidswear',
          count: 3,
          selected: false
        },
        {
          code: '3209_6m/3t (4m-3y)_4_kidswear',
          count: 4,
          selected: false
        },
        {
          code: '3212_pm-nb (0-2m)_4_kidswear',
          count: 39,
          selected: false
        },
        {
          code: '3225_4t/6x (3-7y)_4_kidswear',
          count: 23,
          selected: false
        },
        {
          code: '3226_7/12 (8-11y)_4_kidswear',
          count: 58,
          selected: false
        },
        {
          code: '3227_14/20 (12-14y+)_4_kidswear',
          count: 22,
          selected: false
        },
        {
          code: '3229_18m/4t (1-4y)_4_kidswear',
          count: 2,
          selected: false
        },
        {
          code: '3230_4t/6x (3-6y)_4_kidswear',
          count: 1,
          selected: false
        },
        {
          code: '32_5.5_7_kidsfootwear',
          count: 35,
          selected: false
        },
        {
          code: '34_6.5_7_kidsfootwear',
          count: 99,
          selected: false
        },
        {
          code: '357_xxs_1_womenswear',
          count: 773,
          selected: false
        },
        {
          code: '357_xxs_2_bras',
          count: 23,
          selected: false
        },
        {
          code: '3597_59x98_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '3619_9x6_4_kidswear',
          count: 2,
          selected: false
        },
        {
          code: '363_xs_1_womenswear',
          count: 3074,
          selected: false
        },
        {
          code: '363_xs_2_bras',
          count: 57,
          selected: false
        },
        {
          code: '363_xs_3_menswear',
          count: 1026,
          selected: false
        },
        {
          code: '366_s_1_womenswear',
          count: 3136,
          selected: false
        },
        {
          code: '366_s_2_bras',
          count: 60,
          selected: false
        },
        {
          code: '366_s_3_menswear',
          count: 1032,
          selected: false
        },
        {
          code: '369_m_1_womenswear',
          count: 2936,
          selected: false
        },
        {
          code: '369_m_2_bras',
          count: 58,
          selected: false
        },
        {
          code: '369_m_3_menswear',
          count: 1027,
          selected: false
        },
        {
          code: '36_7.5_6_footwear',
          count: 179,
          selected: false
        },
        {
          code: '36_7.5_7_kidsfootwear',
          count: 168,
          selected: false
        },
        {
          code: '370_l_1_womenswear',
          count: 2685,
          selected: false
        },
        {
          code: '370_l_2_bras',
          count: 58,
          selected: false
        },
        {
          code: '370_l_3_menswear',
          count: 954,
          selected: false
        },
        {
          code: '372_xl_1_womenswear',
          count: 2584,
          selected: false
        },
        {
          code: '372_xl_2_bras',
          count: 65,
          selected: false
        },
        {
          code: '372_xl_3_menswear',
          count: 864,
          selected: false
        },
        {
          code: '375_xxl_1_womenswear',
          count: 2196,
          selected: false
        },
        {
          code: '375_xxl_2_bras',
          count: 43,
          selected: false
        },
        {
          code: '375_xxl_3_menswear',
          count: 833,
          selected: false
        },
        {
          code: '376_2xl_1_womenswear',
          count: 4,
          selected: false
        },
        {
          code: '381_3xl_1_womenswear',
          count: 250,
          selected: false
        },
        {
          code: '381_3xl_2_bras',
          count: 11,
          selected: false
        },
        {
          code: '381_3xl_3_menswear',
          count: 963,
          selected: false
        },
        {
          code: '384_4xl_1_womenswear',
          count: 281,
          selected: false
        },
        {
          code: '384_4xl_2_bras',
          count: 9,
          selected: false
        },
        {
          code: '38_8.5_6_footwear',
          count: 172,
          selected: false
        },
        {
          code: '38_8.5_7_kidsfootwear',
          count: 174,
          selected: false
        },
        {
          code: '39_9.5_7_kidsfootwear',
          count: 88,
          selected: false
        },
        {
          code: '3_00_7_kidsfootwear',
          count: 8,
          selected: false
        },
        {
          code: '40_10.5_6_footwear',
          count: 172,
          selected: false
        },
        {
          code: '40_10.5_7_kidsfootwear',
          count: 48,
          selected: false
        },
        {
          code: '41_11.5_6_footwear',
          count: 149,
          selected: false
        },
        {
          code: '41_11.5_7_kidsfootwear',
          count: 48,
          selected: false
        },
        {
          code: '42_12.5_7_kidsfootwear',
          count: 50,
          selected: false
        },
        {
          code: '436_s/s_3_menswear',
          count: 2,
          selected: false
        },
        {
          code: '438_m/s_3_menswear',
          count: 2,
          selected: false
        },
        {
          code: '439_l/s_3_menswear',
          count: 2,
          selected: false
        },
        {
          code: '43_13.5_6_footwear',
          count: 63,
          selected: false
        },
        {
          code: '43_13.5_7_kidsfootwear',
          count: 56,
          selected: false
        },
        {
          code: '441_xl/s_3_menswear',
          count: 2,
          selected: false
        },
        {
          code: '444_xxl/s_3_menswear',
          count: 2,
          selected: false
        },
        {
          code: '4486_3-12m (2-12m)_4_kidswear',
          count: 2,
          selected: false
        },
        {
          code: '4632_6m/12m(6m-12m)_4_kidswear',
          count: 1,
          selected: false
        },
        {
          code: '4634_6-9.5_7_kidsfootwear',
          count: 2,
          selected: false
        },
        {
          code: '4635_10.5-1.5_7_kidsfootwear',
          count: 3,
          selected: false
        },
        {
          code: '4636_2-6.5_7_kidsfootwear',
          count: 1,
          selected: false
        },
        {
          code: '4704_21x16_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '4719_double king_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '4_0_1_womenswear',
          count: 363,
          selected: false
        },
        {
          code: '4_0_7_kidsfootwear',
          count: 52,
          selected: false
        },
        {
          code: '516_xs/t_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '518_s/t_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '520_m/t_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '521_l/t_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '523_xl/t_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '54_20_1_womenswear',
          count: 383,
          selected: false
        },
        {
          code: '54_20_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '59_22_1_womenswear',
          count: 93,
          selected: false
        },
        {
          code: '5_1_7_kidsfootwear',
          count: 166,
          selected: false
        },
        {
          code: '65_24_1_womenswear',
          count: 80,
          selected: false
        },
        {
          code: '6_2_1_womenswear',
          count: 415,
          selected: false
        },
        {
          code: '6_2_7_kidsfootwear',
          count: 128,
          selected: false
        },
        {
          code: '704_a_2_bras',
          count: 2,
          selected: false
        },
        {
          code: '706_b_2_bras',
          count: 6,
          selected: false
        },
        {
          code: '708_c_2_bras',
          count: 6,
          selected: false
        },
        {
          code: '70_26_1_womenswear',
          count: 78,
          selected: false
        },
        {
          code: '710_d_2_bras',
          count: 1,
          selected: false
        },
        {
          code: '714_4x4_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '718_8x4_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '719_8x8_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '720_8x12_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '726_10x10_4_kidswear',
          count: 2,
          selected: false
        },
        {
          code: '726_10x10_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '727_10x13_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '733_12x12_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '735_12x16_8_homewear',
          count: 6,
          selected: false
        },
        {
          code: '737_12x20_8_homewear',
          count: 18,
          selected: false
        },
        {
          code: '741_13x19_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '743_14x19_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '747_15x15_8_homewear',
          count: 10,
          selected: false
        },
        {
          code: '750_16x16_8_homewear',
          count: 37,
          selected: false
        },
        {
          code: '751_16x24_8_homewear',
          count: 15,
          selected: false
        },
        {
          code: '758_18x18_8_homewear',
          count: 7,
          selected: false
        },
        {
          code: '759_18x24_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '760_18x26_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '765_18x59_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '768_20x20_8_homewear',
          count: 98,
          selected: false
        },
        {
          code: '769_20x26_8_homewear',
          count: 4,
          selected: false
        },
        {
          code: '76_28_1_womenswear',
          count: 7,
          selected: false
        },
        {
          code: '76_28_5_waist',
          count: 158,
          selected: false
        },
        {
          code: '770_20x28_8_homewear',
          count: 41,
          selected: false
        },
        {
          code: '772_20x31_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '793_24x24_8_homewear',
          count: 8,
          selected: false
        },
        {
          code: '796_24x35_8_homewear',
          count: 15,
          selected: false
        },
        {
          code: '798_24x51_8_homewear',
          count: 4,
          selected: false
        },
        {
          code: '79_29_5_waist',
          count: 144,
          selected: false
        },
        {
          code: '7_3_7_kidsfootwear',
          count: 59,
          selected: false
        },
        {
          code: '810_28x28_1_womenswear',
          count: 1,
          selected: false
        },
        {
          code: '815_28x51_8_homewear',
          count: 6,
          selected: false
        },
        {
          code: '816_28x52_8_homewear',
          count: 10,
          selected: false
        },
        {
          code: '817_28x55_8_homewear',
          count: 33,
          selected: false
        },
        {
          code: '819_28x79_8_homewear',
          count: 9,
          selected: false
        },
        {
          code: '826_30x31_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '829_30x39_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '82_30_1_womenswear',
          count: 9,
          selected: false
        },
        {
          code: '82_30_5_waist',
          count: 153,
          selected: false
        },
        {
          code: '837_31x22_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '839_31x31_8_homewear',
          count: 5,
          selected: false
        },
        {
          code: '843_31x55_8_homewear',
          count: 6,
          selected: false
        },
        {
          code: '845_31x79_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '852_33x31_8_homewear',
          count: 1,
          selected: false
        },
        {
          code: '859_35x35_8_homewear',
          count: 9,
          selected: false
        },
        {
          code: '85_31_5_waist',
          count: 136,
          selected: false
        },
        {
          code: '864_35x51_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '873_39x59_8_homewear',
          count: 22,
          selected: false
        },
        {
          code: '888_43x59_8_homewear',
          count: 3,
          selected: false
        },
        {
          code: '88_32_5_waist',
          count: 151,
          selected: false
        },
        {
          code: '8_4_1_womenswear',
          count: 431,
          selected: false
        },
        {
          code: '8_4_6_footwear',
          count: 146,
          selected: false
        },
        {
          code: '8_4_7_kidsfootwear',
          count: 104,
          selected: false
        },
        {
          code: '900_47x24_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '903_47x98_8_homewear',
          count: 18,
          selected: false
        },
        {
          code: '918_51x67_8_homewear',
          count: 29,
          selected: false
        },
        {
          code: '91_33_5_waist',
          count: 108,
          selected: false
        },
        {
          code: '926_55x27_8_homewear',
          count: 2,
          selected: false
        },
        {
          code: '932_55x71_8_homewear',
          count: 9,
          selected: false
        },
        {
          code: '933_55x79_8_homewear',
          count: 17,
          selected: false
        },
        {
          code: '934_55x94_8_homewear',
          count: 10,
          selected: false
        },
        {
          code: '935_55x126_8_homewear',
          count: 12,
          selected: false
        },
        {
          code: '946_59x118_8_homewear',
          count: 11,
          selected: false
        },
        {
          code: '94_34_5_waist',
          count: 133,
          selected: false
        },
        {
          code: '988_71x79_8_homewear',
          count: 17,
          selected: false
        },
        {
          code: '9_5_6_footwear',
          count: 156,
          selected: false
        },
        {
          code: '9_5_7_kidsfootwear',
          count: 47,
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
          count: 13620,
          selected: false
        },
        {
          code: 'true',
          count: 3148,
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
          count: 2298,
          selected: false
        },
        {
          code: 'black_000000',
          count: 4067,
          selected: false
        },
        {
          code: 'blue_0000ff',
          count: 2238,
          selected: false
        },
        {
          code: 'bronze_cd7f32',
          count: 9,
          selected: false
        },
        {
          code: 'brown_a52a2a',
          count: 525,
          selected: false
        },
        {
          code: 'gold-colored_ffd700',
          count: 193,
          selected: false
        },
        {
          code: 'gray_808080',
          count: 1892,
          selected: false
        },
        {
          code: 'green_008000',
          count: 1420,
          selected: false
        },
        {
          code: 'multi_000000',
          count: 4842,
          selected: false
        },
        {
          code: 'orange_ffa500',
          count: 313,
          selected: false
        },
        {
          code: 'pink_ffc0cb',
          count: 1383,
          selected: false
        },
        {
          code: 'purple_800080',
          count: 475,
          selected: false
        },
        {
          code: 'red_ff0000',
          count: 665,
          selected: false
        },
        {
          code: 'silver-colored_c0c0c0',
          count: 239,
          selected: false
        },
        {
          code: 'transparent_ffffff',
          count: 74,
          selected: false
        },
        {
          code: 'turquoise_40e0d0',
          count: 243,
          selected: false
        },
        {
          code: 'white_ffffff',
          count: 2784,
          selected: false
        },
        {
          code: 'yellow_ffff00',
          count: 342,
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
          count: 16767,
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
          code: 'A-line',
          count: 127,
          selected: false
        },
        {
          code: 'Ankle Socks',
          count: 43,
          selected: false
        },
        {
          code: 'Anorak',
          count: 15,
          selected: false
        },
        {
          code: 'Babydoll',
          count: 14,
          selected: false
        },
        {
          code: 'Balconette Bra',
          count: 17,
          selected: false
        },
        {
          code: 'Balloon Leg',
          count: 16,
          selected: false
        },
        {
          code: 'Bandeau',
          count: 79,
          selected: false
        },
        {
          code: 'Baseball Jacket',
          count: 30,
          selected: false
        },
        {
          code: 'Bermuda Shorts',
          count: 7,
          selected: false
        },
        {
          code: 'Biker',
          count: 26,
          selected: false
        },
        {
          code: 'Bikini',
          count: 30,
          selected: false
        },
        {
          code: 'Blazer',
          count: 71,
          selected: false
        },
        {
          code: 'Blazer Dress',
          count: 10,
          selected: false
        },
        {
          code: 'Board Shorts',
          count: 1,
          selected: false
        },
        {
          code: 'Bodycon',
          count: 236,
          selected: false
        },
        {
          code: 'Bomber Jacket',
          count: 49,
          selected: false
        },
        {
          code: 'Boot Socks',
          count: 2,
          selected: false
        },
        {
          code: 'Bootcut',
          count: 27,
          selected: false
        },
        {
          code: 'Boxer Shorts',
          count: 59,
          selected: false
        },
        {
          code: 'Boxers',
          count: 65,
          selected: false
        },
        {
          code: 'Boyfriend',
          count: 2,
          selected: false
        },
        {
          code: 'Bralette',
          count: 11,
          selected: false
        },
        {
          code: 'Brazilian',
          count: 97,
          selected: false
        },
        {
          code: 'Camisole Top',
          count: 188,
          selected: false
        },
        {
          code: 'Cape Coat',
          count: 2,
          selected: false
        },
        {
          code: 'Capri Pants',
          count: 1,
          selected: false
        },
        {
          code: 'Car Coat',
          count: 4,
          selected: false
        },
        {
          code: 'Cargo',
          count: 274,
          selected: false
        },
        {
          code: 'Chinos',
          count: 77,
          selected: false
        },
        {
          code: 'Circular',
          count: 4,
          selected: false
        },
        {
          code: 'Coach Jacket',
          count: 1,
          selected: false
        },
        {
          code: 'Corset Dress',
          count: 8,
          selected: false
        },
        {
          code: 'Corset Top',
          count: 22,
          selected: false
        },
        {
          code: 'Crew Socks',
          count: 49,
          selected: false
        },
        {
          code: 'Crop Top',
          count: 178,
          selected: false
        },
        {
          code: 'Cut-out',
          count: 172,
          selected: false
        },
        {
          code: 'Cycling Shorts',
          count: 81,
          selected: false
        },
        {
          code: 'Deep-plunge Bra',
          count: 19,
          selected: false
        },
        {
          code: 'Double-breasted',
          count: 76,
          selected: false
        },
        {
          code: 'Draped',
          count: 290,
          selected: false
        },
        {
          code: 'Flapper Dress',
          count: 1,
          selected: false
        },
        {
          code: 'Flared',
          count: 221,
          selected: false
        },
        {
          code: 'Harrington Jacket',
          count: 1,
          selected: false
        },
        {
          code: 'Henley Shirt',
          count: 7,
          selected: false
        },
        {
          code: 'High Leg',
          count: 43,
          selected: false
        },
        {
          code: 'Hipster',
          count: 38,
          selected: false
        },
        {
          code: 'Hooded jacket',
          count: 148,
          selected: false
        },
        {
          code: 'Hoodie',
          count: 281,
          selected: false
        },
        {
          code: 'Hotpants',
          count: 9,
          selected: false
        },
        {
          code: 'Jazz Pants',
          count: 9,
          selected: false
        },
        {
          code: 'Jeggings',
          count: 47,
          selected: false
        },
        {
          code: 'Joggers',
          count: 452,
          selected: false
        },
        {
          code: 'Jumper',
          count: 7,
          selected: false
        },
        {
          code: 'Keyhole cutout',
          count: 187,
          selected: false
        },
        {
          code: 'Knee-high Socks',
          count: 3,
          selected: false
        },
        {
          code: 'Lumber Jacket',
          count: 1,
          selected: false
        },
        {
          code: 'Mom',
          count: 43,
          selected: false
        },
        {
          code: 'No-show Socks',
          count: 1,
          selected: false
        },
        {
          code: 'Non-padded Bra',
          count: 76,
          selected: false
        },
        {
          code: 'Off-the-shoulder',
          count: 112,
          selected: false
        },
        {
          code: 'One-shoulder',
          count: 65,
          selected: false
        },
        {
          code: 'Open Back',
          count: 107,
          selected: false
        },
        {
          code: 'Open Shoulder',
          count: 1,
          selected: false
        },
        {
          code: 'Over-the-knee socks',
          count: 1,
          selected: false
        },
        {
          code: 'Overall Dress',
          count: 7,
          selected: false
        },
        {
          code: 'Overall Shorts',
          count: 12,
          selected: false
        },
        {
          code: 'Overalls',
          count: 27,
          selected: false
        },
        {
          code: 'Overshirt',
          count: 40,
          selected: false
        },
        {
          code: 'Padded Bra',
          count: 274,
          selected: false
        },
        {
          code: 'Paper-bag',
          count: 48,
          selected: false
        },
        {
          code: 'Parachute',
          count: 36,
          selected: false
        },
        {
          code: 'Parka',
          count: 11,
          selected: false
        },
        {
          code: 'Pea Coat',
          count: 7,
          selected: false
        },
        {
          code: 'Pencil Dress',
          count: 17,
          selected: false
        },
        {
          code: 'Pencil Skirt',
          count: 22,
          selected: false
        },
        {
          code: 'Peplum',
          count: 27,
          selected: false
        },
        {
          code: 'Plunge Back',
          count: 143,
          selected: false
        },
        {
          code: 'Polo shirt',
          count: 85,
          selected: false
        },
        {
          code: 'Puffer',
          count: 105,
          selected: false
        },
        {
          code: 'Pull-on Pants',
          count: 148,
          selected: false
        },
        {
          code: 'Push-up Bra',
          count: 50,
          selected: false
        },
        {
          code: 'Racer Jacket',
          count: 2,
          selected: false
        },
        {
          code: 'Racer back',
          count: 62,
          selected: false
        },
        {
          code: 'Rugby Shirt',
          count: 9,
          selected: false
        },
        {
          code: 'Self-adhesive Bra',
          count: 4,
          selected: false
        },
        {
          code: 'Shell Jacket',
          count: 16,
          selected: false
        },
        {
          code: 'Shirt Dress',
          count: 48,
          selected: false
        },
        {
          code: 'Shirt Jacket',
          count: 33,
          selected: false
        },
        {
          code: 'Shortie',
          count: 8,
          selected: false
        },
        {
          code: 'Single-breasted',
          count: 101,
          selected: false
        },
        {
          code: 'Skater',
          count: 22,
          selected: false
        },
        {
          code: 'Slacks',
          count: 42,
          selected: false
        },
        {
          code: 'Slip Dress',
          count: 56,
          selected: false
        },
        {
          code: 'Slip Skirt',
          count: 3,
          selected: false
        },
        {
          code: 'Slit',
          count: 442,
          selected: false
        },
        {
          code: 'Smocked',
          count: 442,
          selected: false
        },
        {
          code: 'Sneaker socks',
          count: 7,
          selected: false
        },
        {
          code: 'Snowsuit',
          count: 13,
          selected: false
        },
        {
          code: 'Soft-cup Bra',
          count: 190,
          selected: false
        },
        {
          code: 'Sports Bra',
          count: 43,
          selected: false
        },
        {
          code: 'Stacked',
          count: 27,
          selected: false
        },
        {
          code: 'Straight Leg',
          count: 490,
          selected: false
        },
        {
          code: 'Strapless',
          count: 33,
          selected: false
        },
        {
          code: 'Strapless Bra',
          count: 8,
          selected: false
        },
        {
          code: 'Strappy Dress',
          count: 272,
          selected: false
        },
        {
          code: 'Suit Pants',
          count: 86,
          selected: false
        },
        {
          code: 'Super Push-up Bra',
          count: 13,
          selected: false
        },
        {
          code: 'Suspender Skirt',
          count: 1,
          selected: false
        },
        {
          code: 'Sweater Dress',
          count: 62,
          selected: false
        },
        {
          code: 'Sweater Vest',
          count: 13,
          selected: false
        },
        {
          code: 'Sweatpants',
          count: 213,
          selected: false
        },
        {
          code: 'Sweatshirt',
          count: 483,
          selected: false
        },
        {
          code: 'Sweatshorts',
          count: 170,
          selected: false
        },
        {
          code: 'T-shirt Bra',
          count: 6,
          selected: false
        },
        {
          code: 'T-shirt Dress',
          count: 13,
          selected: false
        },
        {
          code: 'Tank Top',
          count: 219,
          selected: false
        },
        {
          code: 'Tapered',
          count: 206,
          selected: false
        },
        {
          code: 'Thong',
          count: 148,
          selected: false
        },
        {
          code: 'Track Jacket',
          count: 22,
          selected: false
        },
        {
          code: 'Track Pants',
          count: 11,
          selected: false
        },
        {
          code: 'Trashed',
          count: 33,
          selected: false
        },
        {
          code: 'Treggings',
          count: 8,
          selected: false
        },
        {
          code: 'Trenchcoat',
          count: 8,
          selected: false
        },
        {
          code: 'Triangle Bra',
          count: 58,
          selected: false
        },
        {
          code: 'Trucker Jacket',
          count: 13,
          selected: false
        },
        {
          code: 'Tube Top',
          count: 12,
          selected: false
        },
        {
          code: 'Tutu Skirt',
          count: 9,
          selected: false
        },
        {
          code: 'Tuxedo Jacket',
          count: 2,
          selected: false
        },
        {
          code: 'Tuxedo Pants',
          count: 2,
          selected: false
        },
        {
          code: 'Tuxedo Shirt',
          count: 1,
          selected: false
        },
        {
          code: 'Underwire Bra',
          count: 131,
          selected: false
        },
        {
          code: 'Unitard',
          count: 7,
          selected: false
        },
        {
          code: 'Wide leg',
          count: 265,
          selected: false
        },
        {
          code: 'Windbreaker',
          count: 21,
          selected: false
        },
        {
          code: 'Wrapover',
          count: 266,
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
          count: 17,
          selected: false
        },
        {
          code: 'Bag',
          count: 2,
          selected: false
        },
        {
          code: 'Balaclava',
          count: 18,
          selected: false
        },
        {
          code: 'Baseball Cap',
          count: 55,
          selected: false
        },
        {
          code: 'Beach bag',
          count: 1,
          selected: false
        },
        {
          code: 'Belt Bag',
          count: 6,
          selected: false
        },
        {
          code: 'Braided Belt',
          count: 1,
          selected: false
        },
        {
          code: 'Bucket hat',
          count: 42,
          selected: false
        },
        {
          code: 'Cell phone bag',
          count: 3,
          selected: false
        },
        {
          code: 'Chain Bracelet',
          count: 12,
          selected: false
        },
        {
          code: 'Chain Necklace',
          count: 19,
          selected: false
        },
        {
          code: 'Chain belt',
          count: 2,
          selected: false
        },
        {
          code: 'Charm Bracelet',
          count: 1,
          selected: false
        },
        {
          code: 'Clutch Bag',
          count: 2,
          selected: false
        },
        {
          code: 'Crossbody Bag',
          count: 26,
          selected: false
        },
        {
          code: 'Dangle Earrings',
          count: 7,
          selected: false
        },
        {
          code: 'Drop Earrings',
          count: 4,
          selected: false
        },
        {
          code: 'Ear Cuff',
          count: 2,
          selected: false
        },
        {
          code: 'Fedora hat',
          count: 6,
          selected: false
        },
        {
          code: 'Flat Cap',
          count: 3,
          selected: false
        },
        {
          code: 'Handbag',
          count: 3,
          selected: false
        },
        {
          code: 'Hip Belt',
          count: 26,
          selected: false
        },
        {
          code: 'Hoop Earrings',
          count: 27,
          selected: false
        },
        {
          code: 'Layered Necklace',
          count: 23,
          selected: false
        },
        {
          code: 'Messenger Bag',
          count: 1,
          selected: false
        },
        {
          code: 'Multi Strand Bracelet',
          count: 5,
          selected: false
        },
        {
          code: 'Narrow Belt',
          count: 3,
          selected: false
        },
        {
          code: 'Pendant Necklace',
          count: 29,
          selected: false
        },
        {
          code: 'Pouch',
          count: 2,
          selected: false
        },
        {
          code: 'Roll-top backpack',
          count: 5,
          selected: false
        },
        {
          code: 'Scrunchie',
          count: 14,
          selected: false
        },
        {
          code: 'Shopper',
          count: 34,
          selected: false
        },
        {
          code: 'Shoulder Bag',
          count: 48,
          selected: false
        },
        {
          code: 'Sports bag',
          count: 4,
          selected: false
        },
        {
          code: 'Stud Earrings',
          count: 8,
          selected: false
        },
        {
          code: 'Sun hat',
          count: 13,
          selected: false
        },
        {
          code: 'Tote Bag',
          count: 12,
          selected: false
        },
        {
          code: 'Trapper Hat',
          count: 3,
          selected: false
        },
        {
          code: 'Trucker Cap',
          count: 8,
          selected: false
        },
        {
          code: 'Tube Scarf',
          count: 11,
          selected: false
        },
        {
          code: 'Waist Belt',
          count: 10,
          selected: false
        },
        {
          code: 'Weekend Bag',
          count: 4,
          selected: false
        },
        {
          code: 'Wide belt',
          count: 2,
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
          code: 'Asymmetric Neckline',
          count: 32,
          selected: false
        },
        {
          code: 'Ballerina Neckline',
          count: 9,
          selected: false
        },
        {
          code: 'Boat Neck',
          count: 44,
          selected: false
        },
        {
          code: 'Cowl Neck',
          count: 20,
          selected: false
        },
        {
          code: 'Crew-neck',
          count: 56,
          selected: false
        },
        {
          code: 'Envelope Neck',
          count: 65,
          selected: false
        },
        {
          code: 'Halterneck',
          count: 149,
          selected: false
        },
        {
          code: 'Low-cut Neckline',
          count: 379,
          selected: false
        },
        {
          code: 'Mock Turtleneck',
          count: 78,
          selected: false
        },
        {
          code: 'Plunge Neckline',
          count: 44,
          selected: false
        },
        {
          code: 'Round Neck',
          count: 3039,
          selected: false
        },
        {
          code: 'Square Neckline',
          count: 287,
          selected: false
        },
        {
          code: 'Sweetheart Neckline',
          count: 187,
          selected: false
        },
        {
          code: 'Turtleneck',
          count: 91,
          selected: false
        },
        {
          code: 'V-neck',
          count: 969,
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
          code: 'Band Collar',
          count: 17,
          selected: false
        },
        {
          code: 'Band Collar ',
          count: 19,
          selected: false
        },
        {
          code: 'Bow Collar',
          count: 5,
          selected: false
        },
        {
          code: 'Button-down Collar',
          count: 39,
          selected: false
        },
        {
          code: 'Chimney Collar',
          count: 2,
          selected: false
        },
        {
          code: 'Cutaway Collar',
          count: 24,
          selected: false
        },
        {
          code: 'Full spread collar',
          count: 1,
          selected: false
        },
        {
          code: 'Henley Collar',
          count: 30,
          selected: false
        },
        {
          code: 'High Collar',
          count: 31,
          selected: false
        },
        {
          code: 'Johnny Collar',
          count: 50,
          selected: false
        },
        {
          code: 'Notched Lapel',
          count: 165,
          selected: false
        },
        {
          code: 'Peter Pan Collar',
          count: 20,
          selected: false
        },
        {
          code: 'Pointed Lapel',
          count: 51,
          selected: false
        },
        {
          code: 'Resort Collar',
          count: 40,
          selected: false
        },
        {
          code: 'Rounded Collar',
          count: 21,
          selected: false
        },
        {
          code: 'Ruffled collar',
          count: 30,
          selected: false
        },
        {
          code: 'Sailor Collar',
          count: 2,
          selected: false
        },
        {
          code: 'Shawl Collar',
          count: 10,
          selected: false
        },
        {
          code: 'Shawl Lapel',
          count: 1,
          selected: false
        },
        {
          code: 'Stand-up Collar',
          count: 483,
          selected: false
        },
        {
          code: 'Turn-down Collar',
          count: 551,
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
          count: 21,
          selected: false
        },
        {
          code: 'Ballet Flats',
          count: 31,
          selected: false
        },
        {
          code: 'Biker Boots',
          count: 8,
          selected: false
        },
        {
          code: 'Boots',
          count: 41,
          selected: false
        },
        {
          code: 'Chelsea Boots',
          count: 26,
          selected: false
        },
        {
          code: 'Combat Boots',
          count: 9,
          selected: false
        },
        {
          code: 'Cowboy Boots',
          count: 2,
          selected: false
        },
        {
          code: 'Dance shoes',
          count: 4,
          selected: false
        },
        {
          code: 'Derby Shoes',
          count: 12,
          selected: false
        },
        {
          code: 'Driving Shoes',
          count: 1,
          selected: false
        },
        {
          code: 'Espadrilles',
          count: 33,
          selected: false
        },
        {
          code: 'Flatform',
          count: 3,
          selected: false
        },
        {
          code: 'Flip-flops',
          count: 7,
          selected: false
        },
        {
          code: 'Gladiator Sandals',
          count: 5,
          selected: false
        },
        {
          code: 'Heeled ankle boots',
          count: 4,
          selected: false
        },
        {
          code: 'Heeled sandals',
          count: 37,
          selected: false
        },
        {
          code: 'Lace-up Boots',
          count: 24,
          selected: false
        },
        {
          code: 'Loafers',
          count: 39,
          selected: false
        },
        {
          code: 'Mary Janes',
          count: 2,
          selected: false
        },
        {
          code: 'Monkstraps',
          count: 1,
          selected: false
        },
        {
          code: 'Mules',
          count: 29,
          selected: false
        },
        {
          code: 'Platform',
          count: 10,
          selected: false
        },
        {
          code: 'Pumps',
          count: 17,
          selected: false
        },
        {
          code: 'Rubber Boots',
          count: 2,
          selected: false
        },
        {
          code: 'Sandals',
          count: 56,
          selected: false
        },
        {
          code: 'Slides',
          count: 42,
          selected: false
        },
        {
          code: 'Slingbacks',
          count: 11,
          selected: false
        },
        {
          code: 'Slip-on',
          count: 5,
          selected: false
        },
        {
          code: 'Slipper Socks',
          count: 1,
          selected: false
        },
        {
          code: 'Sneaker Boots',
          count: 4,
          selected: false
        },
        {
          code: 'Sneakers',
          count: 121,
          selected: false
        },
        {
          code: 'Snow Boots',
          count: 1,
          selected: false
        },
        {
          code: 'Sock Boots',
          count: 7,
          selected: false
        },
        {
          code: 'Strappy Sandals',
          count: 32,
          selected: false
        },
        {
          code: 'Wedge-heel',
          count: 19,
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
          code: 'Balloon Sleeve',
          count: 149,
          selected: false
        },
        {
          code: 'Batwing sleeve',
          count: 4,
          selected: false
        },
        {
          code: 'Butterfly Sleeve',
          count: 36,
          selected: false
        },
        {
          code: 'Cap sleeve',
          count: 30,
          selected: false
        },
        {
          code: 'Dolman Sleeve',
          count: 1,
          selected: false
        },
        {
          code: 'Flutter sleeve',
          count: 54,
          selected: false
        },
        {
          code: 'Puff Sleeve',
          count: 150,
          selected: false
        },
        {
          code: 'Raglan Sleeve',
          count: 334,
          selected: false
        },
        {
          code: 'Trumpet Sleeve',
          count: 17,
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
          code: '3/4-length',
          count: 5,
          selected: false
        },
        {
          code: 'Ankle-length',
          count: 217,
          selected: false
        },
        {
          code: 'Crop',
          count: 317,
          selected: false
        },
        {
          code: 'Extra-long legs',
          count: 40,
          selected: false
        },
        {
          code: 'Knee-length',
          count: 569,
          selected: false
        },
        {
          code: 'Long',
          count: 2785,
          selected: false
        },
        {
          code: 'Maxi',
          count: 9,
          selected: false
        },
        {
          code: 'Midi',
          count: 591,
          selected: false
        },
        {
          code: 'Mini',
          count: 14,
          selected: false
        },
        {
          code: 'Regular length',
          count: 3877,
          selected: false
        },
        {
          code: 'Short',
          count: 2443,
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
          count: 66,
          selected: false
        },
        {
          code: 'Extra-long sleeve',
          count: 83,
          selected: false
        },
        {
          code: 'Long sleeve',
          count: 4509,
          selected: false
        },
        {
          code: 'Short sleeve',
          count: 1399,
          selected: false
        },
        {
          code: 'Sleeveless',
          count: 1585,
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
          count: 106,
          selected: false
        },
        {
          code: 'Low heel',
          count: 62,
          selected: false
        },
        {
          code: 'No heel',
          count: 338,
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
          code: 'High waist',
          count: 947,
          selected: false
        },
        {
          code: 'Low waist',
          count: 263,
          selected: false
        },
        {
          code: 'Regular waist',
          count: 2965,
          selected: false
        },
        {
          code: 'Ultra high waist',
          count: 69,
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
          count: 2,
          selected: false
        },
        {
          code: 'checked',
          count: 278,
          selected: false
        },
        {
          code: 'color-block',
          count: 199,
          selected: false
        },
        {
          code: 'crocodile-patterned',
          count: 9,
          selected: false
        },
        {
          code: 'dotted',
          count: 136,
          selected: false
        },
        {
          code: 'floral',
          count: 451,
          selected: false
        },
        {
          code: 'harlequin-patterned',
          count: 1,
          selected: false
        },
        {
          code: 'herringbone-patterned',
          count: 9,
          selected: false
        },
        {
          code: 'houndstooth',
          count: 11,
          selected: false
        },
        {
          code: 'leopard-print',
          count: 70,
          selected: false
        },
        {
          code: 'marbled',
          count: 25,
          selected: false
        },
        {
          code: 'paisley-patterned',
          count: 4,
          selected: false
        },
        {
          code: 'patterned',
          count: 1417,
          selected: false
        },
        {
          code: 'pinstriped',
          count: 29,
          selected: false
        },
        {
          code: 'rainbow-striped',
          count: 4,
          selected: false
        },
        {
          code: 'snakeskin-patterned',
          count: 24,
          selected: false
        },
        {
          code: 'solid-color',
          count: 10769,
          selected: false
        },
        {
          code: 'striped',
          count: 619,
          selected: false
        },
        {
          code: 'tiger-striped',
          count: 5,
          selected: false
        },
        {
          code: 'tortoiseshell-patterned',
          count: 11,
          selected: false
        },
        {
          code: 'zebra-print',
          count: 53,
          selected: false
        },
        {
          code: 'zigzag-patterned',
          count: 4,
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
          code: '4th of july',
          count: 4,
          selected: false
        },
        {
          code: 'carnival',
          count: 54,
          selected: false
        },
        {
          code: 'chinese new year',
          count: 23,
          selected: false
        },
        {
          code: 'christmas',
          count: 266,
          selected: false
        },
        {
          code: 'diwali',
          count: 8,
          selected: false
        },
        {
          code: 'easter',
          count: 3,
          selected: false
        },
        {
          code: 'eid al-fitr',
          count: 15,
          selected: false
        },
        {
          code: 'graduation',
          count: 9,
          selected: false
        },
        {
          code: 'halloween',
          count: 91,
          selected: false
        },
        {
          code: 'lunar new year',
          count: 17,
          selected: false
        },
        {
          code: "new year's eve",
          count: 112,
          selected: false
        },
        {
          code: 'ramadan',
          count: 8,
          selected: false
        },
        {
          code: 'spring break',
          count: 19,
          selected: false
        },
        {
          code: 'ugly christmas sweater day',
          count: 15,
          selected: false
        },
        {
          code: "valentine's day",
          count: 43,
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
          count: 171,
          selected: false
        },
        {
          code: 'bohemian',
          count: 39,
          selected: false
        },
        {
          code: 'chunky',
          count: 22,
          selected: false
        },
        {
          code: 'crocheted',
          count: 87,
          selected: false
        },
        {
          code: 'embroidered',
          count: 362,
          selected: false
        },
        {
          code: 'faux fur',
          count: 76,
          selected: false
        },
        {
          code: 'fishnet',
          count: 4,
          selected: false
        },
        {
          code: 'floral',
          count: 474,
          selected: false
        },
        {
          code: 'fringe',
          count: 30,
          selected: false
        },
        {
          code: 'glitter',
          count: 311,
          selected: false
        },
        {
          code: 'glow-in-the-dark',
          count: 6,
          selected: false
        },
        {
          code: 'graphic',
          count: 105,
          selected: false
        },
        {
          code: 'grunge',
          count: 27,
          selected: false
        },
        {
          code: 'holographic',
          count: 31,
          selected: false
        },
        {
          code: 'lace',
          count: 323,
          selected: false
        },
        {
          code: 'leather',
          count: 46,
          selected: false
        },
        {
          code: 'metallic',
          count: 167,
          selected: false
        },
        {
          code: 'neon',
          count: 61,
          selected: false
        },
        {
          code: 'ombre',
          count: 62,
          selected: false
        },
        {
          code: 'pastel colors',
          count: 876,
          selected: false
        },
        {
          code: 'patent',
          count: 28,
          selected: false
        },
        {
          code: 'pleated',
          count: 47,
          selected: false
        },
        {
          code: 'pompoms',
          count: 29,
          selected: false
        },
        {
          code: 'print',
          count: 2257,
          selected: false
        },
        {
          code: 'quilted',
          count: 148,
          selected: false
        },
        {
          code: 'reversible sequins',
          count: 20,
          selected: false
        },
        {
          code: 'rhinestones',
          count: 120,
          selected: false
        },
        {
          code: 'ruffle',
          count: 515,
          selected: false
        },
        {
          code: 'sequin',
          count: 108,
          selected: false
        },
        {
          code: 'sheer',
          count: 67,
          selected: false
        },
        {
          code: 'shiny',
          count: 70,
          selected: false
        },
        {
          code: 'studs',
          count: 14,
          selected: false
        },
        {
          code: 'suede',
          count: 12,
          selected: false
        },
        {
          code: 'tie-dye',
          count: 66,
          selected: false
        },
        {
          code: 'utility',
          count: 248,
          selected: false
        },
        {
          code: 'velvet',
          count: 105,
          selected: false
        },
        {
          code: 'y2k',
          count: 189,
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
          code: '101 dalmatians',
          count: 1,
          selected: false
        },
        {
          code: 'aaliyah',
          count: 1,
          selected: false
        },
        {
          code: 'ac/dc',
          count: 3,
          selected: false
        },
        {
          code: 'adventure time',
          count: 1,
          selected: false
        },
        {
          code: 'aladdin',
          count: 1,
          selected: false
        },
        {
          code: 'among us',
          count: 10,
          selected: false
        },
        {
          code: 'ariana grande',
          count: 5,
          selected: false
        },
        {
          code: 'aristocats',
          count: 4,
          selected: false
        },
        {
          code: 'bambi',
          count: 2,
          selected: false
        },
        {
          code: 'barbie',
          count: 13,
          selected: false
        },
        {
          code: 'batman',
          count: 13,
          selected: false
        },
        {
          code: 'batman and superman',
          count: 1,
          selected: false
        },
        {
          code: 'billie eilish',
          count: 2,
          selected: false
        },
        {
          code: 'black panther',
          count: 1,
          selected: false
        },
        {
          code: 'blackpink',
          count: 4,
          selected: false
        },
        {
          code: 'blondie',
          count: 3,
          selected: false
        },
        {
          code: 'blur',
          count: 1,
          selected: false
        },
        {
          code: 'captain america',
          count: 1,
          selected: false
        },
        {
          code: 'care bears',
          count: 8,
          selected: false
        },
        {
          code: 'cinderella',
          count: 3,
          selected: false
        },
        {
          code: 'coca-cola',
          count: 5,
          selected: false
        },
        {
          code: 'def leppard',
          count: 1,
          selected: false
        },
        {
          code: 'discovery channel',
          count: 3,
          selected: false
        },
        {
          code: 'disney princesses',
          count: 6,
          selected: false
        },
        {
          code: 'disney villains',
          count: 1,
          selected: false
        },
        {
          code: 'encanto',
          count: 19,
          selected: false
        },
        {
          code: 'fanta',
          count: 2,
          selected: false
        },
        {
          code: 'felix the cat',
          count: 1,
          selected: false
        },
        {
          code: 'fender',
          count: 2,
          selected: false
        },
        {
          code: 'finding nemo',
          count: 6,
          selected: false
        },
        {
          code: 'formula 1',
          count: 9,
          selected: false
        },
        {
          code: 'frozen',
          count: 44,
          selected: false
        },
        {
          code: 'garfield',
          count: 4,
          selected: false
        },
        {
          code: 'ghostbusters',
          count: 2,
          selected: false
        },
        {
          code: 'gorillaz',
          count: 1,
          selected: false
        },
        {
          code: 'grateful dead',
          count: 1,
          selected: false
        },
        {
          code: 'gremlins',
          count: 1,
          selected: false
        },
        {
          code: 'harry potter',
          count: 10,
          selected: false
        },
        {
          code: 'harvard university',
          count: 4,
          selected: false
        },
        {
          code: 'hello kitty',
          count: 2,
          selected: false
        },
        {
          code: 'hot wheels',
          count: 7,
          selected: false
        },
        {
          code: 'jaws',
          count: 1,
          selected: false
        },
        {
          code: 'joy division',
          count: 1,
          selected: false
        },
        {
          code: 'jurassic world',
          count: 11,
          selected: false
        },
        {
          code: 'justice league',
          count: 2,
          selected: false
        },
        {
          code: 'keith haring',
          count: 4,
          selected: false
        },
        {
          code: 'kodak',
          count: 2,
          selected: false
        },
        {
          code: 'kurt cobain',
          count: 1,
          selected: false
        },
        {
          code: "lay's",
          count: 3,
          selected: false
        },
        {
          code: 'led zeppelin',
          count: 1,
          selected: false
        },
        {
          code: 'lego duplo',
          count: 2,
          selected: false
        },
        {
          code: 'lego ninjago',
          count: 12,
          selected: false
        },
        {
          code: 'lilo & stitch',
          count: 3,
          selected: false
        },
        {
          code: 'lizzo',
          count: 2,
          selected: false
        },
        {
          code: 'looney tunes',
          count: 8,
          selected: false
        },
        {
          code: 'mariah carey',
          count: 1,
          selected: false
        },
        {
          code: 'marvel comics',
          count: 15,
          selected: false
        },
        {
          code: 'metallica',
          count: 6,
          selected: false
        },
        {
          code: 'mickey mouse',
          count: 46,
          selected: false
        },
        {
          code: 'minnie mouse',
          count: 48,
          selected: false
        },
        {
          code: 'misfits',
          count: 3,
          selected: false
        },
        {
          code: 'mtv',
          count: 2,
          selected: false
        },
        {
          code: 'naruto',
          count: 4,
          selected: false
        },
        {
          code: 'nas',
          count: 1,
          selected: false
        },
        {
          code: 'new order',
          count: 1,
          selected: false
        },
        {
          code: 'nirvana',
          count: 11,
          selected: false
        },
        {
          code: 'pac-man',
          count: 2,
          selected: false
        },
        {
          code: 'paw patrol',
          count: 19,
          selected: false
        },
        {
          code: 'peppa pig',
          count: 4,
          selected: false
        },
        {
          code: 'pink floyd',
          count: 1,
          selected: false
        },
        {
          code: 'playstation',
          count: 17,
          selected: false
        },
        {
          code: 'pokémon',
          count: 41,
          selected: false
        },
        {
          code: 'pringles',
          count: 2,
          selected: false
        },
        {
          code: 'ramones',
          count: 2,
          selected: false
        },
        {
          code: 'red hot chili peppers',
          count: 1,
          selected: false
        },
        {
          code: 'rick and morty',
          count: 2,
          selected: false
        },
        {
          code: 'rosalía',
          count: 2,
          selected: false
        },
        {
          code: 'scooby-doo',
          count: 1,
          selected: false
        },
        {
          code: 'sesame street',
          count: 3,
          selected: false
        },
        {
          code: 'sex education',
          count: 1,
          selected: false
        },
        {
          code: 'smileyworld®',
          count: 23,
          selected: false
        },
        {
          code: 'snoopy',
          count: 15,
          selected: false
        },
        {
          code: 'snow white',
          count: 3,
          selected: false
        },
        {
          code: 'sonic the hedgehog',
          count: 44,
          selected: false
        },
        {
          code: 'space jam',
          count: 1,
          selected: false
        },
        {
          code: 'spider-man',
          count: 41,
          selected: false
        },
        {
          code: 'spongebob squarepants',
          count: 18,
          selected: false
        },
        {
          code: 'sprite',
          count: 1,
          selected: false
        },
        {
          code: 'star wars',
          count: 10,
          selected: false
        },
        {
          code: 'stranger things',
          count: 20,
          selected: false
        },
        {
          code: 'tangled',
          count: 1,
          selected: false
        },
        {
          code: 'tetris',
          count: 1,
          selected: false
        },
        {
          code: 'the avengers',
          count: 4,
          selected: false
        },
        {
          code: 'the beatles',
          count: 3,
          selected: false
        },
        {
          code: 'the doors',
          count: 1,
          selected: false
        },
        {
          code: 'the grinch',
          count: 7,
          selected: false
        },
        {
          code: 'the hulk',
          count: 4,
          selected: false
        },
        {
          code: 'the jungle book',
          count: 1,
          selected: false
        },
        {
          code: 'the lion king',
          count: 5,
          selected: false
        },
        {
          code: 'the little mermaid',
          count: 8,
          selected: false
        },
        {
          code: 'the nightmare before christmas',
          count: 1,
          selected: false
        },
        {
          code: 'the notorious b.i.g.',
          count: 2,
          selected: false
        },
        {
          code: 'the rolling stones',
          count: 4,
          selected: false
        },
        {
          code: 'the simpsons',
          count: 15,
          selected: false
        },
        {
          code: 'the super mario bros. movie',
          count: 8,
          selected: false
        },
        {
          code: 'tinker bell',
          count: 1,
          selected: false
        },
        {
          code: 'toca boca',
          count: 1,
          selected: false
        },
        {
          code: 'tom and jerry',
          count: 1,
          selected: false
        },
        {
          code: 'toy story',
          count: 2,
          selected: false
        },
        {
          code: 'transformers',
          count: 3,
          selected: false
        },
        {
          code: 'ucla',
          count: 1,
          selected: false
        },
        {
          code: 'university of california, berkeley',
          count: 1,
          selected: false
        },
        {
          code: 'university of cambridge',
          count: 1,
          selected: false
        },
        {
          code: 'wednesday',
          count: 13,
          selected: false
        },
        {
          code: 'winnie the pooh',
          count: 10,
          selected: false
        },
        {
          code: 'wish',
          count: 6,
          selected: false
        },
        {
          code: 'wonder woman',
          count: 1,
          selected: false
        },
        {
          code: 'x-men',
          count: 1,
          selected: false
        },
        {
          code: 'xbox',
          count: 1,
          selected: false
        },
        {
          code: 'yale',
          count: 5,
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
          count: 170,
          selected: false
        },
        {
          code: 'disney/fox',
          count: 12,
          selected: false
        },
        {
          code: 'disney/marvel',
          count: 47,
          selected: false
        },
        {
          code: 'disney/pixar',
          count: 1,
          selected: false
        },
        {
          code: 'disney/star wars',
          count: 8,
          selected: false
        },
        {
          code: 'lego',
          count: 17,
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
          count: 32,
          selected: false
        },
        {
          code: 'Canvas',
          count: 116,
          selected: false
        },
        {
          code: 'Cashmere',
          count: 25,
          selected: false
        },
        {
          code: 'Ceramic',
          count: 167,
          selected: false
        },
        {
          code: 'Chenille',
          count: 16,
          selected: false
        },
        {
          code: 'Chiffon',
          count: 52,
          selected: false
        },
        {
          code: 'Corduroy',
          count: 95,
          selected: false
        },
        {
          code: 'Cotton',
          count: 3987,
          selected: false
        },
        {
          code: 'Denim',
          count: 868,
          selected: false
        },
        {
          code: 'Down',
          count: 1,
          selected: false
        },
        {
          code: 'Felt',
          count: 42,
          selected: false
        },
        {
          code: 'Flannel',
          count: 41,
          selected: false
        },
        {
          code: 'Fleece',
          count: 71,
          selected: false
        },
        {
          code: 'French Terry',
          count: 433,
          selected: false
        },
        {
          code: 'Glass',
          count: 131,
          selected: false
        },
        {
          code: 'Jersey',
          count: 3324,
          selected: false
        },
        {
          code: 'Jute',
          count: 25,
          selected: false
        },
        {
          code: 'Lace',
          count: 225,
          selected: false
        },
        {
          code: 'Leather',
          count: 48,
          selected: false
        },
        {
          code: 'Linen',
          count: 238,
          selected: false
        },
        {
          code: 'Lyocell',
          count: 15,
          selected: false
        },
        {
          code: 'Merino',
          count: 15,
          selected: false
        },
        {
          code: 'Mesh',
          count: 138,
          selected: false
        },
        {
          code: 'Metal',
          count: 114,
          selected: false
        },
        {
          code: 'Microfiber',
          count: 78,
          selected: false
        },
        {
          code: 'Mohair',
          count: 9,
          selected: false
        },
        {
          code: 'Muslin',
          count: 63,
          selected: false
        },
        {
          code: 'Oxford',
          count: 31,
          selected: false
        },
        {
          code: 'PU Fabric',
          count: 43,
          selected: false
        },
        {
          code: 'Poplin',
          count: 108,
          selected: false
        },
        {
          code: 'Satin',
          count: 268,
          selected: false
        },
        {
          code: 'Seersucker',
          count: 11,
          selected: false
        },
        {
          code: 'Silk',
          count: 23,
          selected: false
        },
        {
          code: 'Straw',
          count: 16,
          selected: false
        },
        {
          code: 'Suede',
          count: 6,
          selected: false
        },
        {
          code: 'Teddy',
          count: 110,
          selected: false
        },
        {
          code: 'Terry cloth',
          count: 140,
          selected: false
        },
        {
          code: 'Tulle',
          count: 86,
          selected: false
        },
        {
          code: 'Tweed',
          count: 1,
          selected: false
        },
        {
          code: 'Twill',
          count: 509,
          selected: false
        },
        {
          code: 'Velour',
          count: 92,
          selected: false
        },
        {
          code: 'Velvet',
          count: 56,
          selected: false
        },
        {
          code: 'Wood',
          count: 121,
          selected: false
        },
        {
          code: 'Wool',
          count: 168,
          selected: false
        }
      ]
    },
    {
      code: 'coverages',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Full coverage',
          count: 36,
          selected: false
        },
        {
          code: 'Medium coverage',
          count: 21,
          selected: false
        },
        {
          code: 'Sheer coverage',
          count: 10,
          selected: false
        }
      ]
    },
    {
      code: 'finishes',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Dewy finish',
          count: 3,
          selected: false
        },
        {
          code: 'Glossy finish',
          count: 45,
          selected: false
        },
        {
          code: 'Matte finish',
          count: 25,
          selected: false
        },
        {
          code: 'Natural finish',
          count: 19,
          selected: false
        }
      ]
    },
    {
      code: 'skinTypes',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Combination skin',
          count: 103,
          selected: false
        },
        {
          code: 'Dry skin',
          count: 103,
          selected: false
        },
        {
          code: 'Mature skin',
          count: 70,
          selected: false
        },
        {
          code: 'Normal skin',
          count: 98,
          selected: false
        },
        {
          code: 'Oily skin',
          count: 98,
          selected: false
        },
        {
          code: 'Sensitive skin',
          count: 64,
          selected: false
        }
      ]
    },
    {
      code: 'skinTones',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Dark skin tone',
          count: 31,
          selected: false
        },
        {
          code: 'Fair skin tone',
          count: 32,
          selected: false
        },
        {
          code: 'Light skin tone',
          count: 40,
          selected: false
        },
        {
          code: 'Medium skin tone',
          count: 41,
          selected: false
        }
      ]
    },
    {
      code: 'typeOfApplications',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Felt tip',
          count: 1,
          selected: false
        },
        {
          code: 'Fiber brush',
          count: 6,
          selected: false
        },
        {
          code: 'Pencil',
          count: 42,
          selected: false
        },
        {
          code: 'Plastic brush',
          count: 55,
          selected: false
        },
        {
          code: 'Pump',
          count: 1,
          selected: false
        },
        {
          code: 'Silicone Brush',
          count: 2,
          selected: false
        },
        {
          code: 'Sponge',
          count: 5,
          selected: false
        },
        {
          code: 'Spray',
          count: 1,
          selected: false
        },
        {
          code: 'Stick',
          count: 27,
          selected: false
        },
        {
          code: 'Synthetic brush',
          count: 17,
          selected: false
        },
        {
          code: 'Tube',
          count: 32,
          selected: false
        },
        {
          code: 'Wand',
          count: 38,
          selected: false
        }
      ]
    },
    {
      code: 'benefits',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Blurring',
          count: 51,
          selected: false
        },
        {
          code: 'Buildable coverage',
          count: 81,
          selected: false
        },
        {
          code: 'Color correcting',
          count: 17,
          selected: false
        },
        {
          code: 'Glowing',
          count: 29,
          selected: false
        },
        {
          code: 'Hydrating',
          count: 27,
          selected: false
        },
        {
          code: 'Lengthening',
          count: 1,
          selected: false
        },
        {
          code: 'Light-reflecting',
          count: 17,
          selected: false
        },
        {
          code: 'Long-lasting',
          count: 33,
          selected: false
        },
        {
          code: 'Mattifying',
          count: 1,
          selected: false
        },
        {
          code: 'Moisturizing',
          count: 29,
          selected: false
        },
        {
          code: 'Setting effect',
          count: 5,
          selected: false
        },
        {
          code: 'Smudgeproof',
          count: 1,
          selected: false
        },
        {
          code: 'Strong hold',
          count: 1,
          selected: false
        },
        {
          code: 'UV protection',
          count: 26,
          selected: false
        },
        {
          code: 'Voluminizing',
          count: 2,
          selected: false
        }
      ]
    },
    {
      code: 'concerns',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Blemishes',
          count: 22,
          selected: false
        },
        {
          code: 'Dark circles',
          count: 18,
          selected: false
        },
        {
          code: 'Dryness',
          count: 1,
          selected: false
        },
        {
          code: 'Dullness',
          count: 59,
          selected: false
        },
        {
          code: 'Redness',
          count: 17,
          selected: false
        },
        {
          code: 'Uneven skintone',
          count: 52,
          selected: false
        }
      ]
    },
    {
      code: 'keyIngredients',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Hyaluronic acid (HA)',
          count: 59,
          selected: false
        },
        {
          code: 'Shea butter',
          count: 12,
          selected: false
        },
        {
          code: 'Vitamin E',
          count: 20,
          selected: false
        }
      ]
    },
    {
      code: 'hairTypes',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Normal hair',
          count: 1,
          selected: false
        }
      ]
    },
    {
      code: 'fragranceFamilies',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Floral',
          count: 2,
          selected: false
        },
        {
          code: 'Fresh',
          count: 2,
          selected: false
        },
        {
          code: 'Spicy',
          count: 2,
          selected: false
        }
      ]
    },
    {
      code: 'forms',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'Balm',
          count: 13,
          selected: false
        },
        {
          code: 'Cream',
          count: 37,
          selected: false
        },
        {
          code: 'Gel',
          count: 6,
          selected: false
        },
        {
          code: 'Liquid',
          count: 120,
          selected: false
        },
        {
          code: 'Loose powder',
          count: 1,
          selected: false
        },
        {
          code: 'Lotion',
          count: 1,
          selected: false
        },
        {
          code: 'Pressed powder',
          count: 35,
          selected: false
        },
        {
          code: 'Solid',
          count: 12,
          selected: false
        },
        {
          code: 'Wax',
          count: 15,
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
          code: 'adjustable size',
          count: 21,
          selected: false
        },
        {
          code: 'adjustable waist',
          count: 386,
          selected: false
        },
        {
          code: 'convertible',
          count: 3,
          selected: false
        },
        {
          code: 'critical seams sealed',
          count: 1,
          selected: false
        },
        {
          code: 'extending',
          count: 1,
          selected: false
        },
        {
          code: 'foldable',
          count: 1,
          selected: false
        },
        {
          code: 'folded seams',
          count: 4,
          selected: false
        },
        {
          code: 'integral bra',
          count: 7,
          selected: false
        },
        {
          code: 'lightweight',
          count: 83,
          selected: false
        },
        {
          code: 'lined',
          count: 95,
          selected: false
        },
        {
          code: 'non-slip protection',
          count: 76,
          selected: false
        },
        {
          code: 'packable',
          count: 8,
          selected: false
        },
        {
          code: 'padded',
          count: 266,
          selected: false
        },
        {
          code: 'reinforced details',
          count: 26,
          selected: false
        },
        {
          code: 'reversible',
          count: 2,
          selected: false
        },
        {
          code: 'sealed seams',
          count: 21,
          selected: false
        },
        {
          code: 'seamless',
          count: 125,
          selected: false
        },
        {
          code: 'shaping',
          count: 88,
          selected: false
        },
        {
          code: 'supersoft',
          count: 72,
          selected: false
        },
        {
          code: 'superstretch',
          count: 44,
          selected: false
        },
        {
          code: 'touchscreen-compatible',
          count: 3,
          selected: false
        },
        {
          code: 'wipe-clean',
          count: 11,
          selected: false
        },
        {
          code: 'with pocket',
          count: 62,
          selected: false
        }
      ]
    },
    {
      code: 'homewareStyles',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'bath towel',
          count: 49,
          selected: false
        },
        {
          code: 'chandelier',
          count: 1,
          selected: false
        },
        {
          code: 'coffee mug',
          count: 5,
          selected: false
        },
        {
          code: 'coffee table',
          count: 2,
          selected: false
        },
        {
          code: 'deep plate',
          count: 10,
          selected: false
        },
        {
          code: 'dinner plate',
          count: 9,
          selected: false
        },
        {
          code: 'door mat',
          count: 7,
          selected: false
        },
        {
          code: 'espresso cup',
          count: 9,
          selected: false
        },
        {
          code: 'fitted sheet',
          count: 40,
          selected: false
        },
        {
          code: 'fragrance oil',
          count: 3,
          selected: false
        },
        {
          code: 'guest towel',
          count: 18,
          selected: false
        },
        {
          code: 'hand towel',
          count: 20,
          selected: false
        },
        {
          code: 'hooded towel',
          count: 11,
          selected: false
        },
        {
          code: 'mini plate',
          count: 3,
          selected: false
        },
        {
          code: 'nightstand',
          count: 3,
          selected: false
        },
        {
          code: 'pedestal table',
          count: 3,
          selected: false
        },
        {
          code: 'pendant lamp',
          count: 4,
          selected: false
        },
        {
          code: 'pillar candle',
          count: 6,
          selected: false
        },
        {
          code: 'reed diffuser',
          count: 9,
          selected: false
        },
        {
          code: 'room spray',
          count: 1,
          selected: false
        },
        {
          code: 'runner',
          count: 9,
          selected: false
        },
        {
          code: 'salad plate',
          count: 16,
          selected: false
        },
        {
          code: 'scented candle',
          count: 34,
          selected: false
        },
        {
          code: 'scented card',
          count: 1,
          selected: false
        },
        {
          code: 'side plate',
          count: 8,
          selected: false
        },
        {
          code: 'side table',
          count: 9,
          selected: false
        },
        {
          code: 'sparkling wine glass',
          count: 8,
          selected: false
        },
        {
          code: 'tapered candle',
          count: 18,
          selected: false
        },
        {
          code: 'tea towel',
          count: 7,
          selected: false
        },
        {
          code: 'tumbler',
          count: 3,
          selected: false
        },
        {
          code: 'vanity mirror',
          count: 5,
          selected: false
        },
        {
          code: 'wall mirror',
          count: 15,
          selected: false
        },
        {
          code: 'washcloth',
          count: 1,
          selected: false
        },
        {
          code: 'wine glass',
          count: 2,
          selected: false
        }
      ]
    },
    {
      code: 'rooms',
      priority: 0,
      category: false,
      multiSelect: false,
      visible: true,
      values: [
        {
          code: 'bathroom',
          count: 202,
          selected: false
        },
        {
          code: 'bedroom',
          count: 410,
          selected: false
        },
        {
          code: 'dining room',
          count: 1,
          selected: false
        },
        {
          code: 'hallway',
          count: 19,
          selected: false
        },
        {
          code: 'kids room',
          count: 197,
          selected: false
        },
        {
          code: 'kitchen',
          count: 372,
          selected: false
        },
        {
          code: 'living room',
          count: 873,
          selected: false
        },
        {
          code: 'nursery',
          count: 93,
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
          count: 28,
          selected: false
        },
        {
          code: 'Aquamarine',
          count: 37,
          selected: false
        },
        {
          code: 'Baby blue',
          count: 307,
          selected: false
        },
        {
          code: 'Baby pink',
          count: 105,
          selected: false
        },
        {
          code: 'Blue gray',
          count: 291,
          selected: false
        },
        {
          code: 'Bright blue',
          count: 726,
          selected: false
        },
        {
          code: 'Bright green',
          count: 280,
          selected: false
        },
        {
          code: 'Bright pink',
          count: 162,
          selected: false
        },
        {
          code: 'Bright red',
          count: 35,
          selected: false
        },
        {
          code: 'Bright yellow',
          count: 72,
          selected: false
        },
        {
          code: 'Burgundy',
          count: 132,
          selected: false
        },
        {
          code: 'Burnt orange',
          count: 51,
          selected: false
        },
        {
          code: 'Charcoal',
          count: 3196,
          selected: false
        },
        {
          code: 'Cobalt blue',
          count: 420,
          selected: false
        },
        {
          code: 'Copper',
          count: 16,
          selected: false
        },
        {
          code: 'Coral',
          count: 312,
          selected: false
        },
        {
          code: 'Cream',
          count: 398,
          selected: false
        },
        {
          code: 'Crimson',
          count: 8,
          selected: false
        },
        {
          code: 'Cyan',
          count: 26,
          selected: false
        },
        {
          code: 'Dark blue',
          count: 570,
          selected: false
        },
        {
          code: 'Dark gray',
          count: 557,
          selected: false
        },
        {
          code: 'Dark green',
          count: 190,
          selected: false
        },
        {
          code: 'Dark maroon',
          count: 132,
          selected: false
        },
        {
          code: 'Dark pink',
          count: 10,
          selected: false
        },
        {
          code: 'Dark purple',
          count: 7,
          selected: false
        },
        {
          code: 'Dark red',
          count: 132,
          selected: false
        },
        {
          code: 'Dusty blue',
          count: 77,
          selected: false
        },
        {
          code: 'Dusty pink',
          count: 378,
          selected: false
        },
        {
          code: 'Dusty rose',
          count: 77,
          selected: false
        },
        {
          code: 'Ecru',
          count: 1324,
          selected: false
        },
        {
          code: 'Emerald green',
          count: 82,
          selected: false
        },
        {
          code: 'Fuchsia',
          count: 75,
          selected: false
        },
        {
          code: 'Gray silver',
          count: 368,
          selected: false
        },
        {
          code: 'Gray white',
          count: 573,
          selected: false
        },
        {
          code: 'Hot pink',
          count: 262,
          selected: false
        },
        {
          code: 'Indigo',
          count: 420,
          selected: false
        },
        {
          code: 'Ivory',
          count: 1032,
          selected: false
        },
        {
          code: 'Khaki green',
          count: 374,
          selected: false
        },
        {
          code: 'Lavender',
          count: 16,
          selected: false
        },
        {
          code: 'Lemon',
          count: 49,
          selected: false
        },
        {
          code: 'Light blue',
          count: 283,
          selected: false
        },
        {
          code: 'Light gray',
          count: 1,
          selected: false
        },
        {
          code: 'Light green',
          count: 98,
          selected: false
        },
        {
          code: 'Light pink',
          count: 300,
          selected: false
        },
        {
          code: 'Light purple',
          count: 37,
          selected: false
        },
        {
          code: 'Light red',
          count: 23,
          selected: false
        },
        {
          code: 'Light yellow',
          count: 81,
          selected: false
        },
        {
          code: 'Lilac',
          count: 146,
          selected: false
        },
        {
          code: 'Lime',
          count: 147,
          selected: false
        },
        {
          code: 'Magenta',
          count: 54,
          selected: false
        },
        {
          code: 'Mahogany',
          count: 118,
          selected: false
        },
        {
          code: 'Maroon',
          count: 11,
          selected: false
        },
        {
          code: 'Mauve',
          count: 33,
          selected: false
        },
        {
          code: 'Mint',
          count: 45,
          selected: false
        },
        {
          code: 'Mustard',
          count: 36,
          selected: false
        },
        {
          code: 'Navy blue',
          count: 517,
          selected: false
        },
        {
          code: 'Neon green',
          count: 60,
          selected: false
        },
        {
          code: 'Neon pink',
          count: 253,
          selected: false
        },
        {
          code: 'Olive',
          count: 84,
          selected: false
        },
        {
          code: 'Pastel blue',
          count: 471,
          selected: false
        },
        {
          code: 'Pastel green',
          count: 168,
          selected: false
        },
        {
          code: 'Pastel pink',
          count: 78,
          selected: false
        },
        {
          code: 'Pastel purple',
          count: 113,
          selected: false
        },
        {
          code: 'Pastel yellow',
          count: 43,
          selected: false
        },
        {
          code: 'Peach',
          count: 105,
          selected: false
        },
        {
          code: 'Plum',
          count: 24,
          selected: false
        },
        {
          code: 'Rose',
          count: 291,
          selected: false
        },
        {
          code: 'Royal blue',
          count: 674,
          selected: false
        },
        {
          code: 'Ruby red',
          count: 149,
          selected: false
        },
        {
          code: 'Rust',
          count: 165,
          selected: false
        },
        {
          code: 'Salmon',
          count: 362,
          selected: false
        },
        {
          code: 'Sea green',
          count: 103,
          selected: false
        },
        {
          code: 'Sky blue',
          count: 44,
          selected: false
        },
        {
          code: 'Stone',
          count: 725,
          selected: false
        },
        {
          code: 'Taupe',
          count: 1018,
          selected: false
        },
        {
          code: 'Teal',
          count: 14,
          selected: false
        },
        {
          code: 'Terracotta',
          count: 69,
          selected: false
        },
        {
          code: 'Violet',
          count: 52,
          selected: false
        },
        {
          code: 'Wheat',
          count: 1018,
          selected: false
        },
        {
          code: 'White gray',
          count: 573,
          selected: false
        },
        {
          code: 'Yellow gold',
          count: 24,
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
          count: 214,
          selected: false
        },
        {
          code: 'spring',
          count: 118,
          selected: false
        },
        {
          code: 'summer',
          count: 567,
          selected: false
        },
        {
          code: 'winter',
          count: 232,
          selected: false
        }
      ]
    }
  ],
  freeTextSearch: '',
  rangeFacets: [
    {
      code: 'priceRange',
      range: {
        min: 0.99,
        max: 781,
        minSelected: 0.99,
        maxSelected: 781
      }
    }
  ],
  baseUrl: 'https://www2.hm.com'
}
