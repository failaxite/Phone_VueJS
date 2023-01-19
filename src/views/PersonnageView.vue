<template lang="">
    <div>
        <h1>Personnage</h1>

        <FormPerso :personnages="personnages"/>

        <div class="cartes">
            <div v-for="personnages in personnages" :key="personnages.pseudo" class="perso">
                <CartePerso :personnages="personnages"/>
            </div>
        </div>

    </div>
</template>

<script>

import CartePerso from '@/components/CardPerso.vue';

import FormPerso from '@/components/FormPerso.vue';

export default {
    name: 'PersonnageView',

    components:{
        FormPerso,
        CartePerso,
    },

    computed: {
        personnages() {
            return this.$store.state.personnages
        }
    }
}

</script>

<style scoped>

    .cartes {
        margin: 50px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .perso {
        width: 200px;
        margin: 0 auto;
        height: 200px;
        background-color: #42b983;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

</style>