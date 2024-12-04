<template>
  <div class="app">
    <HeaderBar />
    <div class="container">
      <div class="left-panel">
        <HorseList />
      </div>
      <div class="center-panel">
        <RaceTrack />
      </div>
      <div class="right-panel">
        <RaceProgram />
        <RaceResults />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import HorseList from './components/HorseList.vue';
import RaceTrack from './components/RaceTrack.vue';
import RaceProgram from './components/RaceProgram.vue';
import RaceResults from './components/RaceResults.vue';

export default {
  components: {
    HeaderBar,
    HorseList,
    RaceTrack,
    RaceProgram,
    RaceResults,
  },
};
</script>

<style>
body {
  background-color: #222222;
}

.container {
  display: flex;
  height: calc(100vh - 150px);
  background-color: #222222;
  color: white;
  padding: 10px;
}

.left-panel {
  width: 25%;
  height: calc(100vh - 150px);
  background-color: #222222;
  padding-right: 10px;
}

.center-panel {
  width: 50%;
  height: calc(100vh - 150px);
  background-color: #222222;
}

.right-panel {
  width: 25%;
  /* border-left: 1px solid #656363; */
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: first baseline;
  justify-content: space-between;
  margin: 30px;
  height: calc(100vh - 150px);
  background-color: #222222;
  padding-left: 10px;
  padding-right: 10px;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #656363;
  border-radius: 10px;
}
</style>
