<script>
export default {
    data() {
        return {
            currentIndex: 0,
            pictures: [
                {
                    image: '../../src/assets/img/b.png',
                    title: 'Welcome to DogMilo Pets',
                    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
                },

                {
                    image: '../../src/assets/img/b.png',
                    title: 'Welcome to DogMilo Pets',
                    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
                },
                {
                    image: '../../src/assets/img/b.png',
                    title: 'Welcome to DogMilo Pets',
                    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
                },
            ],
        }
    },
    computed: {
        isLastPicture() {
            return this.currentIndex === this.pictures.length - 1;
        }
    },
    methods: {
        setCurrentIndex(targetIndex) {
            this.currentIndex = targetIndex;
        },
        goToNext() {
            if (this.isLastPicture) {
                this.currentIndex = 0;
            }
            else this.currentIndex++;
        },
        goToPrev() {
            this.currentIndex--;
        },
    },
};
</script>

<template>
    <section>
        <div id="prev" @click="goToPrev" v-show="currentIndex">
            <img src="../../assets/img/left-arrow.png" />
        </div>
        <div class="container gallery d-flex align-items-center">
            <figure v-for="(picture, i) in pictures" v-show="currentIndex === i">
                <img :src="picture.image" :alt="picture.title">
                <figcaption>
                    <h3>{{ picture.title }}</h3>
                    <p>{{ picture.text }}</p>
                    <button>Get Started</button>
                    <a href="#"><img src="../../assets/img/play.png" alt="playbutton"></a>
                </figcaption>
            </figure>
        </div>
        <div id="next" @click="goToNext" v-show="!isLastPicture">
            <img src="../../assets/img/next.png" />
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    height: 500px;
    position: relative;
    color: black;
}

.gallery {
    height: 100%;
}

#prev,
#next {
    position: absolute;
    z-index: 1;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);

    img {
        width: 20px;
        height: 20px;
    }
}

#next {
    right: 0;
}
</style>