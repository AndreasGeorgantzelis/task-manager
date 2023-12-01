<template>
    <div class="text-arrow">
        <div class="text">
            <h3>{{ text }}</h3>
        </div>
        <div class="arrow">

            &#8594;
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }

}
</script>

<style scoped>
.arrow-text {
    display: flex;
    flex-direction: column;
    margin-bottom: -30px;

}

.text {
    margin-bottom: -160px;
    color: black;
    font-size: initial;
}


.arrow {
    color: black;
    font-size: 200px;
    font-weight: 100;
    margin-left: -20px;
    margin-bottom: -10px;
}
</style>