<template>
  <div class="MainContent">
    <ContentLeftStep1
      class="step1_component"
      v-if="currentComponent === 'step1_component'"
    />
    <ContentLeftStep2
      class="step2_component"
      v-else-if="currentComponent === 'step2_component'"
    />
    <ContentRight class="content-right" />
  </div>
</template>

<script>
import ContentLeftStep1 from "./ContentLeft/ContentLeftStep1";
import ContentLeftStep2 from "./ContentLeft/ContentLeftStep2";
import ContentRight from "./ContentRight/ContentRight";

export default {
  components: {
    ContentLeftStep1,
    ContentLeftStep2,
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
  margin: 3vh 0;
}

@media screen and (max-width: 1100px) {
  .MainContent {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
