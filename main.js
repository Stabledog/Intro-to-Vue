const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
            return this.cart.length;
        },
        removeFromCart(id) {
            const ix=this.cart.indexOf(id)
            if (ix > -1) {
                this.cart.splice(ix,1);
            }
        }
    }
})
