let count = 10;

loadCount();

function updateCount() {
    document.getElementById("count").innerHTML = count;
}

function increaseCount() {
    count++;
    updateCount();
}

function decreaseCount() {
    if (count > 0) {
        count--;
        updateCount();
    }
}

function resetCount() {
    count = 10;
    updateCount();
}

function saveCount() {
    localStorage.setItem("count", count);
}

function loadCount() {
    let saved = localStorage.getItem("count");

    if (saved !== null) {
        count = Number(saved);
    }

    updateCount();
}