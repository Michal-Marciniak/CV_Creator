<template>
  <div id="app" class="container-fluid appContainer">
    <Header />
    <MainContent />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import MainContent from "./components/Content/MainContent";

export default {
  name: "App",
  components: {
    Header,
    MainContent
  }
};
</script>

<style>
.appContainer {
  padding-top: 3vh;
}
</style>
