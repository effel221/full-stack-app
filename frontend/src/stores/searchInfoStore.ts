import {ref} from 'vue'
import { defineStore } from 'pinia'
import {useQuery} from "@vue/apollo-composable";
import {GET_ACTIVITIES_WITH_SEARCH} from "@/queries/queries";

type SearchTerm = {
  searchTerm: string
}

export const useSearchInfoStore = defineStore('searchInfo', () => {
  const searchTermValue = ref('')
  const enableFetch = ref(false)
  const variables = ref({searchTerm: ''})

  const { result } = useQuery(GET_ACTIVITIES_WITH_SEARCH,
      variables, {enabled: enableFetch})

  const loadData: Function = (variablesArgs: SearchTerm)=> {
    enableFetch.value = true
    variables.value= variablesArgs
  }

  return {  loadData, result, searchTermValue }
})
