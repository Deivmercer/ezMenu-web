<?php
    if(!isset($_POST["id_p"]))
        die("Error: id_p not found in the request header.");
    else
        $id_p = $_POST["id_p"];
    require "./libraries/connect.php";
    $query = $conn->prepare("DELETE FROM product
                            WHERE ID_P = ?");
    if(!$query)
        die("Error: could not prepare 'query' statement.");
    $query->bind_param("i",  $id_p);
    if(!$query)
        die("Error: could not bind parameters to 'query' statement.");
    $query->execute();
    if(!$query->affected_rows)
        die("Error: could not execute 'query'.");
    $query->free_result();
    $query->close();
    $conn->close(); 
    //unlink(realpath(dirname(__FILE__)) . "/uploaded/" . 
?>