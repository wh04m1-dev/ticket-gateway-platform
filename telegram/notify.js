import dotenv from "dotenv";
import https from "https";

dotenv.config();

const BOT_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const message = process.argv[2] || "Build Completed!";

const sendTelegramMessage = (text) => {
  const url = `/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
    text
  )}`;
  const options = {
    hostname: "api.telegram.org",
    port: 443,
    path: url,
    method: "GET",
  };

  const req = https.request(options, (res) => {
    res.on("data", (d) => process.stdout.write(d));
  });

  req.on("error", (error) => console.error(error));
  req.end();
};

sendTelegramMessage(message);
