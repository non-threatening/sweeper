export const Sweep = (start, end, duration) => {
  return this.webview.injectJavaScript(`
    osc[666] = new Tone.Oscillator({
      'type': 'sine',
      'volume': '-25',
      'frequency': 300
    }).chain(output, Tone.Master).start();
    osc[666].frequency.rampTo(3000, 5);
  `)
}
