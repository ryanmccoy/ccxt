// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default abstract class Exchange extends _Exchange {
    abstract publicWalletGetCurrencyChains (params?: {}): Promise<implicitReturnType>;
    abstract publicSpotGetCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract publicSpotGetCurrenciesCurrency (params?: {}): Promise<implicitReturnType>;
    abstract publicSpotGetCurrencyPairs (params?: {}): Promise<implicitReturnType>;
    abstract publicSpotGetCurrencyPairsCurrencyPair (params?: {}): Promise<implicitReturnType>;
    abstract publicSpotGetTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicSpotGetOrderBook (params?: {}): Promise<implicitReturnType>;
    abstract publicSpotGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicSpotGetCandlesticks (params?: {}): Promise<implicitReturnType>;
    abstract publicMarginGetCurrencyPairs (params?: {}): Promise<implicitReturnType>;
    abstract publicMarginGetCurrencyPairsCurrencyPair (params?: {}): Promise<implicitReturnType>;
    abstract publicMarginGetCrossCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract publicMarginGetCrossCurrenciesCurrency (params?: {}): Promise<implicitReturnType>;
    abstract publicMarginGetFundingBook (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleContracts (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleContractsContract (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleOrderBook (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleCandlesticks (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleFundingRate (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleInsurance (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleContractStats (params?: {}): Promise<implicitReturnType>;
    abstract publicFuturesGetSettleLiqOrders (params?: {}): Promise<implicitReturnType>;
    abstract publicDeliveryGetSettleContracts (params?: {}): Promise<implicitReturnType>;
    abstract publicDeliveryGetSettleContractsContract (params?: {}): Promise<implicitReturnType>;
    abstract publicDeliveryGetSettleOrderBook (params?: {}): Promise<implicitReturnType>;
    abstract publicDeliveryGetSettleTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicDeliveryGetSettleCandlesticks (params?: {}): Promise<implicitReturnType>;
    abstract publicDeliveryGetSettleTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicDeliveryGetSettleInsurance (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetUnderlyings (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetExpirations (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetContracts (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetContractsContract (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetSettlements (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetSettlementsContract (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetOrderBook (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetUnderlyingTickersUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetCandlesticks (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetUnderlyingCandlesticks (params?: {}): Promise<implicitReturnType>;
    abstract publicOptionsGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicEarnGetUniCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract publicEarnGetUniCurrenciesCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateWithdrawalsPostWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privateWithdrawalsDeleteWithdrawalsWithdrawalId (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletGetDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletGetWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletGetDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletGetSubAccountTransfers (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletGetWithdrawStatus (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletGetSubAccountBalances (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletGetFee (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletGetTotalBalance (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletPostTransfers (params?: {}): Promise<implicitReturnType>;
    abstract privateWalletPostSubAccountTransfers (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsGetSubAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsGetSubAccountsUserId (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsGetSubAccountsUserIdKeys (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsGetSubAccountsUserIdKeysKey (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsPostSubAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsPostSubAccountsUserIdKeys (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsPostSubAccountsUserIdLock (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsPostSubAccountsUserIdUnlock (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsPutSubAccountsUserIdKeysKey (params?: {}): Promise<implicitReturnType>;
    abstract privateSubAccountsDeleteSubAccountsUserIdKeysKey (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotGetOpenOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotGetMyTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotGetPriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotGetPriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotPostBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotPostOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotPostCancelBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotPostPriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotDeleteOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotDeleteOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotDeletePriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotDeletePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateSpotPatchOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetAccountBook (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetFundingAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetLoans (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetLoansLoanId (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetLoansLoanIdRepayment (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetLoanRecords (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetLoanRecordsLoadRecordId (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetAutoRepay (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetTransferable (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetCrossAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetCrossAccountBook (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetCrossLoans (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetCrossLoansLoanId (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetCrossLoansRepayments (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetCrossTransferable (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetLoanRecordsLoanRecordId (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetBorrowable (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetCrossRepayments (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginGetCrossBorrowable (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPostLoans (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPostMergedLoans (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPostLoansLoanIdRepayment (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPostAutoRepay (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPostCrossLoans (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPostCrossLoansRepayments (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPostCrossRepayments (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPatchLoansLoanId (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginPatchLoanRecordsLoanRecordId (params?: {}): Promise<implicitReturnType>;
    abstract privateMarginDeleteLoansLoanId (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettleAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettleAccountBook (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettlePositions (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettlePositionsContract (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettleOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettleMyTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettlePositionClose (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettleLiquidates (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettlePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettleDualCompPositionsContract (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesGetSettleAutoDeleverages (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettlePositionsContractMargin (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettlePositionsContractLeverage (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettlePositionsContractRiskLimit (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettleDualMode (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettleDualCompPositionsContract (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettleDualCompPositionsContractMargin (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettleDualCompPositionsContractLeverage (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettleDualCompPositionsContractRiskLimit (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettleOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesPostSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesDeleteSettleOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesDeleteSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesDeleteSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateFuturesDeleteSettlePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettleAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettleAccountBook (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettlePositions (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettlePositionsContract (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettleOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettleMyTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettlePositionClose (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettleLiquidates (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettlePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryGetSettleSettlements (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryPostSettlePositionsContractMargin (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryPostSettlePositionsContractLeverage (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryPostSettlePositionsContractRiskLimit (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryPostSettleOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryPostSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryDeleteSettleOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryDeleteSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryDeleteSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeliveryDeleteSettlePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsGetAccountBook (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsGetPositions (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsGetPositionsContract (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsGetPositionClose (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsGetMyTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsPostOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsDeleteOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateOptionsDeleteOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateRebateGetAgencyTransactionHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateRebateGetAgencyCommissionHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateEarnGetUniLends (params?: {}): Promise<implicitReturnType>;
    abstract privateEarnGetUniLendRecords (params?: {}): Promise<implicitReturnType>;
    abstract privateEarnGetUniInterestsCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateEarnGetUniInterestRecords (params?: {}): Promise<implicitReturnType>;
    abstract privateEarnPostUniLends (params?: {}): Promise<implicitReturnType>;
    abstract privateEarnPatchUniLends (params?: {}): Promise<implicitReturnType>;
}