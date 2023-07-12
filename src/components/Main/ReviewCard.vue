<script>
export default {
    props: {
        stars: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
};
</script>

<template>
    <div class="my-card mx-2">
        <ul class="review-stars d-flex">
            <li v-for="star in stars" :key="star">
                <font-awesome-icon :icon="['fas', 'star']" />
            </li>
        </ul>
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <div class="d-flex align-items-center">
            <img :src="image" :alt="altText">
            <div class="mx-2 text-f">
                <h4>{{ subtitle }}</h4>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

.my-card {
    background-color: $bg-color;
    padding-left: 20px;
}

.review-stars {
    padding-left: 0;
    color: $bg-secondary-color;
}

.text-f {

    h4 {
        font-size: 20px;
    }

    p {
        font-size: 15px;
    }
}

img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
</style>