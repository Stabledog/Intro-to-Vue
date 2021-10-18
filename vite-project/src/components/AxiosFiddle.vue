<script fefoo>
// AxiosFiddle.js
import { ref } from 'vue'

//const axios = require('axios');
export default {
    props: {
        baseUrl: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            todos: undefined
        };
    },
    methods: {
        test1() {
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
                .then( r => { this.todos=[r.data];} )
                .catch ( e => { console.error(e);} );
        }
    }
}

</script>

<template>
    <div> <h3>Axios Fiddle</h3>
        <div>{{todos}}</div>
        <button type=button @click="test1">Fetch</button>
    </div>
</template>
