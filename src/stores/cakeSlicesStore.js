export const useCakeSlicesStore = () => {
    const cakeSlices = [
        {
            id: 1,
            name: 'Carrot Cake',
            image: '/CakeSlices/CarrotCakeSlice.png',
            description: 'Moist carrot cake with cream cheese frosting',
            price: '13.99'
        },
        {
            id: 2,
            name: 'Chocolate Cake',
            image: '/CakeSlices/ChocolateCakeSlice.png',
            description: 'Rich chocolate cake with chocolate ganache',
            price: '14.99'
        },
        {
            id: 3,
            name: 'Coffee Cake',
            image: '/CakeSlices/CoffeeCakeSlice.png',
            description: 'Aromatic coffee-flavored sponge cake',
            price: '12.99'
        },
        {
            id: 4,
            name: 'Orange Cake',
            image: '/CakeSlices/OrangeCakeSlice.png',
            description: 'Fresh orange cake with citrus glaze',
            price: '12.99'
        },
        {
            id: 5,
            name: 'Pecan Cake',
            image: '/CakeSlices/PecanCakeSlice.png',
            description: 'Nutty pecan cake with caramel drizzle',
            price: '14.99'
        },
        {
            id: 6,
            name: 'Strawberry Cake',
            image: '/CakeSlices/StrawberryCakeSlice.png',
            description: 'Light strawberry cake with fresh berries',
            price: '14.99'
        }
    ];

    return {
        cakeSlices
    }
}