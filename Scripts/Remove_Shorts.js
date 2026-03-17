async function execute() { 
    while(true) {
        remove_ID("dismissible");
        await sleep(100);
    }
}

execute();

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

function remove_ID(ID) { 
    let Shorts_Container = document.getElementById(ID);
    Shorts_Container.remove();
}