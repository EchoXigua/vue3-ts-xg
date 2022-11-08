<template>
  <div class="user">
    <div class="search">
      <xg-form v-bind="searchConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XgForm from '@/base-ui/form/index'
import { searchConfig } from './config/search.config'

export default defineComponent({
  components: { XgForm },
  name: 'user',
  setup() {
    return {
      searchConfig
    }
  }
})
</script>

<style scoped></style>
