<?php
    if(!isset($_POST["id_d"]))
        die("Error: id_d not found in the request header.");
    else
        $id_d = $_POST["id_d"];
    if(!isset($_POST["device_name"]))
        die("Error: device_name not found in the request header.");
    else
    $device_name = $_POST["device_name"];
    if(!isset($_POST["device_table"]))
        die("Error: device_table not found in the request header.");
    else
        $device_table = $_POST["device_table"];
    require "./libraries/connect.php";
    $query = $conn->prepare("UPDATE device
                             SET name = ?, table_n = ?
                             WHERE ID_D = ?");
    if(!$query)
        die("Error: could not prepare 'query' statement.");
    $query->bind_param("sii", $device_name, $device_table, $id_d);
    if(!$query)
        die("Error: could not bind parameters to 'query' statement.");
    $query->execute();
    if(!$query->affected_rows)
        die("Error: could not execute 'query'.");
    $query->free_result();
    $query->close();
    $conn->close(); 
?>