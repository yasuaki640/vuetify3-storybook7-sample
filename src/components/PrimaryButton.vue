<script setup lang="ts">
type Props = {
  loading?: boolean;
  disabled?: boolean;
};
defineProps<Props>();
</script>

<template>
  <div class="text-center">
    <v-btn
      :loading="!!loading"
      :disabled="!!disabled"
      color="primary"
      class="text-capitalize"
    >
      <slot />
    </v-btn>
  </div>
</template>
