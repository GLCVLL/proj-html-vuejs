<script>
export default {

}
</script>

<template>
    <nav>
        <div class="container navbar d-flex align-items-center justify-content-between">
            <div class="navbar-left">
                <img src="../../assets/img/logo.png" alt="logo">
            </div>
            <div class="navbar-right">
                <ul class="d-flex align-items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a class="button" href="#">Get in Toch!</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

nav {
    height: 100px;
}

a {
    margin: 0 10px;
    color: lightgrey;
    transition: color 1s;

    &:hover {
        color: $bg-primary-color;
    }
}

.button {
    background-color: $bg-primary-color;
    padding: 5px 10px;
    border-radius: 20px;
    color: white;
    transition: background-color 1s;

    &:hover {
        background-color: $bg-hover-button-color;
        color: white
    }
}
</style>