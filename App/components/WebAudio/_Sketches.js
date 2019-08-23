// function test() {
//   osc[666] = new Tone.Oscillator({
//     type: 'sine',
//     volume: '-1',
//     frequency: '${start}'
//   })
//     .chain(output, Tone.Master)
//     .start()
//   osc[666].frequency.rampTo('${end}', '${time}')
//   window.ReactNativeWebView.postMessage('postMessage')
//   setTimeout(() => {
//     osc[666].volume.rampTo(-Infinity, 0.2)
//     osc.forEach(o => {
//       o.dispose()
//     })
//     osc.length = 0
//   }, '${ time }' * 1000 - 200)
// }
