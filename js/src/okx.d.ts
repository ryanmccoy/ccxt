import Exchange from './abstract/okx.js';
export default class okx extends Exchange {
    describe(): any;
    handleMarketTypeAndParams(methodName: any, market?: any, params?: {}): any;
    convertToInstrumentType(type: any): string;
    fetchStatus(params?: {}): Promise<{
        updated: any;
        status: string;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchTime(params?: {}): Promise<number>;
    fetchAccounts(params?: {}): Promise<any[]>;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseMarkets(markets: any): any[];
    parseMarket(market: any): any;
    fetchMarketsByType(type: any, params?: {}): Promise<any[]>;
    safeNetwork(networkId: any): string;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTicker(symbol: any, params?: {}): Promise<import("./base/types.js").Ticker>;
    fetchTickersByType(type: any, symbols?: string[], params?: {}): Promise<any>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    fetchFundingRateHistory(symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    parseBalanceByType(type: any, response: any): import("./base/types.js").Balances;
    parseTradingBalance(response: any): import("./base/types.js").Balances;
    parseFundingBalance(response: any): import("./base/types.js").Balances;
    parseTradingFee(fee: any, market?: any): {
        info: any;
        symbol: any;
        maker: number;
        taker: number;
    };
    fetchTradingFee(symbol: any, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: number;
        taker: number;
    }>;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    parseIds(ids: any): any;
    cancelOrders(ids: any, symbol?: string, params?: {}): Promise<import("./base/types.js").Order[]>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): any;
    fetchOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchCanceledOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchMyTrades(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchOrderTrades(id: any, symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchLedger(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: any, currency?: any): {
        id: string;
        info: any;
        timestamp: number;
        datetime: string;
        account: any;
        referenceId: string;
        referenceAccount: any;
        type: string;
        currency: any;
        symbol: any;
        amount: number;
        before: any;
        after: number;
        status: string;
        fee: any;
    };
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: string;
        network: string;
        info: any;
    };
    fetchDepositAddressesByNetwork(code: any, params?: {}): Promise<{}>;
    fetchDepositAddress(code: any, params?: {}): Promise<any>;
    withdraw(code: any, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: any;
        currency: any;
        amount: number;
        network: any;
        addressFrom: string;
        addressTo: string;
        address: string;
        tagFrom: any;
        tagTo: string;
        tag: string;
        status: string;
        type: any;
        updated: any;
        txid: string;
        timestamp: number;
        datetime: string;
        fee: {
            currency: any;
            cost: any;
        };
    }>;
    fetchDeposits(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchDeposit(id: any, code?: any, params?: {}): Promise<{
        info: any;
        id: any;
        currency: any;
        amount: number;
        network: any;
        addressFrom: string;
        addressTo: string;
        address: string;
        tagFrom: any;
        tagTo: string;
        tag: string;
        status: string;
        type: any;
        updated: any;
        txid: string;
        timestamp: number;
        datetime: string;
        fee: {
            currency: any;
            cost: any;
        };
    }>;
    fetchWithdrawals(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchWithdrawal(id: any, code?: any, params?: {}): Promise<{
        info: any;
        id: any;
        currency: any;
        amount: number;
        network: any;
        addressFrom: string;
        addressTo: string;
        address: string;
        tagFrom: any;
        tagTo: string;
        tag: string;
        status: string;
        type: any;
        updated: any;
        txid: string;
        timestamp: number;
        datetime: string;
        fee: {
            currency: any;
            cost: any;
        };
    }>;
    parseTransactionStatus(status: any): string;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: any;
        currency: any;
        amount: number;
        network: any;
        addressFrom: string;
        addressTo: string;
        address: string;
        tagFrom: any;
        tagTo: string;
        tag: string;
        status: string;
        type: any;
        updated: any;
        txid: string;
        timestamp: number;
        datetime: string;
        fee: {
            currency: any;
            cost: any;
        };
    };
    fetchLeverage(symbol: any, params?: {}): Promise<any>;
    fetchPosition(symbol: any, params?: {}): Promise<any>;
    fetchPositions(symbols?: string[], params?: {}): Promise<any>;
    parsePosition(position: any, market?: any): {
        info: any;
        id: any;
        symbol: any;
        notional: number;
        marginMode: string;
        liquidationPrice: number;
        entryPrice: number;
        unrealizedPnl: number;
        percentage: number;
        contracts: number;
        contractSize: number;
        markPrice: number;
        side: string;
        hedged: boolean;
        timestamp: number;
        datetime: string;
        maintenanceMargin: number;
        maintenanceMarginPercentage: number;
        collateral: number;
        initialMargin: number;
        initialMarginPercentage: number;
        leverage: number;
        marginRatio: number;
    };
    transfer(code: any, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
    }>;
    parseTransfer(transfer: any, currency?: any): {
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
    };
    fetchTransfer(id: any, code?: any, params?: {}): Promise<{
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
    }>;
    sign(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    parseFundingRate(contract: any, market?: any): {
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: number;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: number;
        nextFundingTimestamp: number;
        nextFundingDatetime: string;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    };
    fetchFundingRate(symbol: any, params?: {}): Promise<{
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: number;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: number;
        nextFundingTimestamp: number;
        nextFundingDatetime: string;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    }>;
    fetchFundingHistory(symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    setLeverage(leverage: any, symbol?: string, params?: {}): Promise<any>;
    setPositionMode(hedged: any, symbol?: string, params?: {}): Promise<any>;
    setMarginMode(marginMode: any, symbol?: string, params?: {}): Promise<any>;
    fetchBorrowRates(params?: {}): Promise<{}>;
    fetchBorrowRate(code: any, params?: {}): Promise<{
        currency: any;
        rate: number;
        period: number;
        timestamp: number;
        datetime: string;
        info: any;
    }>;
    parseBorrowRate(info: any, currency?: any): {
        currency: any;
        rate: number;
        period: number;
        timestamp: number;
        datetime: string;
        info: any;
    };
    parseBorrowRateHistories(response: any, codes: any, since: any, limit: any): {};
    parseBorrowRateHistory(response: any, code: any, since: any, limit: any): any;
    fetchBorrowRateHistories(codes?: string[], since?: any, limit?: any, params?: {}): Promise<{}>;
    fetchBorrowRateHistory(code: any, since?: any, limit?: any, params?: {}): Promise<any>;
    modifyMarginHelper(symbol: any, amount: any, type: any, params?: {}): Promise<{
        info: any;
        type: string;
        amount: number;
        code: any;
        symbol: any;
        status: string;
    }>;
    parseMarginModification(data: any, market?: any): {
        info: any;
        type: string;
        amount: number;
        code: any;
        symbol: any;
        status: string;
    };
    reduceMargin(symbol: any, amount: any, params?: {}): Promise<{
        info: any;
        type: string;
        amount: number;
        code: any;
        symbol: any;
        status: string;
    }>;
    addMargin(symbol: any, amount: any, params?: {}): Promise<{
        info: any;
        type: string;
        amount: number;
        code: any;
        symbol: any;
        status: string;
    }>;
    fetchMarketLeverageTiers(symbol: any, params?: {}): Promise<any[]>;
    parseMarketLeverageTiers(info: any, market?: any): any[];
    fetchBorrowInterest(code?: string, symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    parseBorrowInterest(info: any, market?: any): {
        symbol: string;
        marginMode: string;
        currency: any;
        interest: number;
        interestRate: number;
        amountBorrowed: number;
        timestamp: number;
        datetime: string;
        info: any;
    };
    borrowMargin(code: any, amount: any, symbol?: string, params?: {}): Promise<any>;
    repayMargin(code: any, amount: any, symbol?: string, params?: {}): Promise<any>;
    parseMarginLoan(info: any, currency?: any): {
        id: any;
        currency: any;
        amount: number;
        symbol: any;
        timestamp: any;
        datetime: any;
        info: any;
    };
    fetchOpenInterest(symbol: any, params?: {}): Promise<{
        symbol: any;
        baseVolume: any;
        quoteVolume: number;
        openInterestAmount: number;
        openInterestValue: number;
        timestamp: number;
        datetime: string;
        info: any;
    }>;
    fetchOpenInterestHistory(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    parseOpenInterest(interest: any, market?: any): {
        symbol: any;
        baseVolume: any;
        quoteVolume: number;
        openInterestAmount: number;
        openInterestValue: number;
        timestamp: number;
        datetime: string;
        info: any;
    };
    setSandboxMode(enable: any): void;
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<{}>;
    parseDepositWithdrawFees(response: any, codes?: string[], currencyIdKey?: any): {};
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): void;
}
