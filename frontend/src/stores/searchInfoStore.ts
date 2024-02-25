import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useQuery} from "@vue/apollo-composable";
import {GET_ACTIVITIES_WITH_SEARCH} from "@/queries/queries";

export const useSearchInfoStore = defineStore('searchInfo', () => {
  const searchTermValue = ref('')
  const enableFetch = ref(false)
  const variables = ref({searchTerm: 'tour'})

  const { result } = useQuery(GET_ACTIVITIES_WITH_SEARCH,
      variables, {enabled: enableFetch})

  const loadData = (variablesArgs)=> {
    enableFetch.value = true
    variables.value= variablesArgs
  }

  return {  loadData, result, searchTermValue }
})
