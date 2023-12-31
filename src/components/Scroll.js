function handleReadMore(){
    var hiddenAchievements = document.getElementById("hiddenachivements");
    var readMore = document.getElementById("read-more-btn");
    readMore.style.display = "none";
    hiddenAchievements.style.display = "block";
    hiddenAchievements.scrollIntoView();
}

function handleReadLess(){
    var hiddenAchievements = document.getElementById("hiddenachivements");
    var readMore = document.getElementById("read-more-btn");
    readMore.style.display = "block";
    hiddenAchievements.style.display = "none";
    document.getElementById("achievements").scrollIntoView();
}

function handleScrollSkill(){
    document.getElementById("home").scrollIntoView();   
}

function handleScroll(){
    console.log(window.scrollY);
}
