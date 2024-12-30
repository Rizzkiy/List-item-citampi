function filterData() {
    const input = document.getElementById("searchBox").value.toLowerCase();
    const items = document.querySelectorAll("#dataList li");

    items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}
