<template>
    <div class="program">
        <h2>Program</h2>
        <div v-for="round in schedule" :key="round.round" class="round">
            <h3>{{ round.round }}st Lap - {{ round.distance }}m</h3>
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Horse Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(horse, index) in round.horses" :key="horse.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ horse.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['schedule']),
    },
};
</script>

<style scoped>
.program {
    border: 1px solid #ddd;
    color: #fff;
}

h2 {
    background-color: #7d1414;
    padding: 10px;
    margin-top: 0;
}

.round {
    margin-bottom: 20px;
}

.round h3 {
    margin-bottom: 10px;
    color: #fff;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    color: #333;
    text-align: center;
}

thead {
    background-color: #f2f2f2;
}

th,
td {
    padding: 8px 12px;
    border: 1px solid #ddd;
    text-align: center;
}

th {
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}
</style>
