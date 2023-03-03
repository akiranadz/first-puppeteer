import puppeteer from "puppeteer";

const getAnime = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.goto("https://anilist.co/search/anime?year=2023&season=SPRING", {
        waitUntil: "domcontentloaded"
    })
};

getAnime()