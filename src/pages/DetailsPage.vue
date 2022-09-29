<template>
  <div class="details" v-if="classified">

    
    <div class="col-10 m-auto py-2" v-if="classified.listingType == 'Car'">
      <RouterLink  :to="{ name: 'Home' }"> 
        <i class="btn btn-dark mb-4">Back</i>
      </RouterLink>
        
      <DetailedCarCard :car="classified.listing" :seller="classified.seller" @deleteClassified="deleteClassified(classified.id)" />
    </div>
    
    <div class="col-10 m-auto py-2" v-if="classified.listingType == 'House'">
      <RouterLink  :to="{ name: 'Home' }"> 
        <i class="btn btn-dark mb-4">Back</i>
      </RouterLink>
        
      <DetailedHouseCard :house="classified.listing" :seller="classified.seller" @deleteClassified="deleteClassified(classified.id)" />
    </div>
    
    <div class="col-10 m-auto py-2" v-if="classified.listingType == 'Job'">
      <RouterLink  :to="{ name: 'Home' }"> 
        <i class="btn btn-dark mb-4">Back</i>
      </RouterLink>
        
      <DetailedJobCard :job="classified.listing" :seller="classified.seller" @deleteClassified="deleteClassified(classified.id)" />
    </div>

  </div>
  <div class="d-flex justify-content-center align-items-center" v-else>
    <img src="https://media1.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif?cid=6c09b952um0m52mj4i3ec61o3vz9jy1wu7vcresa4fjvnyeu&rid=giphy.gif&ct=s" alt="loading...">
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';
import { classifiedsService } from '../services/ClassifiedsService.js';
import Pop from '../utils/Pop.js';
import DetailedCarCard from '../components/DetailedCarCard.vue';
import DetailedHouseCard from '../components/DetailedHouseCard.vue';
import DetailedJobCard from '../components/DetailedJobCard.vue';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    async function getClassifiedById() {
      try {
        await classifiedsService.getClassifiedById(route.params.id);
      }
      catch (error) {
        Pop.error("Sorry that listing no longer exists", "[GettingClassified]");
        router.push({ name: "Home" });
      }
    }
    onMounted(() => {
      getClassifiedById();
    });
    return {
      classified: computed(() => AppState.activeClassified),
      async deleteClassified(id) {
        try {
          const yes = await Pop.confirm('Delete the Listing?')
          if (!yes) { return }
          await classifiedsService.deleteClassified(id)
        } catch (error) {
          Pop.error(error, '[Deleting Classified]')
        }
      }
    };
  },
  components: { CarCard, DetailedCarCard, DetailedHouseCard, DetailedJobCard }
}
</script>
