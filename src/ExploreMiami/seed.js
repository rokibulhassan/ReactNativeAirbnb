const generatePrice = () => Math.floor((Math.random() * 50) + 15)

const items = [
    {
        id: 1,
        name: "Just booked in Miami",
        items: [
            {
                id: 1,
                imageUrl: 'https://a0.muscache.com/im/pictures/ccd24f0a-e6c9-40ef-9987-b5d859fb739e.jpg?aki_policy=large',
                tag: "CLUBBING",
                title: "Strike a pose in an urban '80s and '90s photo shoot",
                price: generatePrice(),
                isFavourite: false,
                categories: [
                    "Homes",
                ]
            },
            {
                id: 2,
                imageUrl: 'https://a0.muscache.com/im/pictures/b15864d4-60ce-41a0-94b1-e6f68d2d6563.jpg?aki_policy=large',
                tag: "CLUBBING",
                title: "Miami Beach: Taste Your Way Through The Art Deco District",
                price: generatePrice(),
                isFavourite: false,
                categories: [
                    "Homes",
                    "Restaurants"
                ]
            },
            {
                id: 3,
                imageUrl: 'https://a0.muscache.com/im/pictures/807c052f-c4b0-468a-a5bd-491b667dadbb.jpg?aki_policy=large',
                tag: "CLUBBING",
                title: "Miami Beach: Taste Your Way Through The Art Deco District",
                price: generatePrice(),
                isFavourite: false,
                categories: [
                    "Homes",
                    "Experiences"
                ]
            },
            {
                id: 4,
                imageUrl: 'https://a0.muscache.com/im/pictures/7bd0b8ea-34c8-4633-a7d4-9252107db617.jpg?aki_policy=large',
                tag: "CLUBBING",
                title: "Miami Beach: Taste Your Way Through The Art Deco District",
                price: generatePrice(),
                isFavourite: false,
                categories: [
                    "Homes",
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Popular reservations",
        items: [
            {
                id: 5,
                imageUrl: 'https://a0.muscache.com/im/pictures/db1308f5-aa6d-452c-b59e-508c6e389de6.jpg?aki_policy=large',
                tag: "CLUBBING",
                title: "Miami Beach: Taste Your Way Through The Art Deco District",
                price: generatePrice(),
                isFavourite: false,
                categories: [
                    "Restaurants"
                ]
            },
            {
                id: 6,
                imageUrl: 'https://a0.muscache.com/im/pictures/dad3cd3f-4324-4941-b3bb-658072f4caec.jpg?aki_policy=large',
                tag: "CLUBBING",
                title: "Miami Beach: Taste Your Way Through The Art Deco District",
                price: generatePrice(),
                isFavourite: false,
                categories: [
                    "Homes",
                    "Experiences"
                ]
            },
            {
                id: 7,
                imageUrl: 'https://a0.muscache.com/im/pictures/87d12da8-4e04-4a05-8bbe-04283cc8e183.jpg?aki_policy=large',
                tag: "CLUBBING",
                title: "Miami Beach: Taste Your Way Through The Art Deco District",
                price: generatePrice(),
                isFavourite: false,
                categories: [
                    "Homes",
                ]
            },
            {
                id: 8,
                imageUrl: 'https://a0.muscache.com/im/pictures/7c6efa65-08d8-4052-9e15-d629f9a37e3b.jpg?aki_policy=large',
                tag: "CLUBBING",
                title: "Miami Beach: Taste Your Way Through The Art Deco District",
                price: generatePrice(),
                isFavourite: false,
                categories: [
                    "Experiences",
                    "Restaurants"
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Favourite",
        items: []
    }
]

export default items