<template>
    <div>
      <ul>
        <li v-for="call in calls" :key="call.pseudo">
            <p>Tu as appelé <blue class="blue">{{ call.pseudo }}</blue> - Numéro : <blue class="blue">{{ call.age }}</blue> a <rouge class="rouge">{{ call.time }}</rouge> </p>
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

  <style scoped>

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 10px #ccc;
    border-radius: 10px;
    text-align: center;
}
.blue {
    color: rgb(0, 98, 255);
}

.rouge {
    color: rgb(255, 145, 0);
}

p {
    margin: 0;
    font-size: 1.2em;
    color: #333;
}

  </style>