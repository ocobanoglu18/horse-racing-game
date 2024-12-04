<template>
    <div class="results">
        <h2>Results</h2>
        <div v-for="result in results" :key="result.round" class="round">
            <h3>{{ result.round }}st Lap</h3>
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Horse Name</th>
                        <th>Time (s)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(horse, index) in result.results" :key="horse.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ horse.name }}</td>
                        <td>{{ horse.time }}</td>
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
        ...mapState(['results']),
    },
};
</script>

<style scoped>
.results {
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
}

thead {
    background-color: #f2f2f2;
    text-align: center;
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
