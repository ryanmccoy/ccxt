import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default abstract class Exchange extends _Exchange {
    abstract wwwGetOrderFetchMarkets(params?: {}): Promise<implicitReturnType>;
    abstract wwwGetOrderFetchTickers(params?: {}): Promise<implicitReturnType>;
    abstract wwwGetOrderFetchOrderbook(params?: {}): Promise<implicitReturnType>;
    abstract wwwGetOrderGetTickerWithVolume(params?: {}): Promise<implicitReturnType>;
    abstract wwwGetExchangeDataOhlc(params?: {}): Promise<implicitReturnType>;
    abstract wwwGetExchangeDataOrderBook(params?: {}): Promise<implicitReturnType>;
    abstract wwwGetExchangeDataTradedetails(params?: {}): Promise<implicitReturnType>;
    abstract v1GetPlatformStatus(params?: {}): Promise<implicitReturnType>;
    abstract v1GetTickers(params?: {}): Promise<implicitReturnType>;
    abstract v1GetOrderbookSellSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1GetOrderbookBuySymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostCurrentCoinBalanceEVERYTHING(params?: {}): Promise<implicitReturnType>;
    abstract v1PostGetApiUsageStatusUSAGE(params?: {}): Promise<implicitReturnType>;
    abstract v1PostGetOrderSocketTokenUSAGE(params?: {}): Promise<implicitReturnType>;
    abstract v1PostCurrentCoinBalanceSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostOrderStatusSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostDepositHistorySymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostWithdrawHistorySymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostWithdrawHistoryAllSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostDepositHistoryAllSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostListOpenOrdersSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostListOpenStopOrdersSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostGetCoinAddressSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostPlaceSellOrderSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostPlaceBuyOrderSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostBuyStopLossSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostSellStopLossSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostCancelOrderSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostCancelStopLossOrderSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostListExecutedOrdersSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostPlaceMarketOrderSymbol(params?: {}): Promise<implicitReturnType>;
    abstract v1PostPlaceMarketOrderQntySymbol(params?: {}): Promise<implicitReturnType>;
    abstract v2PostOrders(params?: {}): Promise<implicitReturnType>;
    abstract v2PostCancel(params?: {}): Promise<implicitReturnType>;
    abstract v2PostGetordersnew(params?: {}): Promise<implicitReturnType>;
    abstract v2PostMarginOrders(params?: {}): Promise<implicitReturnType>;
}
