import puppeteer from "puppeteer";

const getQuotes = async () => {
    
    const browser = await puppeteer.launch({
        // Start a Puppeteer session with:
        // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
        // - no default viewport (`defaultViewport: null` - website page will in full width and height)
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    // On this new page:
    // - open the "http://quotes.toscrape.com/" website
    // - wait until the dom content is loaded (HTML is ready)
    await page.goto("http://quotes.toscrape.com/", {
        waitUntil: "domcontentloaded"
    });

    // Get data
    const quotes = await page.evaluate(() => {
        // Fetch the first element with class "quote"
        const quoteList = document.querySelectorAll(".quote");

        // Fetch the sub-elements from the previously fetched quote element
        // Get the displayed text and return it (`.innerText`)
        return Array.from(quoteList).map((quote) => {
            // Fetch the sub-elements from the previously fetched quote element
            // Get the displayed text and return it (`.innerText`)
            const text = quote.querySelector(".text").innerText;
            const author = quote.querySelector(".author").innerText;
            return {text, author};
        });
    })
    console.log(quotes);

    // Click on the "Next page" button
    await page.click(".pager > .next > a");

    await browser.close();
};

getQuotes();
