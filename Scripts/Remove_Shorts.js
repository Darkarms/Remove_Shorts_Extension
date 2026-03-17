while(true) {
    remove_ID("dismissible")
    sleep(100)
}

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms))
}

function remove_ID(ID) { 
    let Shorts_Container = document.getElementById(ID)
    Shorts_Container.remove()
}