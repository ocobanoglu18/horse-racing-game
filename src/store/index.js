import { createStore } from 'vuex';

export default createStore({
    state: {
        horses: [], // List of horses
        schedule: [], // Race schedule
        results: [], // Results for each lap
        currentRound: 0, // Current lap
    },
    mutations: {
        SET_HORSES(state, horses) {
            state.horses = horses;
        },
        SET_SCHEDULE(state, schedule) {
            state.schedule = schedule;
        },
        ADD_RESULT(state, result) {
            state.results.push(result);
        },
        SET_CURRENT_ROUND(state, round) {
            state.currentRound = round;
        },
        RESET_HORSE_POSITIONS(state) {
            const currentLap = state.schedule[state.currentRound - 1];
            if (currentLap) {
                currentLap.horses.forEach(horse => (horse.position = 0));
            }
        },
        UPDATE_HORSE_POSITION(state, { horseId, position }) {
            const currentLap = state.schedule[state.currentRound - 1];
            if (currentLap) {
                const horse = currentLap.horses.find(h => h.id === horseId);
                if (horse) horse.position = position;
            }
        },
    },
    actions: {
        generateHorses({ commit }) {
            const horses = Array.from({ length: 20 }, (_, index) => ({
                id: index + 1,
                name: `Horse ${index + 1}`,
                condition: Math.floor(Math.random() * 100) + 1,
                color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                position: 0, // Initial position
            }));
            commit('SET_HORSES', horses);
        },
        generateSchedule({ commit, state }) {
            if (!state.horses.length) return;

            const schedule = Array.from({ length: 6 }, (_, index) => {
                const distance = 1200 + index * 200;
                const horses = [...state.horses]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 10); // Randomly select 10 horses
                return { round: index + 1, distance, horses };
            });
            commit('SET_SCHEDULE', schedule);
        },
        async startRace({ commit, state }) {
            for (let lapIndex = 0; lapIndex < state.schedule.length; lapIndex++) {
                commit('SET_CURRENT_ROUND', lapIndex + 1);
                const currentLap = state.schedule[lapIndex];

                await new Promise(resolve => {
                    const interval = setInterval(() => {
                        let finishedCount = 0;

                        currentLap.horses.forEach(horse => {
                            // Increment position and ensure it reaches 100%
                            const increment = Math.random() * 5 + 2; // Ensure sufficient speed
                            horse.position = Math.min(horse.position + increment, 100); // Cap at 100%
                            commit('UPDATE_HORSE_POSITION', { horseId: horse.id, position: horse.position });

                            if (horse.position >= 100) finishedCount++; // Count horses that finished
                        });

                        if (finishedCount === currentLap.horses.length) {
                            clearInterval(interval);

                            // Generate results
                            const results = currentLap.horses
                                .map(horse => ({
                                    ...horse,
                                    time: (Math.random() * 10 + 1).toFixed(2), // Simulated time
                                }))
                                .sort((a, b) => a.time - b.time);
                            commit('ADD_RESULT', { round: lapIndex + 1, results });
                            resolve(); // Proceed to the next lap
                        }
                    }, 200); // Update every 200ms for smoother animation
                });

                // Reset horse positions for the next lap
                commit('RESET_HORSE_POSITIONS');
                await new Promise(resolve => setTimeout(resolve, 2000)); // Pause between laps
            }
        }
    },
});
