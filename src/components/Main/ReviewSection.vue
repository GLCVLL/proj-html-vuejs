<script>
import ReviewCard from './ReviewCard.vue'
export default {
    components: { ReviewCard },
    data() {
        return {
            currentIndex: 0,
            cards: [
                // Array di oggetti cards
                {
                    id: 1,
                    stars: 5,
                    title: "Great Place",
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
                    image: "../../src/assets/img/t1.png",
                    altText: "Image 1",
                    subtitle: "Tobias May",
                    description: "UI/UX Designer"
                },
                {
                    id: 2,
                    stars: 4,
                    title: "Great Place",
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
                    image: "../../src/assets/img/t1.png",
                    altText: "Image 1",
                    subtitle: "Tobias May",
                    description: "UI/UX Designer"
                },
            ]
        };
    },
    computed: {
        isLastCard() {
            return this.currentIndex === this.cards.length - 1;
        }
    },
    methods: {
        setCurrentIndex(targetIndex) {
            this.currentIndex = targetIndex;
        },
        goToNext() {
            if (this.isLastCard) {
                this.currentIndex = 0;
            }
            else this.currentIndex++;
        },
        goToPrev() {
            this.currentIndex--;
        },
    },
}
</script>

<template>
    <section>
        <div class="container slider">
            <div class="row d-flex">
                <div class="col-md-4">
                    <div class="review">
                        <div class="review-text">
                            <h6>
                                <img src="../../assets/img/dog-icon.png" alt="dog foot">
                                Review & Rating
                            </h6>
                            <h2>Over 8000 Customers With 5-Star Review</h2>
                            <p>It is a long established fact that a reader will be distructed by the readable content of a
                                page when looking at its layout.
                            </p>
                        </div>
                        <ul class="review-stars d-flex">
                            <li><font-awesome-icon :icon="['fas', 'star']" /></li>
                            <li><font-awesome-icon :icon="['fas', 'star']" /></li>
                            <li><font-awesome-icon :icon="['fas', 'star']" /></li>
                            <li><font-awesome-icon :icon="['fas', 'star']" /></li>
                            <li><font-awesome-icon :icon="['fas', 'star']" /></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8 d-flex px-1">
                    <ReviewCard v-for="card in cards" :key="card.id" :stars="card.stars" :title="card.title"
                        :content="card.content" :image="card.image" :altText="card.altText" :subtitle="card.subtitle"
                        :description="card.description" />
                </div>
            </div>
            <div id="prev" @click="goToPrev" v-show="currentIndex">
                <img src="../../assets/img/left-arrow.png" />
            </div>
            <div id="next" @click="goToNext" v-show="!isLastCard">
                <img src="../../assets/img/next.png" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

section {
    padding: 0 0 90px;
    margin: 50px 0;
}

.review-text {
    h6 {
        color: $bg-social-color;

        img {
            padding: 0 14px 0 0;
            width: 10%;
        }
    }

    h2 {
        font-size: 30px;
        padding: 20px 0;
    }

    p {
        padding: 0 0 15px;
    }
}

.review-stars {
    color: $bg-secondary-color;
    padding: 0 0 0;
}

.slider {
    position: relative;
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
    right: 0;
    bottom: -50px;

    img {
        width: 20px;
        height: 20px;
    }
}

#prev {
    right: 50px;
}
</style>