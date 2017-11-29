var getJSONData = function() {
  const generatePrice = () => Math.floor((Math.random() * 30) + 12)
  const dataList = [
    {
      "_id": "5a1cfea66de8b0062f1e5129",
      "index": 0,
      "name": "Just booked in Miami",
      
      "items": [
        {
          "_id": "5a1cfea675f7956a7103326d",
          "index": 0,
          "picture": "image0",
          "tag": "CLUBBING",
          "title": "Art in the Making",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes",
            "Restaurants"
          ]
        },
        {
          "_id": "5a1cfea67d0adf3afe571e06",
          "index": 1,
          "picture": "image1",
          "tag": "WATER SPORTS",
          "title": "PaintingPicnik",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Restaurants"
          ]
        },
        {
          "_id": "5a1cfea641283499993a04a5",
          "index": 2,
          "picture": "image2",
          "tag": "PADDLEBOARDING",
          "title": "On Wynwoods Walls",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes",
            "Experiences"
          ]
        },
        {
          "_id": "5a1cfea688c22e0c06a786c3",
          "index": 3,
          "picture": "image3",
          "tag": "ENTERTAINMENT",
          "title": "The Collection",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes",
            "Restaurants"
          ]
        },
        {
          "_id": "5a1cfea63d99e4095643f5d4",
          "index": 4,
          "picture": "image4",
          "tag": "ENTERTAINMENT",
          "title": "GLAM ON THE BEACH",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Restaurants"
          ]
        },
        {
          "_id": "5a1cfea69393fc9ab2bc9974",
          "index": 5,
          "picture": "image5",
          "tag": "WATER SPORTS",
          "title": "Under the Streets",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Restaurants",
            "Homes",
            "Experiences"
          ]
        },
        {
          "_id": "5a1cfea6dcf67265de895a50",
          "index": 6,
          "picture": "image6",
          "tag": "PADDLEBOARDING",
          "title": "Street Cinema",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes",
            "Experiences"
          ]
        },
        {
          "_id": "5a1cfea65646dd4a13447e5d",
          "index": 7,
          "picture": "image7",
          "tag": "ENTERTAINMENT",
          "title": "The Good Life",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Experiences",
            "Homes"
          ]
        }
      ]
    },
    {
      "_id": "5a1cfea6064458185cfd6f47",
      "index": 1,
      "name": "Popular reservations",
      "items": [
        {
          "_id": "5a1cfea6ec0afa538ef2e4b6",
          "index": 0,
          "picture": "image0",
          "tag": "LATIN FOOD",
          "title": "Night SUP and Kayak tour",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes"
          ]
        },
        {
          "_id": "5a1cfea64ee73a8a9f3e6986",
          "index": 1,
          "picture": "image1",
          "tag": "CLUBBING",
          "title": "See alligators on an Everglades safari",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes",
            "Experiences"
          ]
        },
        {
          "_id": "5a1cfea6be1df27e2627878e",
          "index": 2,
          "picture": "image2",
          "tag": "ENTERTAINMENT",
          "title": "SUP or Kayak Nature Exploration",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Restaurants",
            "Homes"
          ]
        },
        {
          "_id": "5a1cfea64f4389cce607aabe",
          "index": 3,
          "picture": "image3",
          "tag": "NATURE",
          "title": "South Beach & Venetian Bike & Mimosa",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Experiences",
            "Restaurants"
          ]
        },
        {
          "_id": "5a1cfea63c4cf0d363c7599a",
          "index": 4,
          "picture": "image4",
          "tag": "WATER SPORTS",
          "title": "Practice forest therapy with an artist",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes"
          ]
        },
        {
          "_id": "5a1cfea63da478058103625c",
          "index": 5,
          "picture": "image5",
          "tag": "LATIN FOOD",
          "title": "Captain Planet",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Restaurants"
          ]
        },
        {
          "_id": "5a1cfea64fc64c9ff4dad024",
          "index": 6,
          "picture": "image6",
          "tag": "WATER SPORTS",
          "title": "Hike and boat through the Everglades",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes",
            "Experiences"
          ]
        },
        {
          "_id": "5a1cfea6af997d8c3fad24e4",
          "index": 7,
          "picture": "image7",
          "tag": "LATIN FOOD",
          "title": "Health is Wealth",
          "price": generatePrice(),
          "isFavourite": false,
          "category": [
            "Homes",
            "Restaurants"
          ]
        }
      ]
    },
    {
      "_id": "5a1cfea63232d836d0d1565b",
      "index": 2,
      "name": "Favourite",
      "items": []
    }
  ]
  return dataList
}

export default getJSONData