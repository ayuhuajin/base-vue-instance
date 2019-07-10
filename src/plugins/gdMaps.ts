export default function MapLoader() {
  return new Promise((resolve, reject) => {
    if ((window as any).AMap) {
      resolve((window as any).AMap);
    } else {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src =
        '//webapi.amap.com/maps?v=1.4.11&callback=initAMap&key=965581091a3fa37f7f49c296dd566da1&plugin=AMap.Driving';
      script.onerror = reject;
      document.head.appendChild(script);
    }
    (window as any).initAMap = () => {
      resolve((window as any).AMap);
    };
  });
}
