<template lang="">
    <div>
        <FormPerso :personnages="personnages"/>

        <div class="cartes">
            <div v-for="personnages in personnages" :key="personnages.pseudo" class="perso">
                <CartePerso class="text" :personnages="personnages"/>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.perso {
    flex: 1;
    margin: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #ccc;
    border-radius: 10px;
    padding: 20px;
}

.text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
</style>