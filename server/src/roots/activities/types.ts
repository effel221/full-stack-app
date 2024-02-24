//collection of types/interfaces for activities module (typescript)
export type Activity = {
    id: number
    title: string
    price: number
    currency: string
    rating: number
    specialOffer: boolean
    supplierId: number
}

export type SearchArguments = {
    searchTerm: string
}

export type Supplier = {
    id: number
    name: string
    address: string
    zip: string
    city: string
    country: string
}

export type ActivityWithSupplier = {
    id: number
    title: string
    price: string
    rating: number
    specialOffer: boolean
    supplierName: string
    supplierLocation: string
}
