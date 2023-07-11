<script>
export default {

};
</script>

<template>
    <section>
        <div id="prev"><img src="../../assets/img/left-arrow.png" /></div>
        <div class="container gallery d-flex align-items-center">
            <div>
                <h2>Welcome to DogMilo Pets</h2>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button>Get Started</button>
                <a href="#"><img src="../../assets/img/play.png" alt="play"></a>
            </div>
        </div>
        <div id="next"><img src="../../assets/img/next.png" /></div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

section {
    height: 500px;
    background-image: url('../../assets/img/b.png');
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    color: white;
}

.gallery {
    height: 100%;
}

a {
    display: inline-block;
    border-radius: 10px;
    color: white;
    padding: 5px;
    background-color: #74d0ee;
}

img {
    width: 20px;
    height: 20px;
}

button {
    padding: 5px 10px;
    background-color: $bg-primary-color;
    border-radius: 20px;
    border: none;
    margin: 0 5px;
    color: white;

    &:hover {
        background-color: $bg-hover-button-color;
    }
}

#prev {
    position: absolute;
    left: 0;
    top: 50%;
}

#next {
    position: absolute;
    right: 0;
    top: 50%;
}
</style>