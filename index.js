import puppeteer from "puppeteer";

const getAnime = async () => {
    
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();
};

