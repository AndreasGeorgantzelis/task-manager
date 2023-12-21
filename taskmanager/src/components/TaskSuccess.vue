<template>
    <div class="bucket">
        <div class="title">
            <p>Success</p>
            <hr>
            <div class="list">
                <li v-for="item, index in getSuccess()" :key="item.id">
                    {{ index }}. {{ item.id }}
                </li>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    methods: {
        getSuccess() {
            var success = JSON.parse(localStorage.getItem("success"));
            if (success.length) {
                return success;
            }

        }
    },

    mounted() {
        this.getSuccess();
    }

}
</script>

<style></style>