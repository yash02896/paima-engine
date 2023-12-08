export declare type ProjectedNftRangeRequest = {
    range: { minSlot: number, maxSlot: number }
};

export declare type ProjectedNftRangeResponse = {
    actionSlot: number,

    ownerAddress: string | null,

    actionTxId: string | null,
    actionOutputIndex: number | null,

    previousTxHash: string | null,
    previousTxOutputIndex: number | null,

    asset: string,
    amount: number,
    status: string | null,
    plutusDatum: string | null,
    forHowLong: number | null,
}[];