<template>
  <nav>
    <router-link to="/personnage">Contact</router-link> |
    <router-link to="/historique">Historique</router-link> |
    <router-link to="/call">call</router-link> |
  </nav>
  <router-view/>
</template>

<style>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #2196f3;
    color: #fff;
}

nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 20px;
    font-size: 20px;
    font-weight: bold;
}

nav a:hover {
    color: #999;
}
</style>
