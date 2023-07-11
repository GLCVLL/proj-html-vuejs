<script></script>

<template>
    <ul class="d-flex align-items-center">
        <li><a class="bg-blue" href="#"><font-awesome-icon :icon="['fab', 'square-facebook']" size="lg" /></a></li>
        <li><a class="bg-red" href="#"><font-awesome-icon :icon="['fab', 'square-pinterest']" size="lg" /></a></li>
        <li><a class="bg-green" href="#"><font-awesome-icon :icon="['fab', 'square-twitter']" size="lg" /></a></li>
        <li><a class="bg-light-blue" href="#"><font-awesome-icon :icon="['fab', 'linkedin']" size="lg" /></a></li>
        <li><a class="bg-purple" href="#"><font-awesome-icon :icon="['fab', 'square-instagram']" size="lg" /></a></li>
    </ul>
</template>

<style scoped lang="scss">
a {
    color: white;
    text-decoration: none;
    margin: 0 5px;
    padding: 2px 5px;
    border-radius: 5px;
}

.bg-blue {
    background-color: blue;
}

.bg-red {
    background-color: #a1405c;
}

.bg-green {
    background-color: aquamarine;
}

.bg-light-blue {
    background-color: #0c61bb;
}

.bg-purple {
    background-color: #a624ac;
}
</style>