<template>
    <div class="bucket">
        <div class="title">
            <p>Failure</p>
            <hr>
            <div class="list">
                <li v-for="item, index in getFailed()" :key="item.id">
                    {{ index }}. {{ item.id }}
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    methods: {
        getFailed() {
            var failed = JSON.parse(localStorage.getItem("failed"));
            if (failed.length) {
                return failed;
            }

        }
    },

    mounted() {
        this.getFailed();
    }

}
</script>

<style></style>