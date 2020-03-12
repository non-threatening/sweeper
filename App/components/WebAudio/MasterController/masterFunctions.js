export function SetVolume(db) {
  return this.webview.injectJavaScript(`
      Tone.Master.volume.value = ${db};
    `)
}
