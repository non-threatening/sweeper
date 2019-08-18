export const Stop = () => {
  this.webview.injectJavaScript(`
    Tone.Master.volume.rampTo(-Infinity, 0.2);
    setTimeout(() => {
      osc.forEach(o => { o.dispose(); });
      osc.length = 0;
      Tone.Master.volume.rampTo(-1, 0.1);
    }, 500)
  `)
}

export const sweep = osc => {
  osc = 0
  return this.webview.injectJavaScript(`
    osc[${osc}] = new Tone.Oscillator({
      'type': 'sine',
      'volume': '-25'
    }).chain(output, Tone.Master).start();
    `)
}
