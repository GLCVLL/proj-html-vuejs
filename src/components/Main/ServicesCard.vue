<script>
export default {
    props: ['service']
}
</script>

<template>
    <div class="pet-services">
        <div class="pet-img">
            <img :src="service.image" :alt="service.alt">
        </div>
        <h4>{{ service.title }}</h4>
        <p>{{ service.description }}</p>
        <div class="right-arrow">
            <a href="#"><img src="../../assets/img/right.png" alt="right arrow"></a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

.pet-services {
    background-color: $bg-primary-color;
    border-radius: 99px;
    height: 300px;
    text-align: center;
    padding: 20px 15px 1px;
    color: white;
    transition: background-color 1s;
    position: relative;

    &:hover {
        background-color: $bg-social-color;
    }
}

.pet-img {
    width: 100px;
    margin: auto;

    img {
        width: 70px;
        margin-bottom: 20px;
    }
}

.right-arrow {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: $bg-secondary-color;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 15px;
    margin: 0 auto;

    a {
        display: block;
        margin: 0 auto;
        line-height: 50px;
    }

    img {
        width: 25px;
        padding: 5px;
    }
}
</style>