<template>
    <header>
        Completed: {{complete}} / {{items.length}}.
    </header>
    <form class="inputs" @submit="addItem()">
        <input 
            type="text" 
            name="itemName" 
            id="itemName"
            placeholder="Item Name"
            v-model="itemName"
        >

        <button 
            @click.prevent="addItem()"
            :disabled="!itemName"
        >Add Item</button>

    </form>
</template>

<script>
export default {
    name: 'ListSummary',
    data() {
        return {
            itemName: '',
        }
    },
    computed: {
        items() {
            return this.$store.state.items;
        },
        complete() {
            return this.$store.state.items.filter(item => item.complete).length;
        }
    },
    methods: {
        addItem() {
            this.$store.commit('addItem', {
                name: this.itemName,
                complete: false,
                id: Date.now(),
            });
            this.itemName = '';
        }
    }
}
</script>

<style scoped>
header {
    margin-bottom: 1rem;
    background-color: purple;
    color: white;
    padding: 0.5rem;
}

.inputs {
    width: 100%;
    margin: 0 auto;
    display: flex;
}

input[type="text"] {
    padding: 0.5rem;
    flex-grow: 1;
}

button {
    padding: 0.5rem 1.5rem;
    background-color: white;
    border: none;
    outline: none;
    color: black;
}

</style>