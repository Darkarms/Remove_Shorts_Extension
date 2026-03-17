const YOUTUBE_MAIN_URL = "https://www.youtube.com/";
const YOUTUBE_SUBSCRIPTIONS_URL = "https://www.youtube.com/feed/subscriptions";

async function execute() { 
    while(true) {
        let page_url = window.location.href;
        if(page_url == YOUTUBE_MAIN_URL || page_url == YOUTUBE_SUBSCRIPTIONS_URL) {
            remove_ID("dismissible");
        }
        await sleep(100);
    }
}

execute();

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

function remove_ID(ID) { 
    let Shorts_Container = document.getElementById(ID)
    if (Shorts_Container) { 
        Shorts_Container.remove();
    }
}