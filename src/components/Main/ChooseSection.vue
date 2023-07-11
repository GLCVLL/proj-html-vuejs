<script>
export default {

}
</script>

<template>
    <section>
        <div class="container-full">
            <div class="row d-flex">
                <div class="col-sm-6">
                    <div class="why-img">
                        <img src="../../assets/img/why.png" alt="why img">
                    </div>
                </div>
                <div class="col-sm-6 pr-90">
                    <div class="why-titles">
                        <h6>
                            <img src="../../assets/img/dog-icon.png" alt="dog foot">
                            Choose Us
                        </h6>
                        <h2>Why Choose Us?</h2>
                    </div>
                    <div class="reason d-flex">
                        <img src="../../assets/img/w-3.png" alt="dog icon">
                        <div class="reason-description">
                            <h3>Safety First</h3>
                            <p>It is a long established fact that a reader will be distructed by the readable content of a
                                page when looking at its layout.
                            </p>
                        </div>
                    </div>
                    <div class="reason d-flex">
                        <img src="../../assets/img/w-2.png" alt="dog icon">
                        <div class="reason-description">
                            <h3>Play Yards</h3>
                            <p>It is a long established fact that a reader will be distructed by the readable content of a
                                page when looking at its layout.
                            </p>
                        </div>
                    </div>
                    <div class="reason d-flex">
                        <img src="../../assets/img/w-1.png" alt="dog icon">
                        <div class="reason-description">
                            <h3>Monitor Your Pets</h3>
                            <p>It is a long established fact that a reader will be distructed by the readable content of a
                                page when looking at its layout.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

section {
    padding: 0 0 90px;
}

.pr-90 {
    padding-right: 90px;
}

.why-titles {
    padding: 70px 0 18px;

    h6 {
        color: $bg-social-color;

        img {
            padding: 0 14px 0 0;
            width: 10%;
        }
    }

    h2 {
        padding: 10px 0 7px;
        font-size: 40px;
    }
}

.reason {
    margin-bottom: 20px;

    img {
        width: 20%;
        padding: 0 11px 37px 0;
        margin-right: 20px;
    }
}

.reason-description {
    padding-left: 20px;

    h3 {
        font-size: 24px;
    }

    p {
        font-size: 20px;
        padding-top: 10px;
    }
}
</style>