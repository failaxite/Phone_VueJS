<template>
    <div>
      <ul>
        <li v-for="call in calls" :key="call.pseudo">
            <p>Tu as appelé {{ call.pseudo }} - Numéro : {{ call.age }} a {{ call.time }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['calls']),
      date() {
        return new Date().toLocaleString()
      }
    },
    created() {
      this.calls.forEach(el => {
        el.time = this.date
      });
    }
  }
  </script>