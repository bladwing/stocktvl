<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

// Check for HTTP request method
$method = $_SERVER['REQUEST_METHOD'];
error_reporting(E_ALL);
ini_set('display_errors', 1);

switch ($method) {
    case 'OPTIONS':
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: *");
        header("Access-Control-Allow-Headers: *");
        exit;
    case 'POST':
        // Establish connection using mysqli
        include 'config.php';
        $conn = new mysqli($servername, $username, $password, $database);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Check if the request contains the expected data
        if (
            isset($_POST["itemName"]) && isset($_POST["label"]) && isset($_POST["brand"]) && isset($_POST["model"]) &&
            isset($_POST["serialNumber"]) && isset($_POST["partNumber"]) && isset($_POST["stock"]) &&
            isset($_FILES["image"]) && isset($_POST["pieces"])
        ) {
            // Assign received data to variables
            $itemName = $_POST["itemName"];
            $label = $_POST["label"];
            $brand = $_POST["brand"];
            $model = $_POST["model"];
            $serialNumber = $_POST["serialNumber"];
            $partNumber = $_POST["partNumber"];
            $stock = $_POST["stock"];
            $pieces = $_POST["pieces"];

            // Process the image file
            $targetDir = "uploads/"; // Directory where images will be stored
            $targetFile = $targetDir . basename($_FILES["image"]["name"]);
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

            // Check if image file is a actual image or fake image
            $check = getimagesize($_FILES["image"]["tmp_name"]);
            if ($check !== false) {
                // Allow certain file formats
                if (
                    $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                    && $imageFileType != "gif"
                ) {
                    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                    $uploadOk = 0;
                } else {
                    // If everything is ok, try to upload file
                    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
                        echo "The file " . htmlspecialchars(basename($_FILES["image"]["name"])) . " has been uploaded.";

                        // Prepare SQL statement to insert data into the database
                        $stmt = $conn->prepare("INSERT INTO items (itemName, label, brand, model, serialNumber, partNumber, stock, image, pieces) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
                        $stmt->bind_param("sssssssss", $itemName, $label, $brand, $model, $serialNumber, $partNumber, $stock, $targetFile, $pieces);

                        // Execute the statement
                        if ($stmt->execute()) {
                            echo "Data inserted successfully.";
                        } else {
                            echo "Error inserting data: " . $stmt->error;
                        }

                        $stmt->close();
                    } else {
                        echo "Sorry, there was an error uploading your file.";
                    }
                }
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }

            // You can process other received data here and perform database operations if needed
        } else {
            echo "Missing data in the request.";
        }
        break;
    case 'GET':
        // Establish connection using mysqli
        include 'config.php';
        $conn = new mysqli($servername, $username, $password, $database);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Fetch all items from the database
        $sql = "SELECT * FROM items";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $data = array();
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            echo json_encode($data);
        } else {
            echo "No items found";
        }
        break;
    case 'DELETE':
        // Establish connection using mysqli
        include 'config.php';
        $conn = new mysqli($servername, $username, $password, $database);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Get data from the request body (assuming JSON)
        $data = json_decode(file_get_contents('php://input'), true);

        // Check if required data is present
        if (isset($data["id"])) {
            $id = $data["id"];

            // Prepare and execute DELETE statement
            $stmt = $conn->prepare("DELETE FROM items WHERE id = ?");
            $stmt->bind_param("i", $id);
            if ($stmt->execute()) {
                echo "Item with ID $id deleted successfully.";
            } else {
                echo "Error deleting item: " . $stmt->error;
            }
            $stmt->close();
        } else {
            echo "Missing ID in the request.";
        }
        break;
    default:
        echo "Invalid request method.";
        break;
}
?>