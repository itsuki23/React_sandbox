//////////////////////////////////////////////////////////////////////
// edit
//////////////////////////////////////////////////////////////////////
/*
 * メモ帳のデータを操作する
 * date 2017/05
 * @author Y.Tabata
 */

//自動保存処理 // キーボードから手を離したのを発火に
document.getElementById('contents').onkeyup = function(){
	var contents = document.getElementById('contents').value;
	chrome.storage.sync.set({hold_content:contents});
	//保存時間取得、通知
	timestamp_record();
	//文字数カウント
	lengthCount(contents);
}


//削除機能
document.getElementById('delete').onclick = function(){
	if(window.confirm('削除します。よろしいですか？(元に戻せません)')){
		//保存場所に空文字を入れて保存することで削除とする
		var contents = '';
		chrome.storage.sync.set({hold_content:contents});
		//フォームの中を消す
		document.getElementById('form').contents.value = "";
		//保存時間取得、通知
		timestamp_record();
		//文字数をカウントして0を出力
		lengthCount(contents);
	}
}


//日付を取得して保存時間を格納するプログラム
function timestamp_record(){
	var date = new Date();
	var timestamp = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	chrome.storage.sync.set({timestamp_content:timestamp});
	document.getElementById('message').textContent = "保存しました（"+ timestamp +")";
}


//文字数を数えて出力する関数
function lengthCount(contents){
	document.getElementById('counter').textContent = contents.length + "字";
}


//////////////////////////////////////////////////////////////////////
// load
//////////////////////////////////////////////////////////////////////

/*
 * 保存したメモ帳を読み込む
 * date 2017/05
 * @auther Y.Tabata
 */

chrome.storage.sync.get("hold_content", function(items) {
	//読み込み場所が見つからない場合は""を置く
	if(items.hold_content === undefined){
    	document.getElementById('contents').value = "";
    } else {
    	document.getElementById('contents').value = items.hold_content;
    	//文字数を数えて出力する
		document.getElementById('counter').textContent = items.hold_content.length + "字";
    }
});


//////////////////////////////////////////////////////////////////////
// popsub
//////////////////////////////////////////////////////////////////////

/*
 * サブウィンドウを生成
 * date 2017/05
 * @auther Y.Tabata
 */

//サブウィンドウポップアップ
document.getElementById('subwin').onclick = function(){
	//画面サイズを取得
	var screenWidth = window.parent.screen.width;
	var screenHeight = window.parent.screen.height;

	//画面サイズに合わせたサブウィンドウサイズを計算する
	var subWinWidth = screenWidth * 0.3;
	var subWinHeight = screenHeight * 0.35;

	//（テキストボックスの可変化が可能になるまで使う）540×360より小さかった場合このサイズにする
	if(subWinWidth < 540 || subWinHeight < 360) {
		subWinWidth = 540;
		subWinHeight = 360;
	}

	var subWinSize = "width="+subWinWidth+",height="+subWinHeight;

	//540×360のサブウィンドウを生成する
	window.open('popup.html', 'subwin', subWinSize);
}


//////////////////////////////////////////////////////////////////////
// manifest.json
//////////////////////////////////////////////////////////////////////
{
    "browser_action": {
       "default_popup": "popup.html",
       "default_title": "ぱっと保存メモ帳"
    },
    "commands": {
       "_execute_browser_action": {
          "suggested_key": {
             "chromeos": "Alt+Q",
             "default": "Alt+Q",
             "mac": "Alt+Q",
             "windows": "Alt+Q"
          }
       }
    },
    "description": "思い付きをメモ、文の一時的な保存や退避。使い方色々。ぱっと保存メモ帳",
    "icons": {
       "128": "images/icon/icon_128.png",
       "16": "images/icon/icon_16.png",
       "48": "images/icon/icon_48.png"
    },
    "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg4liOhGCggZhk3QlkgAKUVxNMuUGRIoveyeTqEDQWbEkzNdqSzqVQHj2RNacVUqxc2LtkdQe6uSiZMZxdtALB6a6wuokGNYNXLPBTtMT6Nu4ETTqdE1NilQZa4JbMz2G0+XCPG7BfnWmCkmCPQpySw2UwT6v3pYxGC02Rt2M+iJPI773QFfAcXczzjB+ysvDqM1bKKOHsNf1+XaNTOjNQ3bd/Kk855WuXgjYZdFCIj2B0yzNHHAexdpWhzA7jIsEUohDtMbNVPAjaxaphkV5fwK513B3Tmi3vECJrCNWhDhWxevUpxKSU/uvqL5ZEpVAeLZuZHNk7TMUo2/51rtH/wIDAQAB",
    "manifest_version": 2,
    "name": "ぱっと保存メモ帳",
    "options_page": "options.html",
    "permissions": [ "storage", "unlimitedStorage" ],
    "update_url": "https://clients2.google.com/service/update2/crx",
    "version": "1.0.0"
 }