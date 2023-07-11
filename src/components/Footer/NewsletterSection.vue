<script>
export default {

}
</script>

<template>
    <section>
        <div class="newsletter">
            <div class="container">
                <div class="position-block">
                    <div class="row d-flex">
                        <div class="col-lg-6 col-md-3 col-sm-2 col-xs-1 pets">
                            <img src="../../assets/img/news.png" alt="dogs">
                        </div>
                        <div class="col-lg-6 col-md-9 col-sm-10 col-xs-11">
                            <h4>Subscribe to Our Newsletter</h4>
                            <div class="subscribe-area">
                                <input type="email" name="text" placeholder="Your Email Here">
                                <button><font-awesome-icon :icon="['fas', 'at']" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

.position-block {
    height: 200px;
    width: 80%;
    position: relative;
    background-color: $bg-primary-color;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: -96px;
    z-index: 1;
    border-radius: 10px;
}

.pets {
    img {
        position: absolute;
        bottom: 0;
        left: 40px;
        height: 300px;
        width: auto;
    }
}

h4 {
    padding: 50px 0 11px;
    font-size: 25px;
    color: white;
}

.subscribe-area {
    position: relative;

    input {
        width: 90%;
        height: 60px;
        border: none;
        padding: 10px 20px;
    }

    button {
        width: 52px;
        height: 52px;
        position: absolute;
        right: 55px;
        top: 4px;
        background-color: $bg-primary-color;
        color: white;
        font-size: 25px;
        padding: 10px;
        line-height: 35px;
        border: none;
    }
}
</style>