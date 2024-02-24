// activities module schema for all graphql mutations/queries with types
export const ActivitySchema = `
  type Activity {
      id: String!
      title: String!
      price: Float
      currency: String
      rating: String
      specialOffer: Boolean
      supplierId: Int
  }
`

export const ActivityWithSupplierSchema = `
  type ActivityWithSupplier {
    id: String!
    title: String!
    price: String
    rating: String
    specialOffer: Boolean    
    supplierName: String
    supplierLocation: String
  }
`

export const allActivitiesSchemasTypes = `
  ${ActivitySchema}
  ${ActivityWithSupplierSchema}
`

export const activitiesQueries = `
  getActivities: [Activity]
  getActivitiesBySearch(searchTerm: String!) : [ActivityWithSupplier]
`
