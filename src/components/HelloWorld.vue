<template>
    <div class="hello">
        {{items}}
        <button @click.prevent="addItem()">Add</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    computed: {
        items() {
            return this.$store.state.items;
        }
    },
    methods: {
        addItem() {
            this.$store.commit('addItem', 'item');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
