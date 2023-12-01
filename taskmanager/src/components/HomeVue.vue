<template>
    <div class="container">
        <div class="box">
            <div class="arrow">
                <TextArrow text="Task pool" />
            </div>
            <div class="failed">
                <div class="storage">
                    <TaskStorageVue />
                </div>


                <div class="failed-arrow">
                    <div class="text">
                        <h3>Failed</h3>
                    </div>

                    <div class="down-arrow">
                        &#8595;
                    </div>
                </div>

                <div class="failure">
                    <TaskFailedVue />
                </div>
            </div>

            <div class="flip-arrow">
                <div class="text">
                    <!-- <h3>IF Nack</h3> -->
                </div>
                <div class="arrow">

                    &#8594;
                </div>
            </div>


            <div class="arrow">
                <TextArrow />
            </div>
            <div class="task-queue">
                <TaskQueueVue />
            </div>
            <div class="arrow">
                <TextArrow text="IF ack" />
            </div>
            <div class="success">
                <TaskSuccessVue />
            </div>

        </div>
    </div>
</template>

<script>
import TaskFailedVue from './TaskFailed.vue';
import TaskQueueVue from './TaskQueue.vue'
import TaskStorageVue from './TaskStorage.vue';
import TaskSuccessVue from './TaskSuccess.vue';
import TextArrow from './TextArrow.vue';



export default {
    components: {
        TaskStorageVue, TaskQueueVue, TextArrow, TaskSuccessVue, TaskFailedVue
    }

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.box {
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    gap: 40px;
    align-items: center;
    justify-content: space-evenly;
    margin-top: -220px;
    height: 700px;
    width: 100%;
}


.flip-arrow {
    display: flex;
    flex-direction: column;
    margin-bottom: -250px;
    transform: scaleX(-1);
}

.text {

    margin-bottom: -60px;
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

.failed {
    gap: 30px;
    margin-bottom: -500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.failed-arrow {
    /* display: flex;
    flex-direction: column; */
    /* margin-bottom: -250px; */

}

.down-arrow {
    color: black;
    font-size: 120px;
    font-weight: 100;

}
</style>