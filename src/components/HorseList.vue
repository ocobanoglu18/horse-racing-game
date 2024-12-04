<template>
    <div class="horse-list">
        <h2>Horse List (1-20)</h2>
        <div class="horse-cards">
            <div class="horse-card" v-for="horse in horses" :key="horse.id">
                <div class="horse-color" :style="{ backgroundColor: horse.color }"></div>
                <div class="horse-info">
                    <h3>{{ horse.name }}</h3>
                    <p class="condition">{{ horse.condition }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['horses']),
    },
};
</script>

<style scoped>
.horse-list {
    padding: 10px;
    height: 100%;
    overflow-y: auto;
}

.horse-list h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 20px;
    color: #dedede;
}

.horse-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.horse-card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    width: calc(80% - 20px);
    padding: 15px;
    align-items: center;
    transition: transform 0.2s;
}

.horse-card:hover {
    transform: translateY(-5px);
}

.horse-color {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 15px;
    border: 2px solid #ddd;
}

.horse-info h3 {
    margin: 0;
    font-size: 1.2em;
    color: #333;
}

.horse-info .condition {
    margin: 5px 0 0;
    color: #666;
    font-size: 0.9em;
}
</style>
