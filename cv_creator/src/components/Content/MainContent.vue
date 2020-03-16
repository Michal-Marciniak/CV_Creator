<template>
  <div class="MainContent">
    <ContentLeftStep1 v-if="currentComponent === 'step1_component'" />
    <ContentLeftStep2 v-else-if="currentComponent === 'step2_component'" />
    <ContentLeftStep3 v-else-if="currentComponent === 'step3_component'" />
    <ContentRight class="content-right" />
  </div>
</template>

<script>
import ContentLeftStep1 from "./ContentLeft/ContentLeftStep1";
import ContentLeftStep2 from "./ContentLeft/ContentLeftStep2";
import ContentLeftStep3 from "./ContentLeft/ContentLeftStep3";
import ContentRight from "./ContentRight/ContentRight";

export default {
  components: {
    ContentLeftStep1,
    ContentLeftStep2,
    ContentLeftStep3,
    ContentRight
  },
  computed: {
    currentComponent() {
      return this.$store.state.current_component;
    }
  }
};
</script>

<style scoped>
.MainContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5vw;
}
.content-right {
  margin-top: 3vh;
}

@media screen and (max-width: 1100px) {
  .MainContent {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
