let i = 0;

function timedCount() {
  i++;
  postMessage(i); // gửi thông báo trở lại trang HTML
  setTimeout("timedCount()", 500);
}

timedCount();