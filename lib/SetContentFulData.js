import { createClient } from "contentful";
import logger from "./helpers/Logger";

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESTOKEN,
});

const SetContentFulData = async (type, order) => {
    try {
        const entries = await client.getEntries({
            content_type: type,
            order: order,
        });

        if (entries.items) return entries.items;
        return [];
    } catch (error) {
        logger("error", error);
    }
};

export const setOneContentfulData = async (type, id) => {
    try {
        const entries = await client.getEntries({
            content_type: type,
            "fields.id[match]": id,
        });

        if (entries.items) return entries.items;
        return [];
    } catch (error) {
        logger("error", error.message);
    }
};

export const setIDs = async (type) => {
    try {
        const entries = await client.getEntries({
            content_type: type,
            select: "fields.id",
        });

        if (entries.items) return entries.items;
        return [];
    } catch (error) {
        logger("error", error.message);
    }
};

export default SetContentFulData;
