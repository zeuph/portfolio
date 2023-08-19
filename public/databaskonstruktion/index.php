<html>
    <head>
        <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <body>

        <div id="container">
            <div id="header">
                <tr>
                    <td>Wishlists</td>
                    <td>Tools</td>
                    <td>Insert toys</td>
                </tr>
            </div>
            <div id="content">
                <h3>Wishlists</h3>
            
                <form action="index.php" method="post">
                    <select size="1" name="ID">
                    <?php
                        $pdo = new PDO("mysql:dbname=a20kimar;host=localhost", "builderelf", "builder");
                        foreach($pdo->query( "SELECT * FROM WISHLIST ORDER BY ID;" ) as $row){
                            echo "<option value=\"".$row["ID"]."\">";
                            echo "Wishlist".$row["ID"];
                            echo "</option>";
                        }
                    ?>
                    </select>
                    <input type="submit" value="Send">
                    <input type="reset">
                    <?php
                        echo "<div>";
                        if (!empty($_POST)){
                            foreach($pdo->query("CALL SHOWWISHLIST(".$_POST["ID"].")") as $row) {
                                echo $row['ToyID']." ";
                                echo $row['Name']." ";
                                echo "<br>";
                            }
                        }
                        echo "</div>";
                    ?>
                </form>
            </div>
        </div>
    </body>
</html>