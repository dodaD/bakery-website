export const useCommentsStore = () => {
    const comments = [
        {
            id: 1,
            author: "John Doe",
            text: "This cake is amazing! The chocolate flavor is rich and decadent.",
            rating: 4.5,
            date: "2023-10-01"
        },
        {
            id: 2,
            author: "Jane Smith",
            text: "I love the strawberry dream cake! It's so light and fluffy.",
            rating: 4.0,
            date: "2023-10-02"
        },
        {
            id: 3,
            author: "Alice Johnson",
            text: "The carrot cake is my favorite! So moist and flavorful.",
            rating: 5.0,
            date: "2023-10-03"
        },
        {
            id: 4,
            author: "Bob Brown",
            text: "Coffee lover's paradise is the best! Perfect for my afternoon pick-me-up.",
            rating: 4.8,
            date: "2023-10-04"
        }
    ]

    return {
        comments
    }
}
