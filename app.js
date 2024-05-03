let navlist = document.querySelector('.navlist')

navlist.style.maxHeight = "0px"

const menuToggle = () => {
    if (navlist.style.maxHeight == "0px") {
        navlist.style.maxHeight = "360px"
    }
    else{
        navlist.style.maxHeight = "0px"
    }
}