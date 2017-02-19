<?php
	header("Access-Control-Allow-Origin:*");
    header('Content-type:text/html;charset=utf-8');
    
    //tongguo   $_GET['id'] 获取 url  canshu;
    @$id=$_GET['id']?$_GET['id']:2;//dijige leibei
        
    $ch = curl_init();
    $url = 'http://apis.baidu.com/tngou/ask/show?id='.$id;
     // $url = 'http://apis.baidu.com/tngou/book/show?id=1';
    $header = array(
        'apikey: 0fb84b78928d1d6a884c0ab91f114ddb',
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);
     echo $res;
?>