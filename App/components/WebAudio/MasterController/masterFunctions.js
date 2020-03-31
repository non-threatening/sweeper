export function SetVolumeMaster(db) {
  return this.webview.injectJavaScript(`
      Tone.Master.volume.value = ${db};
    `)
}

export function KillAllOsc() {
  return this.webview.injectJavaScript(`
    osc.forEach(o => { o.dispose(); });
    osc.length = 0;
  `)
}
