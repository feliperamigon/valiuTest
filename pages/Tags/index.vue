<template>
  <div>
    <TagsTable></TagsTable>
  </div>
</template>

<script>
import TagsTable from '../../components/TagsTable';

export default {
  components: {
    TagsTable
  },
  head() {
    return {
      title: "Tags Manager"
    };
  }
};
</script>

<style>
</style>