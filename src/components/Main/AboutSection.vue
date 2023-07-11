<script>
export default {

}
</script>

<template>
    <section>
        <div class="image">
            <img src="../../assets/img/dog-logo.png" alt="dog">
        </div>
        <div class="container">
            <div class="row d-flex my-5">
                <div class="col-md-6 d-flex justify-content-center">
                    <div class="pet-img">
                        <img src="../../assets/img/about.png" alt="about">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="pet-description">
                        <h6>
                            <img src="../../assets/img/dog-icon.png" alt="dog foot">
                            About us
                        </h6>
                        <h2>Welcome DogMilo Pets</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    padding: 90px 0;
    position: relative;

    img {
        max-width: 100%;
        height: auto;
    }

    .image {
        position: absolute;
        left: 87%;
    }
}

.pet-img {
    width: 500px;
    height: 400px;
}

.pet-description {
    padding: 90px 0 0 20px;

    h6 {
        color: #7f7045;
        padding: 0 0 20px
    }

    h2 {
        padding: 0 0 20px;
        font-size: 40px;
    }

    p {
        font-size: 18px;
        font-weight: 400;
    }
}
</style>