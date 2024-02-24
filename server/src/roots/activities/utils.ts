//useful utils for activities module
import {Activity, ActivityWithSupplier, SearchArguments, Supplier} from "./types";

// filter activities items titles with  provided searchTerm word
export const getFilteredActivitiesBySearch = (activities: Activity[], args: SearchArguments) => {
    return activities.filter(({title}:Activity) => {
    const formattedTitle = title.toLocaleLowerCase();
    const formattedTerm = args['searchTerm'].toLocaleLowerCase();
    return formattedTitle.includes(formattedTerm);
})};

//return as output filtered activities, respectfully combined with data from suppliers by id
export const getActivitiesWithSuppliers = (filteredActivitiesBySearch: Activity[],
    suppliers:Supplier[]): ActivityWithSupplier[]  => {
    return filteredActivitiesBySearch.map((activity: Activity) => {
        const findSupplierInfo = suppliers.find(({id}) => activity.supplierId === id);
        const {id, title, price = 0, currency = '', rating = 0, specialOffer = false} = activity;
        const name = findSupplierInfo?.name || '';
        const address = findSupplierInfo?.address || '';
        const zip = findSupplierInfo?.zip || '';
        const city = findSupplierInfo?.city || '';
        const country = findSupplierInfo?.country || '';
        return {
            id,
            title,
            price: `${price}${currency}`,
            rating,
            specialOffer,
            supplierName: name,
            supplierLocation: (`${address} ${zip} ${city} ${country}`).trim()
        }
    })
};

