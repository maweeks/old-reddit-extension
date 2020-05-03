function redirect(requestDetails) {
    return {
        redirectUrl: requestDetails.url.replace('https://www.reddit.com/', 'https://old.reddit.com/')
    };
}

browser.webRequest.onBeforeRequest.addListener(redirect, { urls: ['https://www.reddit.com/*'] }, ['blocking']);
