import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default abstract class Exchange extends _Exchange {
    abstract publicGetRateAll(params?: {}): Promise<implicitReturnType>;
    abstract publicGetRatePair(params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderbookPair(params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradehistoryPair(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPair(params?: {}): Promise<implicitReturnType>;
    abstract publicGetCurrency(params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderbookPairDepth(params?: {}): Promise<implicitReturnType>;
    abstract privateGetBalancesExchangeBalances(params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrderPairOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrderPair(params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradePair(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderPair(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderPairOrderIdCancel(params?: {}): Promise<implicitReturnType>;
}
