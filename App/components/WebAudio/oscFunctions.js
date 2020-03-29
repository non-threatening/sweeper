export function PostMessage(string) {
  console.log(string)
  return this.webview.injectJavaScript(`
    window.ReactNativeWebView.postMessage(${string});
  `)
}
// PostMessage('post mess test')

export function KillOsc(osc) {
  // also remove from oscContext !!
  return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(-Infinity, 0.2);
    setTimeout(() => {
      osc[${osc}].dispose();
    }, 201);
  `)
}

export function SetVolume(osc, db) {
  return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(${db}, 0.1);
  `)
}
