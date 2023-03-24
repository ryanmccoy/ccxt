import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default abstract class Exchange extends _Exchange {
    abstract publicGetTime(params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarkets(params?: {}): Promise<implicitReturnType>;
    abstract publicGetAssets(params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketBook(params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketTrades(params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketCandles(params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickerPrice(params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickerBook(params?: {}): Promise<implicitReturnType>;
    abstract publicGetTicker24h(params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccount(params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrders(params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersOpen(params?: {}): Promise<implicitReturnType>;
    abstract privateGetTrades(params?: {}): Promise<implicitReturnType>;
    abstract privateGetBalance(params?: {}): Promise<implicitReturnType>;
    abstract privateGetDeposit(params?: {}): Promise<implicitReturnType>;
    abstract privateGetDepositHistory(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawalHistory(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrder(params?: {}): Promise<implicitReturnType>;
    abstract privatePostWithdrawal(params?: {}): Promise<implicitReturnType>;
    abstract privatePutOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrders(params?: {}): Promise<implicitReturnType>;
}
