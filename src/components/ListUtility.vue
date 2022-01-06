<template>
    <footer>

        <button
            class="simple"
            @click.prevent="showUtility = !showUtility"
        >{{(showUtility ? 'Hide Options' : 'Show Options')}}</button>

        <button
            class="option"
            v-if="showUtility"
            @click.prevent="resetITems()"
        >Reset</button>
    
    </footer>
</template>

<script>
export default {
    name: 'ListUtility',
    data() {
        return {
            showUtility: false,
        }
    },
    methods: {
        resetITems() {
            this.$store.commit('resetItems');
        }
    }
}
</script>

<style scoped>
    footer {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .simple {
        border: none;
        background: transparent;
        outline: none;
        padding: 0.5rem;
    }

    .option {
        padding: 0.5rem 2rem;
        background-color: rgb(122, 33, 33);
        color: white;
        border: none;
    }
</style>