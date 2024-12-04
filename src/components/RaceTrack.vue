<template>
    <div class="race-track">
        <div v-for="horse in currentHorses" :key="horse.id" class="track">
            <div class="horse" :style="{ left: `${horse.position}%`, backgroundColor: horse.color }">
                <img :src="horse_icon" alt="Horse" />
                <span>{{ horse.name }}</span>
            </div>
        </div>
        <div class="track-footer">{{ currentRoundText }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import horse_icon from '../assets/horse-icon.svg';

export default {
    computed: {
        ...mapState(['schedule', 'currentRound']),
        currentHorses() {
            return this.schedule[this.currentRound - 1]?.horses || [];
        },
        currentDistance() {
            return this.schedule[this.currentRound - 1]?.distance || 1200;
        },
        currentRoundText() {
            return `${this.currentRound || 1}st Lap - ${this.currentDistance}m`;
        },
    },
    data() {
        return {
            horse_icon,
        };
    },
};
</script>

<style>
.race-track {
    position: relative;
    height: calc(100vh - 150px);
    background: #939191;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    top: 30px
}

.track {
    position: relative;
    width: 100%;
    /* Full width for proper alignment */
    height: 10%;
    /* Each track is 10% of the race-track height */
    border-bottom: 1px dashed #ddd;
    box-sizing: border-box;
}

.horse {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 50%;
    top: 50%;
    transform: translateY(-50%);
    /* Keep this to center vertically */
    transition: left 0.5s linear;
    /* Update to animate 'left' changes */
    font-weight: bold;
    color: white;
    padding: 5px;
}


.horse img {
    height: 40px;
    width: 40px;
}
</style>
