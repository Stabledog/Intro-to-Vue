
app.component('http-fetch', {
    template: /*html*/
    `<div>
        <div>http-fetch: {{ todos }}</div>
        <button type=button @click="updateTest">Fetch</button>
    </div>

    `,
    data() {
        return {
            todos: undefined
        };
    },
    methods: {
        updateTest() { // fetch from web
            fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then( response => response.json())
              .then( data => { this.todos=data;} )
              .catch( err => console.log(err));

        }
    }
});
