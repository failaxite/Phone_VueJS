<template lang="">
    <h2>{{ personnages.pseudo }}</h2>
    <span>Numéro de téléphone : {{ personnages.age }}</span>
</template>

<script>
export default {
    name:'CartePerso',
    props:[
        'personnages'
    ]
}
</script>

<style scoped>

</style>