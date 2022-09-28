<template>
  <div class="card rounded">
    <img :src="house.imgUrl" alt="house" class="img-fluid rounded-top">
    <div class="card-body">
      <h4>{{house.bedrooms}} Bedroom, {{house.bathrooms}} Bath, {{house.levels}} Story</h4>
      <div class="d-flex justify-content-between">
        <h6 class="text-info">Year: {{house.year}}</h6>
        <h6 class="text-success">Cost: ${{house.price}}</h6>
      </div>
      <p>{{house.description}}</p>
      <i class="mdi mdi-delete-forever fs-4 selectable rounded" @click.stop="$emit('deleteClassified')"
        v-if="account.id == seller.id"></i>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { House } from '../models/House.js';
import { SellerProfile } from '../models/SellerProfile.js';

export default {
  props: {
    house: { type: House, required: true },
    seller: { type: SellerProfile, required: true }
  },
  setup(props, { emit }) {

    onMounted(() => {
      // console.log('neat huh???')
    })


    return {
      account: computed(() => AppState.account),
      deleteClassified() {
        emit('deleteClassified')
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
