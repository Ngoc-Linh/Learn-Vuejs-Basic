// object chứa cặp key và value là string
const MAP = {
    "all_categories": "All",
    "tags": "Tags:",
    "about": "About",
    "where_to_find": "Where To Find",
    "project_available_here": "<strong>@{title}</strong> is available on the following platforms or services",
    "copyright_message": "Copyright ©{year} <a href='{url}' target='_blank'>{holder}</a> – {license}",
}
export default function useString() {
    /**
     * lấy string từ MAP theo key, nếu không có thì trả về key
     * @param {string} key - The key to get the string for
     * @param {Array} replacements - An array of objects with key and replacement properties
     * @returns {string} - The string from the map, or the key if not found
     **/
    const get = (key, replacements) => {
        // nếu key không có trong MAP thì trả về string.key
        // get("all_categories") // Kết quả: "All"
        // get("unknown_key")    // Kết quả: "string.unknown_key"
        let string = MAP[key] || 'string.' + key;
        // nếu có replacements thì thay thế các giá trị trong string 
        // bằng các giá trị trong replacements
        if (replacements) {
            replacements.forEach(({key, replacement}) => {
                string = string.replaceAll('@{'+key+'}', replacement)
            })
        }
        // ex: const MAP = { "greeting": "Hello, @{name}!" } 
        // get("greeting", [{ key: "name", replacement: "Alice" }])
        // Kết quả: "Hello, Alice!"

        return string;
    }
    const getCopyrightMessage = (year, holder, url, license) => {
        return get("copyright_message").replaceAll("{year}", year.toString())
            .replaceAll("{url}", url)
            .replaceAll("{holder}", holder)
            .replaceAll("{license}", license)
    }
  

    return {
        get,
getCopyrightMessage,
    }
}