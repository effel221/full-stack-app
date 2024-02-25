import gql from 'graphql-tag'

export const GET_ACTIVITIES_WITH_SEARCH = gql`
    query getActivitiesBySearch($searchTerm: String!) {
        getActivitiesBySearch(searchTerm: $searchTerm) {
            id
            title
            price
            rating
            specialOffer
            supplierName
            supplierLocation
        }
    }
`

