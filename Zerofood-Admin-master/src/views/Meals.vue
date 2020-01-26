<template>
  <div class="meals">
    <h1 class="headline">Meals</h1>
    <div class="meals-table mt-6">
      <MealsTable />
    </div>
  </div>
</template>

<script>
import MealsTable from "@/components/MealsTable";
export default {
  components: {
    MealsTable
  }
};
</script>
