var num =0;
//新しい記号がある時は、下のtasiとかに番号を入れること
var keis_kigo=["+","-","*","/","＋","ー","✖︎","÷","➕","➖","✖️","➗","＊","❌"];
var keis_kigo_tasi=[0,4,8];
var keis_kigo_hiki=[1,5,9];
var keis_kigo_kake=[2,6,10,12,13];
var keis_kigo_wari=[3,7,11];
const keisan_siki_Imput=document.getElementById('keisan_siki');
const jikou_button=document.getElementById('jikkou');
const resultDivided=document.getElementById('result-area');
var valies=new Array();
var how_kei=new Array();
jikou_button.onclick = () => 
{
    var imput_siki=keisan_siki_Imput.value;
    var result=keisan_start(imput_siki);
    hyoj_keka(result);
    }
function hyoj_keka(result)
{
    removeAllChildren(resultDivided)
    const kaigyo = document.createElement('br');
    if(isNaN(result))
    {
        result="申し訳ありません。\n本サイトは整数の四則の計算にしか対応しておりません。"
        const paragraph = document.createElement('h3');
        paragraph.innerText = result;
        paragraph.className='text';
        resultDivided.appendChild(paragraph);
    }
    else
    {
        const paragraph = document.createElement('h1');
        paragraph.innerText = result;
        paragraph.className='text';
        resultDivided.appendChild(paragraph);
    }
}
  function removeAllChildren(element) {
    while (element.firstChild) {
      // 子どもの要素があるかぎり除去
      element.removeChild(element.firstChild);
    }
  }
  function keisan_start(values)
{
    //計算を実行
    sta_set();
    sujies(values);
    return keisan();
}
function sta_set()
{
    num=0;
    valies.length=0;
    how_kei.length=0;
}
function keisan()
{
    var result=(valies[0]);
    for (var i=1;i< valies.length;i++)
    {
        //いろんな計算
        if(keis_kigo_tasi.includes(how_kei[i-1]))
        {
            result+=(valies[i]);
        }
        else if(keis_kigo_hiki.includes(how_kei[i-1]))
        {
            result-=(valies[i]);
        }
        else if(keis_kigo_kake.includes(how_kei[i-1]))
        {
            result*=(valies[i]);
        }
        else
        {
            result/=(valies[i]);
        }}
    return result;
}
function sujies(valuearray)
{
    while(num<valuearray.length)
    {
        valies.push(get_one_word(valuearray));
        //いろんな計算記号判定
        how_kei.push(keis_kigo.indexOf(valuearray[num]));
        num+=1;
        if(num>=valuearray.length)
        {
            break;
        }
    }
}
function get_one_word(setvalary)
{
    //ひと数ごとに分ける
    var oneword=0;
    //いろんな計算
    //数字か、＋とかじゃないかを判別
    while(!keis_kigo.includes(setvalary[num]))
    {
        oneword=keta_up(oneword,setvalary[num]);
        num+=1;
        //最後の文字だったら出る処理
        if(num>=setvalary.length)
        {
            break;
        }
    }
    return oneword
}
function keta_up(old_val,add_val)
{
    return (old_val*10)+Number(add_val);
}
/*** 
function han_cha_zen(set_val_str) {
    return str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}
***/
