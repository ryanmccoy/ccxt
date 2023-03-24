import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default abstract class Exchange extends _Exchange {
    abstract publicGetOrderbook(params?: {}): Promise<implicitReturnType>;
    abstract publicGetTrades(params?: {}): Promise<implicitReturnType>;
    abstract publicGetTicker(params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountDepositAddress(params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountBtcDepositAddress(params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountBalance(params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountDailyBalance(params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountUserInfo(params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountVirtualAccount(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderCancelAll(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderCancel(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderLimitBuy(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderLimitSell(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderCompleteOrders(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderLimitOrders(params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderOrderInfo(params?: {}): Promise<implicitReturnType>;
    abstract privatePostTransactionAuthNumber(params?: {}): Promise<implicitReturnType>;
    abstract privatePostTransactionHistory(params?: {}): Promise<implicitReturnType>;
    abstract privatePostTransactionKrwHistory(params?: {}): Promise<implicitReturnType>;
    abstract privatePostTransactionBtc(params?: {}): Promise<implicitReturnType>;
    abstract privatePostTransactionCoin(params?: {}): Promise<implicitReturnType>;
}
