<?php
    require "./libraries/connect.php";
    $query = "SELECT ID_D, name, table_n, assigned
              FROM device";
    $result = $conn->query($query);
    if(!$result)
        die("Error: faild to get query result.");
    $num_rows = $result->num_rows;
    if($num_rows <= 0)
        die("Error: failed to execute query.");
    $XML = new SimpleXMLElement("<devices></devices>");
    for($i = 0; $i < $num_rows; $i++)
    {
        $row = $result->fetch_assoc();
        $product = $XML->addChild("product");
        $product->addChild("id", $row["ID_D"]);
        $product->addChild("name", $row["name"]);
        $product->addChild("table_n", $row["table_n"]);
        $product->addChild("assigned", $row["assigned"]);
    }
    header('Content-type: text/xml');
    echo $XML->asXML();
    $result->free_result();
    $conn->close(); 
?>