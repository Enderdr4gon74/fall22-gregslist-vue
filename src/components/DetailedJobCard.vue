<template>
  <div class="card">
    <div class="card-body row">
      <div class="col-9">
      <h4 class="text-primary">{{job.company}}</h4>
      <h6 class="text-warning">{{job.jobTitle}}</h6>
      <h6 class="text-success"><strong>${{job.rate}}</strong></h6>
      <h6 class="text-dark">{{job.hours}} hours a week</h6>
      <p class="text-dark">{{job.description}}</p>
      </div>
      <div class="col-3 justify-content-end align-items-end d-flex gap-1 p-2">
        <div class="d-flex justify-content-end align-items-center">
          <img :src="seller.picture" :alt="seller.name" :title="seller.name" height="60" class="rounded">
          <i class="mdi mdi-delete-forever fs-4 selectable rounded ms-1 me-2" @click.stop="$emit('deleteClassified')"
            v-if="account.id == seller.id"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { Job } from '../models/Job.js';
import { SellerProfile } from '../models/SellerProfile.js';

export default {
  props: {
    job: { type: Job, required: true },
    seller: { type: SellerProfile, required: true }
  },
  setup(props, { emit }) {

    onMounted(() => {
      console.log('neat huh???')
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
