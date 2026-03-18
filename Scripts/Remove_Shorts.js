const YOUTUBE_MAIN_URL = "https://www.youtube.com/";
const YOUTUBE_SUBSCRIPTIONS_URL = "https://www.youtube.com/feed/subscriptions";
const YOUTUBE_SEARCH_URL = "https://www.youtube.com/results?search_query="

async function execute() { 
    while(true) {
        let page_url = window.location.href;
        if(page_url == YOUTUBE_MAIN_URL || page_url == YOUTUBE_SUBSCRIPTIONS_URL) {
            remove_ID("dismissible");
        }
        if(page_url.includes(YOUTUBE_SEARCH_URL)) {
            remove_class("ytGridShelfViewModelHost")
        }
        await sleep(100);
    }
}

execute();

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

function remove_ID(ID) { 
    let id_container = document.getElementById(ID);
    if (id_container) { 
        id_container.remove();
    }
}

function remove_class(element_class) { 
    let class_container = document.getElementsByClassName(element_class);
    if (class_container[0]) { 
            class_container[0].remove();
        }
}