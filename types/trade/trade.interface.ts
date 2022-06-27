export interface TradeEntity {
    id?: string;
    currency: string;
    boughtFor: number;
    amount: number;
    price: number;
    boughtIn?: Date;
    isActive?: boolean,
    userId: string
}