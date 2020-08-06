<?php
    $data = json_decode(file_get_contents('php://input'), true);
    if(!isset($data["device_name"]))
        die("Error: device_name not found in the request header.");
    else
        $device_name = $data["device_name"];
    if(!isset($data["device_table"]))
        die("Error: device_table not found in the request header.");
    else
        $device_table = $data["device_table"];
    // if(!isset($_POST["device_name"]))
    //     die("Error: device_name not found in the request header.");
    // else
    //     $device_name = $_POST["device_name"];
    // if(!isset($_POST["device_table"]))
    //     die("Error: device_table not found in the request header.");
    // else
    //     $device_table = $_POST["device_table"];
    require "./libraries/connect.php";
    $query = $conn->prepare("INSERT INTO device(ID_D, name, table_n, assigned)
                             VALUES(NULL, ?, ?, 0)");
    if(!$query)
        die("Error: could not prepare 'query' statement.");
    $query->bind_param("si", $device_name, $device_table);
    if(!$query)
        die("Error: could not bind parameters to 'query' statement.");
    $query->execute();
    if($query->affected_rows <= 0)
        die("Error: could not execute 'query'.");
    else
    {
        $XML = new SimpleXMLElement("<device></device>");
        $XML->addChild("id", $query->insert_id);
        header('Content-type: application/xml');
        echo $XML->asXML();
    }
    $query->free_result();
    $query->close();
    $conn->close(); 
?>