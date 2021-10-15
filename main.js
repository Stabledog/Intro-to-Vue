const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        onSubmit() {
            let productReview={
                name: this.name,
                review: this.review,
                rating: this.rating
            };
        }
    }
  })
