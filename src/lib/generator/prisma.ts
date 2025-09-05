import QlVisitor from "$lib/QlVisitor";
interface PrismaWhere {
    AND?: PrismaWhere[];
    OR?: PrismaWhere[];
    NOT?: PrismaWhere;
    [key: string]: any;
}

interface PrismaQuery {
    where: PrismaWhere;
}


class QueryToPrismaGenerator extends QlVisitor<any> {
    private prismaQuery: PrismaQuery = { where: {} };
    private currentConditions: PrismaWhere[] = [];

    constructor() {
        super();
    }

    public generate(): PrismaQuery {
        return this.prismaQuery;
    }

    visitQuery = (ctx: any) => {
        const whereClause = this.visit(ctx.expression());
        this.prismaQuery.where = whereClause || {};
        return this.prismaQuery;
    };

    visitOrExpression = (ctx: any) => {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        return { OR: [left, right].filter(Boolean) };
    };

    visitAndExpression = (ctx: any) => {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        return { AND: [left, right].filter(Boolean) };
    };

    visitNotExpression = (ctx: any) => {
        const expr = this.visit(ctx.expression());
        return { NOT: expr };
    };

    visitParenthesizedExpression = (ctx: any) => {
        return this.visit(ctx.expression());
    };

    visitAtomicExpression = (ctx: any) => {
        return this.visit(ctx.condition());
    };

    visitComparisonCondition = (ctx: any) => {
        const field = this.visit(ctx.field());
        const operator = ctx.operator().getText();
        const value = this.visit(ctx.value());

        const condition: any = {};
        switch (operator) {
            case '=':
                condition[field] = value;
                break;
            case '!=':
            case '<>':
                condition[field] = { not: value };
                break;
            case '<':
                condition[field] = { lt: value };
                break;
            case '<=':
                condition[field] = { lte: value };
                break;
            case '>':
                condition[field] = { gt: value };
                break;
            case '>=':
                condition[field] = { gte: value };
                break;
        }
        return condition;
    };

    visitInCondition = (ctx: any) => {
        const field = this.visit(ctx.field());
        const values = this.visit(ctx.valueList());
        const condition: any = {};
        condition[field] = { in: values };
        return condition;
    };

    visitNotInCondition = (ctx: any) => {
        const field = this.visit(ctx.field());
        const values = this.visit(ctx.valueList());
        const condition: any = {};
        condition[field] = { notIn: values };
        return condition;
    };

    visitContainsCondition = (ctx: any) => {
        const field = this.visit(ctx.field());
        const value = this.visit(ctx.value());
        const condition: any = {};
        condition[field] = { contains: value };
        return condition;
    };

    visitNotContainsCondition = (ctx: any) => {
        const field = this.visit(ctx.field());
        const value = this.visit(ctx.value());
        const condition: any = {};
        condition[field] = { not: { contains: value } };
        return condition;
    };

    visitIsEmptyCondition = (ctx: any) => {
        const field = this.visit(ctx.field());
        const condition: any = {};
        condition[field] = null;
        return condition;
    };

    visitIsNotEmptyCondition = (ctx: any) => {
        const field = this.visit(ctx.field());
        const condition: any = {};
        condition[field] = { not: null };
        return condition;
    };

    // visitWasCondition = (ctx: WasConditionContext) => {
    //     const field = this.visit(ctx.field());
    //     const value = this.visit(ctx.value());
    //     const condition: any = {};
    //     condition[`${field}_was`] = value;
    //     return condition;
    // };

    // visitChangedCondition = (ctx: ChangedConditionContext) => {
    //     const field = this.visit(ctx.field());
    //     const condition: any = {};
    //     condition[`${field}_changed`] = true;
    //     return condition;
    // };

    visitField = (ctx: any) => {
        return ctx.getText();
    };

    visitValueList = (ctx: any) => {
        const values = [];
        for (let i = 0; i < ctx.children.length; i++) {
            const child = ctx.children[i];
            // Skip LPAREN, RPAREN, and COMMA tokens, only process value nodes
            if (child.constructor.name.includes('ValueContext')) {
                values.push(this.visit(child));
            }
        }
        return values;
    };

    visitStringValue = (ctx: any) => {
        const text = ctx.getText();
        return text.slice(1, -1); // Remove quotes
    };

    visitNumberValue = (ctx: any) => {
        return parseFloat(ctx.getText());
    };

    visitBooleanValue = (ctx: any) => {
        return ctx.getText().toLowerCase() === 'true';
    };

    visitDateValue = (ctx: any) => {
        return new Date(ctx.getText());
    };

    visitNullValue = (ctx: any) => {
        return null;
    };

    visitFunctionValue = (ctx: any) => {
        const functionCtx = ctx.function_();
        const functionName = functionCtx.IDENTIFIER().getText();
        const args = functionCtx.value() ? functionCtx.value().map(v => this.visit(v)) : [];

        switch (functionName.toLowerCase()) {
            case 'now':
                return new Date();
            case 'today':
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return today;
            default:
                return { [functionName]: args };
        }
    };

}

export default QueryToPrismaGenerator;