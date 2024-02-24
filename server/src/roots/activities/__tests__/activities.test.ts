import {describe, expect, test} from '@jest/globals';
import {getActivitiesWithSuppliers, getFilteredActivitiesBySearch} from "../utils";
import {activitiesRoots} from "../activitiesRoots";
import * as helpers from '../../../helpers';

jest.mock('../../../helpers');

const activityMock =  [{
    "id": 58351,
    "title": "Museum Pass Berlin: 3-Day Entry to Over 40 Top Museums",
    "price": 14,
    "currency": "$",
    "rating": 4.5,
    "specialOffer": false,
    "supplierId": 250
  },
  {
    "id": 26093,
    "title": "1-Day City Tour by Boat with Guaranteed heated Seating",
    "price": 14,
    "currency": "$",
    "rating": 4.5,
    "specialOffer": false,
    "supplierId": 1
  }
]

const supplierMock = [{
    "id": 1,
    "name": "John Doe",
    "address": "123 Main St",
    "zip": "12345",
    "city": "Anytown",
    "country": "USA"
}]

describe('Activities actions test collection', () => {
    beforeEach(() => {
        helpers.loadData.mockClear();
    });
    test('getFilteredActivitiesBySearch return all activities if searchTerm exist in all items', () => {
        expect(getFilteredActivitiesBySearch(activityMock, {searchTerm: ""}).length).toBe(2);
    });

    test('getFilteredActivitiesBySearch return all activities if searchTerm empty', () => {
        expect(getFilteredActivitiesBySearch(activityMock, {searchTerm: ""}).length).toBe(2);
    });

    test('getFilteredActivitiesBySearch return some results', () => {
        expect(getFilteredActivitiesBySearch(activityMock, {searchTerm: "Museum"}).length).toBe(1);
    });

    test('getFilteredActivitiesBySearch return empty array if no results were found', () => {
        expect(getFilteredActivitiesBySearch(activityMock, {searchTerm: "Tanja"}).length).toBe(0);
    });

    test('getActivitiesWithSuppliers return results in case of full data', () => {
        expect(getActivitiesWithSuppliers(activityMock, supplierMock).length).toBe(2);
    });

    test('getActivitiesWithSuppliers return results without suppliers info', () => {
        expect(getActivitiesWithSuppliers(activityMock, []).length).toBe(2);
    });

    test('getActivitiesWithSuppliers return empty array if no arguments', () => {
        expect(getActivitiesWithSuppliers([], [])).toStrictEqual([]);
    });

    test('getActivitiesBySearch return empty array in case of no match', async () => {
        const data = await activitiesRoots.getActivitiesBySearch({searchTerm: "Tanja"})
        expect(data).toStrictEqual([]);
    });

    test('getActivitiesBySearch return empty array in case of no match', async () => {
        helpers.loadData.mockReturnValueOnce(activityMock)
        helpers.loadData.mockReturnValueOnce(supplierMock)
        const result =  [{"id": 26093,
            "price": "14$",
            "rating": 4.5,
            "specialOffer": false,
            "supplierLocation": "123 Main St 12345 Anytown USA",
            "supplierName": "John Doe",
            "title": "1-Day City Tour by Boat with Guaranteed heated Seating"}]
        const data = await activitiesRoots.getActivitiesBySearch({searchTerm: "heated"})
        expect(data).toStrictEqual(result);
    });
});
