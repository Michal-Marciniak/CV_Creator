<template>
  <div id="app" class="container-fluid">
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

<style></style>
