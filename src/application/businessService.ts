import { Business } from "../domain/business.js";

const businesses: Business[] = [];

export const createBusiness = (
    name: string,
    description?: string
): Business => {
    const business: Business = {
        id: crypto.randomUUID(),
        name,
        description
    };

    businesses.push(business);

    return business;
};

export const getBusinesses = (): Business[] => {
    return businesses;
};