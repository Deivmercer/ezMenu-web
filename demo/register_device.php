<?php
    if(!isset($_POST["id_d"]))
        die("Error: id_d not found in the request header.");
    else
        $id_d = $_POST["id_d"];
    require "./libraries/connect.php";
    $query = $conn->prepare("UPDATE device
                             SET assigned = 1
                             WHERE ID_D = ?");
    if(!$query)
        die("Error: could not prepare 'query' statement.");
    $query->bind_param("i", $id_d);
    if(!$query)
        die("Error: could not bind parameters to 'query' statement.");
    $query->execute();
    if(!$query->affected_rows)
        die("Error: could not execute 'query'.");
    $query->free_result();
    $query->close();
    $conn->close(); 
?>