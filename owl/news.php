<?php
    $hide=$_GET["hide"];
    
    // $hide=$_REQUEST["hide"];
    $conn=mysqli_connect("127.0.0.1","root","","owl",3306);
    mysqli_query($conn,"SET NAMES utf8");
    if($hide==0){
        $sql="SELECT img,title FROM news order by id desc limit 3";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while(($row=mysqli_fetch_assoc($result))!=null){
            array_push($arr,$row);
        }
        
        echo $_GET["x"]."(".JSON_encode($arr).")";
    }else if($hide==1){
        $sql="SELECT * FROM hero order by id desc limit 1";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while(($row=mysqli_fetch_assoc($result))!=null){
            array_push($arr,$row);
        }
        
        echo $_GET["x"]."(".JSON_encode($arr).")";
    }else if($hide==2){
        $dy=$_GET['dy'];
        $sql="SELECT * FROM herojs where id=$dy";
        // $sql="SELECT * FROM herojs";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while(($row=mysqli_fetch_assoc($result))!=null){
            array_push($arr,$row);
        }
       
        echo $_GET["x"]."(".JSON_encode($arr).")";
    }
?>
<!-- MySql : SELECT * FROM 表名 ORDER BY 表_ID DESC LIMIT 1  -->