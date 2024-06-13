// function helo() {
//   return []; //this is a custom hook as well
// }

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`ADD API KEY HERE`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
