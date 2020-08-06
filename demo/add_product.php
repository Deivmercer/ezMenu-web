<?php
    // define ('SITE_ROOT', realpath(dirname(__FILE__)) . "/uploaded/");
    // //https://www.w3schools.com/php/php_file_upload.asp
    // //$target_dir = "home/ezMenu/demo/uploads/";
    // $target_file = SITE_ROOT . basename($_FILES["file"]["name"]);
    // $uploadOk = 1;
    // $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    // echo $_FILES["file"]["tmp_name"];
    // // Check if image file is a actual image or fake image
    // if(isset($_POST["submit"])) {
    //     $check = getimagesize($_FILES["file"]["tmp_name"]);
    //     if($check !== false) {
    //         echo "File is an image - " . $check["mime"] . ".";
    //         $uploadOk = 1;
    //     } else {
    //         echo "File is not an image.";
    //         $uploadOk = 0;
    //     }
    // }
    // // Check if file already exists
    // if (file_exists($target_file)) {
    //     echo "Sorry, file already exists.";
    //     $uploadOk = 0;
    // }
    // // Check file size
    // if ($_FILES["file"]["size"] > 500000) {
    //     echo "Sorry, your file is too large.";
    //     $uploadOk = 0;
    // }
    // // Allow certain file formats
    // if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
    //     echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    //     $uploadOk = 0;
    // }
    if(!isset($_POST["product_name"]))
        die("Error: product_name not found in the request header.");
    else
        $product_name = $_POST["product_name"];
    if(!isset($_POST["product_price"]))
        die("Error: product_price not found in the request header.");
    else
        $product_price = $_POST["product_price"];
    if(!isset($_FILES["product_image"]))
        die("Error: product_image not found in the request header.");
    // else
    //     $product_image = $_FILES["product_image"]["name"];
    $uploads_dir = realpath(dirname(__FILE__)) . "/uploaded/";
    if (is_uploaded_file($_FILES["product_image"]["tmp_name"]))
    {   
        require "./libraries/connect.php";
        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $file_extension = substr($finfo->file($_FILES['product_image']['tmp_name']), 6);
        //if(strlen($uploads_dir . $product_image) > 100)
        //    $product_image = substr($product_image, 0, 100 - strlen($uploads_dir));
        $product_image = $product_name . "." . $file_extension;
        move_uploaded_file($_FILES["product_image"]["tmp_name"], $uploads_dir . $product_image);
        $product_image = $uploads_dir . $product_image;
        $query = $conn->prepare("INSERT INTO product(ID_P, name, price, currency, image)
                                 VALUES(NULL, ?, ?, 'EUR', ?)");
        if(!$query)
            die("Error: could not prepare 'query' statement.");
        $query->bind_param("sds", $product_name, $product_price, substr($product_image, 12));
        if(!$query)
            die("Error: could not bind parameters to 'query' statement.");
        $query->execute();
        if(!$query->affected_rows)
            die("Error: could not execute 'query'.");
        $query->free_result();
        $query->close();
        $conn->close(); 
    }
?>