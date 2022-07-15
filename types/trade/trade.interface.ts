export interface TradeEntity {
    id?: string;
    currency: string;
    boughtFor: number;
    amount: number;
    price: number;
    userId: string;
    isActive?: boolean;
    boughtIn?: Date;
    soldIn?:Date;
    profit?: number;
}