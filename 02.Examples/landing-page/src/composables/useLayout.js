import useUtils from "./useUtils";
const utils = useUtils();
export default function useLayout() {
    /**
     * @description Set the body scroll enabled or disabled
     * @param {boolean} enabled - If true, enable body scroll; if false, disable body scroll
     **/
    const setBodyScrollEnabled = (enabled) => {
        const body = document.body

        if(!enabled) {
            window.savedScrollY = window.scrollY
            body.classList.add(`body-no-scroll`)
            if(utils.isIOS()) {
                body.classList.add(`position-fixed`)
            }
        }
        else {
            body.classList.remove(`body-no-scroll`)
            body.classList.remove(`position-fixed`)

            if(window.savedScrollY) {
                window.scrollTo({
                    top: window.savedScrollY,
                    behavior: "instant"
                })
                window.savedScrollY = null
            }
        }
    }
    /**
     *  kiểm tra xem element có nằm ngoài viewport hay không
     * @param {*} element 
     * @returns 
     */
    const isElementOutsideBounds = (element) => {
        const rect = element.getBoundingClientRect()

        return (
            rect.bottom < 0 || // ra ngoài trên
            rect.right < 0 || // ra ngoài trái
            rect.left > window.innerWidth || // ra ngoài phải
            rect.top > window.innerHeight // ra ngoài dưới
        )
    }
    /**
     * scroll đến một element
     * @description Scroll to the element with smooth behavior
     * @param {HTMLElement} element - The element to scroll to
     **/
    const scrollIntoView = (element) => {
        const elNavbar = document.querySelector('.foxy-navbar-compressed')
        const navOffset = elNavbar ? elNavbar.getBoundingClientRect().height - 2 : 70

        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return {
        setBodyScrollEnabled,
        isElementOutsideBounds,
        scrollIntoView
    }
}