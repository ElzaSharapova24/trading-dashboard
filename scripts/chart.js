// const { createChart } = window.LightweightCharts;
//
//
//
// export class CandlestickChart {
//     constructor(containerId) {
//         this.container = document.getElementById(containerId);
//         this.chart = null;
//         this.candleSeries = null;
//         this.init();
//     }
//
//     init() {
//         // Создаем график
//         this.chart = LightweightCharts.createChart(this.container, {
//             layout: {
//                 background: { color: '#000000' },
//                 textColor: '#d1d5db',
//             },
//             grid: {
//                 vertLines: { color: '#2d3748' },
//                 horzLines: { color: '#2d3748' },
//             },
//             width: this.container.clientWidth,
//             height: 250,
//             crosshair: { mode: LightweightCharts.CrosshairMode.Normal },
//             rightPriceScale: { borderColor: '#374151' },
//             timeScale: {
//                 borderColor: '#374151',
//                 timeVisible: true,
//                 secondsVisible: false,
//             },
//         });
//
//         // Добавляем серию свечей
//         this.candleSeries = this.chart.addCandlestickSeries({
//             upColor: '#22c55e',
//             downColor: '#ef4444',
//             wickUpColor: '#22c55e',
//             wickDownColor: '#ef4444',
//             borderVisible: false,
//         });
//
//         // Добавляем обработчик изменения размера
//         this.handleResize();
//         window.addEventListener('resize', () => this.handleResize());
//     }
//
//     handleResize() {
//         this.chart.resize(
//             this.container.clientWidth,
//             250
//         );
//     }
//
//     // Метод для обновления данных
//     updateData(data) {
//         this.candleSeries.setData(data);
//     }
//
//     // Метод для добавления новой свечи
//     addCandle(candle) {
//         this.candleSeries.update(candle);
//     }
// }