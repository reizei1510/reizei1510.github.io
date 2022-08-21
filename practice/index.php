<!DOCTYPE html>
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Main Page</title>
</head>
<body>
    <div class="topnav">
        <a href="index.php">Diary</a>
        <div class="topnav_right">
            <?php if (empty($_SESSION['login'])) {
                print '<a href="./login.php">Log In</a><a href="./logup.php">Log Up</a>';
            }
            else {
                print '<a href="profile.php" ><img id="img_profile" src="images/profile.png" alt="profile"></a>'; } ?>
        </div>
    </div>
	
    <div class="content">

     CONTENT
      
    </div>
	
    <footer>
        <div class="footpoint"><a href="about.php">About</a></div>
        <div class="footpoint"><a href="contacts.php">Contacts</a></div>
        <div class="footpoint"><a href="admin.php">Are you admin?</a></div>
    <footer>
 
</body>
 
</html>
