import fs from "fs";
import { SocialNetworkConnectivity } from "./week_1/assignments/SocialNetworkConnectivity";

const main = () => {
  const data = fs.readFileSync("./data/SocialNetworkConnectivity.txt", "utf-8");

  const rows = data.split("\r\n");

  const N = 10;

  const socialNetworkConnectivity = new SocialNetworkConnectivity(N);

  for (let row of rows) {
    const rowData = row.split(" ");

    const p = Number(rowData[0]);
    const q = Number(rowData[1]);
    const time = new Date(rowData[2]);

    socialNetworkConnectivity.union(p, q);

    if (socialNetworkConnectivity.allConnected()) {
      console.log("Everyone is connected at:", time.toLocaleTimeString());
      return;
    }
  }
};

main();
