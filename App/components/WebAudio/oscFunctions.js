export function KillOsc(osc) {
  return this.webview.injectJavaScript(`
      osc[${osc}].volume.rampTo(-Infinity, 0.2);
      setTimeout(() => {
        osc[${osc}].dispose();
      }, 250);
    `)
}

export function SetVolume(osc, db) {
  return this.webview.injectJavaScript(`
      osc[${osc}].volume.rampTo(${db}, 0.1);
    `)
}
