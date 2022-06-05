// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { default as puppeteer } from "puppeteer";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const protocol = req.headers["x-forwarded-proto"] ? "https" : "http";

  await page.goto(`${protocol}://${req.headers.host}/pdf`);

  const data = await page.pdf({
    format: "letter",
    margin: { top: 25, bottom: 25, left: 5, right: 5 },
  });

  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": `inline; filename="Brian Uptagrafft Resume.pdf"`,
  });

  res.end(data);
}
