<template lang="">
    <div>

        <form @submit.prevent="ajoutPerso">
            <input type="text" placeholder="Nom" v-model="formPerso.pseudo">
            <span v-if="formPerso.pseudo.length < 3"  class="error">Le nom doit avoir au moins 3 lettres</span>
            <input type="number" placeholder="Numéro" v-model="formPerso.age">
            <button type="submit">Ajouter</button>
        </form>

    </div>
</template>

<script>
export default {
    name: 'FormPerso',

    props: [
        'personnages'
    ],

    data() {
        return {
            error: false,

            formPerso: {
                pseudo: '',
                age: null
            },
        }
    },

    methods: {
        ajoutPerso() {
            if (this.formPerso.pseudo == "" || this.formPerso.age == null) return
            if (this.formPerso.pseudo.length < 3) {
                this.error = true
                return
            }
            if (this.personnages.find(personnage => personnage.pseudo == this.formPerso.pseudo)) return
            // Dispatch l'action avec les informations du formulaire
            this.$store.dispatch('ajoutPerso', this.formPerso)
            // réinitialisez le formulaire
        }
    }

}
</script>

<style scoped>
    form {
        background-color: #2196f3;
        width: 50vw;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #12375d;
        color: white;
        font-weight: bold;
    }

    input {
        padding: 10px;
        border-radius: 10px;
        border: none;
    }
</style>