<?php
    if(unlink(realpath(dirname(__FILE__)) . "/uploaded/" . "test.jpg"))
        echo "a";
    else
        echo "b";
    echo "c";
?>