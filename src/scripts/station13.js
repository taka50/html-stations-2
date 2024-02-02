function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const target_text = document.getElementById("text");

  console.log(target_text.style.backgroundColor);
  if (e.target.checked) {
    // チェックがつけられた時
    target_text.style.backgroundColor = "red";
  } else {
    // チェックが解除されたとき
    target_text.style.backgroundColor = "blue";
  }
}
