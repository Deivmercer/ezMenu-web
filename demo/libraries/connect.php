<?php
    $conn = new mysqli("127.0.0.1", "root", "", "ezMenu");
    if ($conn->connect_errno)
        die($conn->connect_error);
?>
