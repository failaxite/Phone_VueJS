<template>
    <div>
      <div id="display">{{ displayValue }} : {{ contactName }}</div>
      <div id="numpad">
        <button v-for="(num, index) in numbers" :key="index" @click="addNumber(num)">{{ num }}</button>
        <button @click="removeLastNumber">Supprimer</button>
        <button @click="callNumber">Appeler</button>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getPersonnages']),
        contactName() {
    const contact = this.$store.state.personnages.find(personnage => personnage.age === parseInt(this.displayValue))
    return contact && contact.pseudo ? contact.pseudo : 'inconnu'
  }
},
    data() {
        return {
            displayValue: '',
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            maxLength: 10
        }
    },
    methods: {
        addNumber(num) {
            if (this.displayValue.length === this.maxLength) {
                return
            }
            this.displayValue += num;
        },
        removeLastNumber() {
            this.displayValue = this.displayValue.slice(0, -1)
        },
        callNumber() {
            const date = new Date()
            const call = {
                phoneNumber: this.displayValue,
                contactName: this.contactName,
                date: date.toLocaleString()
            }
            this.$store.dispatch('ajoutCall', call)
            alert(`Tu as appelé ${this.contactName} - Numéro : ${this.displayValue} le ${call.date}`)
        }
    }
}
</script>
<style scoped>
    #display {
        font-size: 3em;
        text-align: right;
        padding: 10px;
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 20px;
    }

    #numpad {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    button {
        font-size: 2em;
        width: calc(25% - 20px);
        padding: 20px;
        margin: 10px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #f1f1f1;
    }
</style>