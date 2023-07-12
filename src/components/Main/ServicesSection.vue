<script>
import ServicesCard from './ServicesCard.vue'
export default {
    components: { ServicesCard },
    data() {
        return {
            services: [
                {
                    id: 1,
                    image: "../../src/assets/img/d-1.png",
                    alt: "dog-foot",
                    title: "Pet Sitting",
                    description: "The readable content of a page when looking at its layout."
                },
                {
                    id: 2,
                    image: "../../src/assets/img/d-2.png",
                    alt: "dog-foot",
                    title: "Puppy Sitting",
                    description: "The readable content of a page when looking at its layout."
                },
                {
                    id: 3,
                    image: "../../src/assets/img/d-3.png",
                    alt: "dog-foot",
                    title: "Dog Wolking",
                    description: "The readable content of a page when looking at its layout."
                },
                {
                    id: 4,
                    image: "../../src/assets/img/d-4.png",
                    alt: "dog-foot",
                    title: "Night Care",
                    description: "The readable content of a page when looking at its layout."
                },
                {
                    id: 5,
                    image: "../../src/assets/img/d-5.png",
                    alt: "dog-foot",
                    title: "Pet Sitting",
                    description: "The readable content of a page when looking at its layout."
                },
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="img-right">
            <img src="../../assets/img/dog-logo.png" alt="dog logo">
        </div>
        <div class="img-left">
            <img src="../../assets/img/dog-left.png" alt="dog logo">
        </div>
        <h6>Service</h6>
        <h2>DogMilo Pet Care Service <br>
            For Your Best Friends
        </h2>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-2" v-for="service in services" :key="service.id">
                    <ServicesCard :service="service" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

section {
    padding: 60px 0 60px 0;
    background-color: $bg-color;
    position: relative;
}

img {
    max-width: 100%;
}

.img-right {
    position: absolute;
    left: 87%;
}

.img-left {
    position: absolute;
    left: 0;

    img {
        width: 60%;
    }
}

h6 {
    text-align: center;
    padding: 0 0 16px 0;
    color: #7f7045;
}

h2 {
    text-align: center;
    padding: 0 0 30px 0;
    font-size: 35px;
}
</style>