<template>
    <div class="bucket">
        <div class="title">
            <p>Pool</p>
            <hr>
            <div class="list">
                <li v-for="item, index in getTasks()" :key="item.id">
                    {{ index }}. {{ item.id }}
                </li>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    methods: {
        getTasks() {
            var tasks = JSON.parse(localStorage.getItem("tasks"));
            return tasks;
        }
    },

    mounted() {
        this.getTasks();
    }

}
</script>

<style></style>