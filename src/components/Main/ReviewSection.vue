<script>
export default {

}
</script>

<template>
    <section>
        <div class="container">
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
                <div class="col-md-8"></div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

section {
    padding: 0 0 90px;
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
</style>