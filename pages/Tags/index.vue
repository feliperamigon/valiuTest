<template>
  <div>
    <TagsTable :tags="tags"></TagsTable>
  </div>
</template>

<script>
import TagsTable from '../../components/TagsTable';
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    TagsTable
  },
  head() {
    return {
      title: "Tags Manager"
    };
  },
  data () {
    return {
      tags: []
    }
  },
  sockets: {
    updateTags(tags) {
      this.updateTags(tags);
    }
  }
};
</script>

<style>
</style>