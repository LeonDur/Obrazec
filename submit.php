<?php
ini_set('display_errors', 0);
$cpu = $_POST["cpu"];
$ram = $_POST["ram"];
$psu = $_POST["psu"];
$gpu = $_POST["gpu"];


?>
<html>
<head>
    <title>Košarica</title>
	<link rel="stylesheet" href="stil.css">
	<link rel="icon" type="image/x-icon" href="graphic-card.png">
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
	<body>
		<div class="main">
			<div class="glava"></div>
				<div class="forma">
					<form>
					
					<div id="rezultati"> Izbrani deli: <br><br><?=$cpu?><br><?=$ram?><br><?=$psu?><br><?=$gpu?><br> </div>
					<div class="oznake">Ime:<br></div>
					<input type="text" placeholder="Ime" class="texti" id="ime" required pattern="[A-Za-z]{1,32}" autofocus required title="Dovoljene so le črke"><br>
					<div class="oznake">Priimek:<br></div>
					<input type="text" placeholder="Priimek" class="texti" id="priimek" required pattern="[A-Za-z]{1,32}" autofocus required title="Dovoljene so le črke"><br>
					<div class="oznake">Email:<br></div>
					<input type="email" placeholder="Email" class="texti" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" /><br>
					<div class="oznake">Stevilka kreditne kartice:<br></div>
					<input type="tel" class="texti" pattern="[0-9\s]{13,19}"autofocus required title="xxxx xxxx xxxx xxxx" required maxlength="19" placeholder="xxxx xxxx xxxx xxxx"> <br>
					<input type="submit" value="Submit"  id="submit">
					</form>
				</div>
			</div>
	</body>
</html>