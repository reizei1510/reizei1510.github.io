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

        <div class="welcome"><h1>Diary</h1></div>
	<div class="welcome_text">Welcome</div>
	<p>You can <a href="logup.php">Join</a> or <a href="read.php">Read</a>
      
    </div>
	
    <footer>
        <table>
	    <tr>
                <td><a href="about.php">About</a></td>
                <td><a href="contacts.php">Contacts</a></td>
                <td><a href="contacts.php">Rules</a></td>
	    </tr>
            <tr>
                <td><a href="admin.php">Are you admin?</a></td>
            </tr>
        </table>
    <footer>
 
</body>
 
</html>
