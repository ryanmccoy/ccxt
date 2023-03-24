import Exchange from './abstract/hitbtc3.js';
export default class hitbtc3 extends Exchange {
    describe(): any;
    nonce(): number;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    safeNetwork(networkId: any): any;
    createDepositAddress(code: any, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: string;
        network: any;
        info: any;
    }>;
    fetchDepositAddress(code: any, params?: {}): Promise<{
        info: any;
        address: string;
        tag: string;
        code: any;
        currency: any;
        network: any;
    }>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchTicker(symbol: any, params?: {}): Promise<any>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<any[]>;
    fetchMyTrades(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTransactionsHelper(types: any, code: any, since: any, limit: any, params: any): Promise<any>;
    parseTransactionStatus(status: any): string;
    parseTransactionType(type: any): string;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        txid: string;
        type: string;
        code: any;
        currency: any;
        network: any;
        amount: number;
        status: string;
        timestamp: number;
        datetime: string;
        address: string;
        addressFrom: string;
        addressTo: string;
        tag: string;
        tagFrom: any;
        tagTo: string;
        updated: number;
        comment: any;
        fee: {
            currency: any;
            cost: any;
            rate: any;
        };
    };
    fetchTransactions(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchDeposits(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchOrderBooks(symbols?: string[], limit?: any, params?: {}): Promise<{}>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<any>;
    parseTradingFee(fee: any, market?: any): {
        info: any;
        symbol: any;
        taker: number;
        maker: number;
    };
    fetchTradingFee(symbol: any, params?: {}): Promise<{
        info: any;
        symbol: any;
        taker: number;
        maker: number;
    }>;
    fetchTradingFees(symbols?: string[], params?: {}): Promise<{}>;
    fetchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchClosedOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    fetchOrderTrades(id: any, symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchOpenOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchOpenOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<import("./base/types.js").Order[]>;
    cancelOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    editOrder(id: any, symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): any;
    transfer(code: any, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
        info: any;
    }>;
    parseTransfer(transfer: any, currency?: any): {
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
        info: any;
    };
    convertCurrencyNetwork(code: any, amount: any, fromNetwork: any, toNetwork: any, params: any): Promise<{
        info: any;
    }>;
    withdraw(code: any, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        type: string;
        code: any;
        currency: any;
        network: any;
        amount: number;
        status: string;
        timestamp: number;
        datetime: string;
        address: string;
        addressFrom: string;
        addressTo: string;
        tag: string;
        tagFrom: any;
        tagTo: string;
        updated: number;
        comment: any;
        fee: {
            currency: any;
            cost: any;
            rate: any;
        };
    }>;
    fetchFundingRateHistory(symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchPositions(symbols?: string[], params?: {}): Promise<any[]>;
    fetchPosition(symbol: any, params?: {}): Promise<{
        info: any;
        id: any;
        symbol: any;
        notional: any;
        marginMode: string;
        marginType: string;
        liquidationPrice: any;
        entryPrice: any;
        unrealizedPnl: any;
        percentage: any;
        contracts: any;
        contractSize: any;
        markPrice: any;
        side: any;
        hedged: any;
        timestamp: number;
        datetime: string;
        maintenanceMargin: any;
        maintenanceMarginPercentage: any;
        collateral: any;
        initialMargin: any;
        initialMarginPercentage: any;
        leverage: number;
        marginRatio: any;
    }>;
    parsePosition(position: any, market?: any): {
        info: any;
        id: any;
        symbol: any;
        notional: any;
        marginMode: string;
        marginType: string;
        liquidationPrice: any;
        entryPrice: any;
        unrealizedPnl: any;
        percentage: any;
        contracts: any;
        contractSize: any;
        markPrice: any;
        side: any;
        hedged: any;
        timestamp: number;
        datetime: string;
        maintenanceMargin: any;
        maintenanceMarginPercentage: any;
        collateral: any;
        initialMargin: any;
        initialMarginPercentage: any;
        leverage: number;
        marginRatio: any;
    };
    fetchFundingRate(symbol: any, params?: {}): Promise<{
        info: any;
        symbol: any;
        markPrice: number;
        indexPrice: number;
        interestRate: number;
        estimatedSettlePrice: any;
        timestamp: number;
        datetime: string;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: number;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    }>;
    parseFundingRate(contract: any, market?: any): {
        info: any;
        symbol: any;
        markPrice: number;
        indexPrice: number;
        interestRate: number;
        estimatedSettlePrice: any;
        timestamp: number;
        datetime: string;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: number;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    };
    modifyMarginHelper(symbol: any, amount: any, type: any, params?: {}): Promise<any>;
    parseMarginModification(data: any, market?: any): {
        info: any;
        type: any;
        amount: any;
        code: string;
        symbol: any;
        status: any;
    };
    reduceMargin(symbol: any, amount: any, params?: {}): Promise<any>;
    addMargin(symbol: any, amount: any, params?: {}): Promise<any>;
    fetchLeverage(symbol: any, params?: {}): Promise<number>;
    setLeverage(leverage: any, symbol?: string, params?: {}): Promise<any>;
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<any>;
    parseDepositWithdrawFee(fee: any, currency?: any): any;
    handleMarginModeAndParams(methodName: any, params?: {}, defaultValue?: any): any[];
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): void;
    sign(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
}
