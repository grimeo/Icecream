var j = 0;

function typeAnim() {
  var titleAnim = document.getElementsByClassName("iceTitle")[0];
  var title = "How to make an Ice Cream";

  if (j < title.length) {
    titleAnim.innerHTML += title.charAt(j);
    j++;
    setTimeout(typeAnim, 60);
  }
}
typeAnim();