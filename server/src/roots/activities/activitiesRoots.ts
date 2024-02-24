// creating queries/mutations with calculation actions for activities data
import {loadData} from "../../helpers";
import {Activity, ActivityWithSupplier, SearchArguments, Supplier} from "./types";
import {getFilteredActivitiesBySearch, getActivitiesWithSuppliers} from "./utils";


const pathToActivities = 'src/resources/activities.json'
const pathToSuppliers = 'src/resources/suppliers.json'

//query to request all activities
const getActivities = async ():Promise<Activity[] | []> => {
    return await loadData(pathToActivities) || [];
}

//query for searching correct activities in title by searchTerm, provided in arguments
const getActivitiesBySearch = async (args: SearchArguments):Promise<ActivityWithSupplier[]> => {
    const activities = await loadData<Activity[]>(pathToActivities) || [];
    const filteredActivitiesBySearch : Activity[] | [] = getFilteredActivitiesBySearch(activities, args);
    if (!filteredActivitiesBySearch.length) return [];
    const suppliers = await loadData<Supplier[]>(pathToSuppliers) || [];
    return getActivitiesWithSuppliers(filteredActivitiesBySearch, suppliers);
}

export const activitiesRoots = {
    getActivities,
    getActivitiesBySearch
};


