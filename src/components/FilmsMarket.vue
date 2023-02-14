<template>
  <div class="input_container">
    <InputSearch />
  </div>
  <div class="items_container">
    <MarketItems />
  </div>
</template>

<script>
import MarketItems from "@/components/FimsMarket/FilmsMarketItems.vue";
import InputSearch from "@/components/FimsMarket/FilmsMarketSearch.vue";

export default {
  components: { InputSearch, MarketItems },
};
</script>

<style scoped>
.input_container {
  margin: 20px auto;
}

.items_container {
  width: 700px;
  margin: auto;
}
</style>
