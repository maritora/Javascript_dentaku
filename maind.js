function clickbutton(target){
    let result = document.getElementById("result")//ID属性で要素を取得する（documentにくっつける）
    let target_value = target.innerHTML;//html要素の中身
    
    if(target_value == "AC") {
        result.innerHTML ="0"//htmlの内容を変更できるAC押すと０
    } else if (target_value == "="){
        result.innerHTML = eval(result.innerHTML)//eval>カッコ内""の要素を計算できる
    } else {
        if (result.innerHTML == "0") {
            result.innerHTML = target_value
        } else {
            result.innerHTML += target_value
        }
    }
}