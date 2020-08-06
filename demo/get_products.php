<?php
    require "./libraries/connect.php";
    $query = "SELECT ID_P, name, price, currency, image
              FROM product";
    $result = $conn->query($query);
    if(!$result)
        die("Error: faild to get query result.");
    $num_rows = $result->num_rows;
    if($num_rows <= 0)
        die("Error: failed to execute query.");
    $XML = new SimpleXMLElement("<products></products>");
    $XML->addAttribute("quantity", $num_rows);
    for($i = 0; $i < $num_rows; $i++)
    {
        $row = $result->fetch_assoc();
        $product = $XML->addChild("product");
        $product->addChild("id", $row["ID_P"]);
        $product->addChild("name", $row["name"]);
        $product->addChild("price", $row["price"]);
        $product->addChild("currency", $row["currency"]);
        $product->addChild("image", $row["image"]);
    }
    header('Content-type: text/xml');
    echo $XML->asXML();
    $result->free_result();
    $conn->close(); 
?>