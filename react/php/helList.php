<?php
    header("Access-Control-Allow-Origin:*");
    header('Content-type:text/html;charset=utf-8');
    // header('Content-type:text/html;charset=utf-8');
    
    // tongguo   $_GET['id'] 获取 url  canshu;
    @$id=$_GET["id"]?$_GET['id']:0;//dijige leibei
    @$page=$_GET["page"]?$_GET['page']:1;//dijiye
    @$rows=$_GET['rows']?$_GET['rows']:30; //meiye  jige
   //  @$id=$_GET["id"]?$_GET["id"]:0;
   // @$page=$_GET["page"]?$_GET["page"]:1;
   // @$rows=$_GET["rows"]?$_GET["rows"]:20;       
    $ch = curl_init();
    $url = 'http://apis.baidu.com/tngou/book/list?id='.$id.'&page='.$page.'&rows='.$rows;

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

