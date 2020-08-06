<?php
    if(!isset($_POST["id_p"]))
        die("Error: id_p not found in the request header.");
    else
        $id_p = $_POST["id_p"];
    if(!isset($_POST["product_name"]))
        die("Error: product_name not found in the request header.");
    else
        $product_name = $_POST["product_name"];
    if(!isset($_POST["product_price"]))
        die("Error: product_price not found in the request header.");
    else
        $product_price = $_POST["product_price"];
    require "./libraries/connect.php";
    if(isset($_FILES["product_image"]))
    {
        $uploads_dir = realpath(dirname(__FILE__)) . "/uploaded/";
        if (is_uploaded_file($_FILES["product_image"]["tmp_name"]))
        {   
            $finfo = new finfo(FILEINFO_MIME_TYPE);
            $file_extension = substr($finfo->file($_FILES['product_image']['tmp_name']), 6);
            //if(strlen($uploads_dir . $product_image) > 100)
            //    $product_image = substr($product_image, 0, 100 - strlen($uploads_dir));
            $product_image = $product_name . "." . $file_extension;
            unlink($uploads_dir . $product_image);  
            move_uploaded_file($_FILES["product_image"]["tmp_name"], $uploads_dir . $product_image);
            $product_image = $uploads_dir . $product_image;
            $query = $conn->prepare("UPDATE product
                                    SET name = ?, price = ?, image = ?
                                    WHERE ID_P = ?");
            if(!$query)
                die("Error: could not prepare 'query' statement.");
            $query->bind_param("sdsi", $product_name, $product_price, substr($product_image, 12), $id_p);
            if(!$query)
                die("Error: could not bind parameters to 'query' statement.");
            $query->execute();
            if(!$query->affected_rows)
                die("Error: could not execute 'query'.");
            $query->free_result();
            $query->close();
            $conn->close(); 
        }
    }
    else
    {
        $query = $conn->prepare("UPDATE product
                                SET name = ?, price = ?
                                WHERE ID_P = ?");
        if(!$query)
            die("Error: could not prepare 'query' statement.");
        $query->bind_param("sdi", $product_name, $product_price, $id_p);
        if(!$query)
            die("Error: could not bind parameters to 'query' statement.");
        $query->execute();
        if(!$query->affected_rows <= 0)
            die("Error: could not execute 'query'.");
        $query->free_result();
        $query->close();
        $conn->close(); 
    }
?>