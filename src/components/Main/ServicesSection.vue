<script>
export default {

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
                <div class="col-md-2">
                    <div class="pet-services">
                        <div class="pet-img">
                            <img src="../../assets/img/d-1.png" alt="dog-foot">
                        </div>
                        <h4>Pet Sitting</h4>
                        <p>The readable content of a page when looking at its layout.</p>
                        <div class="right-arrow">
                            <a href="#"><img src="../../assets/img/right.png" alt="right arrow"></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="pet-services">
                        <div class="pet-img">
                            <img src="../../assets/img/d-2.png" alt="dog-foot">
                        </div>
                        <h4>Pet Sitting</h4>
                        <p>The readable content of a page when looking at its layout.</p>
                        <div class="right-arrow">
                            <a href="#"><img src="../../assets/img/right.png" alt="right arrow"></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="pet-services">
                        <div class="pet-img">
                            <img src="../../assets/img/d-3.png" alt="dog-foot">
                        </div>
                        <h4>Pet Sitting</h4>
                        <p>The readable content of a page when looking at its layout.</p>
                        <div class="right-arrow">
                            <a href="#"><img src="../../assets/img/right.png" alt="right arrow"></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="pet-services">
                        <div class="pet-img">
                            <img src="../../assets/img/d-4.png" alt="dog-foot">
                        </div>
                        <h4>Pet Sitting</h4>
                        <p>The readable content of a page when looking at its layout.</p>
                        <div class="right-arrow">
                            <a href="#"><img src="../../assets/img/right.png" alt="right arrow"></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="pet-services">
                        <div class="pet-img">
                            <img src="../../assets/img/d-5.png" alt="dog-foot">
                        </div>
                        <h4>Pet Sitting</h4>
                        <p>The readable content of a page when looking at its layout.</p>
                        <div class="right-arrow">
                            <a href="#"><img src="../../assets/img/right.png" alt="right arrow"></a>
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