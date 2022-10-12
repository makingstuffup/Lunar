document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();

  worker().then((e) => {
    var val = document.querySelector(".lunarInput").value;
    if (!val.startsWith("http")) val = "https://" + val;

    location.assign(window.__DIP.config.prefix + window.__DIP.encodeURL(val));
  });
});

async function worker() {
  var a = await navigator.serviceWorker.register("/sw.js", {
    scope: "/d",
  });
  return a;
}
