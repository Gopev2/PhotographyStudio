document.addEventListener('DOMContentLoaded', function () {
    var dropbtns = document.querySelectorAll('.dropbtn');
    dropbtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });
});
