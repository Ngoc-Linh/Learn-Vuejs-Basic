export default function useUtils() { 
    const BOOTSTRAP_BREAKPOINTS = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
    }

    /**
     * @description Parse custom text with asterisks and return HTML string 
     * @param {string} text - The text to parse
     * @return {string} - The parsed text with HTML tags
     * @example  parseCustomText("This is *important* text."); // returns "This is <span class="text-primary">important</span> text."
     **/
    const parseCustomText = (text) => {
        if(!text) return '';
        // tìm các ký tự giữa 2 dấu * và thay thế bằng thẻ span có class text-primary
        return text.replace(/\*(.*?)\*/g, '<span class="text-primary">$1</span>')
    }
    /**
     * @description Check if the device is iOS
     * @return {boolean} - True if the device is iOS, false otherwise
     **/
    const isIOS = () => {
        const userAgent = window.navigator.userAgent.toLowerCase()
        return /iphone|ipad|ipod/.test(userAgent)
    }
    return {
        BOOTSTRAP_BREAKPOINTS,
        parseCustomText,
        isIOS
    }
}