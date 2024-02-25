import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import {useSearchInfoStore} from "../../stores/searchInfoStore";
import * as VueQuery from '@vue/apollo-composable'

vi.mock('@vue/apollo-composable');


describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('on loadData useQuery will be called', () => {
    const result =  [{"id": 26093,
      "price": "14$",
      "rating": 4.5,
      "specialOffer": false,
      "supplierLocation": "123 Main St 12345 Anytown USA",
      "supplierName": "John Doe",
      "title": "1-Day City Tour by Boat with Guaranteed heated Seating"}]
    VueQuery.useQuery = vi.fn().mockReturnValue({ result })
    const searchTermValue = useSearchInfoStore()
    searchTermValue.loadData({searchTerm: 'tour'})
    expect(VueQuery.useQuery).toHaveBeenCalledTimes(1)
  })
})
