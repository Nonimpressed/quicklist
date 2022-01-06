<template>

    <label for="showingItems" @click="showFilter = !showFilter">Sort / Filter</label>
    <select 
        v-if="showFilter"
        name="showingItems" id="showingItems"
        v-model="currentFilter"
    >
        <option value="all">Incomplete First</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
        <option value="unfiltered">Unfiltered</option>
    </select>
    <ul>
        <li 
            v-for="(item) in currentList" 
            :key="item.id"
            :class="{
                'complete': item.complete,
                'incomplete': !item.complete,
            }"
        >
            <div v-if="!item.editing">{{item.name}}</div>
            <form 
                v-if="item.editing"
                @submit.prevent="updateItem(item)"
            >
                <input 
                    type="text" 
                    v-model="item.name"
                    ref="items"
                >
            </form>
            <div>
                <button
                    v-if="item.editing"
                    @click.prevent="updateItem(item)"
                >Save</button>
                <button 
                    v-if="!item.complete && !item.editing" 
                    @click.prevent="markComplete(item.id)"
                >Mark Complete</button>
                <button 
                    v-if="item.complete && !item.editing" 
                    @click.prevent="markIncomplete(item.id)"
                >✔</button>
                <button 
                    v-if="!item.editing"
                    @click.prevent="editItem(item)"
                >Edit</button>
                <button 
                    v-if="item.editing"
                    @click.prevent="removeItem(item.id)"
                >Delete</button>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ItemList',
    data() {
        return {
            currentFilter: 'all',
            showFilter: false,
        }
    },
    computed: {
        items() {
            return this.$store.state.items;
        },
        complete() {
            return this.$store.state.items.filter(item => item.complete);
        },
        incomplete() {
            return this.$store.state.items.filter(item => !item.complete);
        },
        currentList() {
            if (this.currentFilter === 'complete') {
                return this.complete;
            } else if (this.currentFilter === 'incomplete') {
                return this.incomplete;
            } else if (this.currentFilter === 'unfiltered') {
                return this.items;
            }
            return this.sortItems(this.items);
        }
    },
    methods: {
        removeItem(id) {
            this.$store.commit('removeItem', id);
        },
        markComplete(id) {
            this.$store.commit('markComplete', id);
        },
        markIncomplete(id) {
            this.$store.commit('markIncomplete', id);
        },
        sortItems(items) {
            items.sort((a,b) => {
                if (a.complete && !b.complete) {
                    return 1;
                } else if (!a.complete && b.complete) {
                    return -1;
                }
                return 1;
            });
            return items;
        },
        editItem(item) {
            item.editing = true;
        },
        updateItem(item) {
            item.editing = false;
            this.$store.commit('updateItem', item);
        },
    }
}
</script>

<style scoped>
label, select {
    max-width: 420px;
    width: 100%;
}

label {
    margin-top: 1rem;
    display: block;
    text-align: left;
    font-size: 0.9rem;
}

select {
    padding: 0.5rem;
    margin-top: 0.25rem;
}

ul {
    margin: 0 auto;
    max-width: 500px;
    background-color: hsl(60, 13%, 89%);
    margin-top: 2rem;
    margin-left: 0;
    padding-left: 0;
}

li {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    border-bottom: 1px solid hsl(0, 0%, 39%);
    padding-left: 1rem;
    padding-top: 0;
    padding-bottom: 0;
}

li.complete,
li.complete button {
    background-color: hsl(0, 0%, 89%);
    color: hsl(0, 0%, 0%);
}

li input {
    display: block;
    padding: 0.5rem;
    border: none;
    border-radius: 0;
}

button {
    padding: 0.5rem 0.75rem;
    border: none;
    outline: none;
    background-color: hsl(130, 12%, 63%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

button:hover {
    background-color: hsl(129, 30%, 21%);
    color: white;
}

</style>