import Exchange from './abstract/hollaex.js';
import { Dictionary, Int, OHLCV, Order, OrderBook, OrderSide, OrderType } from './base/types.js';
/**
 * @class hollaex
 * @extends Exchange
 */
export default class hollaex extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchOrderBooks(symbols?: string[], limit?: Int, params?: {}): Promise<Dictionary<OrderBook>>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchTicker(symbol: string, params?: {}): Promise<import("./base/types.js").Ticker>;
    fetchTickers(symbols?: string[], params?: {}): Promise<Dictionary<import("./base/types.js").Ticker>>;
    parseTickers(response: any, symbols?: string[], params?: {}): Dictionary<import("./base/types.js").Ticker>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchOpenOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    fetchOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): Order;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<Order[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: any;
        network: string;
        info: any;
    };
    fetchDepositAddresses(codes?: any, params?: {}): Promise<{}>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawal(id: string, code?: string, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: string;
        amount: number;
        currency: any;
        status: any;
        updated: number;
        fee: any;
    }>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: string;
        amount: number;
        currency: any;
        status: any;
        updated: number;
        fee: any;
    };
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: string;
        amount: number;
        currency: any;
        status: any;
        updated: number;
        fee: any;
    }>;
    parseDepositWithdrawFee(fee: any, currency?: any): {
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    };
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<any>;
    normalizeNumberIfNeeded(number: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
