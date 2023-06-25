<script setup lang="ts">
type Props = {
  text: string;
  disabled?: boolean;
  loading?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  disabled: false,
});
</script>

<template>
  <div class="text-center">
    <v-btn
      :loading="props.loading"
      :disabled="props.disabled"
      color="primary"
      class="text-capitalize"
      :text="props.text"
    />
  </div>
</template>
