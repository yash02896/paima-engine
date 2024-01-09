import type { ChainData, ChainDataExtensionDatum, EvmPresyncChainData } from '@paima/sm';
import { Network } from '@paima/utils';

export function groupCdeData(
  fromBlock: number,
  toBlock: number,
  data: ChainDataExtensionDatum[][]
): EvmPresyncChainData[] {
  const result: EvmPresyncChainData[] = [];
  for (let blockNumber = fromBlock; blockNumber <= toBlock; blockNumber++) {
    const extensionDatums: ChainDataExtensionDatum[] = [];
    for (const dataStream of data) {
      while (dataStream.length > 0 && dataStream[0].blockNumber === blockNumber) {
        const datum = dataStream.shift();
        if (datum) {
          extensionDatums.push(datum);
        }
      }
    }
    result.push({
      blockNumber,
      extensionDatums,
      network: Network.EVM,
    });
  }
  return result;
}

export function composeChainData(
  baseChainData: ChainData[],
  cdeData: EvmPresyncChainData[]
): ChainData[] {
  return baseChainData.map(blockData => ({
    ...blockData,
    extensionDatums: cdeData.find(
      blockCdeData => blockCdeData.blockNumber === blockData.blockNumber
    )?.extensionDatums,
  }));
}
