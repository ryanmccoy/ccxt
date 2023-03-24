// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default abstract class Exchange extends _Exchange {
    abstract publicGetMarkets (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsMarket (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsMarketOrders (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsMarketTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserOrdersId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserOrdersIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserFees (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountWithdrawalsId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountDepositId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUserOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteUserOrdersId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteAccountWithdrawalsId (params?: {}): Promise<implicitReturnType>;
}