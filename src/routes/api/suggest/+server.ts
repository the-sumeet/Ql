import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

// Allowed fields on Issue for value suggestions
const ISSUE_FIELDS = new Set([
    'key',
    'title',
    'description',
    'status',
    'priority',
    'type'
]);

export const GET: RequestHandler = async ({ url }) => {
    const field = url.searchParams.get('field')?.trim() ?? '';
    const term = url.searchParams.get('term')?.trim() ?? '';
    const limitParam = url.searchParams.get('limit');
    const limit = Math.min(Math.max(Number(limitParam ?? '15') || 15, 1), 100);

    if (!field || !ISSUE_FIELDS.has(field)) {
        return json({ error: 'Invalid or missing field' }, { status: 400 });
    }

    try {
        // Build a query to fetch distinct values for the requested field
        // For string fields, optionally filter by `term` using contains
        // For enum fields, we ignore `term` filter (enums don't support contains)
        const select: Record<string, true> = { [field]: true } as any;

        const where: any = {};
        if (term && (field === 'title' || field === 'description' || field === 'key')) {
            where[field] = { contains: term };
        }

        const rows = await prisma.issue.findMany({
            select,
            where,
            distinct: [field as any],
            take: limit,
            orderBy: { [field]: 'asc' } as any
        });

        const values = rows
            .map((r: any) => r[field])
            .filter((v: any) => v !== null && v !== undefined);

        return json(values);
    } catch (err) {
        console.error('Error fetching suggestions:', err);
        return json({ error: 'Failed to fetch suggestions' }, { status: 500 });
    }
};

