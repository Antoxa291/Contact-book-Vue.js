<template>
<nav class="blue darken-3">
    <div class="nav-wrapper">
        <router-link to="/" class="brand-logo right">CONTACT BOOK</router-link>
        <ul class="left hide-on-med-and-down">
            <router-link tag="li" to="/" exact active-class="active">
                <a href="#">New contact</a>
            </router-link>
            <router-link tag="li" to="/list" active-class="active">
                <a href="#">Contact list</a>
            </router-link>
        </ul>
    </div>
</nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
    padding: 0 2rem;
}

.left {
    display: flex !important;
    flex-wrap: nowrap;
}

@media only screen and (max-width: 992px) {
    .hide-on-med-and-down {
        display: flex;
    }
}
</style>
