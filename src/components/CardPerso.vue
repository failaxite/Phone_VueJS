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
h2 {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    color: #2196f3;
    margin-bottom: 10px;
}

span {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

button {
    background-color: #2196f3;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    margin: 0 auto;
    display: block;
}

button:hover {
    background-color: #1769aa;
}

</style>