function showmore(className, moreText) {
    var more = document.getElementsByClassName(className);
    if (more) {
        more[0].style.display = "none";
    }

    var moreTextElement = document.getElementsByClassName(moreText);
    if (moreTextElement) {
        moreTextElement[0].style.display = "block";
    }
}