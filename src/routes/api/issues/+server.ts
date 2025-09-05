import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import { type RequestHandler } from '@sveltejs/kit';
import { parseQuery } from '$lib/driver';

const prisma = new PrismaClient();

export const GET: RequestHandler = async ({ url }) => {

    const query = url.searchParams.get('query');
    let prismaWhere = {};

    if (query) {
        try {
            const prismaQuery = parseQuery(query);
            console.log("Prisma Query:", JSON.stringify(prismaQuery));
            prismaWhere = prismaQuery.where || {};
            // TODO: Send this query to your backend API
            // Example: await fetch('/api/issues', { method: 'POST', body: JSON.stringify(prismaQuery) });
        } catch (e) {
            console.error("Error parsing query:", e);
            // error = (e as Error).message || "Unknown parsing error";
            return json({ error: (e as Error).message }, { status: 400 });
        }
    }


    try {
        const issues = await prisma.issue.findMany({
            where: prismaWhere
        });

        return json(issues);
    } catch (error) {
        console.error('Error fetching issues:', error);
        return json({ error: 'Failed to fetch issues' }, { status: 500 });
    }
};