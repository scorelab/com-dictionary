const puppeteer = require("puppeteer");

export const getTrendingWords = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.urbandictionary.com/", {
    waitUntil: "domcontentloaded",
  });

  const result = await page.evaluate(() => {
    let trending = [];

    let trending_links = document.getElementsByClassName("trending-link");
    for (let i = 0; i < trending_links.length; i++) {
      trending.push(trending_links[i].textContent.trim());
    }

    return trending;
  });
  await browser.close();
  console.log(result);
  return result;
};
