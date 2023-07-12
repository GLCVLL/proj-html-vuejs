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
                    image: '../../src/assets/img/c.png',
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
        <div class="gallery">
            <figure v-for="(picture, i) in pictures" v-show="currentIndex === i" :key="i"
                :style="{ backgroundImage: `url(${picture.image})` }" class="carousel-item">
                <div class="carousel-content container">
                    <h3>{{ picture.title }}</h3>
                    <p>{{ picture.text }}</p>
                    <div class="d-flex align-items-center">
                        <button>Get Started</button>
                        <a href="#"><img src="../../assets/img/play.png" alt="playbutton"></a>
                    </div>
                </div>
            </figure>
        </div>
        <div id="next" @click="goToNext" v-show="!isLastPicture">
            <img src="../../assets/img/next.png" />
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

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

button {
    background-color: $bg-primary-color;
    padding: 5px 10px;
    border: none;
    border-radius: 20px;
    color: white;
    transition: background-color 1s;

    &:hover {
        background-color: $bg-hover-button-color;
        color: white
    }
}

a {
    width: 3%;
    padding: 5px;
    background-color: #70d0f7;
    border-radius: 7px;
    margin-left: 5px;
}

#next {
    right: 0;
}

.carousel-item {
    height: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .carousel-content {
        color: white;
    }
}
</style>