// AxiosFiddle.js

//const axios = require('axios');

app.component("axios-fiddle", {
    props: {
        baseUrl: {
            type: String,
            required: false
        }
    },
    template:
    /*html*/
    `<div> <h3>Axios Fiddle</h3>
        <div>{{todos}}</div>
        <button type=button @click="test1">Fetch</button>
    </div>`
    ,
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
});
