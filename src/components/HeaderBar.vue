<template>
    <header class="header-bar">
        <div class="logo-section">
            <h1>Horse Racing</h1>
        </div>
        <nav class="nav-buttons">
            <button @click="generateProgram">
                <i class="fas fa-random"></i>
                Generate Program
            </button>
            <button @click="startRace">
                <i :class="isRacing ? 'fas fa-pause' : 'fas fa-play'"></i>
                {{ isRacing ? 'Pause' : 'Start' }}
            </button>
        </nav>
    </header>
</template>


<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['isRacing']), // Assume you have an 'isRacing' state to toggle play/pause icon
    },
    methods: {
        generateProgram() {
            this.$store.dispatch('generateSchedule');
        },
        startRace() {
            this.$store.dispatch('startRace');
        },
    },
};
</script>


<style scoped>
.header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: linear-gradient(180deg, #1a1a1a, #222222); */
    background-color: #1a1a1a;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 10px 20px;
}

.logo-section {
    display: flex;
    align-items: center;
}

.logo {
    height: 50px;
    width: 50px;
    margin-right: 15px;
}

h1 {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.nav-buttons {
    display: flex;
    align-items: center;
}

.nav-buttons button {
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 10px 15px;
    background: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    color: #2a5298;
    transition: background 0.3s, color 0.3s;
}

.nav-buttons button:hover {
    background: #2a5298;
    color: #fff;
}

.nav-buttons button i {
    margin-right: 8px;
}

@media (max-width: 600px) {
    .header-bar {
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-buttons {
        margin-top: 10px;
    }
}
</style>
