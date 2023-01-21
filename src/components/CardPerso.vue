<template lang="">
    <h2>{{ personnages.pseudo }}</h2>
    <span>Numéro de téléphone : {{ personnages.age }}</span>
    <button v-on:click="addCall">Call</button>
</template>

<script>
export default {
    name:'CartePerso',
    props:[
        'personnages'
    ],
    methods: {
        addCall() {
            let call = { pseudo: this.personnages.pseudo, age: this.personnages.age }
            this.$store.dispatch('ajoutCall', call)
        }
    }
}
</script>

<style scoped>

</style>