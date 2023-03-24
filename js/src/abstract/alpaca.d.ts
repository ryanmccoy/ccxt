import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default abstract class Exchange extends _Exchange {
    abstract marketsGetAssetsPublicBeta(params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccount(params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrders(params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateGetPositions(params?: {}): Promise<implicitReturnType>;
    abstract privateGetPositionsSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountActivitiesActivityType(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrders(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrders(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersOrderId(params?: {}): Promise<implicitReturnType>;
    abstract cryptoPublicGetCryptoLatestOrderbooks(params?: {}): Promise<implicitReturnType>;
    abstract cryptoPublicGetCryptoTrades(params?: {}): Promise<implicitReturnType>;
    abstract cryptoPublicGetCryptoQuotes(params?: {}): Promise<implicitReturnType>;
    abstract cryptoPublicGetCryptoLatestQuotes(params?: {}): Promise<implicitReturnType>;
    abstract cryptoPublicGetCryptoBars(params?: {}): Promise<implicitReturnType>;
    abstract cryptoPublicGetCryptoSnapshots(params?: {}): Promise<implicitReturnType>;
}
