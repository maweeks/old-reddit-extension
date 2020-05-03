function redirect(requestDetails) {
    return {
        redirectUrl: requestDetails.url.replace('https://www.reddit.', 'https://old.reddit.')
    };
}

browser.webRequest.onBeforeRequest.addListener(redirect, { urls: ['https://www.reddit.com/*'] }, ['blocking']);
