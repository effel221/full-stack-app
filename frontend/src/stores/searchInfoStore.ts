import {ref, computed, UnwrapRef, Ref} from 'vue'
import { defineStore } from 'pinia'
import {useQuery} from "@vue/apollo-composable";
import {GET_ACTIVITIES_WITH_SEARCH} from "@/queries/queries";

type SearchTerm = {
  searchTerm: string
}

export const useSearchInfoStore = defineStore('searchInfo', () => {
  const searchTermValue: Ref<UnwrapRef<string>> = ref('')
  const enableFetch: Ref<UnwrapRef<boolean>> = ref(false)
  const variables: Ref<UnwrapRef<SearchTerm>> = ref({searchTerm: 'tour'})

  const { result } = useQuery(GET_ACTIVITIES_WITH_SEARCH,
      variables, {enabled: enableFetch})

  const loadData: Function = (variablesArgs: SearchTerm)=> {
    enableFetch.value = true
    variables.value= variablesArgs
  }

  return {  loadData, result, searchTermValue }
})
