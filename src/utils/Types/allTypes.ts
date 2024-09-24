import { CandlestickData, Time, WhitespaceData } from "lightweight-charts"

export interface getKlinesParamsType {
  symbol: string
  interval: string
  limit: number
}
export interface KlinesStateType {
  klinesData: [] | unknown
  klinesStatus: 'idle' | 'pending' | 'fulfilled' | 'failed'
  klinesError: null | string | unknown
}
export interface LightweightChartsProps {
  data: (CandlestickData<Time> | WhitespaceData<Time>)[]
  colors: {
    backgroundColor: string
    textColor: string
    upColor: string
    downColor: string
    borderVisible: boolean
    wickUpColor: string
    wickDownColor: string
  }
}