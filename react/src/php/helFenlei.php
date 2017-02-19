

<?php
    header("Access-Control-Allow-Origin:*");
    header('Content-type:text/html;charset=utf-8');
     @$id=$_GET["id"]?$_GET["id"]:0;
    $ch = curl_init();
    $url = 'http://apis.baidu.com/tngou/book/classify';
    $header = array(
        'apikey: 21a5d0df92d88036f83124952d9c3472',
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);

   /* var_dump(json_decode($res));*/
    echo $res;
?>